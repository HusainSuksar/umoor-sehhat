import Image from 'next/image';
import Link from 'next/link';
import { MOCK_INSTAGRAM_POSTS } from '@/lib/mock-data';
import FeaturedBlogs from '@/components/content/FeaturedBlogs';
import AyatTypingEffect from '@/components/home/AyatTypingEffect';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { ArrowRight, ChevronLeft, ChevronRight, Stethoscope, FileUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBF9] text-[#1F2817] overflow-x-hidden">
      
      {/* 1. Classical Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-24 bg-gradient-to-b from-[#F3F6EF] via-[#FAFBF9] to-[#FAFBF9] border-b border-[#E2EAD8]">
        
        {/* Responsive Ambient Glow (Constrained so it doesn't push the viewport) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] sm:h-[450px] bg-[#7A8B5C]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Medallion Crest Badge */}
            <div className="relative mb-4 sm:mb-6 group">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-white p-2 shadow-lg border border-[#91A373] flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Umoor Sehhat Official Crest"
                  fill
                  sizes="96px"
                  priority
                  className="object-contain p-1.5"
                />
              </div>
            </div>

            {/* Arabic Quranic Ayat */}
            <div className="w-full mb-2 sm:mb-3">
              <AyatTypingEffect />
            </div>

            {/* Academic English Translation */}
            <div className="max-w-md sm:max-w-xl mx-auto space-y-1 mb-6 sm:mb-8 px-2">
              <p className="text-xs sm:text-base font-heading font-semibold text-[#1F2817] tracking-wide">
                &ldquo;And when I am ill, it is He who cures me.&rdquo;
              </p>
              <p className="text-[10px] sm:text-xs text-[#5F6F44] font-heading font-bold tracking-widest uppercase">
                Surah Ash-Shu&apos;ara (26:80)
              </p>
            </div>

            {/* Hero Subtitle */}
            <p className="text-xs sm:text-base text-[#1F2817]/80 font-normal leading-relaxed max-w-xl mx-auto mb-6 sm:mb-10 px-3">
              A centralized medical governance and directory portal connecting our community with verified specialists, institutional research, and secure diagnostic triage.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md sm:max-w-none px-4">
              <Link
                href="/directory"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-[#D4703B] hover:bg-[#BC5E2C] px-6 py-3.5 text-xs sm:text-sm font-heading font-bold text-white shadow-md transition-all active:scale-95 text-center"
              >
                <Stethoscope className="w-4 h-4 shrink-0" /> Browse Physician Registry
              </Link>
              
              <Link
                href="/report"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-white hover:bg-[#F3F6EF] border border-[#91A373] px-6 py-3.5 text-xs sm:text-sm font-heading font-bold text-[#1F2817] shadow-xs transition-all text-center"
              >
                <FileUp className="w-4 h-4 text-[#5F6F44] shrink-0" /> Submit Diagnostic Record
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Live Social Media Stream */}
      <section className="py-12 sm:py-20 bg-white border-b border-[#E2EAD8]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#5F6F44] mb-1">
                <InstagramIcon className="w-3.5 h-3.5 text-[#D4703B]" />
                <span>Live Feed</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-normal text-[#1F2817]">
                Official Updates & Advisories
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {MOCK_INSTAGRAM_POSTS.map((post, idx) => (
              <a 
                key={post.id} 
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-[#91A373]/60 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-square w-full bg-slate-100">
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="object-cover"
                    unoptimized 
                  />
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center text-[#1F2817]">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#1F2817] line-clamp-2 font-heading font-medium leading-relaxed">
                    {post.caption}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-heading font-bold text-[#5F6F44]">
                    <span>{post.timestamp}</span>
                    <span className="text-[#D4703B] flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
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