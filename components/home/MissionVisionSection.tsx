import Image from 'next/image';
import { Target, Compass, HeartHandshake, ShieldCheck, Award, HeartPulse } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="py-24 bg-white border-b border-emerald-100 relative overflow-hidden">
      
      {/* Background Watermark Crest */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 opacity-[0.04] pointer-events-none select-none">
        <Image
          src="/logo.png"
          alt="Watermark Crest"
          width={384}
          height={384}
          className="object-contain rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-600" /> Strategic Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
            Our Mission & Vision
          </h2>
          <p className="text-slate-600 text-base font-medium mt-2">
            Establishing structured healthcare governance, rapid emergency response, and community-wide medical accessibility.
          </p>
        </div>

        {/* 2-Column Institutional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#F4F9F6] to-white border border-emerald-100 shadow-sm relative overflow-hidden group hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
              Future Roadmap
            </span>
            <h3 className="text-2xl font-black text-emerald-950 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              To cultivate a resilient, health-literate community supported by an accredited network of verified medical practitioners, advanced digital health records, and swift diagnostic dispatch.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold bg-white text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200/80 shadow-xs">
                Zero Medical Inequity
              </span>
              <span className="text-xs font-bold bg-white text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200/80 shadow-xs">
                Preventative Medicine
              </span>
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#F4F9F6] to-white border border-emerald-100 shadow-sm relative overflow-hidden group hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center mb-6 shadow-lg shadow-teal-700/20">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 block mb-1">
              Daily Operations
            </span>
            <h3 className="text-2xl font-black text-emerald-950 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              To provide immediate, reliable triage for every family, maintain authenticated practitioner credentials, facilitate confidential document intake, and distribute peer-reviewed medical guidance.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold bg-white text-teal-900 px-3 py-1.5 rounded-lg border border-teal-200/80 shadow-xs">
                Direct Tele-Consultation
              </span>
              <span className="text-xs font-bold bg-white text-teal-900 px-3 py-1.5 rounded-lg border border-teal-200/80 shadow-xs">
                Confidential Intake
              </span>
            </div>
          </div>

        </div>

        {/* Trust Badges Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Verified Credentials</h4>
              <p className="text-xs text-slate-500">Audited doctor registrations</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Rapid Triage & Intake</h4>
              <p className="text-xs text-slate-500">Google Drive API private upload</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Clinical Excellence</h4>
              <p className="text-xs text-slate-500">Peer-reviewed health literature</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}