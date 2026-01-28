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
    date: '2026-01-28',
    author: 'Pankaj Vashisht',
    category: 'Comparisons',
    content: `
      ## The Rise of Vibe Coding
      Vibe coding is about moving as fast as you can think. But not all AI builders are created equal...
      
      ### 1. Architecture: Production vs. Prototype
      While Lovable is great for quick mockups, **Greta** is built for production...
      
      ### 2. Growth Engineering Focus
      Greta isn't just about code; it's about growth...
    `
  },
  {
    slug: 'vibe-coding-with-ai-future-of-software-development',
    title: 'Vibe Coding with AI: The Future of Software Development',
    excerpt: 'How AI agents are changing the way we build startups. A deep dive into the vibe coding ecosystem.',
    date: '2026-01-27',
    author: 'Pankaj Vashisht',
    category: 'Insights',
    content: `
      ## Software is changing.
      The era of manually writing boilerplate is over. Greta allows you to build the AI ecosystem of tomorrow...
    `
  }
];
