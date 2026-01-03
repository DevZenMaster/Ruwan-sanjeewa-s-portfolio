'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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
  const pathname = usePathname()

  const toggleMenu = () => setIsVisible(!isVisible)

  return (
    <nav className="bg-primary h-16 overflow-hidden">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between px-4 py-1">
        {/* Logo and Brand */}
        <Link href="/">
          <div className="animate-fade-up relative flex items-center gap-3 transition-all duration-300">
            <Logo className="h-10 w-10 md:h-12 md:w-12" />
            <span className="text-primary-content font-semibold text-lg md:text-xl">
              DevZenMaster
            </span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`${
            isVisible ? 'flex' : 'hidden'
          } animate-fade-in absolute top-16 left-0 z-10 h-dvh w-dvw flex-col bg-primary md:static md:flex md:h-full md:w-[72%] md:flex-row lg:w-[70%] md:items-center md:justify-end`}
        >
          {navItems.map(({ label, href, isButton, external }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="px-4 py-4 md:py-0 md:px-6 flex items-center md:ml-4"
            >
              {isButton ? (
                <Link
                  href={href}
                  className="rounded-full border border-accent px-5 py-2 text-sm font-medium text-accent bg-transparent hover:bg-accent hover:text-[#00071E] transition-colors duration-200"
                >
                  {label}
                </Link>
              ) : external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-content transition-all duration-150 hover:text-neutral"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className={`text-primary-content transition-all duration-150 hover:text-neutral ${
                    pathname === href ? 'text-neutral cursor-text' : ''
                  }`}
                >
                  {label}
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
