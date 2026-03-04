import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Hera CRM – Gestión de citas, equipo y facturas para salones y servicios",
  description:
    "Hera CRM centraliza clientes, citas, equipo, tareas, facturas y chatbot. Pruébalo gratis con onboarding incluido y controla tu operación diaria.",
  keywords:
    "CRM salones, gestión citas, barbería software, gestión clientes, facturas autónomos, hera crm",
  openGraph: {
    title: "Hera CRM – Ordena tu negocio de citas",
    description:
      "Clientes, equipo y facturas en un solo panel. Diseñado para salones, barberías y servicios con volumen.",
    type: "website",
    locale: "es_ES",
    url: "https://heradome.com",
    images: [{ url: "https://heradome.com/images/og-image.png", width: 1200, height: 630, alt: "Hera CRM – Gestión de citas, equipo y facturas" }],
    siteName: "Heradome",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hera CRM – Ordena tu negocio de citas",
    description:
      "Clientes, equipo y facturas en un solo panel. Pruébalo gratis.",
    images: ["https://heradome.com/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/ico.svg",
    apple: "/ico.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-hera-bg text-hera-text font-sans antialiased overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
