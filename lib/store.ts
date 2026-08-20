// lib/store.ts
export type DraftStatus = 'pending' | 'approved' | 'rejected';

export interface ArticleDraft {
  id: string;
  title: string;
  category: string;
  content: string;
  mediaName?: string;
  authorId: string;
  authorName: string;
  status: DraftStatus;
  submittedAt: string;
}

// Global variable to persist data during hot-reloads in dev mode
const globalForStore = global as unknown as { mockDrafts: ArticleDraft[] };
export const mockDrafts = globalForStore.mockDrafts || [];
if (process.env.NODE_ENV !== 'production') globalForStore.mockDrafts = mockDrafts;