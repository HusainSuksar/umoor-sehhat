import Link from 'next/link';
import Image from 'next/image';
import { MOCK_ARTICLES, MOCK_PRACTITIONERS } from '@/lib/mock-data';
import { BookOpen, Clock, User, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function FeaturedBlogs() {
  // Sort by date descending and take the first 4 articles
  const latestArticles = [...MOCK_ARTICLES]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="py-24 bg-slate-50/70 border-t border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" /> Evidence-Based Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
              Latest Health Advisories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
              Clinical guidance and wellness articles authored by verified Umoor Sehhat medical coordinators.
            </p>
          </div>

          <Link
            href="/content-hub"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-200 px-5 py-2.5 rounded-xl transition-all shadow-xs shrink-0"
          >
            View All Advisories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestArticles.map((art) => {
            const author = MOCK_PRACTITIONERS.find((p) => p.id === art.authorId);

            return (
              <Link
                key={art.id}
                href={`/content-hub/${art.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Cover Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={art.coverImage}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      unoptimized
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-xs border border-emerald-100">
                      {art.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2 mb-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 truncate pr-2">
                    <User className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{author?.name || 'Medical Team'}</span>
                  </span>
                  <span className="flex items-center gap-1 shrink-0 text-slate-400">
                    <Clock className="w-3.5 h-3.5" /> {art.readTime}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}