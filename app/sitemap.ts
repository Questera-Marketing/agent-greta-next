import { data } from '@/components/learninghub/data';
import { blogs } from '@/components/blog/blogData';

export async function generateSitemap() {
  const baseUrl = 'https://www.greta.sh';

  const routes = data.flatMap((category) =>
    category.questions.map((q) => ({
      url: `${baseUrl}${q.link}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/learninghub`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...routes,
    ...blogRoutes,
  ];
}

export default async function sitemap() {
  return generateSitemap();
}
