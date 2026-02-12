const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../agent-greta-next/components/blog/blogData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newBlog = {
  title: "The Growth Engineer's Playbook: Scaling SaaS with Autonomous Agents in 2026",
  slug: "growth-engineers-playbook-scaling-saas-autonomous-agents",
  date: "Feb 12, 2026",
  author: "Pankaj Vashisht",
  category: "Growth Engineering",
  excerpt: "Discover how autonomous agents and growth engineering protocols are redefining SaaS scalability and conversion in 2026.",
  description: "A comprehensive guide to scaling SaaS using autonomous agents like Greta. Learn why growth engineering is the new standard for modern startups.",
  image: "/learninghub-images/growth-playbook-banner.png",
  content: fs.readFileSync(path.join(__dirname, '../blog_tmp_1.md'), 'utf8')
};

// Remove the closing bracket of the array
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
    console.log('Blog appended successfully');
} else {
    console.error('Could not find end of array');
}
