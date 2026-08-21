'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  PhoneCall, 
  Stethoscope, 
  BookOpen, 
  FileUp, 
  LogIn, 
  Home as HomeIcon,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/directory', label: 'Medical Directory', icon: Stethoscope },
  { href: '/content-hub', label: 'Health Hub', icon: BookOpen },
  { href: '/report', label: 'Submit Report', icon: FileUp },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#071712]/95 backdrop-blur-xl border-b border-emerald-900/60 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Bilingual Brand Crest */}
          <Link 
            href="/" 
            onClick={closeMenu}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl"
          >
            {/* Crisp High-Contrast Logo Badge */}
            <div className="relative w-12 h-12 rounded-2xl bg-white p-1.5 shadow-md shadow-emerald-950/40 border border-emerald-400/40 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Umoor Sehhat Official Crest"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Typography Stack */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2 flex-wrap sm:flex-nowrap">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  Umoor <span className="text-emerald-400">Sehhat</span>
                </span>
                <span 
                  dir="rtl" 
                  lang="ar"
                  className="font-arabic text-xl sm:text-2xl font-bold text-emerald-300 leading-none select-none tracking-wide"
                >
                  امور الصحة
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-emerald-400/80 -mt-0.5">
                Healthcare & Medical Affairs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-200">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    isActive 
                      ? 'text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 font-black' 
                      : 'hover:text-emerald-300 hover:bg-emerald-950/30'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/portal/login"
              className="text-xs font-bold text-emerald-300 hover:text-white px-3.5 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 transition shadow-sm"
            >
              Portal Login
            </Link>

            <a
              href="https://wa.me/919876543210?text=Salam,%20I%20need%20healthcare%20guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95 shrink-0"
            >
              <PhoneCall className="w-4 h-4" /> 24/7 Helpline
            </a>
          </div>

          {/* Mobile Right Controls: Helpline Icon + Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/919876543210?text=Salam,%20I%20need%20healthcare%20guidance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Helpline"
              className="p-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20 active:scale-95 transition"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 hover:text-white hover:bg-emerald-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay & Sheet */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#071712] border-b border-emerald-900/80 p-6 shadow-2xl space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
            
            {/* Nav Links List */}
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400/70 px-2">
                Main Menu
              </span>
              
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-bold transition-all ${
                      isActive
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                        : 'text-slate-200 hover:bg-emerald-950/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-950 text-slate-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
            </div>

            {/* Portal Login Divider Action */}
            <div className="pt-4 border-t border-emerald-900/60 space-y-3">
              <Link
                href="/portal/login"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-950/90 border border-emerald-700/60 text-emerald-300 font-bold text-sm hover:bg-emerald-900 transition"
              >
                <LogIn className="w-4 h-4" /> Doctor & Admin Portal Login
              </Link>

              <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-200/70 bg-emerald-950/40 rounded-xl border border-emerald-900/40">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protected by 256-bit Row-Level Security</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}