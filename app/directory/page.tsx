import { Suspense } from 'react';
import DirectorySearchContent from '@/components/directory/DirectorySearchContent';
import { Stethoscope } from 'lucide-react';

export const metadata = {
  title: 'Medical Directory | Umoor Sehhat',
  description: 'Search and connect with verified medical specialists across the Umoor Sehhat network.',
};

// Skeleton fallback while useSearchParams resolves
function DirectorySkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-14 bg-white rounded-2xl border border-slate-200/80" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-64 bg-white rounded-3xl border border-slate-100 p-6" />
        ))}
      </div>
    </div>
  );
}

export default function DirectoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          <Stethoscope className="w-3.5 h-3.5 text-emerald-600" /> Medical Network
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
          Verified Practitioner Directory
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
          Search and consult directly with credentialed medical professionals in the Umoor Sehhat healthcare ecosystem.
        </p>
      </div>

      {/* Suspense boundary wrapping useSearchParams client component */}
      <Suspense fallback={<DirectorySkeleton />}>
        <DirectorySearchContent />
      </Suspense>
    </main>
  );
}