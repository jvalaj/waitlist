import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'No More Scroll',
  description:
    "An iPhone app that taps you on the shoulder when you've been scrolling on autopilot, and a research project on check-ins people don't turn off. In beta, launching soon.",
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/images/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
  openGraph: {
    title: 'No More Scroll',
    description: "An iPhone app that taps you on the shoulder when you've been scrolling on autopilot.",
    images: ['/images/icon.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#8B84DD',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/Jost.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-bg.webp" as="image" type="image/webp" />
        {/* Hide the intro pieces before first paint. Skipped for reduced motion. If the intro script
            never runs, everything is shown after a few seconds anyway. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var r=document.documentElement;r.classList.add('nms-intro');setTimeout(function(){if(!window.__nmsIntroRan)r.classList.remove('nms-intro')},6000)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        {children}
        <Script src="/liquid-glass.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
