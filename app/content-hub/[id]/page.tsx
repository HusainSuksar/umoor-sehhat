import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_ARTICLES, MOCK_PRACTITIONERS } from '@/lib/mock-data';
import { 
  Clock, 
  User, 
  Calendar, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Stethoscope,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

// Generate static routes for all mock articles for fast Edge delivery
export async function generateStaticParams() {
  return MOCK_ARTICLES.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = MOCK_ARTICLES.find((a) => a.id === id);

  if (!article) {
    return {
      title: 'Article Not Found | Umoor Sehhat',
    };
  }

  return {
    title: `${article.title} | Umoor Sehhat Advisory`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = MOCK_ARTICLES.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const author = MOCK_PRACTITIONERS.find((p) => p.id === article.authorId);

  // Safely split content into readable paragraphs if it's a multiline or single string
  const paragraphs: string[] = article.content.includes('\n\n')
    ? article.content.split('\n\n')
    : [article.content];

  const relatedArticles = MOCK_ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category
  ).slice(0, 2);

  return (
    <article className="min-h-screen bg-[#F4F9F6] py-10 sm:py-16 selection:bg-emerald-200 selection:text-emerald-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-8">
          <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/content-hub" className="hover:text-emerald-700 transition-colors">Health Hub</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-900 truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
        </nav>

        {/* Back Link */}
        <Link
          href="/content-hub"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 bg-white border border-emerald-200/80 px-4 py-2 rounded-xl mb-6 shadow-xs hover:bg-emerald-50 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Library
        </Link>

        {/* Header Content */}
        <header className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-emerald-600" /> {article.category}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author & Publication Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-emerald-100/90">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-emerald-100 border-2 border-emerald-200 shrink-0">
                {author?.photoUrl ? (
                  <Image
                    src={author.photoUrl}
                    alt={author.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                    {article.authorId.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                  <span>{author?.name || 'Medical Advisory Board'}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {author?.qualification || 'Verified Healthcare Practitioner'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-600" /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" /> {article.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl mb-10 border border-emerald-100 bg-slate-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Article Body Content */}
        <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-12 shadow-sm space-y-6">
          <div className="prose prose-emerald max-w-none text-slate-700 text-base sm:text-lg leading-relaxed font-normal space-y-5">
            {paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Clinical Disclaimer Callout */}
          <div className="mt-10 p-5 rounded-2xl bg-[#F8FAF9] border border-emerald-100 text-xs text-slate-600 space-y-1">
            <span className="font-extrabold text-emerald-900 uppercase tracking-wider block">
              Institutional Medical Disclaimer
            </span>
            <p className="leading-relaxed">
              This advisory is compiled for preventative healthcare guidance. It does not replace individualized clinical diagnostic evaluation. For acute conditions, reach out via the 24/7 Helpline or schedule an in-person consultation with a registered medical officer.
            </p>
          </div>
        </div>

        {/* Author Contact Box if practitioner is in directory */}
        {author && (
          <div className="mt-8 bg-gradient-to-r from-emerald-950 to-[#071712] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-800/40">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                <Stethoscope className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Consult with {author.name}</h3>
                <p className="text-xs text-emerald-200/70">{author.specialty} • {author.location}</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${author.contactNumber}?text=Salam%20Dr.%20${encodeURIComponent(author.name)},%20I%20read%20your%20advisory%20on%20Umoor%20Sehhat%20and%20would%20like%20to%20consult.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 shrink-0"
            >
              Direct WhatsApp Inquiry
            </a>
          </div>
        )}

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-10 border-t border-emerald-200/60">
            <h2 className="text-2xl font-black text-emerald-950 mb-6">Related Advisories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/content-hub/${rel.id}`}
                  className="group bg-white rounded-3xl border border-emerald-100 p-5 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mt-2 line-clamp-2">
                      {rel.title}
                    </h3>
                  </div>
                  <div className="mt-4 text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <span>Read Advisory</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}