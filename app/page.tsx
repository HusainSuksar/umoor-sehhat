import Link from 'next/link';
import Image from 'next/image';
import { MOCK_INSTAGRAM_POSTS } from '@/lib/mock-data';
import FeaturedBlogs from '@/components/content/FeaturedBlogs';
import { 
  ArrowRight, 
  ShieldCheck, 
  Stethoscope, 
  FileUp, 
  Activity, 
  Users, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07130F] text-slate-100 selection:bg-emerald-500 selection:text-white">
      
      {/* 1. Visually Commanding Command Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36 border-b border-emerald-950">
        
        {/* Multi-layered Cyber-Emerald Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Arabic Kanz al-Marjaan Crest Tag */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-700/60 shadow-xl mb-8 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span dir="rtl" lang="ar" className="font-kanz text-lg sm:text-xl font-bold text-emerald-300">
                امور الصحة — الرعاية الطبية الشاملة
              </span>
            </div>

            {/* Main Punchy English Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Unified Healthcare Authority &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                Clinical Excellence
              </span>
            </h1>

            <p className="text-base sm:text-xl text-emerald-100/70 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
              Empowering our community with verified medical consultants, authoritative preventative research, and rapid diagnostic document routing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/directory"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 px-9 py-4 text-base font-extrabold text-slate-950 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all"
              >
                <Stethoscope className="w-5 h-5" /> Find Verified Doctor
              </Link>
              
              <Link
                href="/report"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 px-8 py-4 text-base font-bold text-emerald-200 hover:text-white shadow-xl transition-all"
              >
                <FileUp className="w-5 h-5 text-emerald-400" /> Submit Medical Report
              </Link>
            </div>

            {/* Metrics Trust Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-emerald-900/60">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-900/40 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
                <div className="text-xs font-bold text-emerald-200/60 uppercase tracking-wider mt-1">Verified Specialists</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-900/40 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">256-bit</div>
                <div className="text-xs font-bold text-emerald-200/60 uppercase tracking-wider mt-1">RLS Protected Data</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-900/40 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">&lt; 2hr</div>
                <div className="text-xs font-bold text-emerald-200/60 uppercase tracking-wider mt-1">Intake Triage</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-900/40 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">24/7</div>
                <div className="text-xs font-bold text-emerald-200/60 uppercase tracking-wider mt-1">Clinical Support</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Core Operational Pillars (Intimidating Clinical Grid) */}
      <section className="py-24 bg-[#050E0B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-3">Healthcare Infrastructure</h2>
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Institutional Medical Standards For Our Community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-gradient-to-b from-emerald-950/60 to-[#07130F] border border-emerald-800/50 shadow-xl hover:border-emerald-500/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rigorous Doctor Credentialing</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Every doctor in our network is audited for active medical council registrations, clinical specialty credentials, and verified clinic locations.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-emerald-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Qualification Verification</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct WhatsApp Consultation</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-emerald-950/60 to-[#07130F] border border-emerald-800/50 shadow-xl hover:border-emerald-500/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                <FileUp className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Encrypted Clinical Intake</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Diagnostic reports and lab scans route straight to isolated cloud drive storage, visible only to authorized medical coordinators.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-emerald-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Public File Exposure</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automated Coordinator Dispatch</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-emerald-950/60 to-[#07130F] border border-emerald-800/50 shadow-xl hover:border-emerald-500/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Evidence-Based Literature</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Practitioners author real clinical advisories on seasonal health, cardiology, and pediatrics after peer editorial review.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-emerald-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Editorial Desk Vetting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Preventative Guidance</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Live Instagram Feed Section */}
      <section className="py-24 bg-[#07130F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-2">Social Health Channel</div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Live Advisories & Campaigns</h2>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-300 hover:text-white bg-emerald-950 border border-emerald-800/60 px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Follow @umoorsehhat
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_INSTAGRAM_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer rounded-3xl overflow-hidden border border-emerald-900/60 bg-[#050E0B] shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden bg-emerald-950">
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    unoptimized 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050E0B] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 font-medium leading-relaxed">{post.caption}</p>
                  <div className="mt-4 text-[11px] font-extrabold text-emerald-400 uppercase tracking-widest">
                    {post.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Health Advisories Section */}
      <FeaturedBlogs />

    </div>
  );
}