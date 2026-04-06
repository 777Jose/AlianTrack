import { Globe2 } from 'lucide-react'
import { countries } from '../../lib/data'
import { SectionReveal } from './SectionReveal'

export function Countries() {
  return (
    <section id="paises" className="py-20 md:py-24">
      <div className="container-app">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary">
              <Globe2 size={16} /> Países de Origen
            </div>
            <h2 className="section-title mt-5">Conectamos Bolivia con mercados estratégicos</h2>
            <p className="section-subtitle mx-auto">Operamos desde centros comerciales clave para ofrecer tiempos competitivos y rutas confiables.</p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {countries.map((country) => (
            <SectionReveal key={country.code}>
              <article className="card text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-3xl font-extrabold text-primary">
                  {country.code}
                </div>
                <h3 className="mt-5 text-2xl font-bold">{country.name}</h3>
                <p className="mt-3 text-slate-500">{country.cities.join(', ')}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
