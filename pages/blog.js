import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Posicionamiento Web y SEO | Consejos Técnicos</title>
        <meta name="description" content="Aprende trucos, guías y tutoriales sobre SEO técnico, Core Web Vitals y cómo optimizar aplicaciones Next.js." />
        <meta property="og:title" content="Blog de Posicionamiento Web y SEO Técnico" />
        <meta property="og:description" content="Artículos semanales para dominar el algoritmo de Google y mejorar tu velocidad de carga." />
        <meta property="og:image" content="/images/blog-seo.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://mi-proyecto-seo-sigma.vercel.app/blog" />
      </Head>
      <h1>Nuestro Blog SEO</h1>
      <p>Explora nuestros últimos artículos y tutoriales técnicos.</p>
    </>
  );
}