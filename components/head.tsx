import * as React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  site_name: string;
  description: string;
  keyword: string;
  image: string;
  url: string;
}

export default function head({ title, site_name, description, keyword, image, url }: Props): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={site_name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
}