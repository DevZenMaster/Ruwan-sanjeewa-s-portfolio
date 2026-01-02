import { StaticImageData } from 'next/image'
export interface Heading {
  id: string
  title: string
  items: Heading[]
}



export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string | StaticImageData  // <-- allow both string URLs and imported images
  stars: number
  createdAt: string
}
