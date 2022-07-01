import About from "../components/organisms/About";
import Layout from "../components/components/Layout";
import LandingPage from "../components/organisms/Landing";
import Footer from "../components/components/Footer";
import { Event } from "../components/organisms/Event";
import Header from "../components/components/Header";
import { News } from "../components/organisms/News";
import { History } from "../components/organisms/History";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Layout>
        <Header />
        <LandingPage />
        <About />
        <Event />
        <History />
        <News />
        <Footer />
      </Layout>
    </div>
  );
};
export default Home;
