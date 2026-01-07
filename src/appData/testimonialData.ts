import { Testimonial } from '@/lib/types'
import MithunProfil from '@/assets/images/mithun.png'
import PlantexTeam from '@/assets/images/plantex-team.png'
import SithumProfil from '@/assets/images/sithum.png'
import NuwanProfile from '@/assets/images/Nuwan.jpg'

export const testimonialData: Testimonial[] = [
  {
    name: 'Sithum S Gamage',
    position: 'Founder',
    company: 'Learn With Sithum',
    feedback:
      'Ruwan designed and built our LMS platform with a clear structure and strong performance. The system is stable, easy to manage, and our students now get a smooth learning experience.',
    image: SithumProfil,
    stars: 5,
    createdAt: '2025-11-20',
  },
  {
    name: 'Mithun Savinda',
    position: 'Founder & CEO',
    company: 'Luminous Unisex Salon',
    feedback:
      'Ruwan delivered a clean website with an online booking system that works fast and reliably. Our customers now book appointments without any issues, and it reduced our manual work a lot.',
    image: MithunProfil,
    stars: 5,
    createdAt: '2025-11-15',
  },
  {
    name: 'Thushara Madushanka',
    position: 'Co-founder',
    company: 'Plantex',
    feedback:
      'The e-commerce system Ruwan built for us is stable, secure, and simple to manage. Product updates and order handling are now much faster and more organized.',
    image: PlantexTeam,
    stars: 4,
    createdAt: '2025-10-30',
  },
  {
    name: 'Sithum Perera',
    position: 'Founder',
    company: 'Eminent 100',
    feedback:
      'Ruwan built our e-commerce website with a clean design and smooth user experience. The system is fast, stable, and easy for us to manage products and orders. The overall quality exceeded our expectations.',
    image: SithumProfil,
    stars: 5,
    createdAt: '2025-11-20',
  },


  {
    name: 'Nuwan Chamara',
    position: 'Founder & CEO',
    company: 'NN Mart',
    feedback:
      'Ruwan developed a reliable e-commerce website that handles orders and products smoothly. The system runs fast, and our daily operations are now much more efficient.',
    image: NuwanProfile,
    stars: 4,
    createdAt: '2025-10-30',
  },
]
