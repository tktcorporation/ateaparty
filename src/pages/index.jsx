import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
          <Image
            src="/logo_yokogumi.svg"
            alt="Ateapaty Logo"
            width={1200}
            height={300}
          />
    </div>
  );
}