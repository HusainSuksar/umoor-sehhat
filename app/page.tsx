import Link from 'next/link';
import Image from 'next/image';
import { MOCK_INSTAGRAM_POSTS } from '@/lib/mock-data';
import FeaturedBlogs from '@/components/content/FeaturedBlogs';
import { ArrowRight, FileText, Activity, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100 via-emerald-50/30 to-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-emerald-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-300/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-xs">
            <Activity className="w-4 h-4 text-emerald-600" /> Verified Community Wellness
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-emerald-950 mb-8 leading-[1.1]">
            Elevating Community <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Health & Care
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl leading-8 text-emerald-900/70 max-w-2xl mx-auto mb-10 font-medium">
            A unified, secure platform connecting you to verified medical professionals, trusted advisories, and direct clinical submissions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/directory"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
            >
              Access Directory <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/report"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white border-2 border-emerald-100 px-8 py-4 text-sm font-bold text-emerald-800 hover:border-emerald-300 hover:bg-emerald-50 hover:-translate-y-0.5 transition-all shadow-xs"
            >
              <FileText className="w-4 h-4 text-emerald-600" /> Submit Report
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-emerald-950/5 flex flex-wrap justify-center gap-8 sm:gap-16 text-sm font-bold text-emerald-950/60">
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-500" /> Verified Doctors</div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-500" /> RLS Encrypted</div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-500" /> Private Routing</div>
          </div>
        </div>
      </section>

      {/* 2. Instagram Updates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-emerald-950 tracking-tight">Latest Updates</h2>
              <p className="text-emerald-900/60 font-medium mt-2">Live health advisories from @umoorsehhat.</p>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-5 py-2.5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Follow Channel
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_INSTAGRAM_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer rounded-3xl overflow-hidden border border-emerald-100 bg-white shadow-xs hover:shadow-2xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden bg-emerald-50">
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    unoptimized 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-emerald-950 line-clamp-2 font-semibold leading-relaxed">{post.caption}</p>
                  <div className="mt-4 text-xs font-extrabold text-emerald-600/70 uppercase tracking-widest">
                    {post.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Health Advisories */}
      <FeaturedBlogs />
    </div>
  );
}