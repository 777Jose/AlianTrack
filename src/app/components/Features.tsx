import { CheckCircle2 } from "lucide-react";
import { stats } from "../../lib/data";
import { SectionReveal } from "./SectionReveal";

export function Features() {
  return (
    <section id="ventajas" className="py-20 md:py-15">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          Ventajas
        </span>
      </div>
      <div className="container-app grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <SectionReveal>
          <div>
            <h2 className="section-title mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">¿Por qué elegirnos?</h2>
            <p className="section-subtitle">
              Somos el socio logístico que te ayuda a importar con control,
              confianza y acompañamiento en cada etapa del proceso.
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
                >
                  <div className="mb-1 inline-flex rounded-xl bg-accent p-3 text-primary">
                    <stat.icon size={22} />
                  </div>
                  <p className="text-2xl font-extrabold text-slate-900">
                    {stat.value}
                  </p>
                  <h3 className="mt-1 text-lg font-bold">{stat.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Bodega logística"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-3xl bg-primary p-6 text-white shadow-xl">
              <p className="text-4xl font-extrabold">100%</p>
              <p className="mt-1 font-medium">
                Satisfacción orientada al cliente
              </p>
            </div>
            <div className="absolute right-6 top-6 rounded-2xl bg-white/90 px-4 py-3 text-slate-900 backdrop-blur">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="text-primary" size={18} /> Seguimiento
                operativo
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
