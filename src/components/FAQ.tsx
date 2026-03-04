"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Por qué pedís tarjeta para la prueba?",
    a: "Pedimos tarjeta para activar el onboarding real y evitar registros spam. No se cobra nada hasta que finalice el período de prueba. Puedes cancelar antes sin coste.",
  },
  {
    q: "¿Cuánto tardamos en empezar a operar?",
    a: "En la mayoría de casos, menos de un día. El onboarding incluido está diseñado para que configures lo esencial (clientes, citas, equipo) en pocas horas.",
  },
  {
    q: "¿Me ayudáis a configurarlo (onboarding)?",
    a: "Sí. Todos los planes incluyen onboarding. Te acompañamos para que no tengas que descubrir nada solo. Si necesitas configuración prioritaria, el plan Business lo incluye.",
  },
  {
    q: "¿Sirve si somos solo 1–2 personas?",
    a: "Perfecto para eso. El plan Básico está diseñado para autónomos y micro-equipos. Tienes clientes, citas, tareas y facturas sin pagar por lo que no usas.",
  },
  {
    q: "¿Y si somos una pyme con equipo?",
    a: "Los planes Pro y Business incluyen empleados, departamentos y configuración avanzada. Hera escala contigo sin que tengas que cambiar de herramienta.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Aplicamos cifrado y compresión desde backend. Los accesos están controlados por organización con roles y permisos. No es una feature cosmética, está en la arquitectura.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Completamente libre. Sin permanencia, sin llamadas de retención, sin letra pequeña. Cancelas desde tu panel en cualquier momento.",
  },
  {
    q: "¿Qué incluye exactamente el plan Básico?",
    a: "Clientes, Citas, Tareas, Facturas y soporte por email. Todo lo que necesitas para arrancar con operación ordenada antes de escalar.",
  },
  {
    q: "¿Hay diferencia entre Pro y Business?",
    a: "Pro añade Empleados, Departamentos, Chatbot y notificaciones. Business incluye todo eso más configuración avanzada y onboarding prioritario para negocios con más carga.",
  },
  {
    q: "¿Puedo exportar mis datos si me voy?",
    a: "Sí. Tus datos son tuyos. Puedes exportarlos en cualquier momento desde el panel.",
  },
  {
    q: "¿Funcionan las notificaciones por email desde el día 1?",
    a: "Sí. Los recordatorios y confirmaciones por email están integrados y funcionan desde que activas la prueba.",
  },
  {
    q: "¿Hay planes para varios centros o sedes?",
    a: "Multi-sede está en el roadmap (Later, 12–24 meses). Hoy, Enterprise puede cubrir casos especiales. Habla con nosotros si lo necesitas pronto.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="relative py-20 md:py-28">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.2), transparent)" }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-hera-muted/70 bg-hera-surface/40 border border-hera-border/60 rounded-full px-3 py-1.5 mb-5">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-hera-muted">
            Respuestas honestas a las dudas más comunes.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`hera-card rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "border-[#9881D7]/30"
                  : "border-hera-border/60 hover:border-[#9881D7]/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start gap-4 px-5 py-4 text-left"
              >
                <span
                  className={`text-xs font-bold w-5 flex-shrink-0 mt-0.5 transition-colors ${
                    openIndex === i ? "text-[#9881D7]" : "text-hera-muted/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-sm font-medium flex-1 transition-colors ${
                    openIndex === i ? "text-hera-text" : "text-hera-muted"
                  }`}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    size={16}
                    className={openIndex === i ? "text-[#9881D7]" : "text-hera-muted/40"}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pl-14">
                      <p className="text-sm text-hera-muted leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
