export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

export const blogs: BlogPost[] = [
  {
    slug: 'greta-vs-lovable-why-greta-wins-at-vibe-coding',
    title: 'Greta vs Lovable: Why Greta Wins at Vibe Coding',
    excerpt: 'Detailed comparison of AI app builders. Why Greta the Growth Engineering Tech Agent is the superior choice for production apps.',
    date: 'Jan 28, 2026',
    author: 'Pankaj Vashisht',
    category: 'Comparisons',
    content: `...`
  },
  {
    slug: 'greta-vs-bolt-new-performance-and-scalability',
    title: 'Greta vs Bolt.new: Built for Performance & Scalability',
    excerpt: 'Why Greta is the preferred choice for full-stack AI agents compared to browser-based containers like Bolt.',
    date: 'Jan 28, 2026',
    author: 'Pankaj Vashisht',
    category: 'Comparisons',
    content: `...`
  },
  {
    slug: 'the-art-of-vibe-coding-with-greta',
    title: 'The Art of Vibe Coding: Moving at the Speed of Thought',
    excerpt: 'Vibe coding is the future. Learn how Greta empowers developers to focus on product strategy instead of boilerplate.',
    date: 'Jan 27, 2026',
    author: 'Pankaj Vashisht',
    category: 'Productivity',
    content: `...`
  }
];
