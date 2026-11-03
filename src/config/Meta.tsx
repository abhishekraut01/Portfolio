import { about } from './About';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: about.name,
  title: 'Abhishek Raut | Full Stack AI Engineer',
  description:
    'Abhishek Raut is a Full Stack AI Engineer building production AI products, agentic AI workflows, RAG systems and real-time apps with TypeScript, React, Next.js, Node.js and Python.',
  url: process.env.NEXT_PUBLIC_URL || 'https://www.abhishekraut.tech',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '',
    github: 'abhishekraut01',
    linkedin: 'sweabhishek',
    email: 'abhishekgajananraut@gmail.com',
  },
  keywords: [
    'Abhishek Raut',
    'Full Stack AI Engineer',
    'AI Engineer',
    'Full Stack Developer',
    'portfolio',
    'agentic AI',
    'RAG',
    'LangGraph',
    'MCP',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'Pune',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${about.name} - Full Stack AI Engineer`,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: 'Contact - Get in Touch',
    description:
      "Get in touch with me for collaborations, projects, or opportunities. I'd love to hear from you!",
    keywords: ['contact', 'hire', 'collaboration', 'freelance', 'developer'],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary',
  },

  // Work Experience page
  '/work-experience': {
    title: 'Work Experience - Professional Journey',
    description:
      'Explore my professional work experience across different companies and roles in software development.',
    keywords: [
      'work experience',
      'career',
      'professional',
      'software developer',
      'employment history',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: 'Projects - My Work & Projects Portfolio',
    description:
      'Discover my projects and work across different technologies and domains. From web apps to mobile solutions.',
    keywords: [
      'projects',
      'portfolio',
      'web development',
      'applications',
      'software',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Blog page
  '/blog': {
    title: 'Blog - Thoughts & Tutorials',
    description:
      'Read my thoughts, tutorials, and insights on engineering, programming, and web development.',
    keywords: [
      'blog',
      'tutorials',
      'programming',
      'web development',
      'technical writing',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: 'Resume - Professional CV',
    description: `View and download ${about.name}'s resume and CV. Technical skills, experience, and qualifications.`,
    keywords: [
      'resume',
      'cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
