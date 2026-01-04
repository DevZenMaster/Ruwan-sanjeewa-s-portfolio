import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'Ruwan Sanjeewa | Full-Stack & Mobile Developer | Cybersecurity Enthusiast'

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
          padding: '4%',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 48,
            color: '#5565e8',
            margin: 0,
            lineHeight: 1.2,
            wordBreak: 'break-word',
          }}
        >
          Ruwan Sanjeewa
        </h1>
        <h2
          style={{
            fontSize: 32,
            color: '#ffffff',
            marginTop: 16,
            lineHeight: 1.2,
          }}
        >
          Full-Stack & Mobile Developer
        </h2>
        <h3
          style={{
            fontSize: 28,
            color: '#18f2e5',
            marginTop: 12,
            lineHeight: 1.3,
            maxWidth: 1000,
          }}
        >
          Cybersecurity Enthusiast | DevSecOps Aspirant
        </h3>
        <p
          style={{
            fontSize: 20,
            color: '#ffffff',
            marginTop: 20,
            maxWidth: 1000,
            lineHeight: 1.4,
          }}
        >
          Crafting innovative web & mobile solutions while building secure, scalable applications.
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
