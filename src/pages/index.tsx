import About from "../components/organisms/About";
import Layout from "../components/components/Layout";
import LandingPage from "../components/organisms/Landing";
import Footer from "../components/components/Footer";
import {Event} from "../components/organisms/Event";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <LandingPage></LandingPage>
      <About></About>
      <Event></Event>
      <Footer></Footer>
    </Layout>
  );
}
