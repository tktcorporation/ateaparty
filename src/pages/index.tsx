import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "../components/head";
import About from "../components/organisms/About";
import Layout from "../components/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image
            src="/logo_yokogumi.svg"
            alt="Ateapaty Logo"
            width={1200}
            height={300}
          />
          <About></About>
        </main>

        {/* <footer className={styles.footer}>
          <Image
            src="/logo_yokogumi.svg"
            alt="Ateapaty Logo"
            width={292}
            height={50}
          />
      </footer> */}
      </div>
    </Layout>
  );
}
