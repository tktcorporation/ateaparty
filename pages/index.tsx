import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>あ茶会</title>
        <meta name="description" content="#あ茶会" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Image
            src="/logo_yokogumi.svg"
            alt="Ateapaty Logo"
            width={1200}
            height={300}
          />
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
  );
}
