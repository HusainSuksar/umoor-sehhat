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
      <body className="min-h-screen flex flex-col bg-[#FAFBF9] text-[#1F2817] selection:bg-[#E2EAD8] selection:text-[#5F6F44] overflow-x-hidden">
        
        {/* Responsive Top Ribbon */}
        <div className="bg-[#5F6F44] text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 w-full">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 font-heading font-medium truncate">
              <Activity className="w-3 h-3 text-[#F3F6EF] shrink-0 animate-pulse" />
              <span className="truncate">24/7 Verified Emergency Clinical Helpline</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[#F3F6EF] text-[10px] font-heading font-bold shrink-0">
              <span>Security: 256-bit RLS</span>
            </div>
          </div>
        </div>

        <Navbar />
        <main className="flex-1 w-full">{children}</main>

        <footer className="bg-[#5F6F44] text-white py-12 sm:py-16 border-t border-[#6B7B4F] mt-16 w-full">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="relative w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                  <Image src="/logo.png" alt="Logo" fill sizes="40px" className="object-contain p-0.5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">Umoor Sehhat</h3>
                  <p dir="rtl" lang="ar" className="font-arabic text-lg font-bold text-[#F3F6EF] leading-none">امور الصحة</p>
                </div>
              </div>
              <p className="text-white/80 text-xs leading-relaxed max-w-sm">
                Centralized medical administration dedicated to clinical excellence and verified practitioner registries.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#F3F6EF] mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs font-heading font-medium text-white/90">
                <li><Link href="/directory" className="hover:text-white transition">Specialist Directory</Link></li>
                <li><Link href="/content-hub" className="hover:text-white transition">Clinical Research & Hub</Link></li>
                <li><Link href="/report" className="hover:text-white transition">Diagnostic Document Intake</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#F3F6EF] mb-3">
                Clinical Security
              </h4>
              <div className="bg-[#6B7B4F] p-3.5 rounded-xl text-xs text-white/90 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <ShieldCheck className="w-3.5 h-3.5" /> RLS Protected
                </div>
                <p className="text-[11px] leading-relaxed text-white/80">
                  All clinical submissions are encrypted with private storage routing.
                </p>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}