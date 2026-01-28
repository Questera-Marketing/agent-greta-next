import { Metadata } from 'next';

export default function robots(): Metadata {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://greta.questera.ai/sitemap.xml', // Update to your production URL
  };
}
