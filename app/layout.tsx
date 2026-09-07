import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Umoor Sehhat | امور الصحة | Healthcare & Medical Affairs',
  description: 'Official portal for verified healthcare access and institutional advisories.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAFBF9] text-[#1F2817] selection:bg-[#E2EAD8] selection:text-[#5F6F44] overflow-x-hidden">
        
        {/* Top Emergency Ribbon */}
        <div className="bg-[#5F6F44] text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 w-full">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 font-heading font-medium truncate">
              <Activity className="w-3.5 h-3.5 text-[#F3F6EF] shrink-0 animate-pulse" />
              <span className="truncate">Institutional Healthcare Portal • 24/7 Verified Medical Guidance</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[#F3F6EF] text-[10px] font-heading font-bold shrink-0">
              <span>Security: 256-bit RLS Protected</span>
            </div>
          </div>
        </div>

        {/* Minimal Botanical Header */}
        <header className="sticky top-0 z-40 bg-[#7A8B5C] border-b border-[#6B7B4F]/60 shadow-md w-full">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white p-1 shadow-sm border border-[#91A373] flex items-center justify-center shrink-0">
                <Image src="/logo.png" alt="Umoor Sehhat Crest" fill sizes="44px" className="object-contain p-0.5" priority />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white">
                    Umoor <span className="text-[#F3F6EF]">Sehhat</span>
                  </span>
                  <span dir="rtl" lang="ar" className="font-arabic text-xl sm:text-2xl font-bold text-white leading-none">
                    امور الصحة
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-heading font-semibold uppercase tracking-widest text-[#F3F6EF]/90 -mt-0.5">
                  Healthcare & Medical Affairs
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4703B] hover:bg-[#BC5E2C] text-white text-xs font-heading font-bold px-4 py-2 rounded-xl shadow-md transition-all active:scale-95"
            >
              24/7 Helpline
            </a>
          </div>
        </header>

        <main className="flex-1 w-full">{children}</main>

        <footer className="bg-[#5F6F44] text-white py-10 border-t border-[#6B7B4F] mt-16 w-full">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading">
            <p>© {new Date().getFullYear()} Umoor Sehhat — Healthcare & Medical Affairs. All rights reserved.</p>
            <div className="flex items-center gap-2 text-[#F3F6EF]/80">
              <ShieldCheck className="w-4 h-4 text-[#F3F6EF]" />
              <span>Official Institutional Gateway</span>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}