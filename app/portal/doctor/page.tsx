'use client';

import { useState } from 'react';
import { submitDraft } from '@/app/actions/portal';
import { FileImage, Send, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function DoctorPortal() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await submitDraft(formData);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">Author an Advisory</h1>
        <p className="text-slate-600 mt-2">Submit your clinical guidance. All posts undergo administrative review.</p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 p-10 rounded-3xl text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-emerald-950 mb-2">Draft Submitted Successfully</h2>
          <p className="text-emerald-700 mb-6">Your article has been securely routed to the administration desk.</p>
          <button onClick={() => setSubmitted(false)} className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition">
            Write Another Article
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Article Title</label>
            <input type="text" name="title" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium" placeholder="Enter a descriptive title..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
              <select name="category" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium cursor-pointer">
                <option value="Cardiology">Cardiology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Preventative Care">Preventative Care</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Cover Media (Optional)</label>
              <div className="relative">
                <input type="file" name="media" id="media" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 text-slate-500 font-medium hover:border-emerald-400 transition-colors">
                  <FileImage className="w-4 h-4" /> <span>Upload an image...</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Comprehensive Content</label>
            <textarea name="content" required rows={12} className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium resize-y leading-relaxed" placeholder="Write the body of your clinical guidance here..." />
          </div>

          <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-200/60">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-amber-900 leading-relaxed">
              By submitting, you verify that this content is medically accurate and contains no sensitive Patient Health Information (PHI).
            </p>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all active:scale-95 flex justify-center items-center gap-2">
            <Send className="w-5 h-5" /> {loading ? 'Encrypting & Submitting...' : 'Submit Draft to Admin'}
          </button>
        </form>
      )}
    </div>
  );
}