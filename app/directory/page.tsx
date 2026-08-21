'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MOCK_PRACTITIONERS } from '@/lib/mock-data';
import { Search, MapPin, Phone, CheckCircle2, XCircle, Stethoscope, FilterX } from 'lucide-react';

const SPECIALTIES = ['All', 'Cardiology', 'Pediatrics', 'General Medicine', 'Orthopedics', 'Dermatology'];

export default function DirectoryPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('search') || '';

  const [query, setQuery] = useState(initialQuery);
  const [activeSpecialty, setActiveSpecialty] = useState('All');

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
        doc.specialty.toLowerCase().includes(query.toLowerCase());
      const matchSpec = activeSpecialty === 'All' || doc.specialty === activeSpecialty;
      return matchText && matchSpec;
    });
  }, [query, activeSpecialty]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          <Stethoscope className="w-3.5 h-3.5" /> Medical Network
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
          Verified Practitioner Directory
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          Connect directly with verified specialists across the Umoor Sehhat healthcare ecosystem.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3 rounded-2xl border border-emerald-100 shadow-sm flex flex-col md:flex-row gap-3 mb-10 sticky top-24 z-30">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by doctor name, specialty, or clinic location..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
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
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-emerald-100/80 p-6 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {doc.specialty}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 mt-2">{doc.name}</h2>
                    <p className="text-xs text-emerald-700 font-bold">{doc.qualification}</p>
                  </div>
                  {doc.available ? (
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-bold">
                      <XCircle className="w-3.5 h-3.5 text-slate-400" /> Away
                    </span>
                  )}
                </div>

                <div className="mt-5 space-y-2.5 text-xs text-slate-600 bg-[#F8FAF9] p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold">{doc.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{doc.experienceYears} Years Clinical Experience</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${doc.contactNumber}?text=Salam%20Dr.%20${encodeURIComponent(doc.name)},%20I%20am%20reaching%20out%20via%20the%20Umoor%20Sehhat%20directory.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-xs active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" /> Consult via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
          <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 mb-1">No practitioners found</h3>
          <p className="text-xs text-slate-500 mb-4">Try clearing your filters or changing your search terms.</p>
          <button 
            onClick={() => { setQuery(''); setActiveSpecialty('All'); }} 
            className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-xl text-xs font-bold transition-colors"
          >
            <FilterX className="w-3.5 h-3.5" /> Reset Filters
          </button>
        </div>
      )}
    </main>
  );
}