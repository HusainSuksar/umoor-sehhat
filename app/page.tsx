import Image from 'next/image';
import Link from 'next/link';
import { MOCK_INSTAGRAM_POSTS } from '@/lib/mock-data';
import FeaturedBlogs from '@/components/content/FeaturedBlogs';
import AyatTypingEffect from '@/components/home/AyatTypingEffect';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { ArrowRight, ChevronLeft, ChevronRight, Stethoscope, FileUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7] text-[#152251]">
      
      {/* 1. Classical Academic Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 bg-gradient-to-b from-[#fff9f0] via-[#fdfbf7] to-[#fdfbf7] border-b border-[#e4d6a0]/60">
        
        {/* Soft Muted Gold Ambient Backlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#C99848]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Medallion Crest Badge with Muted Gold Border */}
            <div className="relative mb-6 group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C99848] to-[#e4d6a0] rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-2.5 shadow-xl border border-[#C99848] flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Umoor Sehhat Official Crest"
                  fill
                  sizes="112px"
                  priority
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Arabic Quranic Ayat with Tashkeel & RTL Typing */}
            <div className="w-full mb-3">
              <AyatTypingEffect />
            </div>

            {/* Academic English Translation */}
            <div className="max-w-xl mx-auto space-y-1 mb-8">
              <p className="text-sm sm:text-base font-heading font-semibold text-[#0f2442] tracking-wide">
                &ldquo;And when I am ill, it is He who cures me.&rdquo;
              </p>
              <p className="text-xs text-[#C99848] font-heading font-bold tracking-widest uppercase">
                Surah Ash-Shu&apos;ara (26:80)
              </p>
            </div>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg text-[#152251]/80 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
              A centralized medical governance and directory portal connecting our community with verified specialists, institutional research, and secure diagnostic triage.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/directory"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#ef7445] hover:bg-[#ef5b21] px-8 py-4 text-base font-heading font-bold text-white shadow-xl shadow-[#ef7445]/20 hover:-translate-y-0.5 transition-all text-center"
              >
                <Stethoscope className="w-5 h-5 shrink-0" /> Browse Physician Registry
              </Link>
              
              <Link
                href="/report"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#fff9f0] hover:bg-[#fff6e8] border border-[#C99848] px-8 py-4 text-base font-heading font-bold text-[#0f2442] shadow-sm hover:-translate-y-0.5 transition-all text-center"
              >
                <FileUp className="w-5 h-5 text-[#C99848] shrink-0" /> Submit Diagnostic Record
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Live Social Media Stream with Muted Gold Details */}
      <section className="py-20 bg-white border-b border-[#e4d6a0]/60">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#C99848] mb-1.5">
                <InstagramIcon className="w-4 h-4 text-[#ef7445]" />
                <span>Live Institutional Feed</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-normal text-[#000000] tracking-tight">
                Official Updates & Advisories
              </h2>
            </div>

            {/* Circular Controls */}
            <div className="flex items-center gap-3">
              <button 
                type="button" 
                aria-label="Previous Post"
                className="w-[50px] h-[50px] rounded-full border border-[#1c388c] flex items-center justify-center text-[#1c388c] hover:bg-[#C99848] hover:text-white hover:border-[#C99848] transition shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                type="button" 
                aria-label="Next Post"
                className="w-[50px] h-[50px] rounded-full border border-[#1c388c] flex items-center justify-center text-[#1c388c] hover:bg-[#C99848] hover:text-white hover:border-[#C99848] transition shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_INSTAGRAM_POSTS.map((post, idx) => (
              <a 
                key={post.id} 
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-[#C99848] bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized 
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#fff9f0]/90 backdrop-blur-md shadow-md border border-[#C99848] flex items-center justify-center text-[#0f2442] group-hover:text-[#ef7445] transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#152251] line-clamp-2 font-heading font-semibold leading-relaxed">
                    {post.caption}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-heading font-bold text-[#C99848] uppercase tracking-wider">
                    <span>{post.timestamp}</span>
                    <span className="text-[#1c388c] group-hover:text-[#ef7445] transition-colors flex items-center gap-1">
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Featured Health Literature */}
      <FeaturedBlogs />

    </div>
  );
}