'use server';

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { articleDraftSchema, ArticleDraftInput } from '@/lib/validations/article';

export async function submitArticleDraft(data: ArticleDraftInput) {
  // 1. Strict Server-Side Validation
  const parsed = articleDraftSchema.safeParse(data);
  if (!parsed.success) {
    return { error: 'Invalid submission data. Please check your inputs.' };
  }

  // 2. Await async cookie store (Next.js 15+)
  const cookieStore = await cookies();

  // 3. Initialize Supabase SSR Client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // Handle middleware / Server Action set-cookie edge cases
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch {
            // Handle middleware / Server Action remove-cookie edge cases
          }
        },
      },
    }
  );

  // 4. Authenticate User Session
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return { error: 'Unauthorized. You must be logged in to submit an article.' };
  }

  // 5. Database Insertion with RLS
  const { error: insertError } = await supabase
    .from('articles')
    .insert({
      title: parsed.data.title,
      category_id: parsed.data.categoryId,
      content: parsed.data.content,
      author_id: user.id,
      status: 'pending_approval',
    });

  if (insertError) {
    return { error: insertError.message || 'Failed to submit article.' };
  }

  return { success: true };
}