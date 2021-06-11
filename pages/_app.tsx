import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "../components/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head
        title={"題名のないお茶会"}
        site_name={"題名のないお茶会"}
        description={"#あ茶会"}
        keyword={"#あ茶会"}
        image={`https://ateaparty.studio/logo_yokogumi.png`}
        url={"https://ateaparty.studio"}
      />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
