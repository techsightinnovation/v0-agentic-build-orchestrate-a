import { GoogleAnalytics } from '@next/third-parties/google'
<GoogleAnalytics gaId="G-6E6M50G8H9" />
import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TechSight Innovations — AI Implementation & Training for SMEs',
  description: 'TechSight Innovations FZE LLC delivers practical, affordable, and industry-relevant AI implementation and training services for SMEs across the UAE and GCC. Empowering Technology. Securing the Future.',
  keywords: ['AI implementation', 'AI training', 'SME AI adoption', 'UAE AI consulting', 'GCC AI services', 'Microsoft Copilot', 'AI readiness'],
  authors: [{ name: 'TechSight Innovations FZE LLC' }],
  openGraph: {
    title: 'TechSight Innovations — AI Implementation & Training for SMEs',
    description: 'Practical, affordable AI implementation and training services for SMEs across the UAE and GCC.',
    type: 'website',
    url: 'https://www.techsightinnovations.com',
    siteName: 'TechSight Innovations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechSight Innovations — AI Implementation & Training for SMEs',
    description: 'Practical, affordable AI implementation and training services for SMEs across the UAE and GCC.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
       <GoogleAnalytics gaId="G-6E6M50G8H9" />
    </html>
  )
}
