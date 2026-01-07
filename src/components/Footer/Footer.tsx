'use client'

import { motion } from 'framer-motion'
import { footerLinks } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'
import { MsgIcon, PhoneIcon } from '@/utils/icons'

const Footer = () => {
  return (
    <footer className="bg-secondary text-tertiary-content relative px-6 py-16 md:px-14 border-t border-neutral/5 overflow-hidden">
      {/* Background Decorative Glow to match Hero */}
      <div className="absolute -bottom-24 -right-24 size-64 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Left: Logo, Professional Description & Socials */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Logo size={36} />
            <span className="text-neutral text-xl font-bold tracking-tight">DevZenMaster</span>
          </div>
          <p className="text-sm leading-relaxed opacity-80 max-w-[280px]">
            Building secure, high-performance web and mobile systems with a focus on 
            <span className="text-accent font-medium"> DevSecOps</span> and clean architecture.
          </p>

          {/* Social Icons - Now using your modern rounded-xl style */}
          <div className="flex gap-4">
            {socials.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral/5 text-neutral border border-neutral/10 transition-colors"
              >
                <div className="scale-90">{item.icon}</div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-neutral text-lg font-semibold mb-6">Quick Navigation</h5>
          <div className="grid grid-cols-1 gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200 w-fit"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h5 className="text-neutral text-lg font-semibold mb-6">Support My Work</h5>
          <p className="text-sm opacity-70 mb-5">
            Fueling secure open-source projects and software tutorials.
          </p>
          <motion.a
            href="https://www.buymeacoffee.com/devzenmaster"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral text-secondary rounded-full text-sm font-bold hover:bg-white transition-colors shadow-lg shadow-neutral/10"
          >
            ☕ Buy Me a Coffee
          </motion.a>
        </div>

        {/* Contact Section - Clean alignment */}
        <div className="flex flex-col lg:items-end">
          <h5 className="text-neutral text-lg font-semibold mb-6 lg:text-right">Let's Connect</h5>
          <div className="space-y-4 lg:text-right">
            <a
              href="mailto:tmruwansanjeewa@gmail.com"
              className="flex items-center lg:justify-end gap-3 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all group"
            >
              tmruwansanjeewa@gmail.com
              <MsgIcon size={20} className="text-accent group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="tel:+94703383837"
              className="flex items-center lg:justify-end gap-3 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all group"
            >
              +94 70 338 3837
              <PhoneIcon size={20} className="text-accent group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="max-w-7xl mx-auto border-t border-neutral/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-50">
        <p>© {new Date().getFullYear()} DevZenMaster. Designed & Developed by Ruwan Sanjeewa</p>
        <p className="hidden md:block">Based in Sri Lanka</p>
      </div>
    </footer>
  )
}

export default Footer