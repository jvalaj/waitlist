import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ticker – Reclaim your time without losing your connection.',
  description:
    'Ticker is a mindful screen time companion for iOS. No blocks. No locks. Just a mirror. Join the waitlist.',
  icons: { icon: '/images/logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
