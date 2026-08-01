import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import About from "@/components/About";
import FlagshipProduct from "@/components/FlagshipProduct";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AiAugmented from "@/components/AiAugmented";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <ProofBar />
        <About />
        <FlagshipProduct />
        <Experience />
        <Skills />
        <AiAugmented />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
