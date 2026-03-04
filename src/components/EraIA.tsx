"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, FileSearch, Bot } from "lucide-react";

const cards = [
  {
    icon: <Mail size={22} />,
    title: "Recordatorios por email",
    description:
      "Reduce ausencias y confirmaciones manuales. El sistema avisa al cliente automáticamente sin que tú toques nada.",
    tag: "Activo hoy",
    color: "#9881D7",
  },
  {
    icon: <FileSearch size={22} />,
    title: "Asistencia en facturas",
    description:
      "Lectura asistida para acelerar la carga y el orden documental. Menos trabajo repetitivo en administración.",
    tag: "Activo hoy",
    color: "#E7C978",
  },
  {
    icon: <Bot size={22} />,
    title: "Chatbot operativo",
    description:
      "Responde, filtra y deriva consultas sin saturar al equipo. Atención constante con control total sobre las reglas.",
    tag: "Activo hoy",
    color: "#B49AE8",
  },
];

export default function EraIA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ia" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Section bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(152,129,215,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(152,129,215,0.2), transparent)",
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
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#9881D7] bg-[#9881D7]/10 border border-[#9881D7]/25 rounded-full px-3 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9881D7] animate-pulse" />
            Era IA
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
            Automatización útil: menos tareas repetitivas,{" "}
            <span className="hera-gradient-text">más tiempo para clientes.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="hera-card rounded-2xl p-6 border border-hera-border/60 group hover:border-[#9881D7]/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top left, ${card.color}08 0%, transparent 60%)`,
                }}
              />

              {/* Tag */}
              <div className="flex justify-between items-start mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${card.color}15`,
                    color: card.color,
                    boxShadow: `0 0 20px ${card.color}15`,
                  }}
                >
                  {card.icon}
                </div>
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                  style={{
                    color: card.color,
                    background: `${card.color}12`,
                    border: `1px solid ${card.color}22`,
                  }}
                >
                  {card.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-hera-text mb-3">{card.title}</h3>
              <p className="text-sm text-hera-muted leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Microcopy */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-hera-muted/60 text-sm italic">
            "IA cuando aporta valor.{" "}
            <span className="text-hera-muted not-italic font-medium">Control cuando importa.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
