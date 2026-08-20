'use server';

import { articleDraftSchema, ArticleDraftInput } from '@/lib/validations/content';
import { z } from 'zod';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function submitArticleDraft(data: ArticleDraftInput) {
  const parsed = articleDraftSchema.safeParse(data);
  if (!parsed.success) return { error: 'Invalid submission data.' };

  await delay(1000);
  return { success: true };
}

const emailSchema = z.string().email('Invalid email address.');

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string;
  const parsed = emailSchema.safeParse(email);

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message || 'Invalid email address.' };
  }

  await delay(800);
  return { success: true, message: 'Successfully subscribed!' };
}