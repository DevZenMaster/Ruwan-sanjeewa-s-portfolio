import { footerLinks, languages } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary text-tertiary-content px-6 py-12 md:px-14 md:py-16">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-20">
        {/* Brand & Description */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Logo className="h-10 w-10" />
            <span className="text-lg font-medium text-neutral">DevZenMaster</span>
          </div>
          <p className="text-sm md:text-base">
            I focus on secure web and mobile development, ethical hacking, and future-ready cloud & DevSecOps skills. All work is backed by practical projects and continuous learning.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-xs text-neutral hover:underline"
          >
            More about me
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex-1 flex flex-wrap gap-4 md:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href || '#'}
              className="text-sm md:text-base hover:text-neutral hover:underline transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1200px] mx-auto mt-10 flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-0">
        {/* Socials */}
        <div className="flex gap-4">
          {socials.map(
            (item, idx) =>
              item.href && (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral/10 hover:bg-neutral/20 transition-colors"
                >
                  {item.icon}
                </a>
              )
          )}
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-center md:text-left">
          © 2026 DevZenMaster. All rights reserved.
        </p>

        {/* Languages */}
        <div className="flex gap-4">
          {languages.map((lang, idx) => (
            <span
              key={lang}
              className={idx === 0 ? 'text-neutral font-medium' : 'text-tertiary-content'}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
