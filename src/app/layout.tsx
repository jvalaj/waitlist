import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ticker – See how much time you spend scrolling.',
  description:
    "Ticker is a simple iPhone app that shows you how long you've been scrolling. No blocks, no locks. Just a clock. Join the waitlist.",
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
