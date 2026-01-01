// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Color Contrast Collection',
    shortDescription:
      'A web tool that helps developers choose accessible background and text color combinations for websites.',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://example.com/color-contrast',
    type: 'Web Tool',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    priority: 2,
    title: 'Codevertiser',
    shortDescription:
      'A programming article platform to share coding knowledge, tutorials, and technical insights.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://example.com/codevertiser',
    type: 'Web Platform',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
      'A React challenge platform for practicing functional business logic and improving frontend problem-solving skills.',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://example.com/project-epsilon',
    type: 'Frontend Challenge',
    techStack: ['React.js', 'Node.js'],
    githubLink: 'https://github.com/DevZenMaster',
  },
  {
    priority: 4,
    title: 'Ejucationzz',
    shortDescription:
      'A directory platform listing free and paid online/offline courses with structured categories and clean navigation.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://example.com/ejucationzz',
    type: 'Directory Platform',
    techStack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    priority: 5,
    title: 'Future Projects (Cloud + DevSecOps)',
    shortDescription:
      'Upcoming projects will showcase secure cloud deployments, automated testing, and CI/CD pipelines to demonstrate end-to-end DevSecOps skills.',
    cover:
      'https://images.unsplash.com/photo-1612831660480-2f8c92416d2f?q=80&w=2070&auto=format&fit=crop',
    type: 'Cloud + DevSecOps',
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'MERN Web Development',
    shortDescription: 'Build full-stack web apps with MongoDB, Express, React, and Node.',
  },
  {
    icon: ReactIcon,
    title: 'Frontend UI Development',
    shortDescription: 'Design responsive interfaces with React.js and Tailwind CSS.',
  },
  {
    icon: NodejsIcon,
    title: 'Backend API Development',
    shortDescription: 'Build secure and scalable REST APIs using Node.js and Express.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Create server-rendered React applications with Next.js for performance and SEO.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensure robust, maintainable code with TypeScript for full-stack projects.',
  },
  {
    icon: ExpressjsIcon,
    title: 'Security Assessment & Testing',
    shortDescription: 'Perform ethical hacking, vulnerability scanning, and secure application testing.',
  },
  {
    icon: SocketIcon,
    title: 'Real-Time Web Apps',
    shortDescription: 'Build WebSocket-based real-time applications using Socket.io.',
  },
  {
    icon: TailwindCSS,
    title: 'UI/UX Styling',
    shortDescription: 'Create visually appealing, responsive designs with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'Node.js', icon: NodejsIcon },
  { name: 'Express.js', icon: ExpressjsIcon },
  { name: 'Nest.js', icon: NestjsIcon },
  { name: 'Socket.io', icon: SocketIcon },
  { name: 'Tailwind CSS', icon: TailwindCSS },
  {name: "Flutter", icon: ""},
]

// Footer Links
export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Blog', href: 'https://devzenmaster.medium.com/', target: '_blank' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' },
]

// Theme Options
export const themes = [
  { name: 'Light', colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'] },
  { name: 'Dark', colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'] },
  { name: 'Aqua', colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'] },
  { name: 'Retro', colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'] },
]

// Languages
export const languages = ['English', 'Sinhala', 'Tamil']
