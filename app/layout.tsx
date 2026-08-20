import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, ShieldCheck, ChevronRight, Activity } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Umoor Sehhat | امور الصحة | Community Health Platform',
  description: 'Verified medical directory, clinical guidelines, and secure community healthcare intake.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#07130F] text-slate-100 selection:bg-emerald-500 selection:text-white`}>
        
        {/* Top Clinical Announcement Strip */}
        <div className="bg-emerald-950 border-b border-emerald-800/60 px-4 py-1.5 text-center text-xs font-semibold text-emerald-200/90 flex items-center justify-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Official Health Administration Desk • 24/7 Verified Community Medical Support</span>
        </div>

        {/* High-Authority Glass Header */}
        <header className="sticky top-0 z-50 bg-[#07130F]/90 backdrop-blur-xl border-b border-emerald-900/60 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            {/* Logo + Bilingual Typography */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 p-0.5 shadow-lg shadow-emerald-900/50 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden border border-emerald-400/30">
                <Image
                  src="/logo.png"
                  alt="Umoor Sehhat Official Department Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    Umoor <span className="text-emerald-500">Sehhat</span>
                  </span>
                  {/* Arabic in Kanz al-Marjaan Typography */}
                  <span 
                    dir="rtl" 
                    lang="ar"
                    className="font-kanz text-xl sm:text-2xl font-bold text-emerald-300 tracking-wide leading-none select-none drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]"
                  >
                    امور الصحة
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/70 -mt-0.5">
                  Healthcare & Medical Affairs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-emerald-100/75">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <Link href="/directory" className="hover:text-emerald-400 transition-colors">Medical Directory</Link>
              <Link href="/content-hub" className="hover:text-emerald-400 transition-colors">Health Hub</Link>
              <Link href="/report" className="hover:text-emerald-400 transition-colors">Submit Report</Link>
              <Link href="/portal/login" className="text-xs px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-700/60 text-emerald-300 hover:bg-emerald-800 transition">
                Portal Login
              </Link>
            </nav>

            {/* Emergency Action */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-900/40 border border-emerald-400/20 transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> 24/7 Helpline
            </a>
          </div>
        </header>

        {/* Dynamic Page Body */}
        <main className="flex-1">{children}</main>

        {/* Authoritative Deep Green Footer */}
        <footer className="bg-[#040C0A] text-slate-300 py-16 border-t border-emerald-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-emerald-900/50 p-1 border border-emerald-700/50">
                  <Image src="/logo.png" alt="Logo" width={36} height={36} className="object-contain" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg leading-tight">Umoor Sehhat</h3>
                  <p dir="rtl" lang="ar" className="font-kanz text-lg text-emerald-400">امور الصحة</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Centralized medical and wellness governance dedicated to high-standard community health services, preventative care, and verified specialist care.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-4">Platform Services</h4>
              <ul className="space-y-3 text-sm font-semibold text-slate-400">
                <li><Link href="/directory" className="flex items-center gap-1.5 hover:text-emerald-300 transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Specialist Directory</Link></li>
                <li><Link href="/content-hub" className="flex items-center gap-1.5 hover:text-emerald-300 transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Clinical Advisories</Link></li>
                <li><Link href="/report" className="flex items-center gap-1.5 hover:text-emerald-300 transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Diagnostic Document Upload</Link></li>
                <li><Link href="/portal/login" className="flex items-center gap-1.5 hover:text-emerald-300 transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-500" /> Practitioner Desk</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-4">Data Security</h4>
              <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-800/40 text-xs text-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Enterprise-Grade RLS
                </div>
                <p className="leading-relaxed">
                  All clinical submissions, doctor profiles, and advisory drafts are protected by isolated row-level security and encrypted drive routing.
                </p>
              </div>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}