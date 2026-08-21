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
  ShieldCheck,
  Building2
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

  // Synchronize state if URL search param changes via header search
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
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
      {/* Search and Specialty Filter Bar */}
      <div className="bg-white p-3.5 rounded-2xl border border-emerald-100/90 shadow-sm flex flex-col md:flex-row gap-3 sticky top-24 z-30">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-emerald-700/60 absolute left-4 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by doctor name, specialty, or clinic location..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#F8FAF9] border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium text-slate-800"
          />
        </div>
        
        <div className="flex gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
          {SPECIALTIES.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveSpecialty(spec)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeSpecialty === spec
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-[#F8FAF9] text-slate-600 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200/60'
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
              className="bg-white rounded-3xl border border-emerald-100/80 p-6 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 shadow-xs"
            >
              <div>
                {/* Doctor Avatar & Basic Credentials */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-emerald-100">
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
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {doc.specialty}
                      </span>
                      {doc.available ? (
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-bold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-bold">
                          <XCircle className="w-3 h-3 text-slate-400" /> Away
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mt-1 truncate">{doc.name}</h2>
                    <p className="text-xs text-emerald-700 font-bold truncate">{doc.qualification}</p>
                  </div>
                </div>

                {/* Clinical Location & Years of Practice */}
                <div className="space-y-2 text-xs text-slate-600 bg-[#F8FAF9] p-3.5 rounded-2xl border border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold truncate">{doc.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{doc.experienceYears} Years Clinical Practice</span>
                  </div>
                </div>
              </div>

              {/* Direct Private WhatsApp Consultation Link */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/${doc.contactNumber}?text=Salam%20Dr.%20${encodeURIComponent(doc.name)},%20I%20am%20reaching%20out%20via%20the%20Umoor%20Sehhat%20directory.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-xs active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" /> Consult via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
          <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 mb-1">No practitioners found</h3>
          <p className="text-xs text-slate-500 mb-4">Try adjusting your specialty filter or search keywords.</p>
          <button
            onClick={() => {
              setQuery('');
              setActiveSpecialty('All');
            }}
            className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-xl text-xs font-bold transition-colors"
          >
            <FilterX className="w-3.5 h-3.5" /> Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}