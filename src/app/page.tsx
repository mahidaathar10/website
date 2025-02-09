import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StyleSection from "./components/StyleSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Hero />
      <StyleSection />
      <ProductSection />
      <Footer />
    </div>
  );
}
