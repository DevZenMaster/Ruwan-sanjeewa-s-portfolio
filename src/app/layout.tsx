import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const title = 'Ruwan Sanjeewa | Full-Stack & Mobile Developer | Cybersecurity Enthusiast'

const description =
  "I build responsive web & mobile applications with React, NextJS, NodeJS, and Flutter. Cybersecurity-focused developer with a future goal in DevSecOps. Let's craft secure, scalable, and innovative solutions together."

// ✅ Safe fallback for environment variable
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ruwansanjeewa.com'

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  // ✅ metadataBase must not be undefined
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Ruwan Sanjeewa Portfolio',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: 'Ruwan Sanjeewa | Full-Stack & Mobile Developer',
      },
    ],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@DevZenMaster',
    images: [`${siteUrl}/api/og`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={firaCode.className}>
        <header>
          <Navbar />
        </header>

        {children}

        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
