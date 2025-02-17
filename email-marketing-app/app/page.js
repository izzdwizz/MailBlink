import About from "./home/About";
import Campaign from "./home/Campaign";
import Footer from "../components/Home-components/Footer";
import Hero from "../components/Home-components/Hero";
import Nav from "../components/Home-components/Nav";
import Services from "./home/Services";
import Subscribe from "./home/Subscribe";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Campaign />
      <Subscribe />
      <Services />
      <Footer />
    </main>
  );
}
