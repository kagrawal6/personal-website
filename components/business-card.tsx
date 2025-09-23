"use client"

import { useState } from "react"
import { Github, Linkedin } from "lucide-react"

interface BusinessCardProps {
  onExpand?: () => void
  isExpanded?: boolean
}

export default function BusinessCard({ onExpand, isExpanded }: BusinessCardProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showFloatingLetters, setShowFloatingLetters] = useState(false)

  const handleMouseEnter = () => {
    if (isAnimating || isExpanded) return

    setIsAnimating(true)
    setShowFloatingLetters(true)

    setTimeout(() => {
      onExpand?.()
    }, 1400)

    setTimeout(() => {
      setIsAnimating(false)
    }, 2000)
  }

  if (isExpanded && !isAnimating) {
    return null
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background p-4 z-50">
      <div className="cursor-pointer" onMouseEnter={handleMouseEnter}>
        <div
          className={`bg-background border border-foreground w-96 h-60 p-12 flex flex-col justify-center items-center text-center transition-all duration-300 ease-out shadow-lg hover:shadow-xl ${
            showFloatingLetters ? "animate-card-to-website" : ""
          }`}
        >
          <h1
            className={`text-2xl font-bold mb-6 tracking-wide ${showFloatingLetters ? "animate-letter-travel-to-header" : ""}`}
          >
            KUSHAL AGRAWAL
          </h1>

          <div className="space-y-3 text-sm">
            <a
              href="mailto:kagrawal24@wisc.edu"
              className={`text-muted-foreground block hover:text-foreground transition-colors duration-200 ${
                showFloatingLetters ? "animate-letter-travel-to-header" : ""
              }`}
              style={{ animationDelay: "200ms" }}
            >
              kagrawal24@wisc.edu
            </a>
            <a
              href="tel:+16088951762"
              className={`text-muted-foreground block hover:text-foreground transition-colors duration-200 ${
                showFloatingLetters ? "animate-letter-travel-to-header" : ""
              }`}
              style={{ animationDelay: "300ms" }}
            >
              (608) 895-1762
            </a>

            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/kagrawal6"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground hover:text-foreground transition-colors duration-200 ${
                  showFloatingLetters ? "animate-letter-travel-to-header" : ""
                }`}
                style={{ animationDelay: "400ms" }}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kushal200903/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground hover:text-foreground transition-colors duration-200 ${
                  showFloatingLetters ? "animate-letter-travel-to-header" : ""
                }`}
                style={{ animationDelay: "500ms" }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
