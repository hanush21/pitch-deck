"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import {
  LayoutDashboard, Building2, UserCheck, Users, CalendarCheck,
  CheckSquare, FileText, Bot, ArrowRight, ChevronDown, ChevronUp,
} from "lucide-react";
import { brandLinks } from "@/config/brand";

const modules = [
  {
    id: "resumen",
    icon: <LayoutDashboard size={18} />,
    label: "Resumen",
    description: "Tu panel diario: citas, tareas y actividad del equipo en un vistazo.",
    result: "más claridad al empezar el día",
    color: "#9881D7",
    mockup: (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Citas hoy", value: "24", col: "#9881D7" },
            { label: "Tareas", value: "7", col: "#E7C978" },
            { label: "Clientes", value: "312", col: "#BDB7D6" },
          ].map((s) => (
            <div key={s.label} className="bg-hera-bg rounded-lg p-3 border border-hera-border/50">
              <p className="text-[10px] text-hera-muted/60 mb-1">{s.label}</p>
              <p className="text-lg font-bold" style={{ color: s.col }}>{s.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-hera-bg rounded-lg p-3 border border-hera-border/50">
          <p className="text-[10px] text-hera-muted/60 mb-2 uppercase tracking-wide">Actividad reciente</p>
          {["Cita confirmada · María García", "Tarea completada · Revisar stock", "Factura enviada · #0041"].map((a, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b border-hera-border/30 last:border-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9881D7]/60" />
              <span className="text-xs text-hera-muted">{a}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "departamentos",
    icon: <Building2 size={18} />,
    label: "Departamentos",
    description: "Ordena roles por áreas (recepción, estilistas, administración…).",
    result: "menos fricción interna",
    color: "#B49AE8",
    mockup: (
      <div className="space-y-2">
        {[
          { name: "Recepción", members: 2, color: "#9881D7" },
          { name: "Estilistas", members: 5, color: "#E7C978" },
          { name: "Administración", members: 1, color: "#BDB7D6" },
        ].map((dept) => (
          <div key={dept.name} className="bg-hera-bg rounded-lg p-3.5 border border-hera-border/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${dept.color}20` }}>
                <Building2 size={14} style={{ color: dept.color }} />
              </div>
              <span className="text-sm text-hera-text font-medium">{dept.name}</span>
            </div>
            <span className="text-xs text-hera-muted/70">{dept.members} miembros</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "empleados",
    icon: <UserCheck size={18} />,
    label: "Empleados",
    description: "Gestión de equipo, asignaciones y visibilidad operativa.",
    result: "cada persona con su foco",
    color: "#A8C5DA",
    mockup: (
      <div className="space-y-2">
        {[
          { name: "Laura S.", role: "Estilista", status: "Activa", citas: 6 },
          { name: "Carlos M.", role: "Barbero", status: "Activo", citas: 8 },
          { name: "Ana R.", role: "Recepción", status: "Activa", citas: 0 },
        ].map((emp) => (
          <div key={emp.name} className="bg-hera-bg rounded-lg p-3 border border-hera-border/50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#9881D7]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-[#9881D7]">{emp.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-hera-text">{emp.name}</p>
              <p className="text-[10px] text-hera-muted/60">{emp.role}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xs text-[#9881D7]">{emp.citas} citas</p>
              <p className="text-[10px] text-green-400/70">{emp.status}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "clientes",
    icon: <Users size={18} />,
    label: "Clientes",
    description: "Ficha del cliente + historial para atender mejor y vender recurrente.",
    result: "mejor experiencia y repetición",
    color: "#9881D7",
    mockup: (
      <div className="space-y-3">
        <div className="bg-hera-bg rounded-lg p-4 border border-[#9881D7]/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#9881D7]/20 flex items-center justify-center">
              <span className="text-sm font-bold text-[#9881D7]">M</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-hera-text">María García</p>
              <p className="text-xs text-hera-muted/60">Cliente desde 2023 · 18 visitas</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-hera-surface rounded p-2">
              <p className="text-hera-muted/60 mb-0.5">Última visita</p>
              <p className="text-hera-text">hace 5 días</p>
            </div>
            <div className="bg-hera-surface rounded p-2">
              <p className="text-hera-muted/60 mb-0.5">Próxima cita</p>
              <p className="text-[#9881D7]">Lunes 10:00</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "citas",
    icon: <CalendarCheck size={18} />,
    label: "Citas",
    description: "Agenda operativa con notificaciones por email y trazabilidad.",
    result: "menos ausencias y menos huecos",
    color: "#E7C978",
    mockup: (
      <div className="space-y-2">
        <div className="bg-hera-bg rounded-lg p-3 border border-hera-border/50 mb-3">
          <p className="text-[10px] text-hera-muted/60 mb-2 uppercase tracking-wide">Hoy · Lunes</p>
          {[
            { time: "09:00", name: "María G.", confirmed: true },
            { time: "10:30", name: "Carlos M.", confirmed: true },
            { time: "12:00", name: "Ana L.", confirmed: false },
            { time: "16:00", name: "Pedro R.", confirmed: true },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-hera-border/30 last:border-0">
              <span className="text-[10px] text-hera-muted/50 w-10">{a.time}</span>
              <span className="text-xs text-hera-text flex-1">{a.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${a.confirmed ? "text-[#9881D7] bg-[#9881D7]/10" : "text-[#E7C978] bg-[#E7C978]/10"}`}>
                {a.confirmed ? "Confirmada" : "Pendiente"}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "tareas",
    icon: <CheckSquare size={18} />,
    label: "Tareas",
    description: "Seguimiento de pendientes: nada se queda en 'luego lo miro'.",
    result: "constancia y control",
    color: "#BDB7D6",
    mockup: (
      <div className="space-y-2">
        {[
          { text: "Confirmar citas de mañana", done: true, priority: "Alta" },
          { text: "Enviar factura #0042 a cliente", done: false, priority: "Alta" },
          { text: "Revisar stock de productos", done: false, priority: "Media" },
          { text: "Actualizar ficha de cliente", done: true, priority: "Baja" },
        ].map((task, i) => (
          <div key={i} className="bg-hera-bg rounded-lg p-3 border border-hera-border/50 flex items-center gap-3">
            <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${task.done ? "bg-[#9881D7] border-[#9881D7]" : "border-hera-border"}`}>
              {task.done && <span className="text-white text-[8px]">✓</span>}
            </div>
            <span className={`text-xs flex-1 ${task.done ? "line-through text-hera-muted/40" : "text-hera-muted"}`}>{task.text}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${task.priority === "Alta" ? "text-red-400/80 bg-red-400/10" : task.priority === "Media" ? "text-[#E7C978] bg-[#E7C978]/10" : "text-hera-muted/60 bg-hera-surface/40"}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "facturas",
    icon: <FileText size={18} />,
    label: "Facturas",
    description: "Gestión de facturación y orden administrativo.",
    result: "cobros más rápidos y menos errores",
    color: "#E7C978",
    mockup: (
      <div className="space-y-2">
        {[
          { id: "#0041", client: "María García", amount: "85€", status: "Pagada" },
          { id: "#0042", client: "Carlos M.", amount: "120€", status: "Pendiente" },
          { id: "#0043", client: "Ana López", amount: "65€", status: "Borrador" },
        ].map((inv) => (
          <div key={inv.id} className="bg-hera-bg rounded-lg p-3 border border-hera-border/50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E7C978]/10 flex items-center justify-center flex-shrink-0">
              <FileText size={12} className="text-[#E7C978]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-hera-text">{inv.id} · {inv.client}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xs font-semibold text-[#E7C978]">{inv.amount}</p>
              <p className={`text-[10px] ${inv.status === "Pagada" ? "text-green-400/70" : inv.status === "Pendiente" ? "text-[#E7C978]/70" : "text-hera-muted/50"}`}>{inv.status}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chatbot",
    icon: <Bot size={18} />,
    label: "Chatbot",
    description: "Automatiza respuestas y captura de intención (sin perder el control).",
    result: "atención constante sin saturar al equipo",
    color: "#9881D7",
    mockup: (
      <div className="bg-hera-bg rounded-lg border border-hera-border/50 overflow-hidden">
        <div className="px-3 py-2 border-b border-hera-border/50 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-hera-muted">Asistente Hera · Activo</span>
        </div>
        <div className="p-3 space-y-3">
          {[
            { from: "client", text: "Hola, ¿tenéis hueco el martes?" },
            { from: "bot", text: "¡Hola! Sí, tenemos disponibilidad el martes a las 10:30 y 16:00. ¿Cuál prefieres?" },
            { from: "client", text: "Las 10:30 perfecto" },
            { from: "bot", text: "Genial, te confirmo la cita para el martes a las 10:30. Te enviaremos un recordatorio por email." },
          ].map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-lg px-3 py-2 text-xs ${msg.from === "client" ? "bg-hera-surface text-hera-text" : "bg-[#9881D7]/20 text-hera-muted border border-[#9881D7]/20"}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Modulos() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const active = modules[activeTab];

  return (
    <section id="producto" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(152,129,215,0.3), transparent)" }}
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
            Producto
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Módulos activos hoy{" "}
            <span className="text-hera-muted/60 font-normal text-2xl">(sin promesas futuras).</span>
          </h2>
          <p className="text-hera-muted max-w-xl mx-auto">
            Lo que ves aquí es lo que puedes usar ya. Luego escalas cuando tu negocio lo pida.
          </p>
        </motion.div>

        {/* Desktop tabs layout */}
        <div className="hidden md:grid md:grid-cols-[220px_1fr] gap-6">
          {/* Tab list */}
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {modules.map((mod, i) => (
              <button
                key={mod.id}
                onClick={() => setActiveTab(i)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                  activeTab === i
                    ? "bg-[#9881D7]/15 border border-[#9881D7]/30 text-hera-text"
                    : "hover:bg-hera-surface/40 text-hera-muted hover:text-hera-text border border-transparent"
                }`}
              >
                <span
                  className={`transition-colors duration-200 ${activeTab === i ? "text-[#9881D7]" : "text-hera-muted/50 group-hover:text-[#9881D7]/70"}`}
                >
                  {mod.icon}
                </span>
                <span className="text-sm font-medium">{mod.label}</span>
                {activeTab === i && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-[#9881D7]"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="hera-card rounded-2xl p-6 border border-hera-border/60"
            >
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4"
                    style={{ background: `${active.color}18`, color: active.color, border: `1px solid ${active.color}25` }}
                  >
                    {active.icon}
                    <span className="text-sm font-semibold">{active.label}</span>
                  </div>
                  <p className="text-hera-muted mb-4 leading-relaxed">{active.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-hera-muted/60">Resultado:</span>
                    <span className="font-semibold" style={{ color: active.color }}>
                      {active.result}
                    </span>
                  </div>
                </div>
                <div>{active.mockup}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden space-y-2">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="hera-card rounded-xl border border-hera-border/60 overflow-hidden"
            >
              <button
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                className="w-full flex items-center gap-3 px-4 py-4 text-left"
              >
                <span className="text-[#9881D7]">{mod.icon}</span>
                <span className="text-sm font-medium text-hera-text flex-1">{mod.label}</span>
                {openAccordion === i ? (
                  <ChevronUp size={16} className="text-[#9881D7]" />
                ) : (
                  <ChevronDown size={16} className="text-hera-muted/50" />
                )}
              </button>

              <AnimatePresence>
                {openAccordion === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 border-t border-hera-border/50 pt-3">
                      <p className="text-hera-muted text-sm mb-3">{mod.description}</p>
                      <p className="text-xs text-hera-muted/60 mb-4">
                        Resultado: <span className="font-semibold" style={{ color: mod.color }}>{mod.result}</span>
                      </p>
                      {mod.mockup}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={brandLinks.ctaPrimary}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#9881D7] rounded-xl hover:bg-[#B49AE8] shadow-lg shadow-[#9881D7]/20 transition-all"
          >
            Probar gratis <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
