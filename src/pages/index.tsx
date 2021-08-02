import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "../components/head";
import About from "../components/organisms/About";
import Layout from "../components/components/Layout";
import LandingPage from "../components/organisms/Landing";
import Footer from "../components/components/Footer";

export default function Home() {
  return (
    <Layout>
      <LandingPage></LandingPage>
      <About></About>
      <Footer></Footer>
    </Layout>
  );
}
