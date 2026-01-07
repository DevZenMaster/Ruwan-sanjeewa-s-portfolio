'use client'

import { themes } from '@/appData'
import useOutsideClick from '@/hooks/useOutsideClick'
import { CheckIcon, CloseIcon } from '@/utils/icons'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ThemeMenu = () => {
  const [theme, setTheme] = useState('dark')
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  const menuRef = useOutsideClick(() => setShowThemeMenu(false))

  // Prevent Hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <div ref={menuRef} className="fixed right-6 bottom-6 z-[100] md:right-10 md:bottom-10">
      {/* TRIGGER BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowThemeMenu(!showThemeMenu)}
        className="bg-neutral/10 backdrop-blur-md border border-white/10 p-2 rounded-full shadow-xl hover:border-accent/40 transition-colors"
      >
        <div className="bg-primary grid grid-cols-2 gap-1 p-2 rounded-full">
          <div className="size-2 rounded-full bg-[#B13753]" />
          <div className="size-2 rounded-full bg-[#BAA32B]" />
          <div className="size-2 rounded-full bg-[#3178C6]" />
          <div className="size-2 rounded-full bg-[#50B359]" />
        </div>
      </motion.button>

      {/* POPUP MENU */}
      <AnimatePresence>
        {showThemeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 bottom-full mb-4 bg-secondary border border-white/10 rounded-2xl p-4 shadow-2xl min-w-[240px]"
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
              <span className="text-xs uppercase tracking-widest font-bold text-neutral/40">Themes</span>
              <CloseIcon
                onClick={() => setShowThemeMenu(false)}
                className="size-4 cursor-pointer text-neutral/40 hover:text-white"
              />
            </div>

            <div className="space-y-2">
              {themes.map(({ name, colors }) => (
                <button
                  key={name}
                  onClick={() => changeTheme(name.toLowerCase())}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 group ${
                    theme === name.toLowerCase() 
                    ? 'bg-accent/10 border border-accent/20' 
                    : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="size-4 flex items-center justify-center">
                       {name.toLowerCase() === theme && <CheckIcon className="size-3 text-accent" />}
                    </div>
                    <span className={`text-sm font-medium ${theme === name.toLowerCase() ? 'text-accent' : 'text-neutral'}`}>
                      {name}
                    </span>
                  </div>
                  
                  <div className="flex gap-1">
                    {colors.map((color, idx) => (
                      <div
                        key={idx}
                        style={{ background: color }}
                        className="size-2 rounded-full border border-black/20"
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeMenu