"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, ArrowRight } from "lucide-react";

const pains = [
  {
    before: "Reagendar es un lío",
    after: "aparecen huecos y dobles reservas.",
  },
  {
    before: "El equipo no comparte contexto",
    after: "el cliente repite lo mismo.",
  },
  {
    before: "La facturación se retrasa",
    after: "cobros lentos y errores.",
  },
];

export default function Problema() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problema"
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(152,129,215,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-medium text-hera-muted/70 bg-hera-surface/40 border border-hera-border/60 rounded-full px-3 py-1.5 mb-5">
              <AlertCircle size={12} className="text-[#9881D7]" />
              El problema real
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5">
              Cuando tu agenda va llena,{" "}
              <span className="text-[#9881D7]">el desorden cuesta más.</span>
            </h2>

            <p className="text-hera-muted leading-relaxed mb-6">
              En negocios con muchas citas y clientes, lo típico es sobrevivir con
              WhatsApp, notas y herramientas sueltas. El resultado: olvidos, cambios
              perdidos y tiempo administrativo que se come el margen.
            </p>

            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#9881D7] mt-2">
              <span className="w-6 h-px bg-[#9881D7]" />
              El puente
            </div>
            <p className="text-hera-muted mt-2 text-sm leading-relaxed">
              Hera convierte el día a día en un sistema: agenda + personas + tareas + facturas, todo conectado.
            </p>
          </motion.div>

          {/* Right — pain cards */}
          <div className="space-y-3">
            {pains.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="hera-card rounded-xl p-4 border border-hera-border/60 group hover:border-[#9881D7]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#9881D7]/60 mt-1.5 flex-shrink-0 group-hover:bg-[#9881D7] transition-colors" />
                  <div>
                    <span className="text-hera-text font-medium text-sm">{pain.before}: </span>
                    <span className="text-hera-muted text-sm">{pain.after}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Before/after visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="hera-card rounded-xl p-5 border border-[#9881D7]/20 mt-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-red-400/80 font-medium mb-2 uppercase tracking-wide">Sin Hera</p>
                  <ul className="space-y-1.5">
                    {["Agenda dispersa", "Sin historial", "Facturas manuales"].map((item) => (
                      <li key={item} className="text-xs text-hera-muted/70 flex items-center gap-1.5">
                        <span className="text-red-400/60">✕</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l border-hera-border pl-4">
                  <p className="text-xs text-[#9881D7] font-medium mb-2 uppercase tracking-wide">Con Hera</p>
                  <ul className="space-y-1.5">
                    {["Todo en un panel", "Historial completo", "Facturas ordenadas"].map((item) => (
                      <li key={item} className="text-xs text-hera-muted flex items-center gap-1.5">
                        <span className="text-[#9881D7]">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
