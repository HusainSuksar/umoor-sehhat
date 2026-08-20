'use client';

import { useState, useMemo } from 'react';
import { MOCK_PRACTITIONERS } from '@/lib/mock-data';
import { Search, MapPin, Phone, ShieldCheck, Stethoscope } from 'lucide-react';

const SPECIALTIES = ['All', 'Cardiology', 'Pediatrics', 'General Medicine', 'Orthopedics', 'Dermatology'];

export default function DirectoryPage() {
  const [query, setQuery] = useState('');
  const [activeSpecialty, setActiveSpecialty] = useState('All');

  const filteredDoctors = useMemo(() => {
    return MOCK_PRACTITIONERS.filter((doc) => {
      const matchText = doc.name.toLowerCase().includes(query.toLowerCase()) || doc.location.toLowerCase().includes(query.toLowerCase());
      const matchSpec = activeSpecialty === 'All' || doc.specialty === activeSpecialty;
      return matchText && matchSpec;
    });
  }, [query, activeSpecialty]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Medical Directory</h1>
        <p className="text-lg text-slate-600">Connect with verified specialists across our healthcare ecosystem.</p>
      </div>

      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-2 mb-10 sticky top-20 z-40">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctors, clinics..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm font-medium focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto p-2 md:p-0 no-scrollbar">
          {SPECIALTIES.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveSpecialty(spec)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeSpecialty === spec
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-transparent hover:border-slate-200'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => (
          <div key={doc.id} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> {doc.specialty}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h2>
              <p className="text-sm font-semibold text-emerald-600 mb-4">{doc.qualification}</p>
              
              <div className="space-y-3 text-sm text-slate-600 font-medium bg-slate-50 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                  <span>{doc.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-4 h-4 text-slate-400" />
                  <span>{doc.experienceYears} Years Experience</span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${doc.contactNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white text-sm font-bold py-3.5 rounded-xl transition-colors duration-300"
            >
              <Phone className="w-4 h-4" /> Contact Doctor
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}