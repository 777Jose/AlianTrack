import { useMemo, useState } from "react";
import {
  Calculator,
  Ship,
  Plane,
  DollarSign,
  Clock3,
  MessageCircle,
  Package,
  ArrowRight,
} from "lucide-react";

type Origin = "china" | "usa";
type Transport = "maritimo" | "aereo";

export function FreightCalculator() {
  const [origin, setOrigin] = useState<Origin>("china");
  const [transport, setTransport] = useState<Transport>("maritimo");
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [declaredValue, setDeclaredValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  const exchangeRate = 6.96;

  const numericWeight = Number(weight) || 0;
  const numericVolume = Number(volume) || 0;
  const numericDeclaredValue = Number(declaredValue) || 0;

  const calculation = useMemo(() => {
    let baseFee = 0;
    let freightCost = 0;
    let insuranceCost = 0;
    let estimatedDays = "";
    let recommendation = "";

    if (origin === "china") {
      baseFee = transport === "maritimo" ? 180 : 120;
    } else {
      baseFee = transport === "maritimo" ? 140 : 95;
    }

    if (transport === "maritimo") {
      const ratePerM3 = origin === "china" ? 220 : 180;
      freightCost = numericVolume * ratePerM3 + numericWeight * 0.15;
      estimatedDays = origin === "china" ? "35 a 50 días" : "20 a 30 días";

      if (numericVolume >= 8) {
        recommendation =
          "Tu carga tiene buen perfil para transporte marítimo y podría evaluarse incluso como carga consolidada avanzada o contenedor, según volumen final.";
      } else {
        recommendation =
          "El transporte marítimo es recomendable si buscas optimizar costos en carga de volumen medio o alto.";
      }
    } else {
      const ratePerKg = origin === "china" ? 6.8 : 5.2;
      freightCost = numericWeight * ratePerKg + numericVolume * 35;
      estimatedDays = origin === "china" ? "7 a 12 días" : "4 a 8 días";

      if (numericWeight <= 150) {
        recommendation =
          "El transporte aéreo es ideal para cargas urgentes, livianas o de alto valor.";
      } else {
        recommendation =
          "Tu carga puede viajar por vía aérea, pero conviene comparar con marítimo si buscas reducir costos.";
      }
    }

    insuranceCost = numericDeclaredValue * 0.015;

    const subtotal = baseFee + freightCost + insuranceCost;
    const handling = subtotal * 0.05;
    const totalUsd = subtotal + handling;
    const totalBob = totalUsd * exchangeRate;

    return {
      baseFee,
      freightCost,
      insuranceCost,
      handling,
      totalUsd,
      totalBob,
      estimatedDays,
      recommendation,
    };
  }, [origin, transport, numericWeight, numericVolume, numericDeclaredValue]);

  const canCalculate =
    numericWeight > 0 || numericVolume > 0 || numericDeclaredValue > 0;

  const handleCalculate = () => {
    setShowResult(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola, deseo una cotización con ALIANTRACK.
Origen: ${origin === "china" ? "China" : "Estados Unidos"}
Transporte: ${transport === "maritimo" ? "Marítimo" : "Aéreo"}
Peso: ${numericWeight} kg
Volumen: ${numericVolume} m3
Valor declarado: $${numericDeclaredValue}
Costo estimado: $${calculation.totalUsd.toFixed(2)} USD / Bs ${calculation.totalBob.toFixed(2)}
Tiempo estimado: ${calculation.estimatedDays}`
  );

  const whatsappUrl = `https://wa.me/59177291715?text=${whatsappMessage}`;

  return (
    <section
      id="calculadora"
      className="bg-slate-50 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Calculadora de Fletes
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Estima el costo de tu importación
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Obtén una referencia rápida del costo de transporte internacional
            desde China o Estados Unidos hacia Bolivia por vía marítima o aérea.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Datos de tu carga
                </h3>
                <p className="text-sm text-slate-500">
                  Completa los campos para generar una estimación.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  País de origen
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value as Origin)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
                >
                  <option value="china">China</option>
                  <option value="usa">Estados Unidos</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Tipo de transporte
                </label>
                <select
                  value={transport}
                  onChange={(e) => setTransport(e.target.value as Transport)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
                >
                  <option value="maritimo">Marítimo</option>
                  <option value="aereo">Aéreo</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Peso estimado (kg)
                </label>
                <input
                  type="number"
                  min="0"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Ej. 120"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Volumen estimado (m³)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="Ej. 2.5"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Valor declarado de la carga (USD)
                </label>
                <input
                  type="number"
                  min="0"
                  value={declaredValue}
                  onChange={(e) => setDeclaredValue(e.target.value)}
                  placeholder="Ej. 3500"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleCalculate}
                disabled={!canCalculate}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Calcular estimación
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={showResult ? whatsappUrl : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 font-semibold transition ${
                  showResult
                    ? "border-green-500 bg-green-500 text-white hover:scale-[1.02] hover:bg-green-600"
                    : "pointer-events-none border-slate-200 bg-slate-100 text-slate-400"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                Enviar a WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Esta calculadora ofrece una referencia aproximada. El costo final
              puede variar según tipo de mercancía, aduana, seguro, temporada y
              condiciones logísticas.
            </p>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-[#071a3a] p-6 text-white shadow-2xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-primary/15 p-3 text-primary">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Resultado estimado</h3>
                <p className="text-sm text-slate-300">
                  Resumen referencial de tu operación logística.
                </p>
              </div>
            </div>

            {showResult ? (
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      Costo estimado USD
                    </p>
                    <p className="mt-2 text-3xl font-extrabold text-white">
                      ${calculation.totalUsd.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      Costo estimado Bs
                    </p>
                    <p className="mt-2 text-3xl font-extrabold text-primary">
                      Bs {calculation.totalBob.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center gap-2 text-slate-300">
                      <Clock3 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Tiempo estimado</span>
                    </div>
                    <p className="text-lg font-bold text-white">
                      {calculation.estimatedDays}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center gap-2 text-slate-300">
                      {transport === "maritimo" ? (
                        <Ship className="h-4 w-4 text-primary" />
                      ) : (
                        <Plane className="h-4 w-4 text-primary" />
                      )}
                      <span className="text-sm font-medium">Modalidad</span>
                    </div>
                    <p className="text-lg font-bold text-white">
                      {transport === "maritimo" ? "Transporte marítimo" : "Transporte aéreo"}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    <p className="font-semibold text-white">Recomendación</p>
                  </div>
                  <p className="text-sm leading-6 text-slate-200">
                    {calculation.recommendation}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="mb-3 text-sm font-semibold text-white">
                    Desglose referencial
                  </p>

                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Tarifa base</span>
                      <span>${calculation.baseFee.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Flete estimado</span>
                      <span>${calculation.freightCost.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Seguro estimado</span>
                      <span>${calculation.insuranceCost.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Manejo operativo</span>
                      <span>${calculation.handling.toFixed(2)}</span>
                    </div>

                    <div className="mt-3 border-t border-white/10 pt-3">
                      <div className="flex items-center justify-between text-base font-bold text-white">
                        <span>Total estimado</span>
                        <span>${calculation.totalUsd.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-8 text-center">
                <p className="text-lg font-semibold text-white">
                  Aún no hay cálculo generado
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Completa los datos de tu carga y presiona
                  {" "}
                  <span className="font-semibold text-primary">
                    “Calcular estimación”
                  </span>
                  {" "}
                  para ver el resultado.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}