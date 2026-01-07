'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCardProps {
  title: string; shortDescription: string; stack?: string[]; livePreview?: string; cover: any; index: number; isMounted: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, shortDescription, stack, livePreview, cover, index, isMounted 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <>
      {/* --- MAIN CARD --- */}
      <motion.div
        initial={false}
        animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -5 }}
        className="group bg-neutral/5 border border-border/20 flex flex-col rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 h-full relative"
      >
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral/10 cursor-pointer" onClick={() => setIsOpen(true)}>
          <Image 
            src={cover} alt={title} fill 
            sizes="(max-width: 768px) 100vw, 33vw" 
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-primary-content text-base font-bold mb-2 truncate group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-tertiary-content text-xs leading-relaxed line-clamp-2 mb-4">
            {shortDescription}
          </p>

          <div className="mt-auto">
            {/* READ MORE TRIGGER */}
            <button 
              onClick={() => setIsOpen(true)}
              className="mb-4 text-accent font-bold text-[9px] uppercase tracking-[0.2em] flex items-center gap-2 group/btn"
            >
              <span className="border-b border-accent/0 group-hover/btn:border-accent/100 pb-0.5">View Intel</span>
              <span className="transition-transform group-hover/btn:translate-x-1">→</span>
            </button>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/10">
              {stack?.slice(0, 3).map((tech) => (
                <span key={tech} className="text-neutral/40 text-[8px] uppercase font-medium">#{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- REVERTED TACTICAL POPUP --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)} 
              className="absolute inset-0 bg-primary/90 backdrop-blur-xl" 
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }} 
              className="relative bg-secondary/30 border border-accent/20 p-8 md:p-10 rounded-[3rem] max-w-xl w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl backdrop-blur-3xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-accent text-2xl font-bold tracking-tighter">{title}</h2>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="size-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] uppercase tracking-[0.2em] text-neutral/60 font-bold">Status: Deployment Successful</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-neutral/40 hover:text-accent transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 border border-border/20">
                <Image src={cover} alt={title} fill className="object-cover" />
              </div>

              <div className="space-y-6 text-primary-content text-xs md:text-sm leading-relaxed mb-10">
                <div className="p-5 rounded-2xl bg-primary/40 border border-border/30">
                   <p className="font-mono text-[10px] text-accent mb-3 uppercase tracking-widest">// Technical Dossier</p>
                   {shortDescription}
                </div>

                {/* CURRENT FEATURES */}
                <div className="px-2">
                  <p className="font-bold text-accent uppercase tracking-widest text-[10px] mb-3">Core Features</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-tertiary-content text-[11px] list-none">
                    <li className="flex items-center gap-2"><span className="size-1 bg-accent rounded-full"/> Scalable Infrastructure</li>
                    <li className="flex items-center gap-2"><span className="size-1 bg-accent rounded-full"/> Secure Authentication</li>
                    <li className="flex items-center gap-2"><span className="size-1 bg-accent rounded-full"/> Real-time Analytics</li>
                    <li className="flex items-center gap-2"><span className="size-1 bg-accent rounded-full"/> Dynamic Integration</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {stack?.map(tech => (
                  <div key={tech} className="bg-primary/20 border border-border/20 px-4 py-2 rounded-xl flex items-center gap-2">
                    <div className="size-1 bg-accent rounded-full" />
                    <span className="text-[9px] font-bold uppercase text-primary-content tracking-wider">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {livePreview && (
                  <a href={livePreview} target="_blank" className="flex-1 bg-accent text-primary text-center py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(var(--accent-rgb),0.3)] transition-all">
                    Access Live System
                  </a>
                )}
                <button onClick={() => setIsOpen(false)} className="flex-1 bg-neutral/5 text-primary-content text-center py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest border border-border/20 hover:bg-neutral/10 transition-colors">
                  Terminate Briefing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard