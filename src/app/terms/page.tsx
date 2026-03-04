import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio – HeraDome",
  description: "Términos y condiciones de uso de HeraDome y Hera CRM.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Aceptación de los términos",
    content:
      "Al registrarte y usar Hera CRM (en adelante, \"el Servicio\"), aceptas estos Términos de Servicio. Si no estás de acuerdo, no uses el Servicio.",
  },
  {
    title: "2. Descripción del servicio",
    content:
      "Hera CRM es una plataforma SaaS de gestión de citas, clientes, equipo y facturación para negocios de servicios. El acceso se ofrece mediante suscripción mensual según el plan contratado.",
  },
  {
    title: "3. Registro y cuenta",
    content:
      "Para usar el Servicio debes crear una cuenta con información veraz y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales y de toda actividad que ocurra bajo tu cuenta.",
  },
  {
    title: "4. Planes y facturación",
    content:
      "El Servicio se ofrece en planes de suscripción mensual. Los precios están disponibles en heradome.com/precios. El cargo se realiza al inicio de cada período. Los precios pueden modificarse con un aviso previo de 30 días.",
  },
  {
    title: "5. Período de prueba y cancelación",
    content:
      "Si existe un período de prueba gratuito, no se realizará ningún cargo hasta su finalización. Puedes cancelar tu suscripción en cualquier momento desde tu panel de control. La cancelación es efectiva al final del período de facturación vigente, sin reembolsos prorrateados.",
  },
  {
    title: "6. Uso aceptable",
    content:
      "Te comprometes a usar el Servicio de forma lícita y conforme a estos términos. Está prohibido: (a) usar el Servicio para actividades ilegales, (b) intentar acceder a datos de otros usuarios, (c) realizar ingeniería inversa sobre la plataforma, o (d) revender el Servicio sin autorización.",
  },
  {
    title: "7. Propiedad intelectual",
    content:
      "HeraDome y todos sus elementos (marca, software, diseño, contenidos) son propiedad de HeraDome. Tus datos e información introducida en la plataforma son de tu propiedad. Te concedemos una licencia de uso no exclusiva y no transferible para usar el Servicio.",
  },
  {
    title: "8. Disponibilidad y soporte",
    content:
      "Nos esforzamos por mantener el Servicio disponible, pero no garantizamos una disponibilidad del 100%. El soporte se ofrece según el plan contratado. HeraDome no será responsable de daños derivados de interrupciones del servicio fuera de su control.",
  },
  {
    title: "9. Limitación de responsabilidad",
    content:
      "En la medida permitida por la ley, HeraDome no será responsable de daños indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso del Servicio. La responsabilidad máxima de HeraDome no excederá el importe pagado en los últimos 3 meses.",
  },
  {
    title: "10. Modificaciones",
    content:
      "Podemos modificar estos términos ocasionalmente. Te notificaremos por email con al menos 15 días de antelación ante cambios materiales. El uso continuado del Servicio tras la entrada en vigor de los cambios implica su aceptación.",
  },
  {
    title: "11. Ley aplicable y jurisdicción",
    content:
      "Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de España, salvo que la normativa de consumo aplicable establezca otro fuero.",
  },
  {
    title: "12. Contacto",
    content:
      "Para cualquier consulta sobre estos términos, escríbenos a hera.contactanos@gmail.com.",
  },
];

export default function TermsPage() {
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
            Términos de Servicio
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
            Para cualquier consulta, escríbenos a{" "}
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
