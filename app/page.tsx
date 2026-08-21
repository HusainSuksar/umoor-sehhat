import Image from 'next/image';
import { MOCK_INSTAGRAM_POSTS } from '@/lib/mock-data';
import FeaturedBlogs from '@/components/content/FeaturedBlogs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F9F6] text-slate-800 selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* 1. Hero Section with Centered Logo Watermark Background */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32 bg-gradient-to-b from-emerald-100/70 via-[#F4F9F6]/90 to-[#F4F9F6] border-b border-emerald-100/80">
        
        {/* Ambient Top Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-emerald-300/30 blur-[130px] rounded-full pointer-events-none z-0" />

        {/* Center-Aligned Department Crest Watermark */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="relative w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] lg:w-[680px] lg:h-[680px] opacity-[0.14] mix-blend-multiply transition-transform duration-700">
            <Image
              src="/logo.png"
              alt="Umoor Sehhat Crest Watermark"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Hero Foreground Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Arabic Crest Tag */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/90 border border-emerald-200/90 shadow-xs mb-8 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span dir="rtl" lang="ar" className="font-kanz text-xl sm:text-2xl font-bold text-emerald-800 leading-none">
                امور الصحة  
              </span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-emerald-950 leading-[1.12] mb-6">
              Unified Healthcare Authority &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800">
                Community Wellness
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Direct access to verified medical consultants, authoritative preventative guidance, and secure clinical document intake.
            </p>

          </div>
        </div>
      </section>

      {/* 2. Live Instagram Feed Section */}
      <section className="py-20 bg-white border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-1">Official Social Media</div>
              <h2 className="text-3xl font-extrabold text-emerald-950 tracking-tight">Live Updates & Advisories</h2>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-xl transition-all shadow-xs"
            >
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Follow @umoorsehhat
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_INSTAGRAM_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer rounded-3xl overflow-hidden border border-emerald-100 bg-[#F8FAF9] shadow-xs hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized 
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-700 line-clamp-2 font-semibold leading-relaxed">{post.caption}</p>
                  <div className="mt-4 text-[11px] font-extrabold text-emerald-700 uppercase tracking-widest">
                    {post.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Health Advisories Section */}
      <FeaturedBlogs />

    </div>
  );
}