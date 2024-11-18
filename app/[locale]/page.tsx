import About from "@/app/componets/About";
import Footer from "@/app/componets/Footer";
import Header from "@/app/componets/Header";
import Hero from "@/app/componets/Hero";
import Portfolio from "@/app/componets/Portifolio";
import Skills from "@/app/componets/Skills";

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
