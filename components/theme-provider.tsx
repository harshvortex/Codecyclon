"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"

interface ThemeProviderProps {
  children: ReactNode
  attribute?: string
  defaultTheme?: string
  storageKey?: string
}

export function ThemeProvider({ children, defaultTheme = "dark", storageKey = "codecyclon-theme" }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string | undefined>(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) || defaultTheme
    setTheme(savedTheme)
    document.documentElement.className = savedTheme
    setMounted(true)
  }, [defaultTheme, storageKey])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem(storageKey, newTheme)
    document.documentElement.className = newTheme
  }

  // Prevent flash of unstyled content
  if (!mounted) {
    return <>{children}</>
  }

  return <div suppressHydrationWarning>{children}</div>
}

export function useTheme() {
  const [theme, setThemeState] = useState<string>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("codecyclon-theme") || "dark"
    setThemeState(savedTheme)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setThemeState(newTheme)
    localStorage.setItem("codecyclon-theme", newTheme)
    document.documentElement.className = newTheme
  }

  return { theme: mounted ? theme : "dark", toggleTheme }
}
