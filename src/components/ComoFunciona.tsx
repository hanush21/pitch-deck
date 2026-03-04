"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Headphones, Rocket } from "lucide-react";
import { brandLinks } from "@/config/brand";

const steps = [
  {
    number: "01",
    icon: <UserPlus size={22} />,
    title: "Regístrate en 5 minutos",
    description:
      "Elige tu plan, introduce tus datos y activa tu cuenta. Sin instalar nada, sin pedir a IT. Todo desde el navegador.",
    detail: "Con tarjeta · Sin cargo hasta que termine la prueba",
    color: "#9881D7",
  },
  {
    number: "02",
    icon: <Headphones size={22} />,
    title: "Onboarding 1:1 incluido",
    description:
      "Te acompañamos en una sesión guiada para configurar clientes, citas y equipo. La mayoría de negocios quedan operativos en menos de 1 hora.",
    detail: "Incluido en todos los planes · Sin coste extra",
    color: "#E7C978",
  },
  {
    number: "03",
    icon: <Rocket size={22} />,
    title: "Operativo desde el día 1",
    description:
      "Empieza a gestionar citas reales, enviar confirmaciones por email y coordinar tu equipo desde el primer día. Sin curva de aprendizaje.",
    detail: "Soporte continuo · Cancela cuando quieras",
    color: "#B49AE8",
  },
];

export default function ComoFunciona() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.2), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-hera-muted/70 bg-hera-surface/40 border border-hera-border/60 rounded-full px-3 py-1.5 mb-5">
            Cómo empezar
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-xl mx-auto leading-tight">
            De cero a operativo{" "}
            <span className="hera-gradient-text">en menos de un día.</span>
          </h2>
          <p className="text-hera-muted max-w-md mx-auto">
            Sin implementaciones largas, sin consultores, sin meses de formación. Tres pasos y tu negocio ya funciona con Hera.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.666%+40px)] right-[calc(16.666%+40px)] h-px bg-hera-border/40" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                {/* Icon circle */}
                <div
                  className="relative z-10 w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>
                  {/* Step number */}
                  <span
                    className="absolute -top-2 -right-2 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: step.color, color: "#fff" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="hera-card rounded-2xl p-6 border border-hera-border/60 w-full hover:border-hera-border transition-all duration-300 group">
                  <div
                    className="text-[10px] font-black tracking-widest mb-3"
                    style={{ color: step.color }}
                  >
                    PASO {step.number}
                  </div>
                  <h3 className="text-base font-bold text-hera-text mb-2">{step.title}</h3>
                  <p className="text-sm text-hera-muted leading-relaxed mb-4">{step.description}</p>
                  <p className="text-[11px] text-hera-muted/50 font-medium">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <a
            href={brandLinks.ctaPrimary}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#9881D7] rounded-xl hover:bg-[#B49AE8] shadow-lg shadow-[#9881D7]/20 hover:shadow-[#9881D7]/35 transition-all duration-200 group"
          >
            Empezar ahora — es gratis
            <span className="text-white/70 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <p className="text-xs text-hera-muted/50 mt-3">Onboarding personal incluido en todos los planes.</p>
        </motion.div>
      </div>
    </section>
  );
}
