import Link from 'next/link';
import Image from 'next/image';
import { MOCK_ARTICLES, MOCK_PRACTITIONERS } from '@/lib/mock-data';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';

export default function FeaturedBlogs() {
  const latestArticles = [...MOCK_ARTICLES]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-20 bg-[#fdfbf7]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fff9f0] border border-[#C99848] text-[#C99848] text-xs font-heading font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" /> Clinical Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#000000] tracking-tight">
              Featured Health Advisories
            </h2>
            <p className="text-[#152251]/80 text-sm font-heading font-medium mt-1">
              Peer-reviewed preventative guidance authored by verified medical coordinators.
            </p>
          </div>

          <Link
            href="/content-hub"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#1c388c] hover:text-[#C99848] bg-[#fff9f0] hover:bg-[#fff6e8] border border-[#C99848] px-5 py-2.5 rounded-xl transition-all shadow-xs shrink-0"
          >
            View Repository <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Feature Cards Grid (1px solid #C99848) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((art) => {
            const author = MOCK_PRACTITIONERS.find((p) => p.id === art.authorId);

            return (
              <Link
                key={art.id}
                href={`/content-hub/${art.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#C99848] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={art.coverImage}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      unoptimized
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#fff9f0]/95 backdrop-blur-md text-[#0f2442] text-[10px] font-heading font-bold uppercase tracking-wider rounded-full border border-[#C99848]">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-normal text-[#000000] group-hover:text-[#C99848] transition-colors leading-snug line-clamp-2 mb-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#152251]/80 line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#e4d6a0]/50 flex items-center justify-between text-xs font-heading font-semibold text-[#1c388c]">
                  <span className="flex items-center gap-1.5 truncate pr-2">
                    <User className="w-3.5 h-3.5 text-[#C99848] shrink-0" />
                    <span className="truncate">{author?.name || 'Medical Council'}</span>
                  </span>
                  <span className="flex items-center gap-1 shrink-0 text-[#cccccc]">
                    <Clock className="w-3.5 h-3.5 text-[#152251]" /> {art.readTime}
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