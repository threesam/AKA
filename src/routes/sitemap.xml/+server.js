import { client } from "$lib/utils/sanity";

const SITE_URL = "https://artkillingapathy.com";

// Static routes that should always be included
const STATIC_ROUTES = [
  { url: "/", priority: "1.0" },
  { url: "/art/", priority: "0.9" },
  { url: "/about/", priority: "0.8" },
  { url: "/press/", priority: "0.8" },
  { url: "/privacy/", priority: "0.5" },
  { url: "/terms/", priority: "0.5" },
];

// Generate sitemap XML
function generateSitemap(urls) {
  const urlEntries = urls
    .map((item) => {
      const lastmod = new Date().toISOString().split("T")[0];
      return `  <url>
    <loc>${SITE_URL}${item.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Fetch all posts from Sanity
async function fetchAllPosts() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      "slug": slug.current,
      publishedAt,
      _updatedAt
    }`;

    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function GET() {
  try {
    // Fetch all posts
    const posts = await fetchAllPosts();

    // Generate URLs for posts
    const postUrls = posts.map((post) => ({
      url: `/art/${post.slug}/`,
      priority: "0.8",
    }));

    // Combine static routes and post URLs
    const allUrls = [...STATIC_ROUTES, ...postUrls];

    // Generate sitemap XML
    const sitemapXml = generateSitemap(allUrls);

    return new Response(sitemapXml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);

    // Return a basic sitemap with just static routes if there's an error
    const basicSitemap = generateSitemap(STATIC_ROUTES);

    return new Response(basicSitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=300", // Cache for 5 minutes on error
      },
    });
  }
}
