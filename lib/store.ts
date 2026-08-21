export interface ArticleDraft {
  id: string;
  title: string;
  category: string;
  content: string;
  mediaName?: string;
  authorId: string;
  authorName: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

export const mockDrafts: ArticleDraft[] = [
  {
    id: 'draft-101',
    title: 'Management of Hypertension in Primary Care Settings',
    category: 'Cardiology',
    content: 'Clinical guidelines focusing on early ambulatory blood pressure monitoring, dietary sodium restriction, and first-line pharmacological regimens.',
    authorId: 'doc-demo',
    authorName: 'Dr. Fatima Al-Zahra',
    status: 'pending',
    submittedAt: '2026-08-19T10:30:00Z',
  },
  {
    id: 'draft-102',
    title: 'Pediatric Asthma Action Plans: Community Standard',
    category: 'Pediatrics',
    content: 'Structured emergency indicators and peak flow zone interpretations for families and school staff.',
    authorId: 'doc-demo-2',
    authorName: 'Dr. Ibrahim Qasim',
    status: 'approved',
    submittedAt: '2026-08-17T14:15:00Z',
  },
];