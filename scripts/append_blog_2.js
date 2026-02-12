const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../agent-greta-next/components/blog/blogData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newBlog = {
  title: "Vibe Coding for Founding Engineers: Building Scalable Startups at the Speed of Thought",
  slug: "vibe-coding-founding-engineers-scalable-startups",
  date: "Feb 12, 2026",
  author: "Pankaj Vashisht",
  category: "Software Development",
  excerpt: "Learn how founding engineers are using vibe coding and intent-based engineering to ship production-grade SaaS in record time.",
  description: "A technical guide to vibe coding for professional developers. Discover how Greta translates intent into scalable, production-ready architecture.",
  image: "/learninghub-images/vibe-coding-engineers-banner.png",
  content: fs.readFileSync(path.join(__dirname, '../blog_tmp_2.md'), 'utf8')
};

const lastIndex = content.lastIndexOf('];');
if (lastIndex !== -1) {
    const blogString = `  {
    title: ${JSON.stringify(newBlog.title)},
    slug: ${JSON.stringify(newBlog.slug)},
    date: ${JSON.stringify(newBlog.date)},
    author: ${JSON.stringify(newBlog.author)},
    category: ${JSON.stringify(newBlog.category)},
    excerpt: ${JSON.stringify(newBlog.excerpt)},
    description: ${JSON.stringify(newBlog.description)},
    image: ${JSON.stringify(newBlog.image)},
    content: \`${newBlog.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,
  },
`;
    content = content.slice(0, lastIndex) + blogString + '];';
    fs.writeFileSync(filePath, content);
    console.log('Blog 2 appended successfully');
}
