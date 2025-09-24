"use client"

import { useState } from "react"
import BusinessCard from "@/components/business-card"
import PortfolioWebsite from "@/components/portfolio-website"

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showWebsite, setShowWebsite] = useState(false)

  const handleExpand = () => {
    console.log("[v0] handleExpand called")
    setIsExpanded(true)
    console.log("[v0] isExpanded set to true")
    setTimeout(() => {
      setShowWebsite(true)
      // Scroll to top when website appears
      window.scrollTo({ top: 0, behavior: 'smooth' })
      console.log("[v0] showWebsite set to true after 400ms")
    }, 400) // Card finishes fading out, then website appears
  }

  console.log("[v0] Page render - isExpanded:", isExpanded, "showWebsite:", showWebsite)

  return (
    <div className="relative min-h-screen">
      {!showWebsite && <BusinessCard onExpand={handleExpand} isExpanded={isExpanded} />}
      <PortfolioWebsite isVisible={showWebsite} />
    </div>
  )
}
