import { SendHorizonal } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { contactCards } from '../../lib/data'
import { SectionReveal } from './SectionReveal'

type FormValues = {
  fullName: string
  email: string
  phone: string
  country: string
  message: string
}

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log('Formulario enviado', data)
    reset()
  }

  return (
    <section id="contacto" className="bg-slate-50 py-20 md:py-24">
      <div className="container-app">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Solicita tu Cotización</h2>
            <p className="section-subtitle mx-auto">Completa el formulario y nuestro equipo te contactará para darte una propuesta adaptada a tu operación.</p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-[28px] bg-white p-6 shadow-soft md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Nombre completo *</label>
                  <input {...register('fullName', { required: 'Ingresa tu nombre' })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary" placeholder="Juan Pérez" />
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Correo electrónico *</label>
                  <input {...register('email', { required: 'Ingresa tu correo' })} type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary" placeholder="juan@empresa.com" />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Teléfono *</label>
                  <input {...register('phone', { required: 'Ingresa tu teléfono' })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary" placeholder="+591 ..." />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">País de origen *</label>
                  <select {...register('country', { required: 'Selecciona un país' })} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary">
                    <option value="">Selecciona un país</option>
                    <option value="china">China</option>
                    <option value="usa">Estados Unidos</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Mensaje / detalles de la carga *</label>
                  <textarea {...register('message', { required: 'Describe tu carga' })} rows={5} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary" placeholder="Tipo de producto, peso, volumen, dimensiones, fecha estimada, etc." />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
              </div>

              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600">
                Enviar solicitud <SendHorizonal size={18} />
              </button>
              {isSubmitSuccessful && <p className="mt-4 text-sm font-medium text-emerald-600">Formulario enviado correctamente.</p>}
            </form>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-5">
              <div className="rounded-[28px] bg-white p-6 shadow-soft md:p-8">
                <h3 className="text-2xl font-bold text-slate-900">Información de Contacto</h3>
                <div className="mt-6 space-y-5">
                  {contactCards.map((card) => (
                    <div key={card.title} className="flex gap-4">
                      <div className="mt-1 rounded-xl bg-accent p-3 text-primary">
                        <card.icon size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{card.title}</p>
                        {card.content.map((line) => (
                          <p key={line} className="mt-1 text-slate-500">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] bg-cta p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold">Horario de Atención</h3>
                <div className="mt-4 space-y-2 text-slate-200">
                  <p>Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="pt-2 text-sm text-slate-300">Atención 24/7 para seguimiento de envíos.</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
