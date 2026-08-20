// lib/validations/content.ts
import { z } from 'zod';

export const articleDraftSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.').max(120, 'Title is too long.'),
  category_id: z.string().min(1, 'Please select a category.'),
  content: z.string().min(50, 'Content must be at least 50 characters.'),
});

export type ArticleDraftInput = z.infer<typeof articleDraftSchema>;

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author_name: string;
  read_time: string;
  published_at: string;
}