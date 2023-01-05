import Head from "next/head";
import { getSiteMetaData } from "@utils/helpers";

export const SEO = ({ title, description = "", is404 = false }) => {
  const siteMetadata = getSiteMetaData();
  const seoTitle = `${title} | ${siteMetadata.title}`;
  const metaDescription = description || siteMetadata.description;
  const index = !is404 ? "index,follow" : "noindex,nofollow ";

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
      <meta name="robots" content={index}></meta>
    </Head>
  );
};
