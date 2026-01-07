'use client'

import Image from 'next/image'
import { Testimonial } from '@/lib/types'

export const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
  return (
    <div className="group relative bg-secondary/10 border border-border/30 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl h-full flex flex-col justify-between">
      
      <div>
        {/* LED Rating Indicators */}
        <div className="flex gap-1 md:gap-1.5 mb-4 md:mb-6">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`size-1 md:size-1.5 rounded-full ${i < testimonial.stars ? 'bg-accent shadow-[0_0_8px_rgba(var(--accent-rgb),0.6)]' : 'bg-neutral/20'}`} 
            />
          ))}
        </div>

        {/* Feedback Body */}
        <p className="text-primary-content/90 text-[13px] md:text-base leading-relaxed italic line-clamp-5 md:line-clamp-none">
          "{testimonial.feedback}"
        </p>
      </div>

      {/* Profile & Position Section */}
      <div className="flex items-center gap-3 md:gap-4 pt-4 mt-4 border-t border-border/10">
        <div className="relative size-10 md:size-14 rounded-full overflow-hidden border border-accent/20 bg-neutral/10 shrink-0">
          <Image 
            src={testimonial.image} 
            alt={testimonial.name} 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
        
        <div className="flex flex-col text-left overflow-hidden min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-primary-content font-bold text-sm md:text-base truncate">
              {testimonial.name}
            </span>
            <div className="size-1 md:size-1.5 bg-green-500 rounded-full animate-pulse shrink-0" />
          </div>
          
          {/* Position and Company stacked to save horizontal space */}
          <span className="text-accent text-[10px] md:text-[11px] font-medium leading-tight truncate">
            {testimonial.position}
          </span>
          <span className="text-tertiary-content/60 text-[9px] md:text-[10px] uppercase tracking-widest font-bold truncate">
            {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  )
}

// NavButton remains the same as previous export
export const NavButton = ({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="group size-10 md:size-12 flex items-center justify-center bg-secondary/10 border border-border/40 rounded-full hover:border-accent transition-all active:scale-90"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-4 md:size-5 text-accent">
      {direction === 'prev' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  </button>
)