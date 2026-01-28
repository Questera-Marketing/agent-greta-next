import { Metadata } from 'next';
import { getDocByLink } from '@/components/learninghub/data';
import DocPageClient from './DocPageClient';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const docData = getDocByLink(`/learninghub/${id}`);

  if (!docData) {
    return {
      title: 'Doc Not Found | Greta Learning Hub',
    };
  }

  const { doc, category } = docData;
  const url = `https://greta.questera.ai/learninghub/${id}`;
  const title = `${doc.question} | Greta Learning Hub`;
  const description = doc.description;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Greta',
      images: [
        {
          url: doc.banner.startsWith('http') ? doc.banner : `https://greta.questera.ai${doc.banner}`,
          width: 1200,
          height: 630,
          alt: doc.question,
        },
      ],
      type: 'article',
      section: category,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [doc.banner.startsWith('http') ? doc.banner : `https://greta.questera.ai${doc.banner}`],
    },
  };
}

export default async function Page({ params }: Props) {
  return <DocPageClient />;
}
