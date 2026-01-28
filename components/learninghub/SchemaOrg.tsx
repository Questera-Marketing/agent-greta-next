import { DocQuestion } from './data';

export default function SchemaOrg({ doc, category }: { doc: DocQuestion; category: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: doc.question,
    description: doc.description,
    image: `https://greta.questera.ai${doc.banner}`, // Update domain
    author: {
      '@type': 'Organization',
      name: 'Greta',
      url: 'https://greta.questera.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Questera',
      logo: {
        '@type': 'ImageObject',
        url: 'https://greta.questera.ai/Gretanewlogo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://greta.questera.ai${doc.link}`,
    },
    articleSection: category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
