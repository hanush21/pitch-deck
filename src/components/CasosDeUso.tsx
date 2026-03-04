"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, User, Briefcase } from "lucide-react";

const cases = [
  {
    icon: <Scissors size={24} />,
    title: "Veterinarias y barberías",
    subtitle: "Agenda llena, rotación alta, cliente recurrente.",
    benefits: [
      "Citas sin huecos ni dobles reservas",
      "Historial de cada cliente a mano",
      "Confirmaciones automáticas por email",
      "Equipo coordinado sin WhatsApp interno",
    ],
    color: "#9881D7",
    tag: "Público principal",
  },
  {
    icon: <User size={24} />,
    title: "Autónomos con volumen",
    subtitle: "Menos administración, más servicio.",
    benefits: [
      "Panel simple adaptado a 1 persona",
      "Facturas ordenadas sin contable",
      "Recordatorios sin esfuerzo manual",
      "Control de tareas y agenda integrado",
    ],
    color: "#E7C978",
    tag: "Ideal para empezar",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Pymes de servicios",
    subtitle: "Equipo + departamentos + control operativo.",
    benefits: [
      "Departamentos y roles definidos",
      "Visibilidad de todo el equipo",
      "Operación escalable sin cambiar de herramienta",
      "Estructura sin volverte 'suite imposible'",
    ],
    color: "#BDB7D6",
    tag: "Para crecer",
  },
];

export default function CasosDeUso() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="casos" ref={ref} className="relative py-20 md:py-28">
      {/* Separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.2), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-hera-muted/70 bg-hera-surface/40 border border-hera-border/60 rounded-full px-3 py-1.5 mb-5">
            Casos de uso
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Gestiona los{" "}
            <span className="hera-gradient-text">clientes, equipo y tu facturación en movimiento.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="hera-card rounded-2xl p-6 border border-hera-border/60 group hover:border-[#9881D7]/25 transition-all duration-300 flex flex-col"
            >
              {/* Tag */}
              <div className="mb-5">
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                  style={{
                    color: c.color,
                    background: `${c.color}15`,
                    border: `1px solid ${c.color}25`,
                  }}
                >
                  {c.tag}
                </span>
              </div>

              {/* Icon + Title */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${c.color}15`,
                  color: c.color,
                  boxShadow: `0 0 16px ${c.color}20`,
                }}
              >
                {c.icon}
              </div>

              <h3 className="text-lg font-bold text-hera-text mb-1">{c.title}</h3>
              <p className="text-sm text-hera-muted/70 mb-5">{c.subtitle}</p>

              {/* Benefits */}
              <ul className="space-y-2.5 flex-1">
                {c.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span style={{ color: c.color }} className="mt-0.5 flex-shrink-0 text-sm">✓</span>
                    <span className="text-sm text-hera-muted">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-hera-muted max-w-lg mx-auto italic">
            "Si tu negocio crece, Hera te da estructura sin volverte{" "}
            <span className="text-hera-text not-italic font-medium">'una suite imposible'</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
