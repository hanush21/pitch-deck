"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2, Zap, Users, FileText } from "lucide-react";
import DomeBackground from "./DomeBackground";
import { brandLinks } from "@/config/brand";

const bullets = [
  {
    icon: <CheckCircle2 size={16} />,
    text: "Reduce los no-shows hasta un 35% con recordatorios automáticos por email desde el día 1.",
  },
  {
    icon: <Users size={16} />,
    text: "Equipo sin fricción: empleados, departamentos y tareas en un panel, sin llamadas internas.",
  },
  {
    icon: <FileText size={16} />,
    text: "Facturas en minutos. Menos papel, menos errores, cobros más rápidos.",
  },
];

const badges = [
  { label: "1 año en producción", color: "text-[#9881D7] border-[#9881D7]/30 bg-[#9881D7]/10" },
  { label: "Módulos activos hoy", color: "text-[#E7C978] border-[#E7C978]/30 bg-[#E7C978]/10" },
  { label: "Hecho para servicios", color: "text-hera-muted border-hera-muted/20 bg-hera-muted/5" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <DomeBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text */}
          <div>
            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
            >
              Hera ordena tu negocio:{" "}
              <span className="hera-gradient-text">
                clientes, equipo, citas y facturas
              </span>{" "}
              en un solo panel.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-hera-muted text-base sm:text-lg leading-relaxed mb-7 max-w-xl"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
            >
              Cada cita sin confirmar es un hueco vacío. Cada WhatsApp sin responder es un cliente que se va. Hera pone orden en la operación diaria para que dejes de correr y empieces a crecer.
            </motion.p>

            {/* Bullets */}
            <motion.ul
              className="space-y-3 mb-8"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
            >
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#9881D7] mt-0.5 flex-shrink-0">{b.icon}</span>
                  <span className="text-hera-muted text-sm sm:text-base">{b.text}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
            >
              <a
                href={brandLinks.ctaPrimary}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#9881D7] rounded-xl hover:bg-[#B49AE8] shadow-xl shadow-[#9881D7]/25 hover:shadow-[#9881D7]/40 transition-all duration-200 group"
              >
                Probar gratis
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={brandLinks.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-hera-text border border-hera-border rounded-xl hover:border-[#9881D7]/50 hover:bg-[#9881D7]/10 transition-all duration-200 group"
              >
                Visitar heradome.com
                <ExternalLink size={14} className="text-hera-muted/60 group-hover:text-[#9881D7] transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right column — mockup */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow behind mockup */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(152,129,215,0.2) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.1)",
                }}
              />

              {/* App mockup placeholder */}
              <div className="relative hera-card rounded-2xl overflow-hidden border border-hera-border/80 shadow-2xl shadow-black/30 dark:shadow-black/50">
                {/* Mockup header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-hera-border/60 bg-hera-surface/60">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-hera-surface" />
                    <div className="w-3 h-3 rounded-full bg-hera-surface" />
                    <div className="w-3 h-3 rounded-full bg-hera-surface" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-5 rounded-md bg-hera-surface/60 w-40 mx-auto" />
                  </div>
                </div>

                {/* Mockup body */}
                <div className="p-5 bg-hera-bg">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Citas hoy", value: "24", color: "#9881D7" },
                      { label: "Clientes", value: "312", color: "#E7C978" },
                      { label: "Facturas", value: "18", color: "#BDB7D6" },
                    ].map((stat) => (
                      <div key={stat.label} className="hera-card rounded-xl p-3">
                        <p className="text-[10px] text-hera-muted/70 mb-1">{stat.label}</p>
                        <p className="text-xl font-bold" style={{ color: stat.color }}>
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Calendar mock */}
                  <div className="hera-card rounded-xl p-3 mb-3">
                    <p className="text-[10px] text-hera-muted/60 mb-2 font-medium uppercase tracking-wide">Agenda del día</p>
                    <div className="space-y-2">
                      {[
                        { time: "09:00", name: "María García", service: "Corte + Color", color: "#9881D7" },
                        { time: "10:30", name: "Carlos M.", service: "Barba premium", color: "#E7C978" },
                        { time: "12:00", name: "Ana López", service: "Peinado", color: "#9881D7" },
                      ].map((apt) => (
                        <div key={apt.time} className="flex items-center gap-2.5">
                          <span className="text-[10px] text-hera-muted/50 w-10 flex-shrink-0">{apt.time}</span>
                          <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: apt.color }} />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-hera-text font-medium truncate">{apt.name}</p>
                            <p className="text-[10px] text-hera-muted/60 truncate">{apt.service}</p>
                          </div>
                          <span className="text-[10px] text-[#9881D7] bg-[#9881D7]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                            Confirmada
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Task strip */}
                  <div className="hera-card rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] text-hera-muted/60 font-medium uppercase tracking-wide">Tareas pendientes</p>
                      <span className="text-[10px] text-[#9881D7]">3 activas</span>
                    </div>
                    <div className="space-y-1.5">
                      {["Confirmar citas de mañana", "Enviar factura #0042", "Revisar stock"].map((t, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded border border-[#9881D7]/40 flex-shrink-0" />
                          <span className="text-[11px] text-hera-muted">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 hera-card rounded-xl px-4 py-3 border border-[#9881D7]/30 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-hera-text font-medium">Sistema activo</span>
                </div>
              </motion.div>

              {/* Floating notification */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -left-4 hera-card rounded-xl px-3 py-2.5 border border-[#E7C978]/20 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Zap size={12} className="text-[#E7C978]" />
                  <span className="text-xs text-hera-text">Email enviado</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
