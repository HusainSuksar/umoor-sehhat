export interface Practitioner {
  id: string;
  name: string;
  specialty: 'Cardiology' | 'Pediatrics' | 'General Medicine' | 'Orthopedics' | 'Dermatology';
  qualification: string;
  experienceYears: number;
  location: string;
  available: boolean;
  contactNumber: string;
  photoUrl: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
  likes: number;
  timestamp: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'Cardiology' | 'Preventative Care' | 'Nutrition' | 'Pediatrics';
  authorId: string;
  date: string;
  readTime: string;
  coverImage: string;
  contentParagraphs: string[];
}

export const MOCK_PRACTITIONERS: Practitioner[] = [
  {
    id: 'doc-1',
    name: 'Dr. Murtaza Builder',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD, FACC',
    experienceYears: 14,
    location: 'Central Medical Complex',
    available: true,
    contactNumber: '919876543210',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80',
  },
  {
    id: 'doc-2',
    name: 'Dr. Fatema Jamali',
    specialty: 'Pediatrics',
    qualification: 'MBBS, DCH',
    experienceYears: 9,
    location: 'Al-Iman Children Clinic',
    available: true,
    contactNumber: '919876543211',
    photoUrl: 'https://images.unsplash.com/photo-1594824813586-1e66c0d8011d?w=400&h=400&fit=crop&q=80',
  },
  {
    id: 'doc-3',
    name: 'Dr. Husain Merchant',
    specialty: 'Orthopedics',
    qualification: 'MS (Ortho), DNB',
    experienceYears: 12,
    location: 'Burhani Care Complex',
    available: false,
    contactNumber: '919876543212',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&q=80',
  },
  {
    id: 'doc-4',
    name: 'Dr. Tasneem Hakim',
    specialty: 'General Medicine',
    qualification: 'MBBS, MD (Internal Med)',
    experienceYears: 16,
    location: 'Community Health Wing',
    available: true,
    contactNumber: '919876543213',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80',
  },
  {
    id: 'doc-5',
    name: 'Dr. Ali Asger Saifee',
    specialty: 'Dermatology',
    qualification: 'MBBS, DVD, MD',
    experienceYears: 8,
    location: 'Metro Derma Center',
    available: true,
    contactNumber: '919876543214',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80',
  },
];

export const MOCK_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: 'Essential hydration and electrolyte balance tips for peak vitality.',
    mediaUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60',
    permalink: 'https://instagram.com',
    likes: 142,
    timestamp: '2 hours ago',
  },
  {
    id: 'ig-2',
    caption: 'Early cardiovascular screening metrics: what your lipid profile means.',
    mediaUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=60',
    permalink: 'https://instagram.com',
    likes: 98,
    timestamp: '5 hours ago',
  },
  {
    id: 'ig-3',
    caption: 'Proper sleep architecture and its role in metabolic health.',
    mediaUrl: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?w=500&auto=format&fit=crop&q=60',
    permalink: 'https://instagram.com',
    likes: 215,
    timestamp: '1 day ago',
  },
  {
    id: 'ig-4',
    caption: 'Community blood donation and free health checkup drive schedule.',
    mediaUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60',
    permalink: 'https://instagram.com',
    likes: 310,
    timestamp: '2 days ago',
  },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Understanding Preventative Cardiac Health in Your 30s and 40s',
    excerpt: 'Key biomarkers, lifestyle adjustments, and regular screening protocols to avoid cardiovascular disease.',
    category: 'Cardiology',
    authorId: 'doc-1',
    date: 'Aug 18, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=600&fit=crop&q=80',
    contentParagraphs: [
      'Cardiovascular disease remains one of the primary health challenges worldwide, yet clinical evidence demonstrates that proactive, early intervention yields immense long-term protection. As adults transition into their 30s and 40s, metabolic adaptations occur that make this period a critical window to establish cardiovascular resilience.',
      'A primary baseline protocol involves tracking specific biomarkers beyond basic cholesterol panels. Evaluating Apolipoprotein B (ApoB), high-sensitivity C-reactive protein (hs-CRP), and baseline blood pressure delivers accurate insights into endothelial inflammation and arterial stress.',
      'Incorporating consistent aerobic activity—such as 150 minutes of Zone 2 training weekly—significantly enhances mitochondrial density and vascular compliance. Coupled with whole-food dietary patterns rich in fiber and unsaturated fatty acids, these habits serve as fundamental clinical pillars for lifelong health.',
      'Lastly, prioritize consistent sleep quality. Unmanaged stress and chronic sleep fragmentation elevate baseline cortisol and sympathetic nervous system tone, which directly accelerates arterial strain. Establishing dedicated recovery windows ensures sustainable cardiovascular wellness.'
    ]
  },
  {
    id: 'art-2',
    title: 'Balanced Nutrition Strategies for Seasonal Transitions',
    excerpt: 'How adjusting macro and micronutrient intake preserves immune integrity during rapid climate shifts.',
    category: 'Nutrition',
    authorId: 'doc-4',
    date: 'Aug 12, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=600&fit=crop&q=80',
    contentParagraphs: [
      'Seasonal shifts bring environmental changes in temperature, humidity, and allergen exposure that place subtle yet measurable strain on human metabolic and immune functions. Aligning dietary intake to support internal homeostasis during these periods is a powerful preventative strategy.',
      'Prioritizing micronutrient density through seasonal vegetables, adequate zinc, and vitamin C supports epithelial tissue integrity—the body’s first line of physical defense. Hydration needs also change, requiring thoughtful attention to electrolyte balance rather than plain water consumption alone.',
      'Maintaining gut microbiome diversity through fermented foods and prebiotic fibers fosters an optimal environment for immune cell signaling. Small, structured dietary adjustments ensure steady energy and defense throughout seasonal fluctuations.'
    ]
  },
  {
    id: 'art-3',
    title: 'Pediatric Immunization Schedules: A Comprehensive Reference',
    excerpt: 'A complete parent guide to essential immunization milestones from infancy through early adolescence.',
    category: 'Pediatrics',
    authorId: 'doc-2',
    date: 'Aug 05, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&h=600&fit=crop&q=80',
    contentParagraphs: [
      'Adhering to evidence-based immunization guidelines is one of the most effective measures in modern pediatric medicine to safeguard infants and children from vaccine-preventable illnesses.',
      'During early developmental stages, immunizations train the naive immune system to recognize bacterial and viral antigens safely. Mild post-vaccination reactions—such as low-grade temperature elevations or slight localized tenderness—are standard physiological indicators of immune engagement.',
      'Caregivers are encouraged to maintain structured physical and digital health passports for timely booster administration. If a milestone is missed, catch-up schedules safely restore immunity without restarting the entire protocol.'
    ]
  },
];