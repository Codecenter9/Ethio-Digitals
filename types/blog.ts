// types/blog.ts
export interface Blog {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
}
