"use client";

import { brandLinks } from "@/config/brand";
import { Instagram, Mail } from "lucide-react";
import LogoIcon from "./LogoIcon";

const footerLinks = {
  Producto: [
    { label: "Módulos", href: "#producto" },
    { label: "Casos de uso", href: "#casos" },
    { label: "Precios", href: "#precios" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  Empresa: [
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: `mailto:${brandLinks.email}` },
    { label: "Iniciar sesión", href: brandLinks.ctaLogin },
  ],
  Legal: [
    { label: "Privacidad", href: brandLinks.privacyPolicy },
    { label: "Términos", href: brandLinks.termsOfService },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-hera-border/60 bg-hera-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="flex-shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(152,129,215,0.5)] transition-all duration-300">
                <LogoIcon size={96} />
              </div>
              <span className="font-bold text-hera-text text-lg tracking-tight">
                Hera<span className="text-[#9881D7]"></span>
              </span>
            </a>
            <p className="text-sm text-hera-muted/60 leading-relaxed mb-5 max-w-[200px]">
              CRM para salones, barberías y servicios con volumen.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={brandLinks.instagram}
                className="w-9 h-9 rounded-lg bg-hera-surface border border-hera-border flex items-center justify-center text-hera-muted/60 hover:text-[#9881D7] hover:border-[#9881D7]/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href={`mailto:${brandLinks.email}`}
                className="w-9 h-9 rounded-lg bg-hera-surface border border-hera-border flex items-center justify-center text-hera-muted/60 hover:text-[#9881D7] hover:border-[#9881D7]/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold text-hera-muted/50 uppercase tracking-wider mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-hera-muted/70 hover:text-hera-text transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hera-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-hera-muted/40">
            © {new Date().getFullYear()} Heradome. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={brandLinks.privacyPolicy}
              className="text-xs text-hera-muted/40 hover:text-hera-muted/70 transition-colors"
            >
              Privacidad
            </a>
            <a
              href={brandLinks.termsOfService}
              className="text-xs text-hera-muted/40 hover:text-hera-muted/70 transition-colors"
            >
              Términos
            </a>
            <a
              href={`mailto:${brandLinks.email}`}
              className="text-xs text-hera-muted/40 hover:text-[#9881D7] transition-colors"
            >
              {brandLinks.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
