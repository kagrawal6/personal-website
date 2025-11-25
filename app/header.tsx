"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, LayoutGroup } from "motion/react"
import { TextEffect } from "@/components/ui/text-effect"
import { useEffect, useState } from "react"

const navItems = [
  { name: "home", path: "/" },
  { name: "education", path: "/education" },
  { name: "experience", path: "/experience" },
  { name: "projects", path: "/projects" },
]

export function Header() {
  const pathname = usePathname()
  const activeIndex = navItems.findIndex(item => item.path === pathname)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBubble, setShowBubble] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Hide bubble, scroll to top, then show bubble again
    setShowBubble(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
    
    // Wait for scroll and DOM to settle
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 10)
    
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 px-4 mx-auto max-w-screen-sm ${isScrolled ? 'bg-white py-4' : 'pt-16 pb-4'}`}>
      <div className="min-w-0">
        <Link href="/" className="font-medium text-sm sm:text-base" style={{ color: '#8b1538' }}>
          Kushal Agrawal
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          delay={0.4}
          className="text-xs sm:text-sm text-muted-foreground truncate"
        >
          kagrawal1762@gmail.com
        </TextEffect>
      </div>
      <LayoutGroup>
        <nav className="relative flex items-center flex-wrap gap-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-2 sm:px-4 py-2 text-xs sm:text-sm transition-colors rounded-full"
              >
                {isActive && showBubble && (
                  <motion.div
                    className="absolute inset-0 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                    }}
                    style={{
                      background: `
                        radial-gradient(
                          circle at 25% 25%,
                          rgba(255, 255, 255, 0.95) 0%,
                          rgba(255, 245, 248, 0.85) 15%,
                          rgba(248, 235, 240, 0.75) 30%,
                          rgba(240, 225, 232, 0.65) 50%,
                          rgba(230, 210, 220, 0.55) 70%,
                          rgba(220, 195, 210, 0.5) 85%,
                          rgba(139, 21, 56, 0.15) 100%
                        ),
                        linear-gradient(
                          135deg,
                          rgba(255, 255, 255, 0.4) 0%,
                          transparent 50%,
                          rgba(139, 21, 56, 0.08) 100%
                        )
                      `,
                      backdropFilter: 'blur(60px) saturate(200%) contrast(110%) brightness(1.1)',
                      WebkitBackdropFilter: 'blur(60px) saturate(200%) contrast(110%) brightness(1.1)',
                      boxShadow: `
                        inset 0 2px 4px rgba(255, 255, 255, 1),
                        inset 0 0 0 1px rgba(255, 200, 220, 0.5)
                      `,
                      border: '1px solid rgba(255, 200, 220, 0.4)',
                    }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
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

