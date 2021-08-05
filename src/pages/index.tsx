import About from "../components/organisms/About";
import Layout from "../components/components/Layout";
import LandingPage from "../components/organisms/Landing";
import Footer from "../components/components/Footer";
import {Event} from "../components/organisms/Event";
import Header from "../components/components/Header";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header></Header>
      <LandingPage></LandingPage>
      <About></About>
      <Event></Event>
      <Footer></Footer>
    </Layout>
  );
}
