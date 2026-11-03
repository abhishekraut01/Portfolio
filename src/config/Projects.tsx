import AWS from '@/components/technologies/AWS';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import LangChain from '@/components/technologies/LangChain';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import Redis from '@/components/technologies/Redis';
import SocketIo from '@/components/technologies/SocketIo';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'PlaySync',
    description:
      'Real-time music platform with synchronized playback across rooms, serving 1,000+ registered users with ~10ms sync drift',
    image: '/project/playsync.png',
    link: 'https://playsync.me',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    live: 'https://playsync.me',
    details: true,
    projectDetailsPageSlug: '/projects/playsync',
    isWorking: true,
  },
  {
    title: 'AI Incident Investigator',
    description:
      'Autonomous LangGraph agent that diagnoses production errors and proposes code fixes, with 80% root-cause accuracy',
    image: '/project/ai-incident-investigator.png',
    link: 'https://github.com/abhishekraut01',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'LangChain', icon: <LangChain key="langchain" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
    ],
    github: 'https://github.com/abhishekraut01',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/ai-incident-investigator',
    isWorking: true,
  },
  {
    title: 'Insight Mentors',
    description:
      'Production college admissions platform with a college predictor, comparison tool and 32,000+ admission cutoff records',
    image: '/project/insightmentors.png',
    link: 'https://insightmentors.in',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    live: 'https://insightmentors.in',
    details: true,
    projectDetailsPageSlug: '/projects/insight-mentors',
    isWorking: true,
  },
];
