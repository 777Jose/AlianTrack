import { motion } from "framer-motion";
import { MapPin, Plane, Ship } from "lucide-react";
import worldMap from "../../assets/images/maps/world-map-dark.png";

const routes = [
  {
    id: "china-bolivia",
    label: "China → Bolivia",
    from: { x: 74, y: 25, name: "China" },
    to: { x: 30, y: 73, name: "Bolivia" },
    color: "#f97316",
    path: "M 70 40 C 63 26, 43 24, 36 73",
    icon: Ship,
  },
  {
    id: "usa-bolivia",
    label: "EE.UU. → Bolivia",
    from: { x: 25, y: 46, name: "EE.UU." },
    to: { x: 28, y: 73, name: "Bolivia" },
    color: "#38bdf8",
    path: "M 29 36 C 16 52, 29 66, 36 73",
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
          className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            active ? "bg-primary/40" : "bg-white/20"
          } animate-ping`}
        />
        <div
          className={`relative flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md ${
            active
              ? "border-primary/40 bg-primary/20 text-white"
              : "border-white/10 bg-slate-900/80 text-slate-100"
          }`}
        >
          <MapPin
            className={`h-4 w-4 ${active ? "text-primary" : "text-orange-400"}`}
          />
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}

export function RouteMap() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-[#071a3a] p-6 shadow-2xl">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
          Rutas estratégicas
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white">
          Conectamos China y EE.UU. con Bolivia
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
          Visualiza el recorrido logístico desde nuestros puntos de origen hacia
          Bolivia.
        </p>
      </div>

      <div className="relative h-[300px] overflow-hidden rounded-[24px] border border-white/10 bg-slate-950 sm:h-[360px] lg:h-[430px]">
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

              <motion.circle r="1.3" fill={route.color}>
                <animateMotion
                  dur={route.id === "china-bolivia" ? "5s" : "4.2s"}
                  repeatCount="indefinite"
                  path={route.path}
                />
              </motion.circle>
            </g>
          ))}
        </svg>
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

              <motion.circle r="1.3" fill={route.color}>
                <animateMotion
                  dur={route.id === "china-bolivia" ? "5s" : "4.2s"}
                  repeatCount="indefinite"
                  path={route.path}
                />
              </motion.circle>
            </g>
          ))}
        </svg>

        <div className="absolute bottom-4 right-4 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right shadow-lg backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
            Destino final
          </p>
          <p className="mt-1 text-lg font-bold text-white">La Paz / Bolivia</p>
          <p className="text-xs text-slate-300">
            Distribución y despacho local
          </p>
        </div>

        

        <Marker x={70} y={45} label="China" />
        <Marker x={35} y={36} label="EE.UU." />
        <Marker x={35} y={78} label="Bolivia" active />

        {routes.map((route) => {
          const Icon = route.icon;

          return (
            <div
              key={route.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(route.from.x + route.to.x) / 2}%`,
                top: `${(route.from.y + route.to.y) / 2 - 6}%`,
              }}
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/85 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-lg backdrop-blur-md">
                <Icon className="h-4 w-4" style={{ color: route.color }} />
                <span>{route.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
