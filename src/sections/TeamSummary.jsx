import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const BRAND_GRADIENT = "from-[#8C5095] via-[#6D5399] to-[#4897C3]";
const BRAND_GRADIENT_SOFT = "from-[#8C5095]/10 via-[#6D5399]/10 to-[#4897C3]/10";
const BRAND_GRADIENT_SOFT2 = "from-[#8C5095]/12 via-[#6D5399]/10 to-[#4897C3]/12";

export default function TeamSummary() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const TEAM = useMemo(
    () => [
      { name: "María Fernández", role: "Dirección General", photo: "https://i.pravatar.cc/300?img=32" },
      { name: "Claudia Rojas", role: "Coordinación de Cuidados", photo: "https://i.pravatar.cc/300?img=47" },
      { name: "José Herrera", role: "Enfermería", photo: "https://i.pravatar.cc/300?img=12" },
      { name: "Camila Soto", role: "Kinesiología", photo: "https://i.pravatar.cc/300?img=5" },
      { name: "Valentina Muñoz", role: "Terapia Ocupacional", photo: "https://i.pravatar.cc/300?img=18" },
      { name: "Daniela Pizarro", role: "Psicología", photo: "https://i.pravatar.cc/300?img=24" },
      { name: "Pablo Lagos", role: "Nutrición", photo: "https://i.pravatar.cc/300?img=60" },
      { name: "Fernanda Díaz", role: "Cuidado Integral", photo: "https://i.pravatar.cc/300?img=16" },
    ],
    []
  );

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      aria-labelledby="team-heading"
    >
      {/* Fondo sutil (brand) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-72 h-72 bg-gradient-to-br ${BRAND_GRADIENT_SOFT} rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl ${BRAND_GRADIENT_SOFT} rounded-full blur-3xl`} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Header */}
        <div
          className={[
            "flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <div className="max-w-2xl">
            <div
              className={[
                "inline-flex items-center gap-2 px-3 py-1 rounded-full",
                "bg-gradient-to-r",
                BRAND_GRADIENT_SOFT2,
                "border border-slate-200/70 mb-4",
              ].join(" ")}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${BRAND_GRADIENT} animate-pulse`} />
              <p className="text-sm font-semibold tracking-wide text-slate-700">
                Nuestro equipo
              </p>
            </div>

            <h2
              id="team-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
            >
              Conoce a quienes
              <span className="block mt-2 md:mt-3">
                <span className="relative inline-block">
                  <span
                    className={[
                      "relative z-10 text-transparent bg-clip-text bg-gradient-to-r",
                      BRAND_GRADIENT,
                    ].join(" ")}
                  >
                    cuidan con el corazón
                  </span>
                  <span
                    className={[
                      "absolute inset-0 blur-xl",
                      "bg-gradient-to-r",
                      BRAND_GRADIENT_SOFT2,
                    ].join(" ")}
                  />
                </span>
              </span>
            </h2>

            <div className={`mt-8 w-24 h-1 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />

            <p className="mt-8 text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl">
              En{" "}
              <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${BRAND_GRADIENT}`}>
                Alma Dulce
              </span>{" "}
              cada miembro aporta calidez humana y excelencia profesional para crear
              un entorno donde el bienestar florece en cada detalle.
            </p>
          </div>

          {/* CTA derecha */}
          <div className="mt-6 lg:mt-0">
            <Link
              to="/equipo"
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-4 font-bold text-slate-900 overflow-hidden"
              aria-label="Ver equipo completo"
            >
              <div
                className={[
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  "bg-gradient-to-r",
                  BRAND_GRADIENT_SOFT2,
                ].join(" ")}
              />
              <span className="relative z-10">Ver equipo completo</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div
          className={[
            "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {TEAM.map((p, idx) => (
            <TeamCard key={`${p.name}-${idx}`} person={p} index={idx} />
          ))}
        </div>

        {/* Botón final */}
        <div
          className={[
            "mt-16 flex justify-center transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <Link
            to="/equipo"
            className={[
              "group relative inline-flex items-center justify-center rounded-2xl text-white px-10 py-5 font-bold",
              "shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] overflow-hidden",
              "bg-gradient-to-r",
              BRAND_GRADIENT,
            ].join(" ")}
          >
            <div
              className={[
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "bg-gradient-to-r",
                BRAND_GRADIENT,
              ].join(" ")}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/22 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

            <span className="relative z-10 text-lg">Conoce a todo el equipo</span>
            <span className="relative z-10 ml-4 text-xl transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-45">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Animación (si no la tienes global) */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function TeamCard({ person, index }) {
  return (
    <article
      className={[
        "group relative rounded-3xl border border-slate-200/70",
        "bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500",
        "overflow-hidden hover:-translate-y-2",
        "hover:border-slate-300/70 hover:bg-white",
      ].join(" ")}
      style={{
        animation: `fadeUp 700ms ${120 + index * 70}ms ease-out both`,
      }}
    >
      {/* borde brillante hover (brand) */}
      <div
        className={[
          "absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r",
          "from-[#4897C3]/0 via-[#6D5399]/25 to-[#8C5095]/0",
        ].join(" ")}
      />

      {/* fondo hover suave */}
      <div
        className={[
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-b from-white via-white to-slate-50",
        ].join(" ")}
      />

      <div className="relative p-6 md:p-7 flex flex-col items-center text-center z-10">
        {/* Foto */}
        <div className="relative mb-2">
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent group-hover:border-slate-200/70 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100" />
          <div
            className={[
              "absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              "bg-gradient-to-r",
              "from-[#4897C3]/22 to-[#8C5095]/22",
            ].join(" ")}
          />

          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-2xl">
            <img
              src={person.photo}
              alt={`${person.name} - ${person.role}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Indicador */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-md">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-2">
          <h3
            className={[
              "text-xl font-bold text-slate-900 transition-all duration-300",
              "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r",
              BRAND_GRADIENT,
            ].join(" ")}
          >
            {person.name}
          </h3>

          <p className="text-sm font-medium text-slate-600 px-4 py-1.5 rounded-full bg-slate-50 inline-block">
            {person.role}
          </p>
        </div>

        {/* Botón */}
        <Link
          to="/equipo"
          className={[
            "mt-6 relative inline-flex items-center justify-center gap-2 rounded-xl",
            "border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:shadow-md",
            "transition-all duration-300 overflow-hidden",
            "bg-gradient-to-r from-white to-slate-50",
            "group-hover:border-slate-300",
          ].join(" ")}
          aria-label={`Conocer más sobre ${person.name}`}
        >
          <div
            className={[
              "absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700",
              "bg-gradient-to-r",
              "from-[#4897C3]/0 via-[#6D5399]/10 to-[#8C5095]/0",
            ].join(" ")}
          />
          <span className="relative">Conócenos</span>
          <span className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
