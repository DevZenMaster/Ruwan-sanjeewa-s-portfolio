'use client'
import { useState, useEffect } from 'react'

const Logo = ({ className = '', size = 42 }: { className?: string; size?: number }) => {
  const [hovered, setHovered] = useState(false)
  const [gradient, setGradient] = useState({ start: '#000', mid: '#333', end: '#555' })

  const dur = hovered ? '2s' : '6s' // spin duration
  

  useEffect(() => {
    const root = document.documentElement

    const updateGradient = () => {
      const theme = root.getAttribute('data-theme')
      switch (theme) {
        case 'light':
          setGradient(
            hovered
              ? { start: '#5565e8', mid: '#18f2e5', end: '#000' } // hover gradient for light
              : { start: '#000', mid: '#222', end: '#444' } // normal
          )
          break
        case 'dark':
          setGradient(
            hovered
              ? { start: '#ff6f61', mid: '#5cc0fe', end: '#18f2e5' } 
              : { start: '#18f2e5', mid: '#5cc0fe', end: '#4ea7ff' }
          )
          break
        case 'aqua':
          setGradient(
            hovered
              ? { start: '#00c1d4', mid: '#ff6f61', end: '#18f2e5' }
              : { start: '#00c1d4', mid: '#18f2e5', end: '#ff6f61' }
          )
          break
        case 'retro':
          setGradient(
            hovered
              ? { start: '#f8d5a0', mid: '#ffab40', end: '#6d4c41' }
              : { start: '#ffab40', mid: '#f8d5a0', end: '#6d4c41' }
          )
          break
        default:
          setGradient(
            hovered
              ? { start: '#555', mid: '#888', end: '#000' }
              : { start: '#000', mid: '#222', end: '#444' }
          )
      }
    }

    updateGradient()

    const observer = new MutationObserver(updateGradient)
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [hovered])

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DevZenMaster Logo"
      role="img"
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <defs>
        <linearGradient id="dzm-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="50%" stopColor={gradient.mid} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
      </defs>

      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 32 32"
          to="360 32 32"
          dur={dur}
          repeatCount="indefinite"
        />

        <path d="M16 6 L26 30 L32 20 L38 30 L48 6 L44 34 L32 48 L20 34 Z" fill="url(#dzm-gradient)" />
        <path d="M10 36 L32 58 L54 36 L44 36 L32 48 L20 36 Z" fill="url(#dzm-gradient)" />
        <path d="M28 52 L32 56 L36 52 L32 60 Z" fill="url(#dzm-gradient)" />
      </g>
    </svg>
  )
}

export default Logo
