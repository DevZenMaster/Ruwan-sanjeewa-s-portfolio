'use client'
import { ReactNode } from 'react'

type MarqueeWrapperProps = {
  children: ReactNode
  className?: string
  pauseOnHover?: boolean
  speed?: number 
}

const MarqueeWrapper: React.FC<MarqueeWrapperProps> = ({ 
  children, 
  className = '', 
  pauseOnHover = true,
  speed = 40 
}) => {
  return (
    <div className={`group relative flex overflow-hidden py-4 ${className}`}>
      {/* The marquee works by rendering the content twice. 
          When the first div finishes moving -50%, the second div is 
          exactly where the first one started, creating the loop.
      */}
      <div 
        className={`flex w-max min-w-full gap-6 animate-marquee ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 gap-6">{children}</div>
        <div className="flex shrink-0 gap-6" aria-hidden="true">{children}</div>
      </div>

      {/* Cinematic Edge Gradients for the 'Fade' look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-primary to-transparent z-10" />
    </div>
  )
}

export default MarqueeWrapper