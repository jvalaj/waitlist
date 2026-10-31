import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'No More Scroll: research on context-aware check-ins',
  description:
    'No More Scroll is an iOS app and research project on whether well-timed check-ins can help college students regulate social media and short-video use without feeling controlled. Now in beta, launching soon.',
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
