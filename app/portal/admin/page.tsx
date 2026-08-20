import { mockDrafts } from '@/lib/store';
import { approveDraft } from '@/app/actions/portal';
import { FileText, CheckCircle, Clock } from 'lucide-react';
import { revalidatePath } from 'next/cache';

export default function AdminPortal() {
  const pendingDrafts = mockDrafts.filter(d => d.status === 'pending');
  const approvedDrafts = mockDrafts.filter(d => d.status === 'approved');

  // Inline server action to handle approval form submission
  async function handleApprove(formData: FormData) {
    'use server';
    const draftId = formData.get('draftId') as string;
    await approveDraft(draftId);
    revalidatePath('/portal/admin'); // Refresh the page UI instantly
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-slate-900">Admin Editorial Desk</h1>
        <p className="text-slate-600 mt-2">Review, edit, and approve incoming medical advisories.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Pending Queue */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" /> Pending Review ({pendingDrafts.length})
          </h2>
          
          {pendingDrafts.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center text-slate-500 font-medium">
              No pending drafts in the queue.
            </div>
          ) : (
            pendingDrafts.map((draft) => (
              <div key={draft.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-200">
                    Awaiting Review
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{new Date(draft.submittedAt).toLocaleDateString()}</span>
                </div>
                
                <h3 className="text-xl font-black text-slate-900 mb-2">{draft.title}</h3>
                <p className="text-sm font-semibold text-emerald-700 mb-4">By {draft.authorName} • {draft.category}</p>
                
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-700 mb-6 leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {draft.content}
                </div>

                {draft.mediaName && (
                  <p className="text-xs font-medium text-slate-500 mb-6">📎 Attached Media: {draft.mediaName}</p>
                )}

                <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
                  <button className="px-5 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition">
                    Edit Draft
                  </button>
                  <form action={handleApprove}>
                    <input type="hidden" name="draftId" value={draft.id} />
                    <button type="submit" className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition shadow-sm">
                      <CheckCircle className="w-4 h-4" /> Approve & Publish
                    </button>
                  </form>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Recently Approved Sidebar */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" /> Recently Published
          </h2>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            {approvedDrafts.length === 0 ? (
              <p className="text-sm text-slate-500 text-center py-4">No recent publications.</p>
            ) : (
              approvedDrafts.map(draft => (
                <div key={draft.id} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1">{draft.title}</h4>
                  <p className="text-xs text-slate-500">By {draft.authorName}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}