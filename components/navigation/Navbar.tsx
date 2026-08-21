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
      <header className="sticky top-0 z-50 bg-[#7A8B5C] border-b border-[#6B7B4F]/60 shadow-md w-full">
        <div className="max-w-[1300px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Scaled Title */}
            <Link 
              href="/" 
              onClick={closeMenu}
              className="flex items-center gap-2 sm:gap-3.5 min-w-0 shrink focus:outline-none rounded-xl"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white p-1 shadow-sm border border-[#91A373] flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="Umoor Sehhat Crest"
                  fill
                  sizes="44px"
                  className="object-contain p-0.5"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-1.5 sm:gap-2 truncate">
                  <span className="font-heading font-bold text-base sm:text-lg lg:text-xl tracking-tight text-white truncate">
                    Umoor <span className="text-[#F3F6EF]">Sehhat</span>
                  </span>
                  <span 
                    dir="rtl" 
                    lang="ar"
                    className="font-arabic text-lg sm:text-xl font-bold text-white leading-none select-none shrink-0"
                  >
                    امور الصحة
                  </span>
                </div>
                <span className="hidden xs:block text-[8px] sm:text-[10px] font-heading font-semibold uppercase tracking-widest text-[#F3F6EF]/90 truncate -mt-0.5">
                  Healthcare & Medical Affairs
                </span>
              </div>
            </Link>

            {/* Desktop Search Trigger */}
            <div className="hidden lg:flex flex-1 max-w-xs xl:max-w-sm mx-2">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-between px-3.5 py-2 bg-[#6B7B4F]/80 hover:bg-[#6B7B4F] border border-[#91A373]/80 rounded-xl text-white text-xs font-heading font-medium transition-all shadow-inner group cursor-pointer"
              >
                <span className="flex items-center gap-2 text-white/90">
                  <Search className="w-3.5 h-3.5 text-[#F3F6EF]" />
                  <span className="truncate">Search specialists...</span>
                </span>
                <kbd className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-bold text-white bg-[#5F6F44] border border-[#91A373] rounded">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 text-xs xl:text-sm font-heading font-semibold text-white">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'text-white bg-[#5F6F44] font-bold shadow-xs'
                    : 'hover:text-white hover:bg-[#6B7B4F]/70'
                }`}
              >
                Home
              </Link>

              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('directory')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/directory"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                    pathname === '/directory'
                      ? 'text-white bg-[#5F6F44] font-bold shadow-xs'
                      : 'hover:text-white hover:bg-[#6B7B4F]/70'
                  }`}
                >
                  <span>Directory</span>
                  <ChevronDown className="w-3 h-3 opacity-80" />
                </Link>

                {activeDropdown === 'directory' && (
                  <div className="absolute top-full left-0 mt-1 w-56 p-2 bg-[#6B7B4F] border border-[#91A373] rounded-2xl shadow-2xl space-y-1">
                    <Link href="/directory" className="block px-3 py-2 text-xs font-heading font-semibold text-white rounded-xl hover:bg-[#5F6F44]">All Specialists</Link>
                    <Link href="/directory?search=Cardiology" className="block px-3 py-2 text-xs font-heading font-semibold text-white rounded-xl hover:bg-[#5F6F44]">Cardiology</Link>
                    <Link href="/directory?search=Pediatrics" className="block px-3 py-2 text-xs font-heading font-semibold text-white rounded-xl hover:bg-[#5F6F44]">Pediatrics</Link>
                  </div>
                )}
              </div>

              <Link
                href="/content-hub"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith('/content-hub')
                    ? 'text-white bg-[#5F6F44] font-bold shadow-xs'
                    : 'hover:text-white hover:bg-[#6B7B4F]/70'
                }`}
              >
                Health Hub
              </Link>

              <Link
                href="/report"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/report'
                    ? 'text-white bg-[#5F6F44] font-bold shadow-xs'
                    : 'hover:text-white hover:bg-[#6B7B4F]/70'
                }`}
              >
                Submit Report
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <Link
                href="/portal/login"
                className="text-xs font-heading font-bold text-white hover:bg-[#5F6F44] px-3 py-2 rounded-xl bg-[#6B7B4F] border border-[#91A373] transition"
              >
                Portal
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#D4703B] hover:bg-[#BC5E2C] text-white text-xs font-heading font-bold px-3.5 py-2 rounded-xl shadow-md transition-all active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Helpline
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-1.5 lg:hidden shrink-0">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open Search"
                className="p-2 rounded-xl bg-[#6B7B4F] border border-[#91A373] text-white hover:bg-[#5F6F44] transition"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-label="Toggle Menu"
                className="p-2 rounded-xl bg-[#6B7B4F] border border-[#91A373] text-white hover:bg-[#5F6F44] transition"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden w-full bg-[#7A8B5C] border-b border-[#5F6F44] px-4 py-5 shadow-2xl space-y-3">
            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#F3F6EF] block">
              Menu Navigation
            </span>

            <div className="space-y-1.5">
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
                    className={`flex items-center justify-between p-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all ${
                      isActive
                        ? 'bg-[#5F6F44] text-white'
                        : 'text-white bg-[#6B7B4F]/60 hover:bg-[#6B7B4F]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-white" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#6B7B4F] grid grid-cols-2 gap-2">
              <Link
                href="/portal/login"
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#6B7B4F] border border-[#91A373] text-white font-heading font-bold text-xs"
              >
                <LogIn className="w-3.5 h-3.5" /> Portal
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#D4703B] text-white font-heading font-bold text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Helpline
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-[#7A8B5C] border border-[#91A373] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center px-4 py-3 border-b border-[#6B7B4F] bg-[#6B7B4F]">
              <Search className="w-4 h-4 text-white shrink-0 mr-2.5" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specialists, papers..."
                className="w-full bg-transparent text-white placeholder:text-white/70 text-sm font-medium outline-none"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1 text-white/80 hover:text-white rounded bg-[#5F6F44]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 max-h-[50vh] overflow-y-auto space-y-2">
              {searchQuery.trim() === '' ? (
                <div className="py-6 text-center text-white text-xs">
                  <Sparkles className="w-6 h-6 text-[#F3F6EF] mx-auto mb-1.5" />
                  <p>Type a specialty or doctor name.</p>
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((res) => (
                  <Link
                    key={`${res.type}-${res.id}`}
                    href={res.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#6B7B4F]/80 hover:bg-[#5F6F44] transition group"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-heading font-bold uppercase px-1.5 py-0.5 rounded bg-white/20 text-white">
                          {res.type}
                        </span>
                        <h4 className="text-xs font-heading font-bold text-white">
                          {res.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-white/80 mt-0.5">{res.subtitle}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-white/70" />
                  </Link>
                ))
              ) : (
                <div className="py-6 text-center text-white text-xs">
                  No records found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}