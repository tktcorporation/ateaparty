import "../styles/globals.css";
import type { AppProps } from "next/app";
import FirebaseProvider from "../../config/firebase";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <FirebaseProvider>
        <Component {...pageProps} />
      </FirebaseProvider>
    </>
  );
}
export default MyApp;
