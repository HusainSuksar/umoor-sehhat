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
  ChevronDown,
  ChevronRight,
  FileUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MOCK_PRACTITIONERS, MOCK_ARTICLES } from '@/lib/mock-data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
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

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

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
      <header className="sticky top-0 z-50 bg-[#7A8B5C] border-b border-[#6B7B4F]/60 shadow-lg">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            
            {/* 1. Brand Logo & Arabic Title */}
            <Link 
              href="/" 
              onClick={closeMenu}
              className="flex items-center gap-3.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl group"
            >
              <div className="relative w-12 h-12 rounded-2xl bg-white p-1.5 shadow-md border border-[#91A373] flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="Umoor Sehhat Crest"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-2.5 flex-wrap sm:flex-nowrap">
                  <span className="font-heading font-bold text-xl tracking-tight text-white drop-shadow-xs">
                    Umoor <span className="text-[#F3F6EF]">Sehhat</span>
                  </span>
                  <span 
                    dir="rtl" 
                    lang="ar"
                    className="font-arabic text-2xl font-bold text-white leading-none select-none drop-shadow-sm"
                  >
                    امور الصحة
                  </span>
                </div>
                <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-[#F3F6EF]/90 -mt-0.5">
                  Healthcare & Medical Affairs
                </span>
              </div>
            </Link>

            {/* 2. Embedded Header Search Trigger */}
            <div className="hidden md:flex flex-1 max-w-sm mx-4">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-[#6B7B4F]/70 hover:bg-[#6B7B4F] border border-[#91A373]/80 rounded-xl text-white text-xs font-heading font-medium transition-all shadow-inner group cursor-pointer"
              >
                <span className="flex items-center gap-2.5 text-white/90 group-hover:text-white">
                  <Search className="w-4 h-4 text-[#F3F6EF]" />
                  <span>Search specialists, literature...</span>
                </span>
                <kbd className="hidden lg:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-bold text-white bg-[#5F6F44] border border-[#91A373] rounded-md">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* 3. Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-heading font-semibold text-white">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'text-white bg-[#5F6F44] border-l-4 border-white font-bold shadow-xs'
                    : 'hover:text-white hover:bg-[#6B7B4F]/70'
                }`}
              >
                Home
              </Link>

              {/* Directory Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('directory')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/directory"
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                    pathname === '/directory'
                      ? 'text-white bg-[#5F6F44] border-l-4 border-white font-bold shadow-xs'
                      : 'hover:text-white hover:bg-[#6B7B4F]/70'
                  }`}
                >
                  <span>Medical Directory</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </Link>

                {activeDropdown === 'directory' && (
                  <div className="absolute top-full left-0 mt-1 w-64 p-3 bg-[#6B7B4F] border border-[#91A373] rounded-2xl shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-150">
                    <Link
                      href="/directory"
                      className="block px-4 py-2.5 text-xs font-heading font-semibold text-white rounded-[25px] hover:bg-[#5F6F44] transition-colors"
                    >
                      All Medical Specialists
                    </Link>
                    <Link
                      href="/directory?search=Cardiology"
                      className="block px-4 py-2.5 text-xs font-heading font-semibold text-white rounded-[25px] hover:bg-[#5F6F44] transition-colors"
                    >
                      Cardiology Consultants
                    </Link>
                    <Link
                      href="/directory?search=Pediatrics"
                      className="block px-4 py-2.5 text-xs font-heading font-semibold text-white rounded-[25px] hover:bg-[#5F6F44] transition-colors"
                    >
                      Pediatric Healthcare
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/content-hub"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname.startsWith('/content-hub')
                    ? 'text-white bg-[#5F6F44] border-l-4 border-white font-bold shadow-xs'
                    : 'hover:text-white hover:bg-[#6B7B4F]/70'
                }`}
              >
                Health Hub
              </Link>

              <Link
                href="/report"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === '/report'
                    ? 'text-white bg-[#5F6F44] border-l-4 border-white font-bold shadow-xs'
                    : 'hover:text-white hover:bg-[#6B7B4F]/70'
                }`}
              >
                Submit Report
              </Link>
            </nav>

            {/* 4. Desktop CTA & Portal Buttons */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                href="/portal/login"
                className="text-xs font-heading font-bold text-white hover:bg-[#5F6F44] px-3.5 py-2 rounded-xl bg-[#6B7B4F] border border-[#91A373] transition shadow-xs"
              >
                Portal Login
              </Link>

              <a
                href="https://wa.me/919876543210?text=Salam,%20I%20am%20reaching%20out%20to%20Umoor%20Sehhat%20Helpline"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4703B] hover:bg-[#BC5E2C] text-white text-xs sm:text-sm font-heading font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-[#D4703B]/25 border border-[#BC5E2C] transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4" /> 24/7 Helpline
              </a>
            </div>

            {/* 5. Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open Search"
                className="p-2.5 rounded-xl bg-[#6B7B4F] border border-[#91A373] text-white hover:bg-[#5F6F44] transition cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
                className="p-2.5 rounded-xl bg-[#6B7B4F] border border-[#91A373] text-white hover:bg-[#5F6F44] transition cursor-pointer"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* 6. Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-20 z-40 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#7A8B5C] border-b border-[#5F6F44] p-6 shadow-2xl space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#F3F6EF] px-2 block">
                Healthcare Desk
              </span>

              <div className="space-y-2">
                {[
                  { href: '/', label: 'Home', icon: HomeIcon },
                  { href: '/directory', label: 'Medical Directory', icon: Stethoscope },
                  { href: '/content-hub', label: 'Health Hub', icon: BookOpen },
                  { href: '/report', label: 'Submit Diagnostic Report', icon: FileUp },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between p-3.5 rounded-2xl text-sm font-heading font-bold transition-all ${
                        isActive
                          ? 'bg-[#5F6F44] text-white border-l-4 border-white'
                          : 'text-white bg-[#6B7B4F]/60 hover:bg-[#6B7B4F]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-white" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#6B7B4F] space-y-3">
                <Link
                  href="/portal/login"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#6B7B4F] border border-[#91A373] text-white font-heading font-bold text-sm hover:bg-[#5F6F44] transition"
                >
                  <LogIn className="w-4 h-4" /> Doctor & Admin Portal Login
                </Link>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#D4703B] hover:bg-[#BC5E2C] text-white font-heading font-bold text-sm shadow-lg transition"
                >
                  <PhoneCall className="w-4 h-4" /> 24/7 Clinical Helpline
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#7A8B5C] border border-[#91A373] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="relative flex items-center px-6 py-4 border-b border-[#6B7B4F] bg-[#6B7B4F]">
              <Search className="w-5 h-5 text-white shrink-0 mr-3" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by physician name, department, or clinical paper..."
                className="w-full bg-transparent text-white placeholder:text-white/70 text-base font-medium outline-none"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 text-white/80 hover:text-white rounded-lg bg-[#5F6F44] border border-[#91A373] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
              {searchQuery.trim() === '' ? (
                <div className="py-10 text-center text-white">
                  <Sparkles className="w-8 h-8 text-[#F3F6EF] mx-auto mb-2" />
                  <p className="text-sm font-heading font-medium">Search verified specialists across Umoor Sehhat.</p>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-bold text-white">
                    <button onClick={() => setSearchQuery('Cardiology')} className="px-3.5 py-1.5 bg-[#6B7B4F] border border-[#91A373] rounded-full hover:bg-[#5F6F44] transition cursor-pointer">Cardiology</button>
                    <button onClick={() => setSearchQuery('Pediatrics')} className="px-3.5 py-1.5 bg-[#6B7B4F] border border-[#91A373] rounded-full hover:bg-[#5F6F44] transition cursor-pointer">Pediatrics</button>
                    <button onClick={() => setSearchQuery('Nutrition')} className="px-3.5 py-1.5 bg-[#6B7B4F] border border-[#91A373] rounded-full hover:bg-[#5F6F44] transition cursor-pointer">Nutrition</button>
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((res) => (
                  <Link
                    key={`${res.type}-${res.id}`}
                    href={res.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#6B7B4F]/80 hover:bg-[#5F6F44] border border-[#91A373]/60 transition group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-heading font-extrabold uppercase px-2 py-0.5 rounded-md bg-white/20 text-white border border-white/30">
                          {res.type}
                        </span>
                        <h4 className="text-sm font-heading font-bold text-white group-hover:text-[#F3F6EF] transition-colors">
                          {res.title}
                        </h4>
                      </div>
                      <p className="text-xs text-white/80 mt-1 font-medium">{res.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                ))
              ) : (
                <div className="py-10 text-center text-white text-sm">
                  No records matching &quot;{searchQuery}&quot;. Please refine your search.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}