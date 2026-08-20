import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_ARTICLES, MOCK_PRACTITIONERS } from '@/lib/mock-data';
import { ArrowLeft, Clock, MapPin, Phone, ShieldCheck, Stethoscope, Calendar } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailsPage({ params }: PageProps) {
  // 1. Unwrap the Promise-based params object
  const { id } = await params;

  // 2. Locate the specific article
  const article = MOCK_ARTICLES.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  // 3. Locate the author/practitioner
  const author = MOCK_PRACTITIONERS.find((p) => p.id === article.authorId);

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Top Header & Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <Link 
          href="/content-hub" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition-all mb-8 shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Health Hub
        </Link>
        
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="px-3 py-1 bg-emerald-100/80 text-emerald-800 text-xs font-extrabold uppercase tracking-wider rounded-full border border-emerald-200">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Clock className="w-3.5 h-3.5 text-emerald-600" /> {article.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-slate-400" /> {article.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
          {article.title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          {article.excerpt}
        </p>
      </div>

      {/* Full Hero Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Article Content & Doctor Profile */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prose Content */}
        <article className="space-y-6 text-lg text-slate-700 leading-relaxed font-normal mb-16">
          {article.contentParagraphs.map((paragraph, index) => (
            <p key={index} className="first-of-type:text-xl first-of-type:text-slate-800 first-of-type:leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        <div className="border-t border-slate-100 my-12" />

        {/* Doctor / Author Showcase Card */}
        {author && (
          <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
            <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 mb-6 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Medical Contributor
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* Doctor Avatar */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden shadow-sm border-2 border-white bg-slate-200">
                <Image
                  src={author.photoUrl}
                  alt={author.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Doctor Metadata */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{author.name}</h3>
                    <p className="text-xs font-bold text-emerald-700">{author.qualification}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{author.specialty} ({author.experienceYears} Yrs Exp.)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{author.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 text-center sm:text-left">
                Direct consults are coordinated through private WhatsApp dispatch.
              </p>
              <a
                href={`https://wa.me/${author.contactNumber}?text=Salam%20Dr.%20${encodeURIComponent(author.name)},%20I%20read%20your%20health%20article%20on%20Umoor%20Sehhat.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" /> Consult via WhatsApp
              </a>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}