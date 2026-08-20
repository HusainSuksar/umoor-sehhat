'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { articleDraftSchema, ArticleDraftInput } from '@/lib/validations/article';
import { submitArticleDraft } from '@/app/actions/article';
import { Send, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

// In production, fetch these from a Supabase 'categories' table
const CATEGORIES = [
  { id: 'cat-1', name: 'Preventative Care' },
  { id: 'cat-2', name: 'Cardiology' },
  { id: 'cat-3', name: 'Pediatrics' },
  { id: 'cat-4', name: 'Nutrition' },
];

export default function ArticleDraftForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ArticleDraftInput>({
    resolver: zodResolver(articleDraftSchema),
  });

  const onSubmit = async (data: ArticleDraftInput) => {
    setServerError(null);
    setIsSuccess(false);

    const result = await submitArticleDraft(data);

    if (result.error) {
      setServerError(result.error);
    } else if (result.success) {
      setIsSuccess(true);
      reset(); // Clear the form on success
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-4" />
        <h3 className="text-xl font-bold text-emerald-900 mb-2">Draft Submitted for Review</h3>
        <p className="text-sm text-emerald-700 max-w-md">
          Your article has been securely routed to the administrative dashboard. You will be notified once it is approved and published.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-semibold text-emerald-800 hover:text-emerald-900 underline transition-colors"
        >
          Submit another draft
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {serverError && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{serverError}</p>
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-bold text-slate-900 mb-2">
          Advisory Title
        </label>
        <input
          id="title"
          type="text"
          {...register('title')}
          placeholder="e.g. Managing Pediatric Fever at Home"
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:bg-white focus:ring-2 outline-none transition-all ${
            errors.title ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-emerald-500'
          }`}
          aria-invalid={!!errors.title}
        />
        {errors.title && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="categoryId" className="block text-sm font-bold text-slate-900 mb-2">
          Medical Category
        </label>
        <select
          id="categoryId"
          {...register('categoryId')}
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:bg-white focus:ring-2 outline-none transition-all ${
            errors.categoryId ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-emerald-500'
          }`}
          aria-invalid={!!errors.categoryId}
        >
          <option value="">Select a relevant category...</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        {errors.categoryId && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.categoryId.message}</p>}
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-bold text-slate-900 mb-2">
          Clinical Content
        </label>
        <textarea
          id="content"
          rows={8}
          {...register('content')}
          placeholder="Write your comprehensive clinical guidance here..."
          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium focus:bg-white focus:ring-2 outline-none transition-all resize-y ${
            errors.content ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-emerald-500'
          }`}
          aria-invalid={!!errors.content}
        />
        {errors.content && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.content.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Processing...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Submit Draft for Review
          </>
        )}
      </button>
    </form>
  );
}