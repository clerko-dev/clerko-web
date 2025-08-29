import React from "react"
import HeroSection from "@/components/home/HeroSection.jsx"

export default function Home() {
  return (
    <div className="container py-6 md:py-10">
      <HeroSection />
      {/* Kolejne sekcje dołożymy później – zachowamy ten sam styl i reveal */}
    </div>
  )
}
