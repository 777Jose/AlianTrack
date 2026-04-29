import { motion } from "framer-motion";
import { MapPin, Plane, Ship } from "lucide-react";
import worldMap from "../../assets/images/maps/world-map-dark.png";

const routes = [
  {
    id: "china-bolivia",
    label: "",
    from: { x: 74, y: 42, name: "China" },
    to: { x: 35, y: 68, name: "Bolivia" },
    color: "#f97316",
    path: "M 74 42 C 65 30, 47 30, 35 73",
    icon: Ship,
  },
  {
    id: "usa-bolivia",
    label: "",
    from: { x: 5, y: 55, name: "EE.UU." },
    to: { x: 35, y: 73, name: "Bolivia" },
    color: "#38bdf8",
    path: "M 28 42 C 16 52, 22 66, 35 73",
    icon: Plane,
  },
];

function Marker({
  x,
  y,
  label,
  active = false,
}: {
  x: number;
  y: number;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative">
        <span
          className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-4 sm:w-4 ${
            active ? "bg-primary/40" : "bg-white/20"
          } animate-ping`}
        />

        <div
          className={`relative flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-semibold shadow-lg backdrop-blur-md sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs ${
            active
              ? "border-primary/40 bg-primary/20 text-white"
              : "border-white/10 bg-slate-900/80 text-slate-100"
          }`}
        >
          <MapPin
            className={`h-3 w-3 sm:h-4 sm:w-4 ${
              active ? "text-primary" : "text-orange-400"
            }`}
          />
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}

export function RouteMap() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-[#071a3a] p-5 shadow-2xl sm:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80 sm:text-sm">
          Rutas estratégicas
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl lg:text-2xl">
          Conectamos China y EE.UU. con Bolivia
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base lg:text-sm">
          Visualiza el recorrido logístico desde nuestros puntos de origen hacia
          Bolivia.
        </p>
      </div>

      <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] border border-white/10 bg-slate-950 sm:aspect-[16/10] lg:aspect-auto lg:h-[430px]">
        <img
          src={worldMap}
          alt="Mapa mundi"
          className="absolute inset-0 h-full w-full object-contain"
        />

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {routes.map((route) => (
            <g key={route.id}>
              <path
                d={route.path}
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
              />

              <motion.path
                d={route.path}
                fill="none"
                stroke={route.color}
                strokeWidth="1.4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.4 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />

              <motion.circle r="1.25" fill={route.color}>
                <animateMotion
                  dur={route.id === "china-bolivia" ? "5s" : "4.2s"}
                  repeatCount="indefinite"
                  path={route.path}
                />
              </motion.circle>
            </g>
          ))}
        </svg>

        <Marker x={74} y={50} label="China" />
        <Marker x={28} y={35} label="EE.UU." />
        <Marker x={35} y={75} label="Bolivia" active />

        {routes.map((route) => {
          const Icon = route.icon;

          return (
            <div
              key={route.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(route.from.x + route.to.x) / 2}%`,
                top: `${(route.from.y + route.to.y) / 2 - 5}%`,
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/85 text-slate-200 shadow-lg backdrop-blur-md sm:h-auto sm:w-auto sm:gap-2 sm:rounded-full sm:px-3 sm:py-1.5 sm:text-xs">
                <Icon
                  className="h-5 w-5 sm:h-4 sm:w-4"
                  style={{ color: route.color }}
                />
                {route.label && (
                  <span className="hidden sm:inline">{route.label}</span>
                )}
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-4 right-4 hidden rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right shadow-lg backdrop-blur-md sm:block">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
            Destino final
          </p>
          <p className="mt-1 text-lg font-bold text-white">La Paz / Bolivia</p>
          <p className="text-xs text-slate-300">
            Distribución y despacho local
          </p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-primary/20 bg-slate-950/70 px-4 py-4 text-center shadow-lg backdrop-blur-md sm:hidden">
        <p className="text-[10px] uppercase tracking-[0.25em] text-primary/80">
          Destino final
        </p>
        <p className="mt-1 text-lg font-bold text-white">La Paz / Bolivia</p>
        <p className="text-xs text-slate-300">Distribución y despacho local</p>
      </div>
    </div>
  );
}
