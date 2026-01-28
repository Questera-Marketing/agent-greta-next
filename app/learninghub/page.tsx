import { Metadata } from 'next';
import LearningHubClient from './LearningHubClient';

export const metadata: Metadata = {
  title: 'Learning Hub | Greta AI Website Builder Documentation',
  description: 'Master the art of AI website building. Explore our comprehensive guides on Greta Agent Mode, deployment, GitHub integration, and growth engineering.',
  alternates: {
    canonical: 'https://greta.questera.ai/learninghub',
  },
  openGraph: {
    title: 'Greta Learning Hub - AI Website Building Guides',
    description: 'Everything you need to build, deploy, and scale websites with Greta AI.',
    url: 'https://greta.questera.ai/learninghub',
    siteName: 'Greta',
    images: [{ url: 'https://greta.questera.ai/Gretanewlogo.svg' }],
    type: 'website',
  },
};

export default function Page() {
  return <LearningHubClient />;
}
