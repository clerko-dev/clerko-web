// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Clerko — Proposals & quotes in minutes",
  description = "Create beautiful, itemized quotes and proposals in minutes. Share as a link or PDF, get approvals, and move from draft to paid — without the busywork.",
  url = "https://clerko-web.vercel.app",
}) {
  const fullTitle = title;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
