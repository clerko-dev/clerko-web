// src/pages/Home.jsx
import React from "react";
import SEO from "@/components/SEO.jsx";
import HeroSection from "@/components/home/HeroSection.jsx";

export default function Home() {
  return (
    <>
      <SEO title="Clerko — Proposals & quotes in minutes" />
      <HeroSection />
    </>
  );
}
