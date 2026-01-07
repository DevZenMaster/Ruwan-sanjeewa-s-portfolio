import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

// 1. Font Optimization
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap', 
})

// 2. Constants for SEO
const siteUrl = 'https://www.ruwansanjeewa.com'
const title = 'Ruwan Sanjeewa | Full-Stack & Mobile Developer | Cybersecurity Enthusiast'
const description =
  "I build responsive web & mobile applications with React, NextJS, NodeJS, and Flutter. Cybersecurity-focused developer with a future goal in DevSecOps. Let's craft secure, scalable, and innovative solutions together."

// 3. Viewport Configuration (Required for Next.js 15+)
export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
}

// 4. Metadata Configuration
export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | Ruwan Sanjeewa`
  },
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  keywords: ['Full-Stack Developer', 'Cybersecurity', 'DevSecOps', 'Sri Lanka', 'Next.js', 'React Native'],
  authors: [{ name: 'Ruwan Sanjeewa' }],
  openGraph: {
    title: 'Ruwan Sanjeewa | Portfolio',
    description: 'Explore secure, scalable, and innovative web & mobile solutions.',
    url: siteUrl,
    siteName: 'Ruwan Sanjeewa Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: 'Ruwan Sanjeewa Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@DevZenMaster',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning is added to <html> to handle data-theme changes
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Facebook Domain Verification */}
        <meta
          name="facebook-domain-verification"
          content="5z2fewkuonzhsuc2zeuqzr9y0jav0q"
        />
      </head>
      <body 
        // suppressHydrationWarning on <body> fixes the browser extension attribute error
        className={`${firaCode.className} antialiased selection:bg-accent/30 selection:text-accent`}
        suppressHydrationWarning
      >
        <header>
          <Navbar />
        </header>

        {/* Main Content Area */}
        {children}

        {/* Global UI Components */}
        <ThemeMenu />
        <Footer />
        
        {/* Vercel Performance Tracking */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
