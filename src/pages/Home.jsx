import React from "react"
import HeroSection from "@/components/home/HeroSection.jsx"
// Zostawiamy tylko hero (jak na Twoim ładnym screenie). Resztę dołożymy później pod konwersję.

export default function Home() {
  return (
    <div className="container py-6 md:py-10">
      <HeroSection />
    </div>
  )
}
