import Header from "./components/Header";
import Hero from "./components/Hero";
import SolLuna from "./components/SolLuna";
import Coleccion from "./components/Coleccion";
import Kits from "./components/Kits";
import Descubre from "./components/Descubre";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SolLuna />
      <Coleccion />
      <Kits />
      <Descubre />
      <Newsletter />
      <Footer />
    </main>
  );
}