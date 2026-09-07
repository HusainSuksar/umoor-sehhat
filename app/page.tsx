import Image from 'next/image';
import AyatTypingEffect from '@/components/home/AyatTypingEffect';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { ExternalLink, Expand, FileText, BookOpen, ArrowRight } from 'lucide-react';

const NAVIGATION_TABS = [
  {
    title: 'Waqfa Sehhiya',
    subtitle: 'A 12 day health journey with UMOOR SEHHAT',
    href: 'https://umoorsehhatwaqafasahhiya.netlify.app/',
    icon: Expand,
  },
  {
    title: 'Diagnostic Report Desk',
    subtitle: 'Confidential clinical document intake and patient triage uploads',
    href: 'https://forms.umoorsehhat.org/reports',
    icon: FileText,
  },
  {
    title: 'Health Advisories & Hub',
    subtitle: 'Official preventative health literature and community medical bulletins',
    href: 'https://hub.umoorsehhat.org',
    icon: BookOpen,
  },
];

interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
}

const FALLBACK_POSTS: InstagramPost[] = [
  {
    id: '1',
    caption: 'Official Health Advisory: Community preventative screening schedule and hydration protocol.',
    mediaUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com/umoorsehhat',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    caption: 'Clinical wellness notice: Maintaining circadian health and sleep architecture.',
    mediaUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com/umoorsehhat',
    timestamp: '1 day ago',
  },
  {
    id: '3',
    caption: 'Umoor Sehhat Medical Registry: New vetted consultants added to the directory.',
    mediaUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com/umoorsehhat',
    timestamp: '3 days ago',
  },
  {
    id: '4',
    caption: 'Pediatric care notice: Differentiating seasonal respiratory allergies from infection.',
    mediaUrl: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com/umoorsehhat',
    timestamp: '4 days ago',
  },
  {
    id: '5',
    caption: 'Early cardiovascular health screening protocols and ambulatory monitoring standards.',
    mediaUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com/umoorsehhat',
    timestamp: '6 days ago',
  },
];

async function getRecentInstagramPosts(): Promise<InstagramPost[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/instagram`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return FALLBACK_POSTS;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data.slice(0, 5) : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}

export default async function Home() {
  const posts = await getRecentInstagramPosts();

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBF9] text-[#1F2817] overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-[#F3F6EF] via-[#FAFBF9] to-[#FAFBF9] border-b border-[#E2EAD8]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[350px] bg-[#7A8B5C]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white p-2 shadow-lg border border-[#91A373] mb-6 flex items-center justify-center">
            <Image src="/logo.png" alt="Umoor Sehhat Crest" fill sizes="96px" priority className="object-contain p-1.5" />
          </div>

          <div className="w-full mb-3">
            <AyatTypingEffect />
          </div>

          <p className="text-xs sm:text-base font-heading font-semibold text-[#1F2817] tracking-wide">
            &ldquo;And when I am ill, it is He who cures me.&rdquo;
          </p>
          <p className="text-[10px] sm:text-xs text-[#5F6F44] font-heading font-bold uppercase tracking-widest mt-1 mb-10">
            Surah Ash-Shu&apos;ara (26:80)
          </p>

          {/* 3 Primary Navigation Hyperlink Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {NAVIGATION_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <a
                  key={tab.title}
                  href={tab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-[#91A373]/70 hover:border-[#7A8B5C] rounded-2xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F3F6EF] border border-[#91A373]/40 flex items-center justify-center text-[#5F6F44] group-hover:bg-[#7A8B5C] group-hover:text-white transition-colors mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-heading font-bold text-[#1F2817] group-hover:text-[#5F6F44] transition-colors">
                        {tab.title}
                      </h2>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#5F6F44] transition-colors" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                      {tab.subtitle}
                    </p>
                  </div>
                  <div className="mt-6 text-[11px] font-heading font-bold text-[#D4703B] uppercase tracking-wider flex items-center gap-1">
                    <span>Access Portal</span> &rarr;
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5-Card Instagram Feed */}
      <section className="py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2EAD8]">
            <div className="flex items-center gap-2">
              <InstagramIcon className="w-5 h-5 text-[#D4703B]" />
              <h2 className="text-xl sm:text-2xl font-display text-[#1F2817]">Recent Updates & Advisories</h2>
            </div>
            <a
              href="https://instagram.com/umoorsehhat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-heading font-bold text-[#5F6F44] hover:text-[#1F2817] flex items-center gap-1 transition-colors"
            >
              Follow @umoorsehhat &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {posts.map((post, idx) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-[#91A373]/60 bg-[#FAFBF9] shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    priority={idx === 0}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 shadow-xs flex items-center justify-center text-[#1F2817]">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#1F2817] line-clamp-2 font-heading font-medium leading-relaxed">
                    {post.caption}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-heading font-bold text-[#5F6F44]">
                    <span>{post.timestamp}</span>
                    <span className="text-[#D4703B] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}