"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { brandLinks } from "@/config/brand";

const competitors = [
  {
    name: "Salesforce",
    tagline: "Potente, pero pensado para enterprise",
    price: "desde ~75 €/usuario/mes",
    pain: "Requiere equipo de IT o consultor para implementarlo. La curva de aprendizaje es alta y el coste es prohibitivo para autónomos o pymes que solo quieren organizar sus citas y equipo.",
    color: "#00A1E0",
    initial: "#00A1E0",
  },
  {
    name: "Odoo",
    tagline: "Flexible, pero laberíntico",
    price: "desde ~24 €/usuario/mes + módulos",
    pain: "Buena cobertura, pero montar lo que necesitas requiere un partner o mucho tiempo técnico. No está diseñado para que un autónomo lo configure solo en un día.",
    color: "#714B67",
    initial: "#714B67",
  },
  {
    name: "Zoho",
    tagline: "Completo, pero saturado de apps",
    price: "desde ~14 €/usuario/mes + varias apps",
    pain: "Suite de más de 40 aplicaciones que acaban abrumando. Para gestionar citas, clientes, equipo y facturas necesitas combinar varios productos distintos.",
    color: "#E42527",
    initial: "#E42527",
  },
];

const rows = [
  { feature: "Diseñado para salones y servicios", hera: true },
  { feature: "Operativo en menos de 1 día", hera: true },
  { feature: "Onboarding incluido en el precio", hera: true },
  { feature: "Sin IT ni partner necesario", hera: true },
  { feature: "Precio accesible desde 18 €/mes", hera: true },
  { feature: "Citas + equipo + facturas en un panel", hera: true },
  { feature: "Sin permanencia ni contrato", hera: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Competencia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="competencia" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.2), transparent)" }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(152,129,215,0.05) 0%, transparent 65%)",
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
            ¿Por qué Hera?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto leading-tight">
            Las grandes suites no están hechas{" "}
            <span className="hera-gradient-text">para ti.</span>
          </h2>
          <p className="text-hera-muted max-w-xl mx-auto leading-relaxed">
            Salesforce, Odoo y Zoho son herramientas potentes, pero están diseñadas para empresas con equipos técnicos, presupuestos altos y meses de implementación. Hera es distinto.
          </p>
        </motion.div>

        {/* Competitor pain cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {competitors.map((c, i) => (
            <motion.div
              key={c.name}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="hera-card rounded-2xl p-6 border border-hera-border/60 group hover:border-hera-border transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle color tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${c.color}08 0%, transparent 60%)` }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div>
                  <h3 className="text-base font-bold text-hera-text mb-0.5">{c.name}</h3>
                  <p className="text-xs text-hera-muted/60">{c.tagline}</p>
                </div>
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5 flex-shrink-0"
                  style={{
                    color: c.color,
                    background: `${c.color}12`,
                    border: `1px solid ${c.color}25`,
                  }}
                >
                  {c.price}
                </span>
              </div>

              <p className="text-sm text-hera-muted/80 leading-relaxed relative z-10">{c.pain}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hera-card rounded-2xl border border-hera-border/60 overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto] gap-0 border-b border-hera-border/60">
            <div className="px-6 py-4">
              <p className="text-xs font-semibold text-hera-muted/60 uppercase tracking-wider">Característica</p>
            </div>
            <div className="px-6 py-4 border-l border-hera-border/60 text-center min-w-[100px]">
              <p className="text-xs font-bold text-[#9881D7] uppercase tracking-wider">Hera</p>
            </div>
            <div className="px-6 py-4 border-l border-hera-border/60 text-center min-w-[120px]">
              <p className="text-xs font-semibold text-hera-muted/50 uppercase tracking-wider">Competencia</p>
            </div>
          </div>

          {/* Table rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
              className="grid grid-cols-[1fr_auto_auto] gap-0 border-b border-hera-border/40 last:border-0"
            >
              <div className="px-6 py-4">
                <p className="text-sm text-hera-text font-medium">{row.feature}</p>
              </div>
              <div className="px-6 py-4 border-l border-hera-border/40 flex items-center justify-center min-w-[100px]">
                <span className="w-6 h-6 rounded-full bg-[#9881D7]/15 flex items-center justify-center">
                  <Check size={13} className="text-[#9881D7]" strokeWidth={2.5} />
                </span>
              </div>
              <div className="px-6 py-4 border-l border-hera-border/40 flex items-center justify-center min-w-[120px]">
                <span className="w-6 h-6 rounded-full bg-red-400/10 flex items-center justify-center">
                  <X size={13} className="text-red-400/70" strokeWidth={2.5} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <p className="text-hera-muted mb-5 text-sm max-w-md mx-auto">
            No somos una suite. Somos{" "}
            <span className="text-hera-text font-medium">la herramienta que un negocio de servicios necesita</span>{" "}
            para operar el día a día sin complicarse.
          </p>
          <a
            href={brandLinks.ctaPrimary}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#9881D7] rounded-xl hover:bg-[#B49AE8] shadow-lg shadow-[#9881D7]/20 hover:shadow-[#9881D7]/35 transition-all duration-200 group"
          >
            Probar gratis
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
