import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Medium from '@/components/svgs/Medium';
import LangChain from '@/components/technologies/LangChain';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  NodeJs: NodeJs,
  Python: Python,
  LangChain: LangChain,
};

export const heroConfig = {
  // Personal Information
  name: 'Abhishek',
  title: 'a Full Stack AI Engineer.',
  avatar: '/assets/avatar.jpg',

  // Skills Configuration
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'LangChain',
      href: 'https://www.langchain.com/',
      component: 'LangChain',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build production AI products and full-stack apps with {skills:0}, {skills:1}, {skills:2}, {skills:3}, {skills:4} and {skills:5}. Focused on <b>agentic AI</b>, <b>RAG</b> and <b>real-time systems</b>, from system design to deployment.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sweabhishek/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/abhishekraut01',
    icon: <Github />,
  },
  {
    name: 'Medium',
    href: 'https://sweabhishek.medium.com/',
    icon: <Medium />,
  },
  {
    name: 'Email',
    href: 'mailto:abhishekgajananraut@gmail.com',
    icon: <Mail />,
  },
];
