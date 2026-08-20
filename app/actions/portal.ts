'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { mockDrafts, ArticleDraft } from '@/lib/store';

// --- AUTHENTICATION ACTIONS ---
export async function demoLogin(role: 'doctor' | 'admin') {
  // Await the asynchronous cookies() API in Next.js 15+
  const cookieStore = await cookies();
  
  cookieStore.set('portal_role', role, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  });

  if (role === 'doctor') {
    redirect('/portal/doctor');
  } else if (role === 'admin') {
    redirect('/portal/admin');
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('portal_role');
  redirect('/portal/login');
}

// --- DRAFT SUBMISSION & APPROVAL ACTIONS ---
export async function submitDraft(formData: FormData) {
  const mediaFile = formData.get('media') as File | null;

  const newDraft: ArticleDraft = {
    id: `draft-${Date.now()}`,
    title: (formData.get('title') as string) || 'Untitled Advisory',
    category: (formData.get('category') as string) || 'Wellness',
    content: (formData.get('content') as string) || '',
    mediaName: mediaFile && mediaFile.size > 0 ? mediaFile.name : undefined,
    authorId: 'doc-demo',
    authorName: 'Dr. Demo Practitioner',
    status: 'pending',
    submittedAt: new Date().toISOString(),
  };

  mockDrafts.push(newDraft);
  return { success: true };
}

export async function approveDraft(draftId: string) {
  const draft = mockDrafts.find((d) => d.id === draftId);
  if (draft) {
    draft.status = 'approved';
  }
  return { success: true };
}