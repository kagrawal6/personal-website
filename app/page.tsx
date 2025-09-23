"use client"

import { useState } from "react"
import BusinessCard from "@/components/business-card"
import PortfolioWebsite from "@/components/portfolio-website"

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  return (
    <div className="relative min-h-screen">
      <BusinessCard onExpand={handleExpand} isExpanded={isExpanded} />
      <PortfolioWebsite isVisible={isExpanded} />
    </div>
  )
}
