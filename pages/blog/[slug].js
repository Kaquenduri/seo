import Head from "next/head";
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Formatear el slug para mostrar un título amigable
  const title = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Artículo de Blog";

  return (
    <>
      <Head>
        <title>{title} | Mi Proyecto SEO</title>
        <meta name="description" content={`Aprende todo sobre ${title} en nuestro blog de optimización y posicionamiento web.`} />
        <meta property="og:title" content={`${title} | Blog SEO`} />
        <meta property="og:description" content={`Guía completa y consejos prácticos sobre ${title}.`} />
        {slug && <link rel="canonical" href={`https://mi-proyecto-seo-sigma.vercel.app/blog/${slug}`} />}
      </Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>{title}</h1>
        <p>Estás leyendo el artículo con el slug: <strong>{slug}</strong>.</p>
        <p>Este artículo contiene consejos técnicos y guías de desarrollo optimizados para SEO.</p>
      </main>
    </>
  );
}
