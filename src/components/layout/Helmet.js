import React from "react";
import Head from "next/head";

import settings from "@core/settings.json";

const Helmet = ({ title }) => {
  const { metaData } = settings;
  const { siteName, siteCreator, siteDescription } = metaData;

  let helmetMeta = [
    {
      key: "ogtitle",
      property: "og:title",
      content: siteName,
    },
    {
      name: "description",
      content: siteDescription,
    },
    {
      key: "ogdesc",
      property: "og:description",
      content: siteDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteCreator,
    },
    {
      name: `twitter:title`,
      content: siteName,
    },
    {
      name: `twitter:description`,
      content: siteDescription,
    },
  ];

  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {helmetMeta?.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
    </Head>
  );
};

export default Helmet;
