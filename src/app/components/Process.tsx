import { steps } from "../../lib/data";
import { SectionReveal } from "./SectionReveal";
import { RouteMap } from "./RouteMap";

export function Process() {
  return (
    <section
      id="proceso"
      className="bg-process bg-cover bg-center py-20 text-white md:py-15"
    >
      <div className="container-app">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Proceso
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              ¿Cómo Funciona?
            </h2>
            <p className="section-subtitle mx-auto text-slate-300">
              Un proceso claro, transparente y guiado para que tu importación
              avance sin sorpresas.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <SectionReveal key={step.number}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white">
                    {step.number}
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <step.icon size={28} />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
        <div className="mt-10">
          <RouteMap />
        </div>
      </div>
    </section>
  );
}
