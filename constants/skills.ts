export type Skill =
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'vue'
  | 'nuxt'
  | 'vuetify'
  | 'tailwind'
  | 'supabase'
  | 'chatgpt'
  | 'clerkjs'
  | 'sui';

export const skillIcons = {
  javascript: 'https://icon.icepanel.io/Technology/svg/JavaScript.svg',
  typescript: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg',
  html: 'https://icon.icepanel.io/Technology/svg/HTML5.svg',
  css: 'https://icon.icepanel.io/Technology/svg/CSS3.svg',
  vue: 'https://icon.icepanel.io/Technology/svg/Vue.js.svg',
  nuxt: 'https://nuxt.com/assets/design-kit/icon-green.svg',
  vuetify:
    'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg',
  tailwind: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
  supabase:
    'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
  chatgpt:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png',
  clerkjs: 'https://images.clerk.com/static/logo-light-mode-400x400.png',
  sui: 'https://static-00.iconduck.com/assets.00/feather-emoji-2048x2042-m44zzmub.png',
};

export const skillLabels: Record<Skill, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  html: 'HTML',
  css: 'CSS',
  vue: 'Vue.js',
  nuxt: 'Nuxt.js',
  vuetify: 'Vuetify',
  tailwind: 'TailwindCSS',
  supabase: 'Supabase',
  chatgpt: 'ChatGPT',
  clerkjs: 'Clerk.js',
  sui: 'Semantic UI',
};

export const skills = [
  {
    color: `color-javascript`,
    icon: skillIcons.javascript,
    name: 'JavaScript',
    description: ` Proficient in building dynamic and interactive web applications since 2017, with a focus on modern ES6+ syntax and best practices.`,
  },
  {
    color: `color-typescript`,
    icon: skillIcons.typescript,
    name: 'TypeScript',
    description: `I use TypeScript extensively in recent projects to write cleaner code and enhancing maintainability.`,
  },
  {
    color: `color-html`,
    icon: skillIcons.html,
    name: 'HTML',
    description: `Experienced in HTML, using semantic markup to create accessible and SEO-friendly web structures.`,
  },
  {
    color: `color-css`,
    icon: skillIcons.css,
    name: 'CSS',
    description: `While I prefer TailwindCSS, I'm also skilled in CSS, and it has grown on me as it evolves with features like Grid, nesting, CSS variables`,
  },
  {
    color: `color-vue`,
    icon: skillIcons.vue,
    name: 'Vue 3',
    description: `Advanced knowledge of Vue.js, I've been using it for over six years, starting with Vue 2. It’s been my go-to framework for many projects.`,
  },
  {
    color: `color-nuxt`,
    icon: skillIcons.nuxt,
    name: 'Nuxt 3',
    description: `Experienced with Nuxt.js I've used it to develop static landing pages and progressive web apps (PWAs). It's a crucial part of my toolset.`,
  },
  {
    color: `color-vuetify`,
    icon: skillIcons.vuetify,
    name: 'Vuetify 3',
    description: `Vuetify 3 is my favorite UI library for Vue.js, it’s the most polished and decent looking framework in my opinion, and I know it inside and out.`,
  },
  {
    color: `color-sui`,
    icon: skillIcons.sui,
    name: 'Semantic UI',
    description: `My own personal component library, inspired by Vueify. It’s lightweight and easy to customize and great for building landing pages`,
  },
  {
    color: `color-tailwind`,
    icon: skillIcons.tailwind,
    name: 'TailwindCSS',
    description: ` I really enjoy using TailwindCSS, it’s part of almost all my projects. Its utility-first approach simplifies styling and speeds up my workflow.`,
  },
  {
    color: `color-chatgpt`,
    icon: skillIcons.supabase,
    name: 'Supabase',
    description: `Supabase is my top pick for backend and authentication needs. It’s been a reliable choice for several of my full-stack projects.`,
  },
];
