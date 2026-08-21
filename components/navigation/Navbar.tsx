'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  PhoneCall, 
  Stethoscope, 
  BookOpen, 
  LogIn, 
  Home as HomeIcon,
  ChevronRight,
  ArrowRight,
  Sparkles,
  FileUp
} from 'lucide-react';
import { MOCK_PRACTITIONERS, MOCK_ARTICLES } from '@/lib/mock-data';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/directory', label: 'Medical Directory', icon: Stethoscope },
  { href: '/content-hub', label: 'Health Hub', icon: BookOpen },
  { href: '/report', label: 'Submit Report', icon: FileUp },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const searchResults = searchQuery.trim() === '' ? [] : [
    ...MOCK_PRACTITIONERS.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(p => ({
      id: p.id,
      title: p.name,
      subtitle: `${p.specialty} • ${p.location}`,
      href: `/directory?search=${encodeURIComponent(p.name)}`,
      type: 'Doctor'
    })),
    ...MOCK_ARTICLES.filter(a => 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(a => ({
      id: a.id,
      title: a.title,
      subtitle: `Advisory • ${a.category}`,
      href: `/content-hub/${a.id}`,
      type: 'Article'
    }))
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#071712]/95 backdrop-blur-xl border-b border-emerald-900/60 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            
            {/* Logo & Bilingual Brand Crest */}
            <Link 
              href="/" 
              onClick={closeMenu}
              className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl"
            >
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

              <div className="flex flex-col">
                <div className="flex items-baseline gap-2 flex-wrap sm:flex-nowrap">
                  <span className="font-black text-lg sm:text-xl tracking-tight text-white">
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

            {/* Header Search Trigger */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-emerald-950/70 hover:bg-emerald-950 border border-emerald-800/80 hover:border-emerald-600/80 rounded-xl text-slate-300 text-xs font-medium transition-all shadow-inner group"
              >
                <span className="flex items-center gap-2.5 text-slate-400 group-hover:text-slate-200">
                  <Search className="w-4 h-4 text-emerald-400" />
                  <span>Search doctors, specialties, advisories...</span>
                </span>
                <kbd className="hidden lg:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-bold text-emerald-300 bg-emerald-900/80 border border-emerald-700 rounded-md">
                  ⌘K
                </kbd>
              </button>
            </div>

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
            <div className="hidden sm:flex items-center gap-3 shrink-0">
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4" /> 24/7 Helpline
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-1.5 md:hidden">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open Search"
                className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 hover:text-white transition"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919876543210?text=Salam,%20I%20need%20healthcare%20guidance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Helpline"
                className="p-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold shadow-md active:scale-95 transition"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
                className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 hover:text-white transition"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-20 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#071712] border-b border-emerald-900/80 p-6 shadow-2xl space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400/70 px-2">
                  Main Navigation
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

              <div className="pt-4 border-t border-emerald-900/60">
                <Link
                  href="/portal/login"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-950/90 border border-emerald-700/60 text-emerald-300 font-bold text-sm hover:bg-emerald-900 transition"
                >
                  <LogIn className="w-4 h-4" /> Doctor & Admin Portal Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#081B15] border border-emerald-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="relative flex items-center px-6 py-4 border-b border-emerald-900/80 bg-emerald-950/40">
              <Search className="w-5 h-5 text-emerald-400 shrink-0 mr-3" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctors, specializations, or clinical guidance..."
                className="w-full bg-transparent text-white placeholder:text-slate-400 text-base font-medium outline-none"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-emerald-900/40 border border-emerald-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
              {searchQuery.trim() === '' ? (
                <div className="py-10 text-center text-slate-400">
                  <Sparkles className="w-8 h-8 text-emerald-500/60 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Type a specialist name, department, or clinical topic.</p>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-bold text-emerald-300">
                    <button onClick={() => setSearchQuery('Cardiology')} className="px-3 py-1 bg-emerald-950 border border-emerald-800 rounded-full hover:bg-emerald-900">Cardiology</button>
                    <button onClick={() => setSearchQuery('Pediatrics')} className="px-3 py-1 bg-emerald-950 border border-emerald-800 rounded-full hover:bg-emerald-900">Pediatrics</button>
                    <button onClick={() => setSearchQuery('Nutrition')} className="px-3 py-1 bg-emerald-950 border border-emerald-800 rounded-full hover:bg-emerald-900">Nutrition</button>
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((res) => (
                  <Link
                    key={`${res.type}-${res.id}`}
                    href={res.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-900/60 hover:border-emerald-600 transition group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {res.type}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {res.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-medium">{res.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </Link>
                ))
              ) : (
                <div className="py-10 text-center text-slate-400 text-sm">
                  No records matching &quot;{searchQuery}&quot;. Check spelling or search the full directory.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}