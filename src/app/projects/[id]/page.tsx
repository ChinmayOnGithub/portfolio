import { notFound } from 'next/navigation';
import { getProjectById } from '../../constants';
import ProjectReaderClient from './ProjectReaderClient';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    return {
      title: 'Project Not Found | Chinmay Patil',
    };
  }
  return {
    title: `${project.name} | Chinmay Patil`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Chinmay Patil`,
      description: project.description,
      type: 'article',
      url: `https://chinmaypatil.com/projects/${id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | Chinmay Patil`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    notFound();
  }

  return <ProjectReaderClient project={project} />;
}