import { StaticImageData } from 'next/image'

export interface Testimonial {
  name: string
  position?: string 
  company?: string 
  feedback: string
  image: string | StaticImageData 
  stars: number
  createdAt: string
}