import Header from "./components/Header";
import Hero from "./components/Hero";
import TopBar from "./components/TopBar";
import Category from"./components/Category";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <Category/>
      <Footer />
    </div>
  );
}

