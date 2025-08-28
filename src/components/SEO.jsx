// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description = "Create professional quotes and proposals in minutes with Clerko.",
  url = "https://clerko-web.vercel.app",
  image = "/og.png",
}) {
  // ASCII separator dla pełnej kompatybilności (bez „dziwnych znaków”)
  const fullTitle = title ? `${title} | Clerko` : "Clerko | Proposals & quotes in minutes";

  // Absolutny URL do obrazu (Open Graph / Twitter)
  const site = url.replace(/\/$/, "");
  const img = image.startsWith("http") ? image : `${site}${image.startsWith("/") ? "" : "/"}${image}`;

  return (
    <Helmet prioritizeSeoTags>
      {/* Title + Canonical */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={site} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={site} />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* Schema.org (opcjonalnie) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": site,
          "name": "Clerko",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${site}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </Helmet>
  );
}
