import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navigation/Navbar';
import { ShieldCheck, ChevronRight, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Umoor Sehhat | امور الصحة | Healthcare & Medical Affairs',
  description: 'Verified medical directory, clinical literature, and secure community healthcare intake.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAFBF9] text-[#1F2817] selection:bg-[#E2EAD8] selection:text-[#5F6F44]">
        
        {/* Top Notification Ribbon in Deeper Sage Tone */}
        <div className="bg-[#5F6F44] border-b border-[#6B7B4F] text-white text-xs py-2 px-4">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-heading font-semibold">
              <Activity className="w-3.5 h-3.5 text-[#F3F6EF] animate-pulse" />
              <span>Institutional Healthcare Registry • 24/7 Verified Emergency Clinical Support</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[#F3F6EF] text-[11px] font-heading font-bold">
              <span>Security: 256-bit RLS Protected</span>
            </div>
          </div>
        </div>

        {/* Responsive Navbar */}
        <Navbar />

        {/* Dynamic Page Body */}
        <main className="flex-1">{children}</main>

        {/* Footer in Deep Forest Sage */}
        <footer className="bg-[#5F6F44] text-white py-16 border-t border-[#6B7B4F] mt-20">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white p-1.5 border border-[#91A373] shadow-md flex items-center justify-center shrink-0">
                  <Image 
                    src="/logo.png" 
                    alt="Umoor Sehhat Logo" 
                    fill 
                    sizes="48px" 
                    className="object-contain p-1" 
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-xl leading-tight">Umoor Sehhat</h3>
                  <p dir="rtl" lang="ar" className="font-arabic text-2xl font-bold text-[#F3F6EF] leading-tight">امور الصحة</p>
                </div>
              </div>
              <p className="text-white/85 text-sm leading-relaxed max-w-sm font-normal">
                Classical centralized healthcare and wellness administration dedicated to clinical excellence, verified specialist registries, and secure diagnostic triage.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#F3F6EF] mb-4">
                Institutional Portals
              </h4>
              <ul className="space-y-3 text-sm font-heading font-semibold text-white/90">
                <li><Link href="/directory" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-[#F3F6EF]" /> Specialist Directory</Link></li>
                <li><Link href="/content-hub" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-[#F3F6EF]" /> Clinical Research & Hub</Link></li>
                <li><Link href="/report" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-[#F3F6EF]" /> Diagnostic Document Intake</Link></li>
                <li><Link href="/portal/login" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-[#F3F6EF]" /> Practitioner Administration</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#F3F6EF] mb-4">
                Clinical Security
              </h4>
              <div className="bg-[#6B7B4F] p-4 rounded-2xl border border-[#91A373] text-xs text-white/90 space-y-2">
                <div className="flex items-center gap-2 font-heading font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#F3F6EF]" /> Enterprise Row-Level Security
                </div>
                <p className="leading-relaxed text-white/80">
                  All clinical submissions, practitioner data, and literature drafts are protected by isolated row-level policies and private Google Drive API streaming.
                </p>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}