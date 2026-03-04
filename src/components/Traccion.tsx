"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Target } from "lucide-react";
import { brandMetrics } from "@/config/brand";

const milestones = [
  { label: "Plataforma en producción", description: "Sistema completo lanzado y operativo. Gestión de citas, clientes y equipo funcionando.", done: true },
  { label: "Automatización de comunicaciones", description: "Recordatorios y confirmaciones por email activos. Reducción de no-shows desde el primer día.", done: true },
  { label: "Módulo de facturación", description: "Emisión y seguimiento de facturas integrado en el mismo panel.", done: true },
  { label: "Chatbot de atención", description: "Asistente automático para captura de citas y respuestas frecuentes.", done: true },
  { label: "Pilotos activos", description: "Negocios reales usando el sistema en su operación diaria. Feedback directo del sector.", done: true },
];

export default function Traccion() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="traccion" ref={ref} className="relative py-20 md:py-28">
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            En producción · Fase piloto activa
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Producto real en un mercado{" "}
            <span className="text-[#9881D7]">con 86.000 negocios sin solución adaptada.</span>
          </h2>
          <p className="text-hera-muted max-w-xl mx-auto">
            El 91% de salones, barberías y centros de estética en España son micropymes o autónomos. Ningún CRM del mercado está diseñado específicamente para ellos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-hera-muted/60 uppercase tracking-wider mb-5">
              Hitos completados
            </h3>
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="hera-card rounded-xl p-4 border border-hera-border/60 flex items-start gap-4"
                >
                  <div className="w-7 h-7 rounded-full bg-[#9881D7]/15 border border-[#9881D7]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={14} className="text-[#9881D7]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-hera-text">{m.label}</p>
                    <p className="text-xs text-hera-muted/70 mt-0.5">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics + goal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Stage + market metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="hera-card rounded-xl p-5 border border-[#9881D7]/20 text-center">
                <p className="text-3xl font-black text-[#9881D7] mb-1">+1 año</p>
                <p className="text-xs text-hera-muted/70">Producto en producción</p>
              </div>
              <div className="hera-card rounded-xl p-5 border border-[#E7C978]/20 text-center">
                <p className="text-3xl font-black text-[#E7C978] mb-1">86K</p>
                <p className="text-xs text-hera-muted/70">Negocios sin CRM adaptado en España</p>
              </div>
            </div>

            {/* Market opportunity card */}
            <div className="hera-card rounded-2xl p-7 border border-[#E7C978]/25 relative overflow-hidden">
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(231,201,120,0.08) 0%, transparent 70%)" }}
              />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E7C978]/15 border border-[#E7C978]/25 flex items-center justify-center flex-shrink-0">
                  <Target size={22} className="text-[#E7C978]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#E7C978] uppercase tracking-wide mb-1">
                    Oportunidad de mercado
                  </p>
                  <p className="text-2xl font-black text-hera-text mb-2">
                    ~280M€ TAM en España
                  </p>
                  <p className="text-sm text-hera-muted/70 leading-relaxed">
                    Mercado de software de gestión para salones y servicios en España. El sector europeo crece al 11% anual y el 90% de los negocios aún gestiona sin herramienta digital.
                  </p>
                </div>
              </div>
            </div>

            {/* Why now */}
            <div className="hera-card rounded-xl p-5 border border-hera-border/60">
              <p className="text-xs text-hera-muted/60 mb-3 uppercase tracking-wide font-medium">Por qué ahora</p>
              <ul className="space-y-2.5">
                {[
                  "1 de cada 5 citas termina en no-show sin gestión activa — 18-22% de pérdida directa.",
                  "Los CRMs generalistas cuestan 5-10× más y requieren meses de implementación.",
                  "La digitalización de pymes en España crece al 14% anual (Eurostat 2023).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#9881D7] mt-0.5 flex-shrink-0">→</span>
                    <span className="text-sm text-hera-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
