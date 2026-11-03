import AWS from '@/components/technologies/AWS';
import Docker from '@/components/technologies/Docker';
import FastAPI from '@/components/technologies/FastAPI';
import LangChain from '@/components/technologies/LangChain';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'TensorGo',
    position: 'Fullstack Engineer',
    location: 'India',
    image: '/company/tensorgo.png',
    description: [
      'Engineered a real-time *WebRTC* AI notetaker bot for Zoom, Meet and Teams, streaming live notes from *1,000+ meetings*.',
      'Delivered key features of a B2C *AI mock interview platform* used by *2,000+ candidates*, who interview with a conversational AI avatar and get HR-style analytics, skill-gap insights and a personalized preparation plan.',
      'Built the *Humain UI component library*, exposed through MCP and agent skills for AI coding assistants, and adopted as the standard UI layer across *6+ TensorGo products*.',
      'Developed the *Humain SDK* and API key flow to embed the AI avatar in external apps, and led *client integrations*.',
      'Shipped features in an *Agile/Scrum* team with 2-week sprints, sprint planning, stand-ups and code reviews.',
    ],
    startDate: 'June 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'Python', href: 'https://www.python.org/', icon: <Python /> },
      {
        name: 'FastAPI',
        href: 'https://fastapi.tiangolo.com/',
        icon: <FastAPI />,
      },
      {
        name: 'LangChain',
        href: 'https://www.langchain.com/',
        icon: <LangChain />,
      },
      { name: 'AWS', href: 'https://aws.amazon.com/', icon: <AWS /> },
    ],
    website: 'https://tensorgo.com',
  },
  {
    isCurrent: false,
    company: 'Freelance',
    position: 'Full Stack & AI Engineer',
    location: 'Remote',
    image: '/company/freelance.png',
    description: [
      'Delivered *10+ production web apps* for startups and small businesses across SaaS, retail and EdTech, owning requirements, architecture and deployment, with *repeat work from 4 clients*.',
      'Built an *order management system* for *5 ethnic retail stores* (Next.js, Node.js, PostgreSQL) with order tracking, inventory, billing and per-store dashboards, replacing manual registers.',
      "Built a *RAG support chatbot* (LangChain, Pinecone, FastAPI) on a client's docs and tickets, auto-resolving *40% of queries*.",
      'Cut client page load times by *50%* with SSR and Redis caching, and shipped Dockerized *CI/CD on AWS* with zero downtime.',
    ],
    startDate: 'January 2025',
    endDate: 'May 2026',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      { name: 'Redis', href: 'https://redis.io/', icon: <Redis /> },
      {
        name: 'FastAPI',
        href: 'https://fastapi.tiangolo.com/',
        icon: <FastAPI />,
      },
      {
        name: 'LangChain',
        href: 'https://www.langchain.com/',
        icon: <LangChain />,
      },
      { name: 'Docker', href: 'https://www.docker.com/', icon: <Docker /> },
      { name: 'AWS', href: 'https://aws.amazon.com/', icon: <AWS /> },
    ],
    website: '',
  },
];
