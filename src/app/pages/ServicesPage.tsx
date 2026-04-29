import { Link, useParams } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { services } from "../../lib/data";

export function ServicesPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="pt-10">
        <div className="container-app py-10 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Servicio no encontrado
          </h1>
          <p className="mt-4 text-slate-600">
            El servicio que buscas no existe o fue movido.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/59177291715?text=${encodeURIComponent(
    `Hola, quiero cotizar el servicio de ${service.title} con ALIANTRACK.`
  )}`;

  return (
    <main className="bg-slate-50 pt-0">
      <section className="py-10">
        <div className="container-app">
          <div className="mx-auto mb-5 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Servicio especializado
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Conoce cómo este servicio puede ayudarte a optimizar tus
              operaciones logísticas e importaciones hacia Bolivia.
            </p>
          </div>

          <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
            <div className="grid items-center gap-8 p-6 md:p-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <div className="mb-3 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <service.icon size={28} />
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {service.title}
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  {service.longDescription || service.description}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  En ALIANTRACK desarrollamos este servicio con enfoque en
                  eficiencia, seguridad y acompañamiento personalizado,
                  permitiendo que cada operación sea más clara, trazable y
                  adaptada a las necesidades reales del cliente.
                </p>

                {service.features && service.features.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-slate-900">
                      Características principales
                    </h3>

                    <ul className="mt-4 space-y-3 text-slate-600">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
                  >
                    <MessageCircle size={18} />
                    Cotizar
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[420px]"
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}