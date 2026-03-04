# Heradome Landing Page

Landing page de conversión para Hera CRM — construida con Next.js (App Router), Tailwind CSS y Framer Motion. Exportable como sitio estático para Hostinger.

---

## Stack

- **Next.js 14** (App Router, `output: 'export'`)
- **Tailwind CSS** — tokens de marca en `tailwind.config.ts`
- **Framer Motion** — animaciones de scroll reveal, tabs, acordeones
- **GSAP** — progress line en Roadmap
- **Lucide React** — iconografía
- **shadcn/ui** (Radix UI) — base de componentes accesibles

---

## Configuración de marca

Todo el copy, colores, precios y enlaces están centralizados en:

```
src/config/brand.ts
```

**Para cambiar:**
- **Colores** → `brandColors` (+ espejear en `tailwind.config.ts` → `colors.hera`)
- **Precios** → `brandPricing`
- **Links CTA** → `brandLinks` (register, demo, login, contacto)
- **Métricas/placeholders** → `brandMetrics.pilotosActivos`, `solicitudesDemo`

---

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:3000
```

---

## Build y export estático

```bash
npm run build
```

La carpeta `/out` contiene el sitio estático listo para subir.

---

## Deploy en Hostinger

1. Ejecutar `npm run build` → genera `/out`
2. Comprimir el contenido de `/out` (no la carpeta, el contenido)
3. En el panel de Hostinger → **File Manager** → subir al directorio `public_html`
4. Asegurarse de que el servidor sirve `index.html` por defecto (ya configurado con `trailingSlash: true`)

> **Nota:** No subas la carpeta `/out` entera, solo su contenido (`index.html`, `_next/`, etc.)

---

## Imágenes placeholder

Las imágenes del mockup están generadas en código (SVG/HTML inline). Cuando tengas assets reales:
- Colócalos en `/public/images/`
- Reemplaza los componentes mockup en `src/components/Hero.tsx` y `src/components/Modulos.tsx`

---

## Secciones

| # | Componente | Anchor |
|---|-----------|--------|
| 1 | `Header.tsx` | sticky |
| 2 | `Hero.tsx` | — |
| 3 | `Problema.tsx` | `#problema` |
| 4 | `Solucion.tsx` | `#solucion` |
| 5 | `Modulos.tsx` | `#producto` |
| 6 | `CasosDeUso.tsx` | `#casos` |
| 7 | `EraIA.tsx` | `#ia` |
| 8 | `Confianza.tsx` | `#confianza` |
| 9 | `Roadmap.tsx` | `#roadmap` |
| 10 | `Traccion.tsx` | `#traccion` |
| 11 | `Precios.tsx` | `#precios` |
| 12 | `FAQ.tsx` | `#faq` |
| 13 | `CTAFinal.tsx` | — |
| 14 | `Footer.tsx` | — |
