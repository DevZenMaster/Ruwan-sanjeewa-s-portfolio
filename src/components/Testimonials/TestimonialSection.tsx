'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../SectionHeading/SectionHeading'
import { testimonialData } from '@/appData/testimonialData'
import { TestimonialCard, NavButton } from './TestimonialCard'

const TestimonialSection = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = useCallback((newDir: number) => {
    setDirection(newDir)
    setIndex((prev) => (prev + newDir + testimonialData.length) % testimonialData.length)
  }, [])

  // SPEED INCREASED: Interval set to 3000ms (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 3000); 

    return () => clearInterval(timer)
  }, [index, paginate])

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <SectionHeading
            title="Feedback Intel"
            subtitle="System validation from technical partners."
            className="md:text-left !mb-0"
          />
          <div className="flex gap-3 self-center">
            <NavButton direction="prev" onClick={() => paginate(-1)} />
            <NavButton direction="next" onClick={() => paginate(1)} />
          </div>
        </div>

        <div className="relative h-[280px] sm:h-[320px] md:h-[400px] w-full flex justify-center items-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction < 0 ? 100 : -100, opacity: 0, scale: 0.95 }}
              transition={{ 
                // Increased stiffness and reduced damping for a faster "snap"
                x: { type: "spring", stiffness: 400, damping: 35 },
                opacity: { duration: 0.15 } 
              }}
              className="absolute w-full max-w-[340px] md:max-w-[650px]"
            >
              <TestimonialCard testimonial={testimonialData[index]} index={index} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonialData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === index ? 'w-8 bg-accent shadow-[0_0_8px_rgba(var(--accent-rgb),0.6)]' : 'w-2 bg-neutral/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

