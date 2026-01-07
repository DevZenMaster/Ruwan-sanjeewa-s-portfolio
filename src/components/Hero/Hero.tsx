'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'
import { socials } from '@/appData/personal'

const typingTexts = ['Hi, I am Ruwan Sanjeewa', 'Hi, I am DevZenMaster']
const roles = ['FULLSTACK DEVELOPER', 'DevSecOps Trainee', 'SLTC Undergraduate Student']

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const [mounted, setMounted] = useState(false)

  // Typing logic states
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const typingSpeed = deleting ? 50 : 100
    const pauseTime = 1500

    const handleTyping = () => {
      const currentText = typingTexts[textIndex]
      if (!deleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setDeleting(true), pauseTime)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setDeleting(false)
          setTextIndex((textIndex + 1) % typingTexts.length)
        }
      }
    }

    const interval = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(interval)
  }, [charIndex, deleting, textIndex, mounted])

  const [roleIndex, setRoleIndex] = useState(0)
  useEffect(() => {
    if (!mounted) return
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(roleInterval)
  }, [mounted])

  // Hydration Guard Placeholder (Syncs Server & Client initial render)
  if (!mounted) return <section className="bg-primary min-h-screen pt-28" />

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-primary bg-small-glow bg-small-glow-position bg-no-repeat md:bg-large-glow-position lg:bg-large-glow">
      {/* Responsiveness: 
          - pt-28 on mobile ensures content starts below a fixed Navbar. 
          - grid-cols-1 stacks on mobile, md:grid-cols-2 for side-by-side desktop.
      */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 pt-28 pb-12 md:grid-cols-2 md:gap-6 md:pt-20 lg:px-4">
        
        {/* Right Side (Image): Appears FIRST on mobile (order-1) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center order-1 md:order-2"
        >
          <div className="relative size-60 sm:size-72 md:size-[20rem] lg:size-[25.75rem]">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-[50px] md:blur-[60px]" />
            
            <Image 
              src={HeroImage} 
              fill 
              priority 
              sizes="(max-width: 768px) 15rem, 25rem" 
              alt="Ruwan Sanjeewa" 
              className="z-10 object-contain p-4 md:p-6 drop-shadow-2xl" 
            />
            <Ellipse 
              ref={ellipseRef} 
              className="absolute top-0 left-0 size-full text-accent transition-transform duration-500 ease-out opacity-60" 
            />
          </div>
        </motion.div>

        {/* Left Side: Content (Appears BELOW image on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex flex-col justify-center order-2 md:order-1 items-center md:items-start text-center md:text-left"
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-wider text-accent uppercase">
              Available for new opportunities
            </span>
          </motion.div>

          <header>
            <h1 className="min-h-[80px] md:min-h-[100px]">
              <span className="mb-1 block text-2xl font-bold text-neutral sm:text-3xl md:text-4xl">
                {displayText}<span className="animate-blink ml-1">|</span>
              </span>
              <div className="h-10 md:h-12">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="block text-xl font-bold text-accent tracking-tight sm:text-2xl md:text-[1.75rem]"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </header>

          <h2 className="mt-6 max-w-[32rem] text-sm leading-relaxed text-neutral opacity-90 sm:text-base md:text-lg">
            I focus on building and securing web systems while growing my skills in 
            <span className="font-medium text-accent"> Cybersecurity</span>, 
            <span className="font-medium text-accent"> Ethical Hacking</span>, and 
            <span className="font-medium text-accent"> Full Stack Development</span>. 
            My goal is to improve my skills in 
            <span className="font-semibold text-neutral underline decoration-accent/30"> DevSecOps</span> step by step.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
            {/* Native Download Link */}
            <motion.a
              href="/Ruwan_Sanjeewa_CV.pdf"
              download="Ruwan_Sanjeewa_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 rounded-full border border-accent bg-transparent px-6 py-2.5 text-xs md:text-sm font-bold text-accent transition-all duration-300 hover:bg-accent hover:text-primary"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-y-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>

            <div className="flex gap-3 md:gap-4">
              {socials.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral backdrop-blur-sm transition-all"
                >
                  <div className="scale-90 md:scale-110">{item.icon}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animate-blink { 
          display: inline-block; 
          width: 2px;
          height: 1em;
          background-color: currentColor;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }
        @keyframes blink { 
          0%, 100% { opacity: 1; } 
          50% { opacity: 0; } 
        }
      `}</style>
    </section>
  )
}

export default Hero