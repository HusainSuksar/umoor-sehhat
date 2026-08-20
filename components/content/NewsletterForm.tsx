'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '@/app/actions/content';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await subscribeNewsletter(formData);

    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setMessage(result.message || 'Successfully subscribed!');
      (e.target as HTMLFormElement).reset();
    }
  };

  if (message) {
    return (
      <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold bg-emerald-900/40 border border-emerald-700/50 px-4 py-3 rounded-2xl">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-2">
      <div className="bg-white/10 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder:text-emerald-200/50 text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-70"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Subscribe <ArrowRight className="w-4 h-4" /></>}
        </button>
      </div>
      {error && <p className="text-rose-300 text-xs font-medium pl-2">{error}</p>}
    </form>
  );
}