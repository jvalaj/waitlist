import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'No More Scroll',
  description:
    "An iPhone app that taps you on the shoulder when you've been scrolling on autopilot, and a research project on check-ins people don't turn off. In beta, launching soon.",
  icons: { icon: '/images/icon.png', apple: '/images/icon.png' },
  openGraph: {
    title: 'No More Scroll',
    description: "An iPhone app that taps you on the shoulder when you've been scrolling on autopilot.",
    images: ['/images/icon.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#EEEFF3',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Jost.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
