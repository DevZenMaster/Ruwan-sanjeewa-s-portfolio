'use client'

import { useEffect, useState } from 'react'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'

const typingTexts = ['Hi, I am Ruwan Sanjeewa', 'Hi, I am DevZenMaster']
const roles = ['FULLSTACK DEVELOPER', 'DevSecOps Trainee', 'SLTC Undergraduate Student']

const Hero = () => {
  const ellipseRef = useRotatingAnimation()

  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = 100
    const pauseTime = 1000

    const handleTyping = () => {
      const currentText = typingTexts[textIndex]

      if (!deleting) {
        // Typing characters
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Pause before deleting
          setTimeout(() => setDeleting(true), pauseTime)
        }
      } else {
        // Deleting characters
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          // Move to next text
          setDeleting(false)
          setTextIndex((textIndex + 1) % typingTexts.length)
        }
      }
    }

    const interval = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(interval)
  }, [charIndex, deleting, textIndex])

  // Secondary role rotation
  const [roleIndex, setRoleIndex] = useState(0)
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(roleInterval)
  }, [])

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">{displayText}<span className="animate-blink">|</span></span>
            <span className="text-accent block text-[1.75rem] font-bold">{roles[roleIndex]}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            I build secure web and mobile systems using MERN stack, Flutter, and modern tools. I focus on clean code, practical security, and scalable applications, while working toward cloud and DevSecOps expertise.
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <button
              aria-label="Download CV"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]"
            >
              Download CV
            </button>
            <a
              href="https://www.linkedin.com/in/ruwansanjeewa"
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Ruwan Sanjeewa - Full Stack Developer"
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-blink {
          display: inline-block;
          width: 1ch;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero
