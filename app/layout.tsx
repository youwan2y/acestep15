import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ace-step15.top'),
  title: {
    default: 'Ace-Step 1.5 | Next-Gen AI Music Generation Model',
    template: '%s | Ace-Step 1.5',
  },
  description: 'Create professional-quality music with AI in seconds using Ace-Step 1.5. Free AI music generator for text to music, background music, and royalty-free tracks. Perfect for content creators, musicians, and video producers.',
  keywords: [
    'AI music',
    'music generation',
    'Ace-Step',
    'AI composer',
    'music AI',
    'automated music',
    'AI music generator',
    'music production',
    'AI music creation',
    'electronic music',
    'music maker',
    'AI audio',
    'free AI music generator',
    'text to music',
    'background music generator',
    'royalty free music',
    'AI music for videos',
    'AI music generator no watermark',
  ],
  authors: [{ name: 'Ace-Step Team' }],
  creator: 'Ace-Step Team',
  publisher: 'Ace-Step Team',
  applicationName: 'Ace-Step 1.5',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Ace-Step 1.5 | Free AI Music Generator - Text to Music',
    description: 'Free AI music generator - create professional music from text in seconds. No watermark, royalty-free tracks for videos, YouTube, and content creators.',
    type: 'website',
    url: 'https://ace-step15.top',
    siteName: 'Ace-Step 1.5',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@acestep15',
    creator: '@acestep15',
    title: 'Ace-Step 1.5 | Free AI Music Generator - Text to Music',
    description: 'Free AI music generator - create professional music from text in seconds. No watermark, royalty-free tracks for videos and content creators.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ace-step15.top',
  },
  category: 'Music Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WQ05KJ5V35"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WQ05KJ5V35');
          `}
        </Script>

        <StructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
