'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Article, MOCK_PRACTITIONERS } from '@/lib/mock-data';
import { Search, User, Clock, BookOpen, FilterX, ArrowUpRight } from 'lucide-react';

export default function ArticleGallery({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return articles.filter((art) => {
      const matchSearch =
        art.title.toLowerCase().includes(search.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === 'All' || art.category === category;
      return matchSearch && matchCat;
    });
  }, [articles, search, category]);

  return (
    <div className="space-y-8">
      {/* Search & Category Filter */}
      <div className="bg-white p-3 rounded-2xl border border-emerald-100 shadow-sm flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search articles by title or keyword..." 
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm transition-all" 
          />
        </div>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-semibold text-slate-700 cursor-pointer"
        >
          <option value="All">All Categories</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Preventative Care">Preventative Care</option>
        </select>
      </div>

      {/* Clickable Article Cards Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((art) => {
            const author = MOCK_PRACTITIONERS.find((doc) => doc.id === art.authorId);
            return (
              <Link 
                key={art.id} 
                href={`/content-hub/${art.id}`}
                className="group bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-full">
                      {art.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <User className="w-3.5 h-3.5 text-emerald-600" /> {author?.name || 'Medical Team'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {art.readTime}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 mb-1">No articles found</h3>
          <p className="text-xs text-slate-500 mb-4">Try clearing your filters or changing your search terms.</p>
          <button 
            onClick={() => { setSearch(''); setCategory('All'); }} 
            className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-xl text-xs font-bold transition-colors"
          >
            <FilterX className="w-3.5 h-3.5" /> Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}