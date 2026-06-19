// Simulación de una consulta a Base de Datos
async function getDynamicBlogPosts() {
  return [
    { slug: "como-optimizar-nextjs-para-seo" },
    { slug: "guia-definitiva-de-sitemaps-dinamicos" },
    { slug: "que-es-el-lazy-loading-en-react" }
  ];
}

function generateSiteMap(baseUrl) {
  const staticUrls = ["", "/blog", "/contact"];
  // const dynamicUrls = posts.map(post => `/blog/${post.slug}`);
  const allUrls = [...staticUrls];

  const today = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map((url) => {
      const priority = url === "" ? "1.0" : "0.8";
      return `<url><loc>${baseUrl}${url}</loc><lastmod>${today}</lastmod><changefreq>daily</changefreq><priority>${priority}</priority></url>`;
    })
    .join("\n  ")}
</urlset>`;
}

export async function getServerSideProps({ req, res }) {
  try {
    // EL PROBLEMA: Al usar req.headers.host junto con Cache-Control público, 
    // el CDN de Vercel puede almacenar en caché el sitemap con un dominio incorrecto 
    // (ej. una URL de preview o un healthcheck interno). Cuando Google lee el sitemap,
    // ve URLs que no coinciden con tu dominio y las descarta (0 discovered URLs).
    // SOLUCIÓN: Usar siempre la URL canónica en producción.
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mi-proyecto-seo-sigma.vercel.app";

    // const posts = await getDynamicBlogPosts();
    const sitemap = generateSiteMap(baseUrl);

    // Cambiado a 'text/xml' que es el estándar más compatible con GSC
    res.setHeader("Content-Type", "text/xml");
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.statusCode = 500;
    res.end();
  }

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
