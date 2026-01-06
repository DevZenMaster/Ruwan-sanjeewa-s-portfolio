import PlantexImg from '../assets/images/plantex.png'
import LuminousImg from '../assets/images/luminous-web.png'
import LearnWithSithumImg from '../assets/images/learnwithsithum.png'
import Eminent100Img from '../assets/images/luminous-web.png'
import DevZenMasterImg from '../assets/images/luminous-web.png'
import SLTCGPAIntelligenceImg from '../assets/images/sltc-gpa-intelligence-hub.png'

export const projectData = [
{
    title: 'SLTC GPA Intelligence Hub',
    shortDescription:
      'A high-precision academic strategist and GPA forecasting engine for SLTC students. Features real-time weighted grade calculations, honors classification roadmap, and dynamic PDF transcript generation.',
    link: 'https://sltc-gpa-calculator.vercel.app/',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    cover: SLTCGPAIntelligenceImg, // Ensure you update your image import to match
  },
{
    title: 'Plantex',
    shortDescription:
      'A comprehensive Full-Stack e-commerce ecosystem for premium bonsai retailing. Features a custom-built PHP administrative dashboard for inventory management, secure CRUD operations, and a modular Sass-powered responsive interface.',
    link: 'https://plantex.atwebpages.com/',
    stack: ['HTML', 'Sass', 'JavaScript', 'PHP', 'MySQL'],
    cover: PlantexImg,
  },
{
    title: 'Luminous Unisex Salon',
    shortDescription:
      'A bespoke, high-end digital presence for a premium salon. Features a custom-engineered responsive interface, advanced SCSS architectural styling, and interactive service menus powered by optimized JavaScript.',
    link: 'https://luminous-unisex-salon.vercel.app/',
    stack: ['HTML', 'SCSS', 'JavaScript', 'Vercel'],
    cover: LuminousImg, // Ensure this import points to your salon screenshot
  },
]
