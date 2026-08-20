import { z } from 'zod';

export const articleDraftSchema = z.object({
  title: z
    .string()
    .min(10, 'Title must be at least 10 characters long.')
    .max(120, 'Title cannot exceed 120 characters.'),
  categoryId: z.string().min(1, 'Please select a medical category.'),
  content: z
    .string()
    .min(100, 'Clinical content must be detailed (at least 100 characters).')
    .max(10000, 'Content exceeds maximum length.'),
});

export type ArticleDraftInput = z.infer<typeof articleDraftSchema>;