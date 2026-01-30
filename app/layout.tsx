import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sans = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans' 
});

const serif = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'DevTunechi | Backend Engineer',
  description: "An engineer who solves problems by understanding people and turning ideas into real, working systems.",
  generator: 'Next.js',
  icons: {
    icon: '/5.JPG',
    apple: '/5.JPG',
  },
  // This section below is what WhatsApp looks at
  openGraph: {
    title: 'DevTunechi | Backend Engineer',
    description: 'Engineering practical solutions with a human-centered approach.',
    url: 'https://devtunechi.vercel.app/',
    siteName: 'DevTunechi Portfolio',
    images: [
      {
        url: 'https://devtunechi.vercel.app/5.JPG', // Full URL is best for OG tags
        width: 1200,
        height: 630,
        alt: 'Olatunji - Backend Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}