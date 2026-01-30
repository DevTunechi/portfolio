import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google' // Swapped Geist for Inter & Playfair
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// We use Inter for the clean UI text
const sans = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans' 
});

// We use Playfair Display for the "Lakunle" headers
const serif = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'Lakunle | Product Designer',
  description: "Bridging the gap between vision and execution through design, literature, and digital innovation.",
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    /* We inject the font variables here so Tailwind v4 can see them */
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}