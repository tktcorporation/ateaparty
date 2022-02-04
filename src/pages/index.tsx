import About from "../components/organisms/About";
import Layout from "../components/components/Layout";
import LandingPage from "../components/organisms/Landing";
import Footer from "../components/components/Footer";
import { Event } from "../components/organisms/Event";
import Header from "../components/components/Header";
import { News } from "../components/organisms/News";
import axios from "axios";
// import csv-parser
import { parse } from "csv-parse";

export default function Home(): JSX.Element {
  const sheet = async () => {
    const { data } = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQuPJLzyXZYO7bXaSxfbO0MUlFYCBgKmXi541q5RmS5Mtaan-NhJb6_nIEPLywGpGSebPLwskWYnLS/pub?gid=0&single=true&output=csv"
    );
    console.log(data);
    const parsed = parse(data);
    console.log(parsed.read());
    return data;
  };
  sheet();

  return (
    <Layout>
      <Header></Header>
      <LandingPage></LandingPage>
      <About></About>
      <Event></Event>
      <News></News>
      <Footer></Footer>
    </Layout>
  );
}
