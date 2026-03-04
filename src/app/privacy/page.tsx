import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad – HeraDome",
  description: "Política de privacidad y protección de datos de HeraDome.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content:
      "HeraDome es el responsable del tratamiento de los datos personales recogidos a través de heradome.com y la aplicación Hera CRM. Contacto: hera.contactanos@gmail.com",
  },
  {
    title: "2. Datos que recogemos",
    content:
      "Recogemos los datos que nos proporcionas directamente: nombre, dirección de correo electrónico, datos de facturación y datos de uso del servicio. No recogemos datos sensibles ni vendemos tu información a terceros.",
  },
  {
    title: "3. Finalidad del tratamiento",
    content:
      "Usamos tus datos para: (a) prestar el servicio contratado, (b) gestionar tu cuenta y facturación, (c) enviarte comunicaciones relacionadas con el servicio, y (d) mejorar la plataforma.",
  },
  {
    title: "4. Base legal",
    content:
      "El tratamiento se basa en la ejecución del contrato de servicio (art. 6.1.b RGPD) y, cuando sea necesario, en el consentimiento explícito del usuario.",
  },
  {
    title: "5. Conservación de datos",
    content:
      "Conservamos tus datos mientras la cuenta esté activa o mientras sea necesario para cumplir obligaciones legales. Al cancelar tu cuenta, puedes solicitar la eliminación de tus datos en cualquier momento.",
  },
  {
    title: "6. Tus derechos",
    content:
      "Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento y portar tus datos. Puedes ejercer estos derechos enviando un email a hera.contactanos@gmail.com. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
  },
  {
    title: "7. Cookies",
    content:
      "La plataforma puede usar cookies técnicas necesarias para el funcionamiento del servicio. No utilizamos cookies de seguimiento o publicidad de terceros.",
  },
  {
    title: "8. Transferencias internacionales",
    content:
      "Tus datos se almacenan en servidores dentro del Espacio Económico Europeo. En caso de transferencia a terceros países, se aplicarán las garantías adecuadas conforme al RGPD.",
  },
  {
    title: "9. Cambios en esta política",
    content:
      "Podemos actualizar esta política ocasionalmente. Te notificaremos por email ante cambios materiales. La fecha de última actualización aparece al pie de esta página.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0712] text-[#F2F1FF]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#BDB7D6] hover:text-[#F2F1FF] mb-10 transition-colors"
        >
          ← Volver a heradome.com
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#BDB7D6]/70 bg-[#160D2A]/40 border border-[#2A1F45]/60 rounded-full px-3 py-1.5 mb-5">
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Política de Privacidad
          </h1>
          <p className="text-[#BDB7D6] text-sm">
            Última actualización: marzo de 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-[#2A1F45]/60 pb-8 last:border-0">
              <h2 className="text-base font-semibold text-[#F2F1FF] mb-2">
                {section.title}
              </h2>
              <p className="text-sm text-[#BDB7D6] leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-[#2A1F45]/60">
          <p className="text-xs text-[#BDB7D6]/50">
            Para cualquier consulta sobre privacidad, escríbenos a{" "}
            <a
              href="mailto:hera.contactanos@gmail.com"
              className="text-[#9881D7] hover:underline"
            >
              hera.contactanos@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
