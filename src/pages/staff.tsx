import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "../components/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/logo_yokogumi.svg"
          alt="Ateapaty Logo"
          width={1200}
          height={300}
        />
      </main>
    </div>
  );
}
