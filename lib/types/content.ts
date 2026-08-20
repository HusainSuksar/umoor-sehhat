export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Author {
  id: string;
  full_name: string;
  avatar_url?: string;
}

export interface PublishedArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  published_at: string;
  read_time: string;
  category: Category;
  author: Author;
}