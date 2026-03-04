"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { brandPricing, brandLinks } from "@/config/brand";

export default function Precios() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="precios" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(152,129,215,0.06) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.25), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-hera-muted/70 bg-hera-surface/40 border border-hera-border/60 rounded-full px-3 py-1.5 mb-5">
            Precios
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Precios claros para <span className="hera-gradient-text">crecer con control.</span>
          </h2>
          <p className="text-hera-muted max-w-md mx-auto">
            Empieza por lo esencial. Escala cuando tu operación lo pida.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {brandPricing.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative hera-card rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                plan.recommended
                  ? "border border-[#9881D7]/50 shadow-[0_0_40px_rgba(152,129,215,0.15)]"
                  : "border border-hera-border/60 hover:border-[#9881D7]/25"
              }`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#9881D7] text-white shadow-lg shadow-[#9881D7]/30 whitespace-nowrap">
                    ✦ Recomendado
                  </span>
                </div>
              )}

              {/* Gold glow for recommended */}
              {plan.recommended && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at top, rgba(152,129,215,0.08) 0%, transparent 60%)",
                  }}
                />
              )}

              <div className="mb-5">
                <h3 className="text-base font-bold text-hera-text mb-1">{plan.name}</h3>
                <p className="text-xs text-hera-muted/60 leading-snug">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price ? (
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-black ${plan.recommended ? "text-[#9881D7]" : "text-hera-text"}`}
                    >
                      {plan.price}€
                    </span>
                    <span className="text-sm text-hera-muted/60">/{plan.period}</span>
                  </div>
                ) : (
                  <div>
                    <span className="text-2xl font-bold text-hera-muted">A medida</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.recommended ? "#9881D7" : "#BDB7D6" }}
                    />
                    <span className="text-sm text-hera-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.id === "enterprise" ? brandLinks.ctaContact : brandLinks.ctaPrimary}
                className={`flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                  plan.recommended
                    ? "bg-[#9881D7] text-white hover:bg-[#B49AE8] shadow-lg shadow-[#9881D7]/25 hover:shadow-[#9881D7]/40"
                    : plan.id === "enterprise"
                    ? "border border-hera-border text-hera-muted hover:border-[#9881D7]/40 hover:text-hera-text"
                    : "bg-[#9881D7]/12 text-[#9881D7] border border-[#9881D7]/25 hover:bg-[#9881D7]/20"
                }`}
              >
                {plan.id === "enterprise" ? (
                  <>
                    <MessageCircle size={14} />
                    {plan.cta}
                  </>
                ) : (
                  <>
                    {plan.cta}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust microcopy */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            "Prueba con tarjeta",
            "Onboarding incluido",
            "Cancela cuando quieras",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2 text-sm text-hera-muted/70">
              <span className="text-[#9881D7]">✓</span>
              {text}
            </div>
          ))}
        </motion.div>

        {/* Pricing FAQ strip */}
        <motion.div
          className="hera-card rounded-xl p-6 border border-hera-border/60 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <h4 className="text-sm font-semibold text-hera-text mb-4 text-center">Preguntas frecuentes sobre precios</h4>
          <div className="space-y-4">
            {[
              {
                q: "¿Qué incluye la prueba gratuita?",
                a: "Acceso completo al plan seleccionado con onboarding personal. Cancelas antes del primer cobro si no encaja.",
              },
              {
                q: "¿Puedo cambiar de plan después?",
                a: "Sí. Puedes subir o bajar de plan en cualquier momento desde tu panel.",
              },
              {
                q: "¿Hay permanencia o contrato?",
                a: "No. Pago mensual, cancelación libre. Sin letra pequeña.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-hera-border/50 pb-4 last:border-0 last:pb-0">
                <p className="text-sm font-medium text-hera-text mb-1">{faq.q}</p>
                <p className="text-sm text-hera-muted/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
