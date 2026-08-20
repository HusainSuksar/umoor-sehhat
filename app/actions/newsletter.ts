'use server';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { z } from 'zod';

const emailSchema = z.string().email('Please enter a valid email address.');

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string;
  const parsed = emailSchema.safeParse(email);

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message || 'Invalid email format.' };
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
      },
    }
  );

  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert({ email: parsed.data, status: 'active' });

  if (error && error.code === '23505') {
    return { success: true, message: 'You are already subscribed!' };
  } else if (error) {
    return { error: 'Failed to subscribe. Please try again later.' };
  }

  return { success: true, message: 'Successfully subscribed to updates.' };
}