import { StaticImageData } from 'next/image'

// Table of Contents Type (Fixes your build error)
export interface Heading {
  id: string
  title: string
  items: Heading[] // Recursive for sub-headings
}

// Testimonials Type
export interface Testimonial {
  name: string
  position?: string 
  company?: string 
  feedback: string
  image: string | StaticImageData 
  stars: number
  createdAt: string
}