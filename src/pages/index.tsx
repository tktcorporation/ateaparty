import About from "../components/organisms/About";
import LandingPage from "../components/organisms/Landing";
import Footer from "../components/components/Footer";
import { Event } from "../components/organisms/Event";
import Header from "../components/components/Header";
import { News } from "../components/organisms/News";
import { History } from "../components/organisms/History";
import type { NextPage } from "next";
import Head from "next/head";
import { BASE_URL, TITLE } from "../components/utils/constants";
import { Logo } from "../domain/Logo";
import { theme } from "../theme";

const Helmet = () => {
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
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {/* <meta name="viewport" content="width=device-width" /> */}
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

const Home: NextPage = () => {
  return (
    <div className="">
      <Helmet />
      {/* {/* <Layout> */}

      <Header />
      <LandingPage />
      <About />
      <Event />
      <History />
      <News />
      <Footer />
      {/* </Layout> */}
    </div>
  );
};
export default Home;
