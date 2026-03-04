"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Zap, Rocket, Globe } from "lucide-react";
import DomeBackground from "./DomeBackground";

const phases = [
  {
    id: "now",
    label: "Now",
    period: "0–3 meses",
    icon: <Zap size={20} />,
    color: "#9881D7",
    items: [
      "Perfeccionar onboarding para cada sector",
      "Plantillas predefinidas por tipo de negocio",
      "Mejora de UX para alto volumen de citas",
      "Estabilidad y rendimiento del sistema",
    ],
  },
  {
    id: "next",
    label: "Next",
    period: "3–12 meses",
    icon: <Rocket size={20} />,
    color: "#B49AE8",
    items: [
      "Automatizaciones avanzadas de flujo",
      "Analítica de operación y tendencias",
      "Integraciones con herramientas clave",
      "Panel de métricas por departamento",
    ],
  },
  {
    id: "later",
    label: "Later",
    period: "12–24 meses",
    icon: <Globe size={20} />,
    color: "#E7C978",
    items: [
      "Escalado multi-sede y multi-organización",
      "Verticales específicos por sector",
      "Automatización avanzada de captación",
      "API abierta para integraciones a medida",
    ],
  },
];

export default function Roadmap() {
  const ref = useRef(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !lineRef.current) return;
    lineRef.current.style.transition = "width 1.8s cubic-bezier(0.22,1,0.36,1)";
    lineRef.current.style.width = "100%";
  }, [inView]);

  return (
    <section id="roadmap" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <DomeBackground />
      </div>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.25), transparent)" }}
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
            Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
            Visión clara: de operación ordenada{" "}
            <span className="hera-gradient-text">→ a crecimiento automatizado.</span>
          </h2>
          <p className="text-hera-muted max-w-lg mx-auto text-sm">
            Hoja de ruta real, sin prometer módulos que no existen hoy.
          </p>
        </motion.div>

        {/* Progress line (desktop) */}
        <div className="hidden md:block mb-10 px-12">
          <div className="relative h-1.5 bg-hera-border/60 rounded-full overflow-hidden">
            <div
              ref={lineRef}
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: "0%",
                background: "linear-gradient(90deg, #9881D7, #B49AE8, #E7C978)",
              }}
            />
          </div>
          <div className="flex justify-between mt-2 px-0">
            {phases.map((p) => (
              <span key={p.id} className="text-xs text-hera-muted/50">{p.period}</span>
            ))}
          </div>
        </div>

        {/* Phase cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="hera-card rounded-2xl p-6 border border-hera-border/60 group hover:border-[#9881D7]/25 transition-all duration-300 relative overflow-hidden"
            >
              {/* Phase glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse, ${phase.color}15 0%, transparent 70%)`,
                }}
              />

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${phase.color}18`,
                      color: phase.color,
                      boxShadow: `0 0 16px ${phase.color}15`,
                    }}
                  >
                    {phase.icon}
                  </div>
                  <div>
                    <p
                      className="text-xl font-black tracking-tight"
                      style={{ color: phase.color }}
                    >
                      {phase.label}
                    </p>
                    <p className="text-xs text-hera-muted/60">{phase.period}</p>
                  </div>
                </div>

                {/* Pitch-deck badge */}
                <div
                  className="text-[10px] font-semibold px-2 py-1 rounded-full border"
                  style={{
                    color: phase.color,
                    borderColor: `${phase.color}30`,
                    background: `${phase.color}10`,
                  }}
                >
                  {i === 0 ? "En curso" : i === 1 ? "Próximo" : "Visión"}
                </div>
              </div>

              {/* Items */}
              <ul className="space-y-2.5">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div
                      className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: phase.color }}
                    />
                    <span className="text-sm text-hera-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
