"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pasé de gestionar todo por WhatsApp y notas en papel a tenerlo todo en un panel. La reducción de no-shows fue inmediata: en el primer mes dejé de perder dos citas a la semana.",
    name: "Laura M.",
    role: "Propietaria · Salón con 3 estilistas",
    location: "Barcelona",
    initials: "LM",
    color: "#9881D7",
    result: "−2 no-shows/semana",
  },
  {
    quote:
      "Soy autónomo y no tenía tiempo para aprender un CRM complejo. Con Hera estuve funcionando en menos de dos horas. El onboarding fue clave, alguien me guió paso a paso.",
    name: "Carlos R.",
    role: "Barbero autónomo",
    location: "Barcelona",
    initials: "CR",
    color: "#E7C978",
    result: "Operativo en < 2h",
  },
  {
    quote:
      "Ahora al cierre del mes veo exactamente cuánto he facturado, qué empleadas rinden más y qué clientes repiten. Antes no tenía ni idea de esos números. Es como tener una dirección de negocio.",
    name: "Ana P.",
    role: "Directora · Centro de estética",
    location: "Barcelona",
    initials: "AP",
    color: "#B49AE8",
    result: "Visibilidad total del negocio",
  },
];

export default function Testimonios() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonios" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.2), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(152,129,215,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-hera-muted/70 bg-hera-surface/40 border border-hera-border/60 rounded-full px-3 py-1.5 mb-5">
            Clientes reales
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Negocios que ya{" "}
            <span className="hera-gradient-text">operan con Hera.</span>
          </h2>
          <p className="text-hera-muted max-w-md mx-auto">
            Resultados reales de autónomos y pequeños equipos que cambiaron el caos por control.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="hera-card rounded-2xl p-6 border border-hera-border/60 hover:border-hera-border transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              {/* Glow on hover */}
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse, ${t.color}12 0%, transparent 70%)` }}
              />

              {/* Quote icon */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: `${t.color}15`, border: `1px solid ${t.color}25` }}
              >
                <Quote size={15} style={{ color: t.color }} />
              </div>

              {/* Quote text */}
              <p className="text-sm text-hera-muted leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full mb-5 self-start"
                style={{
                  color: t.color,
                  background: `${t.color}12`,
                  border: `1px solid ${t.color}25`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-hera-border/50">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-hera-text">{t.name}</p>
                  <p className="text-[11px] text-hera-muted/60">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          className="text-center text-xs text-hera-muted/40 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Testimonios de usuarios en fase piloto. Los resultados varían según el volumen y tipo de negocio.
        </motion.p>
      </div>
    </section>
  );
}
