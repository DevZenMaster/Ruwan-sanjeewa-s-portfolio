import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // ✅ Safe fallback for environment variable
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ruwansanjeewa.com'

  return {
    rules: {
      // Allow all robots to crawl your site
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // restrict sensitive pages
    },
    host: baseUrl,                // base URL for the site
    sitemap: `${baseUrl}/sitemap.xml`, // full URL to sitemap
  }
}


