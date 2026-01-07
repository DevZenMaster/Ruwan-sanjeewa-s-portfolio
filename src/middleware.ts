import { NextRequest, NextResponse } from 'next/server'

const RATE_LIMIT = new Map<string, { count: number; time: number }>()

const BLOCKED_PATHS = [
  '/wp-admin',
  '/wp-login',
  '/xmlrpc.php',
  '/.env',
  '/.git',
  '/config',
  '/backup',
  '/.htaccess',
  '/phpinfo.php',
]

const BAD_BOTS = [
  'curl',
  'wget',
  'python',
  'httpclient',
  'go-http',
  'postman',
  'scrapy',
  'axios',
  'node-fetch',
]

export function middleware(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  const ua = (req.headers.get('user-agent') || '').toLowerCase()
  const path = req.nextUrl.pathname

  /* ----------------------------
     1. Block bad bots
  ----------------------------- */
  if (BAD_BOTS.some(b => ua.includes(b))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  /* ----------------------------
     2. Block exploit paths
  ----------------------------- */
  if (BLOCKED_PATHS.some(p => path.startsWith(p))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  /* ----------------------------
     3. Rate limiting (120 req/min per IP)
  ----------------------------- */
  const now = Date.now()
  const entry = RATE_LIMIT.get(ip)

  if (!entry) {
    RATE_LIMIT.set(ip, { count: 1, time: now })
  } else {
    if (now - entry.time < 60_000) {
      entry.count++
      if (entry.count > 120) {
        return new NextResponse('Too Many Requests', { status: 429 })
      }
    } else {
      RATE_LIMIT.set(ip, { count: 1, time: now })
    }
  }

  /* ----------------------------
     4. Continue request
  ----------------------------- */
  const res = NextResponse.next()

  /* ----------------------------
     5. Hide framework fingerprint
  ----------------------------- */
  res.headers.delete('x-powered-by')
  res.headers.delete('x-nextjs-cache')
  res.headers.delete('x-nextjs-prerender')
  res.headers.delete('x-nextjs-stale-time')
  res.headers.delete('x-matched-path')

  /* ----------------------------
     6. Enforce security headers at edge
  ----------------------------- */
  res.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https:; object-src 'none'; frame-ancestors 'none';"
  )

  res.headers.set('X-Frame-Options', 'DENY')
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  res.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), gyroscope=(), magnetometer=(), payment=()'
  )
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  res.headers.set('Cross-Origin-Embedder-Policy', 'require-corp')

  return res
}

export const config = {
  matcher: '/:path*',
}
