import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import Modulos from "@/components/Modulos";
import CasosDeUso from "@/components/CasosDeUso";
import ComoFunciona from "@/components/ComoFunciona";
import Competencia from "@/components/Competencia";
import EraIA from "@/components/EraIA";
import Testimonios from "@/components/Testimonios";
import Confianza from "@/components/Confianza";
import Roadmap from "@/components/Roadmap";
import Traccion from "@/components/Traccion";
import Precios from "@/components/Precios";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative pb-20 md:pb-0">
      <Header />
      <Hero />
      <Problema />
      <Solucion />
      <ComoFunciona />
      <Modulos />
      <CasosDeUso />
      <Competencia />
      <EraIA />
      <Testimonios />
      <Confianza />
      <Roadmap />
      <Traccion />
      <Precios />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
