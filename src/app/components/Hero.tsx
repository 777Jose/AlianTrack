import { ArrowRight, PlayCircle, Calculator, Ship, Plane } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="inicio" className="bg-hero bg-cover bg-center text-white">
      <div className="container-app grid min-h-[86vh] items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-orange-100">
            Importaciones internacionales a Bolivia
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Traemos tu carga desde{" "}
            <span className="text-primary">China y EE.UU.</span> con seguridad y
            control.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
            Soluciones logísticas por vía marítima, aérea y terrestre para
            empresas que necesitan rapidez, visibilidad y acompañamiento en todo
            el proceso.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="btn-primary gap-2">
              Solicitar cotización <ArrowRight size={18} />
            </a>
            <a href="#servicios" className="btn-secondary gap-2">
              <PlayCircle size={18} /> Ver servicios
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Ship,
                label: "Ver carga marítima",
                href: "#servicios",
              },
              {
                icon: Plane,
                label: "Ver carga aérea",
                href: "#servicios",
              },
              {
                icon: Calculator,
                label: "Calcula tu flete",
                href: "#calculadora",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10"
              >
                <item.icon className="mb-3 text-primary" />
                <p className="font-semibold text-white">{item.label}</p>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto w-full max-w-xl rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-md"
        >
          <div className="rounded-[24px] bg-slate-950/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Ventaja operativa
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Tu socio logístico para importar con menos fricción
            </h2>
            <div className="mt-6 space-y-4 text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Tiempo de respuesta</p>
                <p className="mt-1 text-3xl font-extrabold">&lt; 24h</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Cobertura</p>
                  <p className="mt-1 text-xl font-bold">Bolivia</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Orígenes clave</p>
                  <p className="mt-1 text-xl font-bold">CN / US</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
