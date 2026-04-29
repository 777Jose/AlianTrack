import { Link } from "react-router-dom";
import { services } from "../../lib/data";
import { SectionReveal } from "./SectionReveal";

export function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-20 md:py-13">
      <div className="container-app">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Servicios
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Nuestros Servicios
            </h2>
            <p className="section-subtitle mx-auto">
              Soluciones logísticas integrales para importaciones y
              distribución, adaptadas a diferentes tipos de carga y urgencia
              operativa.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <SectionReveal key={service.slug}>
              <article className="card flex h-full flex-col">
                <div className="mb-3 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <service.icon size={30} />
                  <h3 className="text-xl font-bold text-slate-900 ml-5">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-3 leading-7 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="inline-flex items-center rounded-2xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    Ver más
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
