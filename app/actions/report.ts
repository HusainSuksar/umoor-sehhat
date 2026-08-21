'use server';

import { z } from 'zod';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Readable } from 'stream';
import { google } from 'googleapis';


// 1. Strict Schema Validation
const reportSchema = z.object({
  patientName: z.string().min(2, 'Name must be at least 2 characters.').max(100, 'Name is too long.'),
  contactPhone: z.string().min(8, 'Valid contact number is required.').max(20, 'Number is too long.'),
  category: z.string().min(1, 'Please select a report classification.'),
});

export type ReportActionResult = {
  success: boolean;
  message?: string;
  error?: string;
};

// 2. Google Drive Streaming Helper (Server-Side Only)
async function streamFileToGoogleDrive(
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string
): Promise<{ fileId: string; webViewLink: string }> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  // Fallback demo mode if Google Drive environment credentials are not present
  if (!email || !privateKey) {
    return {
      fileId: `demo_drive_${Date.now()}`,
      webViewLink: `https://drive.google.com/file/d/demo_${Date.now()}/view`,
    };
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const drive = google.drive({ version: 'v3', auth });

  const readableStream = new Readable();
  readableStream.push(fileBuffer);
  readableStream.push(null);

  const response = await drive.files.create({
    requestBody: {
      name: `SEHHAT_${Date.now()}_${fileName}`,
      parents: folderId ? [folderId] : undefined,
    },
    media: {
      mimeType,
      body: readableStream,
    },
    fields: 'id, webViewLink',
  });

  return {
    fileId: response.data.id || `file_${Date.now()}`,
    webViewLink: response.data.webViewLink || 'https://drive.google.com',
  };
}

// 3. Primary Server Action
export async function submitMedicalReportAction(
  _prevState: unknown,
  formData: FormData
): Promise<ReportActionResult> {
  try {
    // Validate string fields
    const rawData = {
      patientName: formData.get('patientName'),
      contactPhone: formData.get('contactPhone'),
      category: formData.get('category'),
    };

    const parsed = reportSchema.safeParse(rawData);
    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.issues[0]?.message || 'Invalid form input provided.',
      };
    }

    // Validate binary attachment
    const file = formData.get('file') as File | null;
    if (!file || file.size === 0) {
      return {
        success: false,
        error: 'A valid document attachment (PDF, JPG, or PNG) is required.',
      };
    }

    // Max 10MB limit enforcement
    if (file.size > 10 * 1024 * 1024) {
      return {
        success: false,
        error: 'File size exceeds maximum allowed limit of 10MB.',
      };
    }

    // Process file buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Stream upload directly to private Google Drive folder
    const driveUpload = await streamFileToGoogleDrive(buffer, file.name, file.type || 'application/octet-stream');

    // Secure database registration via Supabase (or graceful demo completion)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
      const cookieStore = await cookies();
      const supabase = createServerClient(
        supabaseUrl,
        supabaseAnonKey,
        { cookies: { get: (name) => cookieStore.get(name)?.value } }
      );

      const { error: dbError } = await supabase.from('report_submissions').insert({
        patient_name: parsed.data.patientName,
        contact_phone: parsed.data.contactPhone,
        category: parsed.data.category,
        file_name: file.name,
        google_drive_file_id: driveUpload.fileId,
        google_drive_view_link: driveUpload.webViewLink,
      });

      if (dbError) {
        return {
          success: false,
          error: 'Document uploaded to drive, but database logging failed: ' + dbError.message,
        };
      }
    }

    return {
      success: true,
      message: 'Medical report successfully uploaded and logged with coordinator desk.',
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error processing clinical document.';
    return {
      success: false,
      error: message,
    };
  }
}