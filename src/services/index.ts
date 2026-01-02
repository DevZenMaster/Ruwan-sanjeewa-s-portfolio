import { Testimonial } from '@/lib/types'
import { promises as fs } from 'fs'
import path from 'path'

const getAllTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const testimonialsPath = path.join(process.cwd(), '/content/testimonials')
    const testimonialsName = await fs.readdir(testimonialsPath)

    const testimonials = await Promise.all(
      testimonialsName.map(async (projectName) => {
        const filePath = path.join(testimonialsPath, projectName)
        const projectDetails = await fs.readFile(filePath, 'utf8')
        return JSON.parse(projectDetails)
      }),
    )

    // Sort testimonials by date
    testimonials.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return testimonials
  } catch (error) {
    // Handle errors
    console.error('Error:', error)
    return []
  }
}

export { getAllTestimonials }
