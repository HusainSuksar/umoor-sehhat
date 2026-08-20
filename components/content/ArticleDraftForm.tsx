'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { articleDraftSchema, ArticleDraftInput } from '@/lib/validations/content';
import { submitArticleDraft } from '@/app/actions/content';
import { Send, CheckCircle, ShieldAlert, Loader2 } from 'lucide-react';

export default function ArticleDraftForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ArticleDraftInput>({
    resolver: zodResolver(articleDraftSchema),
  });

  const onSubmit = async (data: ArticleDraftInput) => {
    setServerError(null);
    const result = await submitArticleDraft(data);
    
    if (result.error) setServerError(result.error);
    else {
      setIsSuccess(true);
      reset();
    }
  };

  if (isSuccess) return (
    <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
      <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
      <h3 className="text-xl font-bold text-emerald-900 mb-2">Draft Submitted Successfully</h3>
      <p className="text-sm text-emerald-700 max-w-md mb-6">Your article is in the administrative queue for review. You will be notified once published.</p>
      <button onClick={() => setIsSuccess(false)} className="text-sm font-bold text-emerald-800 hover:text-emerald-900 underline">
        Submit another draft
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {serverError && <div className="p-4 bg-red-50 text-red-800 rounded-xl text-sm font-bold border border-red-100">{serverError}</div>}
      
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Article Title</label>
        <input 
          type="text" 
          placeholder="e.g. Navigating Seasonal Allergies"
          {...register('title')} 
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition-all" 
        />
        {errors.title && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
        <select {...register('category_id')} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer">
          <option value="">Select a category...</option>
          <option value="cat-wellness">Wellness</option>
          <option value="cat-preventative">Preventative Care</option>
          <option value="cat-cardio">Cardiology</option>
          <option value="cat-pediatrics">Pediatrics</option>
        </select>
        {errors.category_id && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.category_id.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Content Draft</label>
        <textarea 
          rows={6} 
          placeholder="Write your clinical guidance here..."
          {...register('content')} 
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition-all resize-y" 
        />
        {errors.content && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.content.message}</p>}
      </div>

      <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
        <p className="text-xs font-medium text-slate-600 leading-relaxed">
          Only recognized authors in the directory will have their content published. Submissions undergo administrative editorial review.
        </p>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
      >
        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {isSubmitting ? 'Processing Draft...' : 'Submit Draft for Review'}
      </button>
    </form>
  );
}