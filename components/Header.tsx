"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    // Check initial scroll position
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold transition-colors ${isScrolled ? "text-blue-800" : "text-white"}`}>
          Arnav Menon
        </Link>
        <ul className="flex space-x-4">
          {["Skills", "Projects", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`px-3 py-2 rounded-md transition-colors ${
                  isScrolled ? "text-gray-600 hover:text-blue-600 hover:bg-gray-100" : "text-white hover:bg-white/20"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

