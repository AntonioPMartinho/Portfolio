import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "António Martinho - Backend Developer | Java Spring Boot Expert | Porto, Portugal",
  description:
    "Experienced Backend Developer specializing in Java Spring Boot, REST APIs, microservices, Docker, and CI/CD. 1+ years of professional experience in Portugal and Spain. Available for hire.",
  keywords: [
    "backend developer",
    "java developer",
    "spring boot developer",
    "rest api developer",
    "microservices developer",
    "docker developer",
    "portugal developer",
    "porto developer",
    "software engineer",
    "full stack developer",
    "postgresql developer",
    "ci cd developer",
    "jenkins developer",
    "antónio martinho",
    "antonio martinho",
  ],
  authors: [{ name: "António Martinho", url: "https://antoniopmartinho.pt" }],
  creator: "António Martinho",
  publisher: "António Martinho",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antoniopmartinho.pt",
    title: "António Martinho - Backend Developer | Java Spring Boot Expert",
    description:
      "Experienced Backend Developer specializing in Java Spring Boot, REST APIs, microservices, Docker, and CI/CD. Available for hire in Portugal.",
    siteName: "António Martinho Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "António Martinho - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "António Martinho - Backend Developer | Java Spring Boot Expert",
    description:
      "Experienced Backend Developer specializing in Java Spring Boot, REST APIs, microservices, Docker, and CI/CD. Available for hire.",
    images: ["/favicon.ico"],
    creator: "@antoniopmartinho",
  },
  alternates: {
    canonical: "https://antoniopmartinho.pt",
  },
  generator: "Next.js",
  applicationName: "António Martinho Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Portfolio Website",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
