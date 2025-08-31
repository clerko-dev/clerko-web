// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description = "Create beautiful, itemized quotes and proposals in minutes. Share as a link or PDF, get approvals, and get paid faster.",
  url = "https://clerko-web.vercel.app",
  pathname = "/",
  image = "/og.jpg",
  noIndex = false,
}) {
  const metaTitle = title || "Clerko — Proposals & Quotes in Minutes";
  const pageUrl = url + (pathname || "/");

  return (
    <Helmet prioritizeSeoTags>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
// SEO.jsx (fragment)
export default function SEO({ title, description="Create professional quotes and proposals in minutes with Clerko.", url="https://clerko-web.vercel.app" }) {
  return (
    <>
      <title>{title ? title : "Clerko — Proposals & Quotes in Minutes"}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title ? title : "Clerko — Proposals & Quotes in Minutes"} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </>
  );
}
