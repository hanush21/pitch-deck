"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Bell, HeadphonesIcon, ArrowRight, CreditCard } from "lucide-react";
import { brandLinks } from "@/config/brand";

const checks = [
  {
    icon: <Shield size={18} />,
    title: "Datos sensibles protegidos.",
    description: "Cifrado y compresión aplicados desde backend, no como feature cosmética.",
  },
  {
    icon: <Lock size={18} />,
    title: "Accesos por organización con roles/permisos.",
    description: "Cada miembro del equipo ve solo lo que necesita ver.",
  },
  {
    icon: <Bell size={18} />,
    title: "Notificaciones por email integradas.",
    description: "Operación conectada sin depender de herramientas externas.",
  },
  {
    icon: <HeadphonesIcon size={18} />,
    title: "Onboarding incluido.",
    description: "Te acompañamos para que estés operativo desde el primer día.",
  },
];

export default function Confianza() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="confianza" ref={ref} className="relative py-20 md:py-28">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.2), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-medium text-hera-muted/70 bg-hera-surface/40 border border-hera-border/60 rounded-full px-3 py-1.5 mb-5">
              Seguridad y confianza
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Profesional por dentro{" "}
              <span className="text-[#9881D7]">(y por fuera).</span>
            </h2>
            <p className="text-hera-muted mb-8 leading-relaxed">
              Construido con las mismas bases de seguridad que usan herramientas enterprise. Sin atajos.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {checks.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#9881D7]/15 border border-[#9881D7]/20 flex items-center justify-center flex-shrink-0 text-[#9881D7]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-hera-text">{item.title}</p>
                    <p className="text-sm text-hera-muted/70 mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — trial card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="hera-card rounded-2xl p-8 border border-[#9881D7]/20 relative overflow-hidden">
              {/* Glow */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(152,129,215,0.1) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#9881D7]/20 flex items-center justify-center">
                    <CreditCard size={20} className="text-[#9881D7]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-hera-text">Prueba con tarjeta</p>
                    <p className="text-xs text-hera-muted/60">Sin compromiso inmediato</p>
                  </div>
                </div>

                <div className="bg-hera-bg/60 rounded-xl p-5 border border-hera-border/60 mb-6">
                  <p className="text-sm text-hera-muted leading-relaxed">
                    <span className="text-hera-text font-medium">Pedimos tarjeta para activar la prueba</span> y asegurar
                    el onboarding (evita spam). Cancelas antes de renovar, sin líos.
                  </p>
                </div>

                {/* Trust points */}
                <div className="space-y-3 mb-7">
                  {[
                    { icon: "✓", text: "Onboarding incluido en todos los planes" },
                    { icon: "✓", text: "Cancela cuando quieras, sin llamadas" },
                    { icon: "✓", text: "Datos exportables si decides salir" },
                    { icon: "✓", text: "Soporte real durante la prueba" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[#9881D7] font-bold text-sm w-4 flex-shrink-0">{item.icon}</span>
                      <span className="text-sm text-hera-muted">{item.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={brandLinks.ctaPrimary}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white bg-[#9881D7] rounded-xl hover:bg-[#B49AE8] shadow-lg shadow-[#9881D7]/25 transition-all duration-200 group"
                >
                  Probar gratis
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
