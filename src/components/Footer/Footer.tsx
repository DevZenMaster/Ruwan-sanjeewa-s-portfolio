'use client'

import { footerLinks } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'
import { MsgIcon, PhoneIcon } from '@/utils/icons'

const Footer = () => {
  return (
    <footer className="bg-secondary text-tertiary-content relative px-6 py-16 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left: Logo, Description & Socials */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-neutral text-xl font-bold">DevZenMaster</span>
          </div>
          <p className="text-sm leading-relaxed">
            Analytics and development solutions built for businesses of all sizes.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/10 text-neutral hover:bg-neutral/20 transition-colors">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h5 className="text-neutral text-lg font-semibold mb-2">Quick Links</h5>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-tertiary-content hover:text-neutral transition-colors duration-200">
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Buy Me a Coffee */}
        <div className="flex flex-col gap-3">
          <h5 className="text-neutral text-lg font-semibold mb-2">Support Me</h5>
          <p className="text-sm text-tertiary-content">
            If you like my work, you can support me by buying a coffee.
          </p>
          <a
            href="https://www.buymeacoffee.com/devzenmaster"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-neutral text-secondary rounded text-sm font-medium hover:bg-neutral/80 transition-colors">
            ☕ Buy Me a Coffee
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:items-end justify-start gap-6">
          <h5 className="text-neutral text-lg font-semibold mb-2">Contact</h5>
          <a
            href="mailto:tmruwansanjeewa@gmail.com"
            className="flex items-center gap-2 hover:text-neutral transition-colors">
            <MsgIcon className="h-5 w-5" /> tmruwansanjeewa@gmail.com
          </a>
          <a
            href="tel:+94703383837"
            className="flex items-center gap-2 hover:text-neutral transition-colors">
            <PhoneIcon className="h-5 w-5" /> +94 70 338 3837
          </a>
        </div>
      </div>

      {/* Divider */}
      <div
        className="border-t border-neutral/20 mt-10 pt-6 text-center text-xs text-tertiary-content relative"
        suppressHydrationWarning={true}
      >
        © {new Date().getFullYear()} DevZenMaster. All rights reserved.

      </div>
    </footer>
  )
}

export default Footer
