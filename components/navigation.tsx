"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Add backdrop blur when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Main navigation links
  const links = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-sans tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
            <span className="text-primary-foreground text-xs">▲</span>
          </div>
          <span className="text-foreground">Codecyclon</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:glow">
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <Link href="/contact" className="px-5 py-2 rounded-full bg-primary/5 hover:bg-primary/10 border border-border text-sm font-medium text-foreground transition-all hover:scale-105">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-border p-6 md:hidden animate-fade-in shadow-xl">
          <div className="flex flex-col gap-6">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="text-lg font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
