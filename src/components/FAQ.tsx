"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Por qué pedís tarjeta para la prueba?",
    a: "La pedimos para activar la cuenta real y evitar registros falsos que nos quitan tiempo de soporte. Puedes cancelar antes de que termine la prueba y no se te cobrará nada.",
  },
  {
    q: "¿Cuánto tardamos en empezar a operar?",
    a: "En la mayoría de casos, puedes empezar el mismo día. Con el onboarding 1:1 normalmente lo dejamos listo en 24–72 horas, según lo que haya que configurar.",
  },
  {
    q: "¿Me ayudáis a configurarlo?",
    a: "Sí. Incluimos onboarding 1:1 en todos los planes para dejar agenda, equipo y estructura funcionando contigo.",
  },
  {
    q: "¿Sirve si somos solo 1–2 personas?",
    a: "Sí. El plan Básico está pensado para autónomos y microequipos: agenda, clientes, tareas y facturas sin complicarte.",
  },
  {
    q: "¿Y si somos una pyme con equipo?",
    a: "Sí. Cuando hay varias personas, tiene sentido usar Empleados/Departamentos y organizar roles y carga diaria. Te ayudamos a adaptarlo a vuestro flujo.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí, tratamos los datos como algo crítico y aplicamos medidas de seguridad a nivel de acceso y protección de información. Aun así, estamos en fase early y seguimos reforzando continuamente la plataforma.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. No hay permanencia: puedes cancelar cuando quieras desde tu cuenta o pidiéndonoslo, y no renovamos el siguiente ciclo.",
  },
  {
    q: "¿Qué incluye exactamente el plan Básico?",
    a: "Incluye Agenda de citas, Clientes, Tareas y Facturas, con onboarding 1:1 incluido. Es la base para operar el día a día con orden.",
  },
  {
    q: "¿Hay diferencia entre Pro y Business?",
    a: "Sí. Pro está pensado para salones con volumen y añade gestión de equipo/estructura y automatización. Business está orientado a equipos más exigentes e incluye configuración y soporte más prioritarios.",
  },
  {
    q: "¿Puedo exportar mis datos si me voy?",
    a: "Sí. Si decides irte, te facilitamos la exportación de tus datos para que no quedes bloqueado.",
  },
  {
    q: "¿Funcionan las notificaciones por email desde el día 1?",
    a: "Sí. Las notificaciones por email funcionan desde el primer día y las dejamos configuradas contigo durante el onboarding.",
  },
  {
    q: "¿Hay planes para varios centros o sedes?",
    a: "Sí. Podemos plantearlo como un setup por centro/organización y ayudarte a estructurarlo según vuestro caso. Si necesitas multi-sede avanzado, lo vemos contigo en una llamada.",
  },
  {
    q: "¿Qué pasa si el chatbot no entiende al cliente?",
    a: "No pasa nada: el chatbot está para ayudar, no para bloquear. Si no entiende, deriva a una persona o deja la conversación lista para que tu equipo responda.",
  },
  {
    q: "¿Necesito instalar algo o es todo en el navegador?",
    a: "Todo en el navegador. No hay nada que instalar ni actualizar. Accedes desde cualquier dispositivo con tu cuenta y listo.",
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
