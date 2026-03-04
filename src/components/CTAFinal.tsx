"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { brandLinks } from "@/config/brand";
import DomeBackground from "./DomeBackground";

export default function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <DomeBackground />
      </div>

      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(152,129,215,0.12) 0%, transparent 65%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(152,129,215,0.3), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Small label */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#9881D7] bg-[#9881D7]/10 border border-[#9881D7]/25 rounded-full px-3 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9881D7] animate-pulse" />
            Empieza hoy
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
            Pruébalo hoy.{" "}
            <span className="hera-gradient-text">Si encaja, te quedas.</span>
            <br />
            Si no, lo cierras.
          </h2>

          {/* Subtitle */}
          <p className="text-hera-muted text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Activa tu prueba, te contactamos para el onboarding 1:1, y en menos de 24 horas tu negocio opera con Hera. Sin instalaciones, sin permanencia.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
            <a
              href={brandLinks.ctaPrimary}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-[#9881D7] rounded-xl hover:bg-[#B49AE8] shadow-2xl shadow-[#9881D7]/30 hover:shadow-[#9881D7]/50 transition-all duration-200 group animate-glow-pulse"
            >
              Probar gratis
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href={`mailto:${brandLinks.ctaContact}`}
              className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium text-hera-muted hover:text-hera-text border border-hera-border hover:border-[#9881D7]/40 rounded-xl transition-all duration-200"
            >
              Hablar con nosotros
            </a>
          </div>

          {/* Microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["Con tarjeta", "Onboarding incluido", "Cancelación simple"].map(
              (text, i) => (
                <span key={text} className="flex items-center gap-1.5 text-sm text-hera-muted/60">
                  {i > 0 && (
                    <span className="w-1 h-1 rounded-full bg-hera-border mr-2" />
                  )}
                  <span className="text-[#9881D7]">✓</span>
                  {text}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
