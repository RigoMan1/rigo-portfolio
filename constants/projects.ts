import type { Skill } from '~/constants/skills';

type ProjectType =
  | 'Mobile App'
  | 'Web Application'
  | 'Website'
  | 'Landing Page'
  | 'Component Library';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Skill[];
  keyPoints: string[];
  type: ProjectType;
  link: string | null; // URL to the project
}

export const projects: Project[] = [
  {
    id: 'arcana-tarot',
    title: 'Arcana - Tarot',
    description:
      'A mobile PWA/TWA app that offers interactive tarot readings, combining Nuxt3 and Supabase with a gamified user experience.',
    technologies: ['nuxt', 'supabase', 'tailwind', 'chatgpt', 'sui'],
    keyPoints: [
      'My first mobile app, published on the Google Play Store (in-progress)',
      'Designed a drag-and-drop interface for interacting with cards for a hands-on experience.',
      'Integrated ChatGPT to generate personalized tarot readings',
      '⚠️ use mobile view for best experience',
    ],
    type: 'Mobile App',
    link: 'https://www.arcana-tarot.net/reader-select',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'My personal portfolio website built with Nuxt and TailwindCSS, showcasing my projects and skills.',
    technologies: ['nuxt', 'tailwind', 'sui'],
    keyPoints: [
      'Developed a fully responsive layout',
      'Integrated a custom component library for UI elements',
    ],
    type: 'Website',
    link: null,
  },
  {
    id: 'listcleanser-marketing',
    title: 'ListCleanser Landing Page',
    description:
      'Developed the landing page for ListCleanser, an email verification platform.',
    technologies: ['nuxt', 'tailwind', 'typescript'],
    keyPoints: [
      'Implemented interactive UI components.',
      'Optimized for performance and fast loading times',
      'Integrated a blog using Nuxt Content.',
    ],
    type: 'Landing Page',
    link: 'https://listcleanser.com/',
  },
  {
    id: 'listcleanser-app',
    title: 'ListCleanser SaaS App',
    description:
      "ListCleanser's SaaS application for email verification, built with Nuxt and Clerk.js.",
    technologies: ['nuxt', 'clerkjs', 'tailwind', 'typescript', 'sui'],
    keyPoints: [
      'Implemented the front-end UI.',
      'Integrated authentication using Clerk.js',
    ],
    type: 'Web Application',
    link: 'https://listcleanser-app.vercel.app/sign-in',
  },
  {
    id: 'sui',
    title: 'SUI Component Library',
    description:
      'A lightweight Nuxt3 component library, inspired by Vuetify3 that I use personally for my projects.',
    technologies: ['nuxt', 'typescript', 'css'],
    keyPoints: [
      'Extracted a subset of Vuetify3 components, removing styling to allow seamless integration with TailwindCSS.',
      'Chose to include only essential components to keep the library lean and manageable as a solo developer.',
      '⚠️ under active development, not responsive yet',
    ],
    type: 'Component Library',
    link: 'https://core-ui-docs.vercel.app/',
  },
];
