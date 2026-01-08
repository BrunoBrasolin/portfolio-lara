import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lara Brazolin | Professional Surf Athlete",
  description:
    "Professional surf athlete and brand ambassador. Explore partnerships, achievements, and media collaborations.",
  keywords: ["surf athlete", "professional surfer", "brand partnerships", "influencer", "athlete sponsorship"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0d7377",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
