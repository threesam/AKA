import { formatISO } from "date-fns";

const SITE_URL = "https://artkillingapathy.com";
const ORGANIZATION_NAME = "Art Killing Apathy";
const ORGANIZATION_DESCRIPTION =
  "A platform dedicated to exploring the intersection of art, activism, and social change through essays, poetry, visual art, and critical analysis.";

/**
 * Generate structured data JSON-LD string
 */
export function generateStructuredData(type, data = {}) {
  const baseUrl = SITE_URL + (data.url || "");
  const imageUrl = data.image
    ? `${data.image}?w=1200&h=630`
    : `${SITE_URL}/favicon.svg`;

  let structuredData;

  switch (type) {
    case "article":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.description,
        image: imageUrl,
        url: baseUrl,
        datePublished: data.publishedAt
          ? formatISO(new Date(data.publishedAt))
          : undefined,
        dateModified: data.modifiedAt
          ? formatISO(new Date(data.modifiedAt))
          : data.publishedAt
          ? formatISO(new Date(data.publishedAt))
          : undefined,
        author: {
          "@type": "Person",
          name: data.author || "Art Killing Apathy",
          url: `${SITE_URL}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: ORGANIZATION_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/favicon.svg`,
            width: 32,
            height: 32,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": baseUrl,
        },
        keywords: data.tags?.join(", ") || "",
        articleSection: data.category,
        inLanguage: "en-US",
      };
      break;

    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: ORGANIZATION_NAME,
        description: ORGANIZATION_DESCRIPTION,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        sameAs: [
          // Add social media URLs when available
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "general",
          url: `${SITE_URL}/about`,
        },
      };
      break;

    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: ORGANIZATION_NAME,
        description: ORGANIZATION_DESCRIPTION,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/art/?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@type": "Organization",
          name: ORGANIZATION_NAME,
          url: SITE_URL,
        },
      };
      break;

    case "webpage":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: data.title,
        description: data.description,
        url: baseUrl,
        image: imageUrl,
        isPartOf: {
          "@type": "WebSite",
          name: ORGANIZATION_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: ORGANIZATION_NAME,
          url: SITE_URL,
        },
        inLanguage: "en-US",
      };
      break;

    case "breadcrumb":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement:
          data.breadcrumbs?.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })) || [],
      };
      break;

    case "collection":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: data.title,
        description: data.description,
        url: baseUrl,
        image: imageUrl,
        isPartOf: {
          "@type": "WebSite",
          name: ORGANIZATION_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: ORGANIZATION_NAME,
          url: SITE_URL,
        },
      };
      break;

    default:
      return null;
  }

  // Remove undefined values
  return JSON.stringify(structuredData, (key, value) => {
    return value === undefined ? undefined : value;
  });
}

/**
 * Generate HTML script tag for structured data
 */
export function generateStructuredDataHTML(type, data = {}) {
  const jsonLd = generateStructuredData(type, data);
  if (!jsonLd) return "";

  return `<script type="application/ld+json">${jsonLd}</script>`;
}
