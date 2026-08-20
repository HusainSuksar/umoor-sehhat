'use client';

import { useState } from 'react';
import { UploadCloud, FileCheck, ShieldAlert } from 'lucide-react';

export default function ReportPage() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
    }, 1500); // Simulate API delay
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 p-8 sm:p-12">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Secure Document Intake</h1>
          <p className="text-slate-600">Upload diagnostic records. All files are encrypted and routed directly to administration.</p>
        </div>

        {success ? (
          <div className="bg-emerald-50 rounded-2xl p-10 text-center border border-emerald-100">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-emerald-900 mb-2">Upload Complete</h2>
            <p className="text-sm text-emerald-700 mb-6">Your record has been safely transmitted.</p>
            <button onClick={() => { setSuccess(false); setFileName(null); }} className="px-6 py-2.5 bg-white text-emerald-700 text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all">
              Submit Another Document
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Patient Details</label>
              <input
                type="text"
                required
                placeholder="e.g. Husain Suksar"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Clinical Document</label>
              <div className="relative border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center hover:bg-slate-50 hover:border-emerald-400 transition-colors group">
                <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-3 group-hover:text-emerald-500 transition-colors" />
                <label className="cursor-pointer">
                  <span className="text-sm font-bold text-emerald-600 group-hover:text-emerald-700">Browse files</span>
                  <input
                    type="file"
                    required
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                    className="sr-only"
                    accept=".pdf,.jpg,.png"
                  />
                </label>
                <p className="text-xs font-medium text-slate-500 mt-2">Secure PDF or Image (Max 10MB)</p>
                {fileName && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-sm">
                      <FileCheck className="w-3.5 h-3.5" /> {fileName}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-100">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs font-medium text-amber-800 leading-relaxed">
                By submitting, you agree to our RLS-secured data handling policy. Only authorized medical coordinators can access this file.
              </p>
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {uploading ? 'Encrypting & Uploading...' : 'Securely Submit Record'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}