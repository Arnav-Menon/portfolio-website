import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "../components/Header"
import ScrollToTop from "../components/ScrollToTop"
import ScrollProgressBar from "../components/ScrollProgressBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arnav Menon - Software Developer & ML Engineer",
  description: "Portfolio of Arnav Menon, a skilled software developer and machine learning engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ScrollProgressBar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}



import './globals.css'