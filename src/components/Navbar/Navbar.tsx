'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'What I Do', href: '/#services' },
  { label: 'Blog', href: 'https://devzenmaster.medium.com/', external: true },
  { label: 'Contact', href: '/#contact', isButton: true },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-primary/80 backdrop-blur-md shadow-lg h-16' : 'bg-primary h-20'
    }`}>
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-105">
          <Logo size={isScrolled ? 42 : 52} />
          <span className="text-primary-content font-bold text-xl md:text-2xl">DevZenMaster</span>
        </Link>

        <button onClick={() => setIsVisible(!isVisible)} className="md:hidden p-2 text-primary-content">
          {isVisible ? <CloseIcon size={28} /> : <BurgerIcon size={28} />}
        </button>

        <ul className={`fixed top-0 left-0 z-[-1] flex h-screen w-full flex-col items-center justify-center bg-primary gap-8 transition-all duration-500 md:static md:z-auto md:h-full md:w-auto md:flex-row md:bg-transparent md:translate-y-0 md:opacity-100 ${
          isVisible ? 'translate-y-0 opacity-100 flex' : '-translate-y-full opacity-0 hidden md:flex'
        }`}>
          {navItems.map(({ label, href, isButton, external }) => (
            <li key={href} onClick={() => setIsVisible(false)} className="relative group px-4 md:px-2">
              {isButton ? (
                <Link href={href} className="rounded-full border-2 border-accent px-6 py-2 text-sm font-bold text-accent hover:bg-accent hover:text-primary transition-all">
                  {label}
                </Link>
              ) : (
                <Link href={href} target={external ? "_blank" : "_self"} className={`font-medium transition-colors hover:text-accent ${
                  pathname === href ? 'text-accent' : 'text-primary-content/80'
                }`}>
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all ${pathname === href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar