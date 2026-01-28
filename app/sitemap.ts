import { Metadata, Route } from 'next';
import { data } from '@/components/learninghub/data';

export async function generateSitemap() {
  const baseUrl = 'https://greta.questera.ai'; // Update this to your production URL

  const routes = data.flatMap((category) =>
    category.questions.map((q) => ({
      url: `${baseUrl}${q.link}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/learninghub`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...routes,
  ];
}

export default async function sitemap() {
  return generateSitemap();
}
