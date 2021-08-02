import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import { withTheme } from "styled-components";
import { Theme } from "../../types";

type Props = {
  theme: Theme;
};

const Helmet = ({ theme }: Props) => {
  const { title, description, profile } = {
    title: "題名のないお茶会",
    description: "VRChatで活動するクラシックを中心とした音楽団体です",
    profile: {
      favicon32: { src: "https://www.ateaparty.studio/logo_symbol.png" },
      bigIcon: { src: "https://www.ateaparty.studio/logo_symbol.png" },
      appleIcon: { src: "https://www.ateaparty.studio/logo_symbol.png" },
      favicon16: { src: "https://www.ateaparty.studio/logo_symbol.png" },
    },
  };

  return (
    <ReactHelmet htmlAttributes={{ lang: "jp" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap"
      />

      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={`${profile.favicon32.src}`} />
      <meta name="theme-color" content={theme.colors.background} />
      <meta name="image" content={`${profile.favicon32.src}`} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={`${profile.favicon32.src}`} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={`${profile.bigIcon.src}`} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${profile.bigIcon.src}`} />
      <meta name="twitter:image:src" content={`${profile.bigIcon.src}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={`${profile.bigIcon.src}`} />
      <meta property="og:url" content={`${profile.bigIcon.src}`} />
      <meta name="twitter:url" content={`${profile.bigIcon.src}`} />
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
    </ReactHelmet>
  );
};
export default withTheme(Helmet);
