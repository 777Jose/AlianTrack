import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Globe2 } from "lucide-react";
import { MediaCarousel } from "./MediaCarousel";

import aboutCompany from "../../assets/images/about/about-company.png";
import entrega1 from "../../assets/images/about/entrega-1.png";
import entrega2 from "../../assets/images/about/entrega-2.png";
import despacho1 from "../../assets/images/about/despacho-1.png";
import aduana1 from "../../assets/images/about/aduana-1.png";
import entregaVideo1 from "../../assets/videos/about/entrega-video-1.mp4";

const mediaItems = [
  { type: "image" as const, src: entrega1, alt: "Entrega de mercadería" },
  { type: "image" as const, src: entrega2, alt: "Despacho de productos" },
  { type: "image" as const, src: despacho1, alt: "Proceso logístico" },
  { type: "image" as const, src: aduana1, alt: "Gestión aduanera" },
  { type: "video" as const, src: entregaVideo1, alt: "Video de entregas" },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Confianza y seguridad",
    description:
      "Brindamos respaldo en cada etapa del proceso logístico, desde el origen hasta la entrega final.",
  },
  {
    icon: Globe2,
    title: "Cobertura internacional",
    description:
      "Gestionamos importaciones desde China y Estados Unidos hacia Bolivia por vía marítima y aérea.",
  },
];

export function About() {
  return (
    <section
      id="quienes-somos"
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Quiénes somos
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Impulsamos tu carga con una logística confiable y moderna
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            En ALIANTRACK trabajamos para conectar mercados internacionales con
            Bolivia, ofreciendo soluciones logísticas eficientes para
            importación de mercadería, carga consolidada y contenedores
            completos desde China y Estados Unidos.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <img
                src={aboutCompany}
                alt="Equipo o representación corporativa de ALIANTRACK"
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900">
                Somos tu aliado estratégico en logística internacional
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                ALIANTRACK es una empresa boliviana orientada a brindar
                soluciones logísticas integrales, especializándose en el
                transporte de mercadería y contenedores por vía marítima y
                aérea. Nuestro objetivo es facilitar procesos de importación con
                atención personalizada, coordinación eficiente y compromiso en
                cada envío.
              </p>

              <p className="mt-4 text-slate-600 leading-7">
                Nos enfocamos en ofrecer seguridad, trazabilidad y
                acompañamiento para que nuestros clientes puedan importar con
                mayor confianza y claridad en cada etapa del proceso.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Experiencia real en entregas, despachos y aduana
              </h3>
              <p className="mt-2 max-w-2xl text-slate-600">
                Conoce parte de nuestras operaciones logísticas, procesos de
                despacho y entregas realizadas.
              </p>
            </div>
          </div>

          <MediaCarousel items={mediaItems} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-6 lg:grid-cols-2"
        >
          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <div className="mb-4 inline-flex rounded-2xl bg-primary/15 p-3 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Misión</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Brindar soluciones logísticas internacionales confiables,
              eficientes y seguras, facilitando la importación de mercadería
              hacia Bolivia mediante un servicio personalizado, transparente y
              orientado a las necesidades de cada cliente.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Visión</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Ser una empresa referente en Bolivia en logística e importaciones
              internacionales, destacando por nuestra innovación, confianza,
              cumplimiento y capacidad de conectar oportunidades globales con el
              crecimiento de nuestros clientes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
