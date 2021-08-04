import About from "../components/organisms/About";
import Layout from "../components/components/Layout";
import LandingPage from "../components/organisms/Landing";
import Footer from "../components/components/Footer";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <LandingPage></LandingPage>
      <About></About>
      <Footer></Footer>
    </Layout>
  );
}
