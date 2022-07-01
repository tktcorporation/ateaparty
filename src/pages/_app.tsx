import "../styles/globals.css";
import type { AppProps } from "next/app";
import FirebaseProvider from "../../config/firebase";
import Head from "next/head";
import { Logo } from "../domain/Logo";
import { BASE_URL, TITLE } from "../components/utils/constants";
import { theme } from "../theme";
import { useEffect } from "react";
import { analytics } from "../firebase";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  if (process.env.NODE_ENV == "production") {
  useEffect(() => {
    analytics.app.automaticDataCollectionEnabled = true;
  }, []);
  }

  return <Component {...pageProps} />;
}
export default MyApp;
