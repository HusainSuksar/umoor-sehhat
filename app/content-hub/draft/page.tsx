import ArticleDraftForm from '@/components/forms/ArticleDraftForm';
import { ShieldCheck } from 'lucide-react';

export default function PractitionerDraftPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
          <ShieldCheck className="w-4 h-4" /> Verified Practitioner Portal
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Author an Advisory
        </h1>
        <p className="text-slate-600 text-lg">
          Contribute to the community health repository. Submissions are rigorously reviewed prior to publication.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40">
        <ArticleDraftForm />
      </div>
    </main>
  );
}