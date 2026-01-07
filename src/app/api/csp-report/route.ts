import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('🛡️ SECURITY_AUDIT: CSP VIOLATION', body)
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error: 'Report Failed' }, { status: 400 })
  }
}