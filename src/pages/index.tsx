import About from "../components/organisms/About";
import LandingPage from "../components/organisms/Landing";
import Footer from "../components/components/Footer";
import { Event } from "../components/organisms/Event";
import Header from "../components/components/Header";
import { News } from "../components/organisms/News";
import { History } from "../components/organisms/History";
import type { NextPage } from "next";
import { Helmet } from "../components/components/Helmet";

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
