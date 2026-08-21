import './globals.css';
import type { Metadata } from 'next';
import { Inter, Amiri } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navigation/Navbar';
import { ShieldCheck, ChevronRight, Activity } from 'lucide-react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Umoor Sehhat | امور الصحة | Community Health & Wellness Platform',
  description: 'Verified medical directory, clinical guidelines, and secure community healthcare intake.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable} h-full antialiased scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-[#F4F9F6] text-slate-800 selection:bg-emerald-200 selection:text-emerald-950">
        
        {/* Clinical Announcement Strip */}
        <div className="bg-[#040D0A] border-b border-emerald-950 text-emerald-200 text-xs py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-medium">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Official Healthcare Coordination Desk • 24/7 Verified Medical Support</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-emerald-300/80 text-[11px] font-bold">
              <span>Emergency Triage: Active</span>
            </div>
          </div>
        </div>

        {/* Dynamic Responsive Navbar (Handles Mobile Drawer & Desktop Nav) */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Deep Green Institutional Footer */}
        <footer className="bg-[#05110D] text-emerald-100 py-16 border-t border-emerald-950 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-emerald-400/40 shadow-sm">
                  <Image src="/logo.png" alt="Logo" width={36} height={36} className="object-contain w-full h-full" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg leading-tight">Umoor Sehhat</h3>
                  <p dir="rtl" lang="ar" className="font-kanz text-xl font-bold text-emerald-400 leading-tight">امور الصحة</p>
                </div>
              </div>
              <p className="text-emerald-200/70 text-sm leading-relaxed max-w-sm">
                Centralized medical and wellness governance dedicated to high-standard community health services, preventative care, and verified specialist directories.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-4">Platform Services</h4>
              <ul className="space-y-3 text-sm font-semibold text-emerald-200/80">
                <li><Link href="/directory" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Specialist Directory</Link></li>
                <li><Link href="/content-hub" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Clinical Advisories</Link></li>
                <li><Link href="/report" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Diagnostic Document Upload</Link></li>
                <li><Link href="/portal/login" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Practitioner Desk</Link></li>
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