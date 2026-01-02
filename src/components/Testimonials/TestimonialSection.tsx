'use client'

import { useState, useEffect } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'
import { testimonialData } from '@/appData/testimonialData'

const TestimonialSection = () => {
  const [index, setIndex] = useState(0)
  const visibleCount = 3
  const total = testimonialData.length

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 3000) // change every 3 seconds
    return () => clearInterval(interval)
  }, [total])

  // Get testimonials to display
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) => {
    return testimonialData[(index + i) % total]
  })

  return (
    <section id="testimonials" className="my-14">
      <SectionHeading
        title="Feedback That Reflects Results"
        subtitle= "I focus on clear outcomes and reliable solutions. Here’s what people say about the impact, growth, and progress from my work."
        className="text-center mx-auto mb-12"
      />

      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {testimonialData.map((item, idx) => (
            <div key={idx} className="min-w-[33.33%]">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
