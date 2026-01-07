import { NextResponse } from 'next/server'

export async function GET() {
  const response = NextResponse.json({ message: 'Secure session initialized!' })
  
  response.cookies.set({
    name: 'user_session',
    value: 'ruwan_secure_hash',
    httpOnly: true,       // Prevents XSS from reading the cookie
    secure: true,         // Only sent over HTTPS
    sameSite: 'strict',   // Prevents CSRF
    path: '/',
    maxAge: 60 * 60 * 24 * 7 // 1 Week
  })

  return response
}