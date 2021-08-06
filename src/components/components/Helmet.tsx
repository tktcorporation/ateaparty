import React from "react";
import { withTheme } from "styled-components";
import { Theme } from "../../types";
import Head from "next/head";
import { Logo } from "../../domain/Logo";
import { BASE_URL, TITLE } from "../utils/constants";

type Props = {
  theme: Theme;
};

new Logo(BASE_URL).symbolUrl;

const Helmet = ({ theme }: Props) => {
  const { title, description, profile } = {
    title: TITLE,
    description: "VRChatで活動するクラシックを中心とした演奏愛好家の集いです",
    profile: ((src: string) => ({
      favicon32: { src },
      bigIcon: { src },
      appleIcon: { src },
      favicon16: { src },
    }))(new Logo(BASE_URL).symbolUrl({ isPath: false, ext: "png" })),
  };

  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap"
      />

      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={`${profile.bigIcon.src}`} />
      <meta name="theme-color" content={theme.colors.background} />
      <meta name="image" content={`${profile.bigIcon.src}`} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={`${profile.bigIcon.src}`} />
      <meta property="og:image" content={`${profile.bigIcon.src}`} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${profile.bigIcon.src}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${profile.bigIcon.src}`} />
      <meta name="twitter:url" content={`${profile.bigIcon.src}`} />
      <meta name="twitter:image:src" content={`${profile.bigIcon.src}`} />
      <meta name="keywords" content={`${profile.bigIcon.src}`} />
      <link rel="canonical" href={`${profile.bigIcon.src}`} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${profile.appleIcon.src}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${profile.favicon32.src}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${profile.favicon16.src}`}
      />
    </Head>
  );
};
export default withTheme(Helmet);
