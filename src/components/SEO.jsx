// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Clerko – Proposals & quotes in minutes",
  description = "Create professional quotes and proposals in minutes with Clerko.",
  url = "https://clerko-web.vercel.app",
  image = "/og.png",
}) {
  // Użyj zwykłego myślnika, by uniknąć artefaktów typu "Â—"
  const cleanTitle = title.replace(/—/g, "-");

  return (
    <Helmet>
      <title>{cleanTitle}</title>
      <meta name="description" content={description} />

      {/* OpenGraph */}
      <meta property="og:title" content={cleanTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
