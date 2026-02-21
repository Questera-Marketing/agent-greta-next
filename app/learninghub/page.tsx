import { Metadata } from 'next';
import LearningHubClient from './LearningHubClient';

export const metadata: Metadata = {
  title: 'Learning Hub - Greta AI Website Builder Guides',
  description: 'Master AI website building with Greta. Explore guides on Agent Mode, deployment, GitHub integration, and growth engineering.',
  alternates: {
    canonical: 'https://www.greta.sh/learninghub',
  },
  openGraph: {
    title: 'Learning Hub - Greta AI Website Building Guides',
    description: 'Everything you need to build, deploy, and scale websites with Greta AI.',
    url: 'https://www.greta.sh/learninghub',
    siteName: 'Greta.sh',
    images: [{ url: '/Gretanewlogo.svg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning Hub - Greta AI Website Building Guides',
    description: 'Master AI website building with Greta. Guides on Agent Mode, deployment & more.',
    images: ['/Gretanewlogo.svg'],
  },
};

export default function Page() {
  return <LearningHubClient />;
}
