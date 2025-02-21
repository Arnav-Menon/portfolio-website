import type React from "react"
export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    const headerOffset = 80 // Adjust this value based on your header height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}