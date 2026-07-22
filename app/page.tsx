import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import IndependentProjects from "@/components/IndependentProjects";
import ProfessionalWork from "@/components/ProfessionalWork";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <IndependentProjects />
        <ProfessionalWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
