"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, LayoutGroup } from "motion/react"
import { TextEffect } from "@/components/ui/text-effect"
import { useEffect, useState } from "react"
import { EMAIL } from "./data"

const navItems = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBubble, setShowBubble] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setShowBubble(false)
    window.scrollTo({ top: 0, behavior: "instant" })

    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 10)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 px-4 mx-auto max-w-screen-sm ${
        isScrolled ? "bg-background/90 py-4 backdrop-blur-md" : "pt-16 pb-4"
      }`}
    >
      <div className="min-w-0">
        <Link href="/" className="font-medium text-sm sm:text-base text-maroon">
          Kushal Agrawal
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          delay={0.4}
          className="text-xs sm:text-sm text-muted-foreground truncate"
        >
          {EMAIL}
        </TextEffect>
      </div>
      <LayoutGroup>
        <nav className="relative flex items-center flex-wrap gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-2 sm:px-4 py-2 text-xs sm:text-sm transition-colors rounded-full"
              >
                {isActive && showBubble && (
                  <motion.div
                    className="nav-active-pill absolute inset-0 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                    }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            )
          })}
        </nav>
      </LayoutGroup>
    </header>
  )
}
