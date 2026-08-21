import Image from 'next/image';
import { MOCK_INSTAGRAM_POSTS } from '@/lib/mock-data';
import FeaturedBlogs from '@/components/content/FeaturedBlogs';
import AyatTypingEffect from '@/components/home/AyatTypingEffect';
import InstagramIcon from '@/components/icons/InstagramIcon';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F9F6] text-slate-800 selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* 1. Hero Section with Distinct Logo Showcase & RTL Typed Ayat */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-18 sm:pb-28 bg-gradient-to-b from-emerald-100/70 via-[#F4F9F6] to-[#F4F9F6]">
        
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-emerald-300/20 blur-[140px] rounded-full pointer-events-none -z-10" />

        {/* Subtle Watermark */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[580px] aspect-square opacity-[0.06] pointer-events-none -z-10 select-none mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"
          aria-hidden="true"
        >
          <Image
            src="/logo.png"
            alt="Department Crest Ambient"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Department Logo Medallion */}
            <div className="relative mb-6 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-md opacity-25 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white p-2.5 shadow-lg shadow-emerald-950/10 border border-emerald-100 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Umoor Sehhat Official Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Typed Quranic Ayat with Precise Lexical Spacing */}
            <div className="w-full mb-3">
              <AyatTypingEffect />
            </div>

            {/* Translation Subtitle */}
            <div className="max-w-xl mx-auto space-y-1 mb-8">
              <p className="text-sm sm:text-base font-bold text-emerald-900/90 tracking-wide">
                &ldquo;And when I am ill, it is He who cures me.&rdquo;
              </p>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
                Surah Ash-Shu&apos;ara (26:80)
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Direct access to verified medical consultants, authoritative preventative guidance, and secure clinical document intake.
            </p>

          </div>
        </div>
      </section>

      {/* 2. Live Social Media Stream with Instagram Icons */}
      <section className="pt-6 pb-20 bg-gradient-to-b from-[#F4F9F6] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-1">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                <span>Official Social Media</span>
              </div>
              <h2 className="text-3xl font-extrabold text-emerald-950 tracking-tight">Live Updates & Advisories</h2>
            </div>
            
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl transition-all shadow-xs"
            >
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              <span>Follow @umoorsehhat</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_INSTAGRAM_POSTS.map((post) => (
              <a 
                key={post.id} 
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl overflow-hidden border border-emerald-100/90 bg-white shadow-xs hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Media Image Container with Instagram Badge Overlay */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized 
                  />
                  
                  {/* Floating Instagram Corner Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-800 group-hover:text-pink-600 group-hover:scale-110 transition-all">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-700 line-clamp-2 font-semibold leading-relaxed">{post.caption}</p>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-extrabold text-emerald-700 uppercase tracking-widest">
                    <span>{post.timestamp}</span>
                    <span className="text-slate-400 group-hover:text-pink-600 transition-colors flex items-center gap-1 font-bold">
                      View Post →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Health Advisories Section */}
      <FeaturedBlogs />

    </div>
  );
}