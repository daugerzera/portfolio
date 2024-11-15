import About from "./componets/About";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Portfolio from "./componets/Portifolio";
import Skills from "./componets/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Header />
      <main className="flex flex-col gap-6 w-full">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
