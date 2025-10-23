import { createClient } from "@sanity/client";
import { writeFileSync } from "fs";
import { join } from "path";

// Initialize Sanity client
const client = createClient({
  projectId: "ppo5s5uj",
  dataset: "production",
  apiVersion: "2025-10-05",
  useCdn: true,
});

const SITE_URL = "https://artkillingapathy.com";

// Static routes that should always be included
const STATIC_ROUTES = [
  "/",
  "/art/",
  "/about/",
  "/press/",
  "/privacy/",
  "/terms/",
];

// Generate sitemap XML
function generateSitemap(urls) {
  const urlEntries = urls
    .map((url) => {
      const lastmod = new Date().toISOString().split("T")[0];
      return `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
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

// Main function to generate sitemap
async function generateSitemapFile() {
  console.log("🚀 Generating sitemap...");

  try {
    // Fetch all posts
    const posts = await fetchAllPosts();
    console.log(`📝 Found ${posts.length} posts`);

    // Generate URLs for posts
    const postUrls = posts.map((post) => `/art/${post.slug}/`);

    // Combine static routes and post URLs
    const allUrls = [...STATIC_ROUTES, ...postUrls];

    // Generate sitemap XML
    const sitemapXml = generateSitemap(allUrls);

    // Write to static directory
    const outputPath = join(process.cwd(), "static", "sitemap.xml");
    writeFileSync(outputPath, sitemapXml, "utf8");

    console.log(
      `✅ Sitemap generated successfully with ${allUrls.length} URLs`
    );
    console.log(`📁 Saved to: ${outputPath}`);

    // Log some stats
    console.log(`📊 Breakdown:`);
    console.log(`   - Static routes: ${STATIC_ROUTES.length}`);
    console.log(`   - Art posts: ${postUrls.length}`);
    console.log(`   - Total URLs: ${allUrls.length}`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemapFile();
}

export { generateSitemapFile };
