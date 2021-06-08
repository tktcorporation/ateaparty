import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from '../components/head';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head 
          title={'題名のないお茶会'}
          site_name={'題名のないお茶会'}
          description={'題名のないお茶会'}
          keyword={'#あ茶会'}
          image={'/logo_yokogumi.svg'}
          url={'https://ateaparty.studio'}
        />

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
