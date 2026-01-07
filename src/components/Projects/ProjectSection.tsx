'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { projectData } from '../../appData/projectData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="projects" className="py-16 bg-primary transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={false}
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionHeading
            className="text-center mx-auto"
            title="Recent Works"
            subtitle="Showcasing secure, scalable, and reliable technical solutions."
          />
        </motion.div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              index={index}
              cover={project.cover}
              title={project.title}
              shortDescription={project.shortDescription}
              stack={project.stack}
              livePreview={project.link}
              isMounted={isMounted}
            />
          ))}
        </div>

        {/* --- ENHANCED GITHUB ACTION --- */}
        <div className="mt-12 flex flex-col items-center group">
          <div className="h-8 w-[1px] bg-gradient-to-b from-border/50 via-accent/40 to-accent mb-6" />
          <motion.a
            href="https://github.com/DevZenMaster"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center gap-6 px-8 py-4 bg-secondary/10 border border-border/40 rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)]"
          >
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative z-10 flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary-content opacity-70 group-hover:opacity-100 transition-opacity">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-black">Open Source</span>
                <span className="text-primary-content text-sm font-bold tracking-tight">Explore more on GitHub</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-border/30">
              <div className="flex flex-col items-end">
                <span className="text-[8px] uppercase tracking-widest text-tertiary-content font-bold">Status</span>
                <span className="text-[10px] uppercase font-black text-green-500">Live</span>
              </div>
              <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection