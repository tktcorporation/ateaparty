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

      {/* <footer className={styles.footer}>
          <Image
            src="/logo_yokogumi.svg"
            alt="Ateapaty Logo"
            width={292}
            height={50}
          />
      </footer> */}
      <Footer></Footer>
    </Layout>
  );
}
