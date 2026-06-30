import { Helmet } from "react-helmet-async";

/**
 * PageSEO — inject per-page SEO, GEO and AEO metadata into <head>.
 *
 * Props:
 *  title          – Page <title> (appended with site name)
 *  description    – Meta description (≤160 chars recommended)
 *  keywords       – Comma-separated keyword string
 *  canonical      – Full canonical URL for this page
 *  ogTitle        – Open Graph title (defaults to title)
 *  ogDescription  – Open Graph description (defaults to description)
 *  ogImage        – Absolute URL to OG image
 *  ogUrl          – Canonical OG URL (defaults to canonical)
 *  ogType         – OG type (default: "website")
 *  twitterTitle   – Twitter card title
 *  twitterDesc    – Twitter card description
 *  twitterImage   – Twitter card image URL
 *  structuredData – Array of JSON-LD objects (spread into multiple <script> tags)
 *  breadcrumbs    – Array of { name, url } for BreadcrumbList (auto-generated if provided)
 */
function PageSEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://www.jipcaterers.com/logo1.png",
  ogUrl,
  ogType = "website",
  twitterTitle,
  twitterDesc,
  twitterImage = "https://www.jipcaterers.com/logo1.png",
  structuredData = [],
  breadcrumbs = [],
}) {
  const fullTitle = title
    ? `${title} | JIP Caterers`
    : "JIP Caterers | Premium South Indian Vegetarian Catering in Chennai";

  const resolvedOgTitle = ogTitle || title || "JIP Caterers";
  const resolvedOgDesc = ogDescription || description || "";
  const resolvedOgUrl = ogUrl || canonical || "https://www.jipcaterers.com";
  const resolvedTwitterTitle = twitterTitle || resolvedOgTitle;
  const resolvedTwitterDesc = twitterDesc || resolvedOgDesc;

  // Auto-build BreadcrumbList JSON-LD if breadcrumbs provided
  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.jipcaterers.com",
            },
            ...breadcrumbs.map((b, idx) => ({
              "@type": "ListItem",
              position: idx + 2,
              name: b.name,
              item: b.url,
            })),
          ],
        }
      : null;

  const allSchemas = breadcrumbSchema
    ? [...structuredData, breadcrumbSchema]
    : structuredData;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="author" content="JIP Caterers" />
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tiruvallur, Chennai, Tamil Nadu" />
      <meta name="geo.position" content="13.1450;79.9129" />
      <meta name="ICBM" content="13.1450, 79.9129" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedOgUrl} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="JIP Caterers" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={resolvedOgUrl} />
      <meta name="twitter:title" content={resolvedTwitterTitle} />
      <meta name="twitter:description" content={resolvedTwitterDesc} />
      <meta name="twitter:image" content={twitterImage} />

      {/* JSON-LD Structured Data blocks */}
      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default PageSEO;
