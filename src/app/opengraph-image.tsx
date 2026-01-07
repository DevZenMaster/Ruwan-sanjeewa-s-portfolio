import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ruwan Sanjeewa | Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020617', // Deep Obsidian Blue
          backgroundImage: 'radial-gradient(circle at 25% 25%, #5565e815 0%, transparent 50%), radial-gradient(circle at 75% 75%, #18f2e510 0%, transparent 50%)',
          position: 'relative',
        }}
      >
        {/* Tactical Background Grid */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(#ffffff03 1px, transparent 1px), linear-gradient(90deg, #ffffff03 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Main Content Card */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(13, 26, 59, 0.6)',
          border: '1px solid rgba(85, 101, 232, 0.3)',
          borderRadius: '40px',
          padding: '60px 80px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}>
          
          {/* Top Badge */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '20px',
            background: 'rgba(24, 242, 229, 0.1)',
            padding: '8px 20px',
            borderRadius: '100px',
            border: '1px solid rgba(24, 242, 229, 0.2)'
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#18f2e5' }} />
            <span style={{ color: '#18f2e5', fontSize: 18, fontWeight: 'bold', letterSpacing: '2px' }}>VERIFIED_PORTFOLIO // 2026</span>
          </div>
          
          <h1 style={{ 
            fontSize: 84, 
            color: 'white', 
            margin: 0, 
            fontWeight: 900,
            letterSpacing: '-2px'
          }}>
            Ruwan <span style={{ color: '#5565e8' }}>Sanjeewa</span>
          </h1>
          
          <p style={{ 
            fontSize: 32, 
            color: '#a0aec0', 
            marginTop: 15,
            fontWeight: 500
          }}>
            Full-Stack Developer & DevSecOps Trainee
          </p>
          
          {/* Tech Stack Tags */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
            {['Next.js', 'React Native', 'Cybersecurity'].map((tag) => (
              <span key={tag} style={{
                padding: '10px 24px',
                background: '#5565e820',
                border: '1px solid #5565e840',
                borderRadius: '14px',
                color: '#5565e8',
                fontSize: 20,
                fontWeight: 'bold'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Footer URL */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          color: 'rgba(255,255,255,0.3)',
          fontSize: 22,
          letterSpacing: '3px',
          fontWeight: 'bold'
        }}>
          WWW.RUWANSANJEEWA.COM
        </div>
      </div>
    ),
    { ...size }
  )
}