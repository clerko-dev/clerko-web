import React from "react";
import { Helmet } from "react-helmet-async";

const SITE = "https://clerko-web.vercel.app";

export default function SEO({
  title = "Clerko — Instant proposals & quotes",
  description = "Create professional proposals & quotes in minutes. Templates, exports, tracking — all in one.",
  pathname = "/",
  image = `${SITE}/og-default.png`,
  noindex = false
}) {
  const url = `${SITE}${pathname || "/"}`;
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Clerko" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
