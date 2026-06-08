import { notFound } from 'next/navigation';
import { getPaperById } from '../../constants';
import PaperReaderClient from './PaperReaderClient';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const paper = getPaperById(id);
  if (!paper) {
    return {
      title: 'Paper Not Found | Chinmay Patil',
    };
  }
  return {
    title: `${paper.title} | Chinmay Patil`,
    description: paper.summary,
    openGraph: {
      title: `${paper.title} | Chinmay Patil`,
      description: paper.summary,
      type: 'article',
      url: `https://chinmaypatil.com/papers/${id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${paper.title} | Chinmay Patil`,
      description: paper.summary,
    },
  };
}

export default async function PaperPage({ params }: Props) {
  const { id } = await params;
  const paper = getPaperById(id);
  if (!paper) {
    notFound();
  }

  return <PaperReaderClient paper={paper} />;
}
