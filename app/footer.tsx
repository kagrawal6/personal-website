"use client"

import { AnimatedBackground } from "@/components/ui/animated-background"
import { TextLoop } from "@/components/ui/text-loop"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const THEMES = [
  { id: "light", label: "Light", icon: <SunIcon className="h-4 w-4" /> },
  { id: "dark", label: "Dark", icon: <MoonIcon className="h-4 w-4" /> },
  { id: "system", label: "System", icon: <MonitorIcon className="h-4 w-4" /> },
]

function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      {THEMES.map((option) => (
        <button
          key={option.id}
          onClick={() => setTheme(option.id)}
          className={`inline-flex h-6 w-6 items-center justify-center transition-colors duration-100 ${
            theme === option.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
          type="button"
          aria-label={`Switch to ${option.label} theme`}
        >
          {option.icon}
        </button>
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="sticky top-[100vh] mt-24 border-t border-border px-0 py-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <a 
          href="https://github.com/ibelick/nim?tab=readme-ov-file" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          <TextLoop>
            <span>© {new Date().getFullYear()} Kushal Agrawal.</span>
            <span>Template by Nim.</span>
          </TextLoop>
        </a>
        <ThemeSwitch />
      </div>
    </footer>
  )
}

