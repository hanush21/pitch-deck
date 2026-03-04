"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutDashboard, Users2, TrendingUp, ArrowRight } from "lucide-react";
import { brandLinks } from "@/config/brand";

const moves = [
  {
    number: "01",
    icon: <LayoutDashboard size={22} />,
    title: "Organiza",
    description: "Clientes y citas siempre a mano, con historial y contexto.",
    color: "#9881D7",
  },
  {
    number: "02",
    icon: <Users2 size={22} />,
    title: "Coordina",
    description: "Empleados, departamentos y tareas alineados: cada uno sabe qué toca hoy.",
    color: "#B49AE8",
  },
  {
    number: "03",
    icon: <TrendingUp size={22} />,
    title: "Controla y cobra",
    description: "Facturas ordenadas y operación trazable para decidir sin adivinar.",
    color: "#E7C978",
  },
];

export default function Solucion() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucion" ref={ref} className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-hera-muted/70 bg-hera-surface/40 border border-hera-border/60 rounded-full px-3 py-1.5 mb-5">
            La solución
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto">
            Un sistema sencillo para un negocio{" "}
            <span className="hera-gradient-text">que se mueve rápido.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {moves.map((move, i) => (
            <motion.div
              key={move.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative hera-card rounded-2xl p-7 border border-hera-border/60 group hover:border-[#9881D7]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Number watermark */}
              <span
                className="absolute -top-3 -right-2 text-7xl font-black opacity-[0.06] select-none"
                style={{ color: move.color }}
              >
                {move.number}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `rgba(${move.color === "#9881D7" ? "152,129,215" : move.color === "#B49AE8" ? "180,154,232" : "231,201,120"},0.12)`,
                  color: move.color,
                  boxShadow: `0 0 20px ${move.color}20`,
                }}
              >
                {move.icon}
              </div>

              {/* Arrow connector (visible on md+, hidden on last) */}
              {i < moves.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-7 h-7 rounded-full bg-hera-surface border border-hera-border flex items-center justify-center">
                    <ArrowRight size={12} className="text-[#9881D7]" />
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold mb-3" style={{ color: move.color }}>
                {move.title}
              </h3>
              <p className="text-hera-muted text-sm leading-relaxed">{move.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={brandLinks.ctaPrimary}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#9881D7] rounded-xl hover:bg-[#B49AE8] shadow-lg shadow-[#9881D7]/20 hover:shadow-[#9881D7]/35 transition-all duration-200"
          >
            Probar gratis
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
