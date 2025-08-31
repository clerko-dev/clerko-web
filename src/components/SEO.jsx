import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description = "Create professional quotes and proposals in minutes with Clerko.",
  url = "https://clerko-web.vercel.app",
}) {
  const site = "Clerko";
  const sep = "\u2014"; // em-dash fix
  const fullTitle = title ? `${title} ${sep} ${site}` : `${site} ${sep} Proposals & quotes in minutes`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
