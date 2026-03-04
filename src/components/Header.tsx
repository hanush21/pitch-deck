"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { brandLinks } from "@/config/brand";
import LogoIcon from "./LogoIcon";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Producto", href: "#producto" },
  { label: "¿Por qué Hera?", href: "#competencia" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-hera-bg/95 backdrop-blur-md border-b border-hera-border/60 shadow-lg shadow-black/10 dark:shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex-shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(152,129,215,0.6)] transition-all duration-300">
                <LogoIcon size={86} />
              </div>
              <span className="font-bold text-hera-text text-lg tracking-tight">
                Hera<span className="text-[#9881D7]"></span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-hera-muted hover:text-hera-text text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#9881D7] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={brandLinks.ctaLogin}
                className="text-hera-muted hover:text-hera-text text-sm font-medium transition-colors duration-200"
              >
                Iniciar sesión
              </a>
              <a
                href={brandLinks.ctaPrimary}
                className="px-4 py-2 text-sm font-semibold text-white bg-[#9881D7] rounded-lg hover:bg-[#B49AE8] shadow-lg shadow-[#9881D7]/20 hover:shadow-[#9881D7]/40 transition-all duration-200"
              >
                Probar gratis
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
            <button
              className="text-hera-muted hover:text-hera-text p-2 rounded-lg hover:bg-[#9881D7]/10 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            </div>
          </div>

          {/* Microcopy bar */}
          <div className="hidden md:flex justify-center pb-2 -mt-1">
            <p className="text-xs text-hera-muted/60 tracking-wide">
              Onboarding incluido · Datos protegidos · Cancelación simple
            </p>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-hera-bg/98 backdrop-blur-md border-t border-hera-border/60">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-hera-muted hover:text-hera-text hover:bg-[#9881D7]/10 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 pb-1 border-t border-hera-border/60 space-y-2">
                <a
                  href={brandLinks.ctaLogin}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-hera-muted text-sm text-center"
                >
                  Iniciar sesión
                </a>
                <a
                  href={brandLinks.ctaPrimary}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold text-white bg-[#9881D7] rounded-lg text-center hover:bg-[#B49AE8] transition-all"
                >
                  Probar gratis
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 bg-hera-bg/95 backdrop-blur-md border-t border-hera-border/60">
        <a
          href={brandLinks.ctaPrimary}
          className="block w-full py-3 text-center text-sm font-semibold text-white bg-[#9881D7] rounded-xl hover:bg-[#B49AE8] shadow-lg shadow-[#9881D7]/30 transition-all duration-200"
        >
          Probar gratis
        </a>
      </div>
    </>
  );
}
