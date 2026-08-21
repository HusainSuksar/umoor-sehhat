'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitMedicalReportAction } from '@/app/actions/report';
import { 
  FileUp, 
  CheckCircle2, 
  ShieldAlert, 
  Loader2, 
  FileText, 
  Lock, 
  UploadCloud 
} from 'lucide-react';

const clientReportSchema = z.object({
  patientName: z.string().min(2, 'Full patient name is required (minimum 2 characters).'),
  contactPhone: z.string().min(8, 'A valid contact phone number is required.'),
  category: z.string().min(1, 'Please select a report classification.'),
});

type ReportFormInput = z.infer<typeof clientReportSchema>;

export default function ReportSubmissionPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ReportFormInput>({
    resolver: zodResolver(clientReportSchema)
  });

  const onSubmit = async (data: ReportFormInput) => {
    if (!selectedFile) {
      setServerError('Please attach a diagnostic document (PDF, PNG, or JPG).');
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    const formData = new FormData();
    formData.append('patientName', data.patientName);
    formData.append('contactPhone', data.contactPhone);
    formData.append('category', data.category);
    formData.append('file', selectedFile);

    const result = await submitMedicalReportAction(null, formData);

    setIsSubmitting(false);

    if (!result.success) {
      setServerError(result.error || 'Failed to submit report. Please try again.');
    } else {
      setIsSuccess(true);
      reset();
      setSelectedFile(null);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Lock className="w-3.5 h-3.5" /> Confidential Intake Desk
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
          Submit Diagnostic Report
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          Upload medical lab scans, discharge summaries, or diagnostic records directly to our private coordinator drive for clinical evaluation.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-emerald-200 shadow-xl text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-emerald-950 mb-2">Report Successfully Routed</h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-8">
            Your diagnostic files have been securely transferred to our private clinical archive. A medical coordinator will review and reach out to your provided contact number.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition shadow-md"
          >
            Submit Another Report
          </button>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-white p-8 sm:p-10 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-950/5 space-y-6"
        >
          {serverError && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-bold">
              {serverError}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Patient Full Name
            </label>
            <input
              type="text"
              {...register('patientName')}
              placeholder="e.g. Murtaza Ebrahim"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition"
            />
            {errors.patientName && (
              <p className="text-rose-500 text-xs mt-1.5 font-semibold">{errors.patientName.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Contact Phone / WhatsApp
              </label>
              <input
                type="text"
                {...register('contactPhone')}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition"
              />
              {errors.contactPhone && (
                <p className="text-rose-500 text-xs mt-1.5 font-semibold">{errors.contactPhone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Report Classification
              </label>
              <select
                {...register('category')}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-semibold text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition cursor-pointer"
              >
                <option value="">Select category...</option>
                <option value="Pathology / Blood Work">Pathology / Blood Work</option>
                <option value="Radiology (X-Ray, MRI, CT)">Radiology (X-Ray, MRI, CT)</option>
                <option value="Cardiology (ECG / Echo)">Cardiology (ECG / Echo)</option>
                <option value="Prescription / Discharge Summary">Prescription / Discharge Summary</option>
                <option value="Other Medical Record">Other Medical Record</option>
              </select>
              {errors.category && (
                <p className="text-rose-500 text-xs mt-1.5 font-semibold">{errors.category.message}</p>
              )}
            </div>
          </div>

          {/* Multipart Drag-and-Drop Area */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Attach Document (PDF, PNG, JPG - Max 10MB)
            </label>
            <div className="relative border-2 border-dashed border-emerald-200 hover:border-emerald-500 bg-[#F8FAF9] hover:bg-emerald-50/40 rounded-2xl p-6 text-center transition-all cursor-pointer">
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setSelectedFile(e.target.files[0]);
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <UploadCloud className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              {selectedFile ? (
                <div className="text-xs font-bold text-emerald-900 flex items-center justify-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                </div>
              ) : (
                <>
                  <p className="text-xs font-bold text-slate-700">Click or drag & drop files here to upload</p>
                  <p className="text-[11px] text-slate-400 mt-1">Direct upload via Google Drive encrypted storage</p>
                </>
              )}
            </div>
          </div>

          {/* Security Compliance Strip */}
          <div className="flex items-start gap-3 bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/80 text-xs text-emerald-950 font-medium">
            <ShieldAlert className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Diagnostic files are encrypted and processed solely by authorized Umoor Sehhat medical coordinators.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Uploading & Encrypting Document...</span>
              </>
            ) : (
              <>
                <FileUp className="w-4 h-4" />
                <span>Submit Diagnostic Document</span>
              </>
            )}
          </button>
        </form>
      )}
    </main>
  );
}