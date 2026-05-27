import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Lara Brazolin | Surfista Profissional",
    template: "%s | Lara Brazolin",
  },
  description:
    "Lara Brazolin - Surfista profissional e embaixadora de marcas. Conheça minha trajetória no surf, conquistas, parcerias e colaborações. Apaixonada pelo mar e pelo esporte.",
  keywords: [
    "surfista profissional",
    "surf feminino",
    "atleta de surf",
    "Lara Brazolin",
    "surfista brasileira",
    "patrocínio surf",
    "embaixadora de marcas",
    "surf Brasil",
    "atleta feminina",
    "surf competitivo",
  ],
  authors: [{ name: "Lara Brazolin" }],
  creator: "Lara Brazolin",
  publisher: "Lara Brazolin",
  generator: "v0.app",
  applicationName: "Portfolio Lara Brazolin",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://larabrazolin.com.br"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://larabrazolin.com.br",
    siteName: "Lara Brazolin - Surfista Profissional",
    title: "Lara Brazolin | Surfista Profissional",
    description:
      "Surfista profissional e embaixadora de marcas. Conheça minha trajetória, conquistas e parcerias no mundo do surf.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lara Brazolin - Surfista Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lara Brazolin | Surfista Profissional",
    description:
      "Surfista profissional e embaixadora de marcas. Conheça minha trajetória, conquistas e parcerias no mundo do surf.",
    images: ["/og-image.jpg"],
    creator: "@larabrazolin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "sports",
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
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
