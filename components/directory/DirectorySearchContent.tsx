'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { MOCK_PRACTITIONERS } from '@/lib/mock-data';
import { 
  Search, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  XCircle, 
  Stethoscope, 
  FilterX, 
  Building2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SPECIALTIES = [
  'All',
  'Cardiology',
  'Pediatrics',
  'General Medicine',
  'Orthopedics',
  'Dermatology',
];

export default function DirectorySearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('search') || '';

  const [query, setQuery] = useState(initialQuery);
  const [activeSpecialty, setActiveSpecialty] = useState('All');

  useEffect(() => {
    if (initialQuery) setQuery(initialQuery);
  }, [initialQuery]);

  const filteredDoctors = useMemo(() => {
    return MOCK_PRACTITIONERS.filter((doc) => {
      const matchText =
        doc.name.toLowerCase().includes(query.toLowerCase()) ||
        doc.location.toLowerCase().includes(query.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(query.toLowerCase()) ||
        doc.qualification.toLowerCase().includes(query.toLowerCase());
      const matchSpec = activeSpecialty === 'All' || doc.specialty === activeSpecialty;
      return matchText && matchSpec;
    });
  }, [query, activeSpecialty]);

  return (
    <div className="space-y-8">
      {/* Search and Specialty Tabs */}
      <div className="bg-[#fff9f0] p-4 rounded-2xl border border-[#C99848] shadow-sm flex flex-col md:flex-row gap-3 sticky top-24 z-30">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#C99848] absolute left-4 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by physician name, clinical specialty, or center..."
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#C99848]/60 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C99848] text-[#152251]"
          />
        </div>
        
        {/* Filter Pills with Muted Gold States */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
          {SPECIALTIES.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveSpecialty(spec)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-bold whitespace-nowrap transition-all ${
                activeSpecialty === spec
                  ? 'bg-[#F4E8D4] text-[#0f2442] border border-[#C99848] shadow-xs'
                  : 'bg-white text-[#152251] hover:bg-[#C99848] hover:text-white border border-[#e4d6a0]'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Practitioner Cards Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <article
              key={doc.id}
              className="bg-white rounded-2xl border border-[#C99848] p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-[#e4d6a0]">
                    <Image
                      src={doc.photoUrl}
                      alt={doc.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-heading font-bold bg-[#fff9f0] text-[#0f2442] border border-[#C99848]">
                        {doc.specialty}
                      </span>
                      {doc.available ? (
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#C99848] font-heading font-bold">
                          <CheckCircle2 className="w-3 h-3 text-[#C99848]" /> Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#cccccc] font-heading font-bold">
                          <XCircle className="w-3 h-3 text-[#cccccc]" /> Away
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-display font-normal text-[#000000] mt-1 truncate">{doc.name}</h2>
                    <p className="text-xs text-[#1c388c] font-heading font-semibold truncate">{doc.qualification}</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#152251] bg-[#fff9f0] p-3.5 rounded-xl border border-[#e4d6a0]/80 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-[#C99848] shrink-0" />
                    <span className="font-semibold truncate">{doc.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-3.5 h-3.5 text-[#C99848] shrink-0" />
                    <span>{doc.experienceYears} Years Clinical Practice</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e4d6a0]/50">
                <a
                  href={`https://wa.me/${doc.contactNumber}?text=Salam%20Dr.%20${encodeURIComponent(doc.name)},%20I%20am%20reaching%20out%20via%20the%20Umoor%20Sehhat%20registry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#ef7445] hover:bg-[#ef5b21] text-white text-xs font-heading font-bold py-3 px-4 rounded-xl transition-all shadow-sm active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" /> Consult via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#fff9f0] rounded-2xl border border-dashed border-[#C99848]">
          <Stethoscope className="w-10 h-10 text-[#C99848] mx-auto mb-3" />
          <h3 className="text-lg font-display font-normal text-[#000000] mb-1">No specialists found</h3>
          <p className="text-xs text-[#152251]/70 mb-4 font-heading font-medium">Try clearing your filters or changing search keywords.</p>
          <button
            onClick={() => {
              setQuery('');
              setActiveSpecialty('All');
            }}
            className="inline-flex items-center gap-1.5 bg-[#C99848] hover:bg-[#ef7445] text-white px-4 py-2 rounded-xl text-xs font-heading font-bold transition-colors"
          >
            <FilterX className="w-3.5 h-3.5" /> Reset Registry Filters
          </button>
        </div>
      )}

      {/* Pagination Ribbon */}
      <div className="flex items-center justify-center gap-2 pt-6">
        <button
          type="button"
          aria-label="Previous Page"
          className="w-10 h-10 rounded-full border border-[#1c388c] flex items-center justify-center text-[#1c388c] hover:bg-[#C99848] hover:text-white hover:border-[#C99848] transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="px-4 py-2 rounded-full bg-[#F4E8D4] text-[#0f2442] border border-[#C99848] font-heading font-bold text-xs shadow-xs">
          Page 1 of 1
        </span>

        <button
          type="button"
          aria-label="Next Page"
          className="w-10 h-10 rounded-full border border-[#1c388c] flex items-center justify-center text-[#1c388c] hover:bg-[#C99848] hover:text-white hover:border-[#C99848] transition"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}