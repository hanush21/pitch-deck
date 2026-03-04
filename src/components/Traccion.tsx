"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Target } from "lucide-react";
import { brandMetrics } from "@/config/brand";

const milestones = [
  { label: "MVP live", description: "Producto real en producción con flujo completo de operación.", done: true },
  { label: "Emails automáticos", description: "Recordatorios y confirmaciones por email funcionando.", done: true },
  { label: "Cifrado aplicado", description: "Seguridad desde backend, no como feature cosmética.", done: true },
  { label: "Módulo Facturas", description: "Gestión de facturación y orden administrativo activo.", done: true },
  { label: "Chatbot operativo", description: "Automatización de respuestas y captura de intención.", done: true },
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
            Estado actual
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            MVP en producción.{" "}
            <span className="text-[#9881D7]">En fase de adopción y expansión.</span>
          </h2>
          <p className="text-hera-muted max-w-xl mx-auto">
            Producto real con módulos activos. Sin métricas infladas. Construcción seria.
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
            {/* Metric placeholders — only shown if values set */}
            {(brandMetrics.pilotosActivos || brandMetrics.solicitudesDemo) && (
              <div className="grid grid-cols-2 gap-4">
                {brandMetrics.pilotosActivos && (
                  <div className="hera-card rounded-xl p-5 border border-[#9881D7]/20 text-center">
                    <p className="text-3xl font-black text-[#9881D7] mb-1">
                      {brandMetrics.pilotosActivos}
                    </p>
                    <p className="text-xs text-hera-muted/70">Pilotos activos</p>
                  </div>
                )}
                {brandMetrics.solicitudesDemo && (
                  <div className="hera-card rounded-xl p-5 border border-[#E7C978]/20 text-center">
                    <p className="text-3xl font-black text-[#E7C978] mb-1">
                      {brandMetrics.solicitudesDemo}
                    </p>
                    <p className="text-xs text-hera-muted/70">Solicitudes de demo</p>
                  </div>
                )}
              </div>
            )}

            {/* Target goal card */}
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
                    Objetivo de estabilidad
                  </p>
                  <p className="text-2xl font-black text-hera-text mb-2">
                    {brandMetrics.targetClientes} clientes fijos
                  </p>
                  <p className="text-sm text-hera-muted/70 leading-relaxed">
                    Objetivo claro para salones y servicios con volumen. La base sobre la que construimos producto, soporte y crecimiento.
                  </p>
                </div>
              </div>
            </div>

            {/* What we show without numbers */}
            <div className="hera-card rounded-xl p-5 border border-hera-border/60">
              <p className="text-xs text-hera-muted/60 mb-3 uppercase tracking-wide font-medium">Por qué importa</p>
              <ul className="space-y-2.5">
                {[
                  "Producto real con flujo completo de operación.",
                  "Seguridad aplicada desde el día 1, no al final.",
                  "Onboarding diseñado para que operes desde el primer día.",
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
