import { services } from '../../lib/data'
import { SectionReveal } from './SectionReveal'

export function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-20 md:py-24">
      <div className="container-app">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle mx-auto">
              Soluciones logísticas integrales para importaciones y distribución, adaptadas a diferentes tipos de carga y urgencia operativa.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <SectionReveal key={service.title}>
              <article className="card h-full">
                <div className="mb-5 inline-flex rounded-2xl bg-accent p-4 text-primary">
                  <service.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-500">{service.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
