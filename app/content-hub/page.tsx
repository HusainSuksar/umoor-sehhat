import ArticleGallery from '@/components/content/ArticleGallery';
import NewsletterForm from '@/components/content/NewsletterForm';
import { BookOpen, Mail, Sparkles } from 'lucide-react';
import { MOCK_ARTICLES } from '@/lib/mock-data';

export const metadata = {
  title: 'Health & Wellness Hub | Umoor Sehhat',
  description: 'Verified medical advisories and community health literature.',
};

export default function ContentHubPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-emerald-100/60 via-emerald-50/20 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-emerald-200/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Evidence-Based Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-tight mb-4">
            Health & Wellness Hub
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore our curated library of verified medical advisories, research summaries, and preventative care strategies authored by Umoor Sehhat medical coordinators.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6 text-emerald-950 font-bold text-2xl">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            <h2>Published Advisories</h2>
          </div>
          <ArticleGallery articles={MOCK_ARTICLES} />
        </section>

        <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 rounded-3xl overflow-hidden relative shadow-2xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10 border border-emerald-800/40">
          <div className="max-w-xl text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Mail className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Stay Informed</h2>
            <p className="text-emerald-200/70 text-sm leading-relaxed">
              Get timely preventative guidance and community health camp schedules directly in your inbox.
            </p>
          </div>

          <NewsletterForm />
        </section>
      </div>
    </div>
  );
}