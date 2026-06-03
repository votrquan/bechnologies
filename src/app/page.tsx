import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Applications from "@/components/Applications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Solutions />
        <Products />
        <Services />
        <Projects />
        <Applications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
