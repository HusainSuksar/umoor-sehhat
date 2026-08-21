'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Stethoscope, ArrowRight } from 'lucide-react';

export default function HeroQuickSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/directory?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/directory');
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-emerald-200/90 shadow-xl shadow-emerald-950/5 flex flex-col sm:flex-row gap-2 transition-all focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10"
    >
      <div className="relative flex-1 flex items-center">
        <Search className="w-5 h-5 text-emerald-700/60 absolute left-4 shrink-0 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by specialty, doctor name, or medical center..."
          className="w-full pl-12 pr-4 py-3 bg-transparent text-slate-800 placeholder:text-slate-400 text-sm font-medium outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all active:scale-95 shrink-0"
      >
        <Stethoscope className="w-4 h-4" />
        <span>Search Network</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}