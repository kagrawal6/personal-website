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
      console.log("[v0] showWebsite set to true after 800ms")
    }, 800) // Card finishes fading out, then website appears
  }

  console.log("[v0] Page render - isExpanded:", isExpanded, "showWebsite:", showWebsite)

  return (
    <div className="relative min-h-screen">
      <BusinessCard onExpand={handleExpand} isExpanded={isExpanded} />
      <PortfolioWebsite isVisible={showWebsite} />
    </div>
  )
}
