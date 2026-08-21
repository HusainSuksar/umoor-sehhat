export interface Practitioner {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experienceYears: number;
  location: string;
  contactNumber: string;
  available: boolean;
  photoUrl: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Wellness' | 'Cardiology' | 'Pediatrics' | 'Nutrition';
  authorId: string;
  date: string;
  readTime: string;
  coverImage: string;
  status: 'published' | 'draft' | 'pending';
}

export interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
}

export const MOCK_PRACTITIONERS: Practitioner[] = [
  {
    id: 'p1',
    name: 'Dr. Fatima Al-Zahra',
    specialty: 'Cardiology',
    qualification: 'MD, FACC - Senior Consultant',
    experienceYears: 14,
    location: 'Central Medical Complex',
    contactNumber: '919876543210',
    available: true,
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p2',
    name: 'Dr. Ibrahim Qasim',
    specialty: 'Pediatrics',
    qualification: 'MBBS, DCH, MRCPCH',
    experienceYears: 9,
    location: 'Al-Noor Community Clinic',
    contactNumber: '919876543211',
    available: true,
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p3',
    name: 'Dr. Zainab Hussain',
    specialty: 'General Medicine',
    qualification: 'MBBS, MD (Internal Medicine)',
    experienceYears: 12,
    location: 'Sehhat Diagnostic Hub',
    contactNumber: '919876543212',
    available: false,
    photoUrl: 'https://images.unsplash.com/photo-1594824813620-801a233b2a26?w=600&auto=format&fit=crop&q=80',
  },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Evidence-Based Preventative Cardiology in Community Practice',
    excerpt: 'Key strategies for early detection of cardiovascular risk markers and diet modification protocols.',
    content: 'Comprehensive preventative strategies developed by Umoor Sehhat medical teams focusing on hypertension screening, lipid management, and clinical dietary interventions.',
    category: 'Cardiology',
    authorId: 'p1',
    date: '2026-08-10',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80',
    status: 'published',
  },
  {
    id: 'art-2',
    title: 'Childhood Nutrition & Immune Support During Seasonal Shifts',
    excerpt: 'Guidelines for parents on maintaining micronutrient density and hydration in pediatric care.',
    content: 'Seasonal transition protocols for children including essential micronutrient supplementation guidelines, hydration requirements, and respiratory illness mitigation.',
    category: 'Pediatrics',
    authorId: 'p2',
    date: '2026-08-04',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    status: 'published',
  },
  {
    id: 'art-3',
    title: 'Hydration Science & Metabolic Balance',
    excerpt: 'An evidence summary on daily electrolyte distribution and chronic fatigue prevention.',
    content: 'Analysis of intracellular hydration dynamics, renal electrolyte retention, and practical recommendations for daily fluid intake.',
    category: 'Nutrition',
    authorId: 'p3',
    date: '2026-07-28',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80',
    status: 'published',
  },
];

export const MOCK_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: 'Official Health Advisory: Community vaccination and preventative screening camp dates.',
    mediaUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com',
    timestamp: '2 hours ago',
  },
  {
    id: 'ig-2',
    caption: 'Clinical wellness protocols: Maintaining optimal sleep architecture and circadian rhythm.',
    mediaUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com',
    timestamp: '1 day ago',
  },
  {
    id: 'ig-3',
    caption: 'Umoor Sehhat Medical Registry: Over 120+ verified doctors added to the digital directory.',
    mediaUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com',
    timestamp: '3 days ago',
  },
  {
    id: 'ig-4',
    caption: 'Pediatric care guidelines: Recognizing early signs of seasonal allergy vs bacterial infection.',
    mediaUrl: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&auto=format&fit=crop&q=80',
    permalink: 'https://instagram.com',
    timestamp: '5 days ago',
  },
];