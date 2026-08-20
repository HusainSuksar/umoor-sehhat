import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { HeartPulse, PhoneCall, ShieldCheck, ChevronRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Umoor Sehhat | Community Health & Wellness Platform',
  description: 'Verified medical directory and secure health resources.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50/70 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900`}>
        {/* Sticky Glassmorphism Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-2.5 rounded-xl shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-emerald-950">
                Umoor <span className="text-emerald-600">Sehhat</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <Link href="/directory" className="hover:text-emerald-600 transition-colors">Find a Doctor</Link>
              <Link href="/content-hub" className="text-emerald-700 font-extrabold">Health Hub</Link>
              <Link href="/report" className="hover:text-emerald-600 transition-colors">Submit Report</Link>
            </nav>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 hover:border-emerald-600 text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> 24/7 Helpline
            </a>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1">{children}</main>

        {/* Deep Emerald Footer */}
        <footer className="bg-emerald-950 text-emerald-50 py-16 border-t border-emerald-900 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 text-white font-extrabold text-2xl mb-4">
                <HeartPulse className="w-7 h-7 text-emerald-400" /> Umoor Sehhat
              </div>
              <p className="text-emerald-200/80 leading-relaxed max-w-sm text-sm">
                Dedicated community healthcare services, preventative health guidance, and verified practitioner directory.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-extrabold text-emerald-300 uppercase tracking-widest mb-4">Platform</h3>
              <ul className="space-y-3 text-sm font-medium text-emerald-100/70">
                <li><Link href="/directory" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Medical Directory</Link></li>
                <li><Link href="/content-hub" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Content Hub</Link></li>
                <li><Link href="/report" className="flex items-center gap-1.5 hover:text-white transition"><ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Clinical Submissions</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold text-emerald-300 uppercase tracking-widest mb-4">Security</h3>
              <div className="flex items-start gap-3.5 text-xs text-emerald-200/80 bg-emerald-900/60 p-4 rounded-2xl border border-emerald-800/60">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">End-to-end RLS data policies and encrypted report storage.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}