'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ServiceCardTypes {
  icon: string
  title: string
  shortDescription: string
  index: number
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Block scroll when modal is active
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -5 }}
        onClick={() => setIsOpen(true)}
        className="group bg-secondary/10 border border-border/20 flex flex-col items-center rounded-2xl p-8 cursor-pointer hover:border-accent/40 transition-all duration-300 h-full relative overflow-hidden shadow-sm"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-10 -right-10 size-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors" />

        <div className="bg-accent/10 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
          <Image src={icon} alt={title} width={40} height={40} className="size-10 object-contain" />
        </div>
        
        <h5 className="text-primary-content text-lg font-bold text-center mb-3 group-hover:text-accent transition-colors">
          {title}
        </h5>
        
        <p className="text-tertiary-content text-center text-xs leading-relaxed line-clamp-3 mb-6">
          {shortDescription}
        </p>
        
        <div className="mt-auto flex items-center gap-2 text-accent text-[9px] font-black uppercase tracking-[0.2em] group/btn">
          <span className="border-b border-accent/0 group-hover:border-accent/100 pb-0.5">View Intel</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </motion.div>

      {/* --- REVERTED TACTICAL SERVICE POPUP --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} 
              className="absolute inset-0 bg-primary/90 backdrop-blur-xl" 
            />
            
            {/* Modal Body */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-secondary/30 border border-accent/20 p-8 md:p-10 rounded-[2.5rem] max-w-md w-full shadow-2xl backdrop-blur-3xl overflow-hidden"
            >
              {/* Tactical Close Button */}
              <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 bg-neutral/5 rounded-full text-neutral/40 hover:text-accent transition-colors z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
              
              <div className="flex flex-col items-center text-center relative z-0">
                <div className="bg-accent/10 p-5 rounded-[2rem] mb-6 shadow-inner border border-accent/20">
                  <Image src={icon} alt={title} width={60} height={60} className="size-14" />
                </div>
                
                <h2 className="text-accent text-2xl font-bold tracking-tighter mb-2">{title}</h2>
                <div className="flex items-center gap-2 mb-6">
                  <span className="size-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-neutral/50 font-bold">System Online // Service Active</span>
                </div>

                <div className="p-5 rounded-2xl bg-primary/40 border border-border/30 text-left w-full mb-8">
                   <p className="font-mono text-[10px] text-accent mb-3 uppercase tracking-widest">// Technical Overview</p>
                   <p className="text-primary-content text-xs md:text-sm leading-relaxed">
                     {shortDescription}
                   </p>
                   
                   {/* DYNAMIC SERVICE CAPABILITIES */}
                   <div className="mt-6 pt-6 border-t border-border/20">
                      <p className="font-bold text-accent uppercase tracking-widest text-[9px] mb-4">Core Capabilities</p>
                      <ul className="space-y-2 text-tertiary-content text-[11px] list-none">
                        <li className="flex items-center gap-3 font-medium">
                          <div className="size-1 bg-accent rounded-full shadow-[0_0_5px_rgba(var(--accent-rgb),0.5)]" /> 
                          Advanced Technical Architecture
                        </li>
                        <li className="flex items-center gap-3 font-medium">
                          <div className="size-1 bg-accent rounded-full shadow-[0_0_5px_rgba(var(--accent-rgb),0.5)]" /> 
                          Secure Protocol Implementation
                        </li>
                        <li className="flex items-center gap-3 font-medium">
                          <div className="size-1 bg-accent rounded-full shadow-[0_0_5px_rgba(var(--accent-rgb),0.5)]" /> 
                          Optimized System Deployment
                        </li>
                      </ul>
                   </div>
                </div>

                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-accent text-primary py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(var(--accent-rgb),0.3)] transition-all"
                >
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

export default ServiceCard