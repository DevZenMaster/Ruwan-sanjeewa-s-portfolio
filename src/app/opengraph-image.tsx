import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'DevZenMaster Portfolio'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d1a3b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: 36, color: '#5565e8', margin: 0, textAlign: 'center' }}>
          Ruwan Sanjeewa | Full-Stack & Mobile Developer
        </h1>
        <h2 style={{ fontSize: 28, color: '#ffffff', marginTop: 20, textAlign: 'center' }}>
          Cybersecurity Enthusiast | DevSecOps Aspirant
        </h2>
        <p style={{ fontSize: 22, color: '#18f2e5', marginTop: 20, textAlign: 'center', maxWidth: 900 }}>
          Crafting innovative web & mobile solutions while building secure, scalable applications.
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
