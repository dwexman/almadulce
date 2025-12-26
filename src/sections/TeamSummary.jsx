import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function TeamSummary() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      {/* Fondo mejorado con gradientes sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-sky-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-fuchsia-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Header mejorado */}
        <div
          className={[
            "flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-50 to-fuchsia-50 border border-sky-100 mb-4">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 animate-pulse" />
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
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-500 to-sky-600 bg-[length:200%_auto] animate-gradient">
                    cuidan con el corazón
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-fuchsia-500/20 blur-xl" />
                </span>
              </span>
            </h2>

            <div className="mt-8 w-24 h-1 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-sky-400" />

            <p className="mt-8 text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl">
              En <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-fuchsia-600">Alma Dulce</span> 
              {" "}cada miembro aporta calidez humana y excelencia profesional para crear 
              un entorno donde el bienestar florece en cada detalle.
            </p>
          </div>

          {/* CTA derecha mejorado */}
          <div className="mt-6 lg:mt-0">
            <Link
              to="/equipo"
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-4 font-bold text-slate-900 overflow-hidden"
              aria-label="Ver equipo completo"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-sky-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Ver equipo completo</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110">→</span>
            </Link>
          </div>
        </div>

        {/* Grid mejorado */}
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

        {/* Botón final mejorado */}
        <div
          className={[
            "mt-16 flex justify-center transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <Link
            to="/equipo"
            className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-600 to-fuchsia-600 text-white px-10 py-5 font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            {/* Efecto hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <span className="relative z-10 text-lg">Conoce a todo el equipo</span>
            <span className="relative z-10 ml-4 text-xl transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-45">→</span>
          </Link>
        </div>
      </div>
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
        "hover:border-sky-200/50 hover:bg-white",
      ].join(" ")}
      style={{
        animation: `fadeUp 700ms ${120 + index * 70}ms ease-out both`,
      }}
    >
      {/* Efecto de borde brillante al hover */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-sky-400/0 via-sky-300/30 to-fuchsia-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Fondo de gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/5 to-fuchsia-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 md:p-7 flex flex-col items-center text-center z-10">
        {/* Contenedor de foto mejorado */}
        <div className="relative mb-2">
          {/* Anillo decorativo */}
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent group-hover:border-sky-100/50 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100" />
          
          {/* Halo de fondo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-200/30 to-fuchsia-200/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Foto */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-2xl">
            <img
              src={person.photo}
              alt={`${person.name} - ${person.role}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Indicador de rol */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-md">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
          </div>
        </div>

        {/* Información */}
        <div className="mt-6 space-y-2">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-fuchsia-600 transition-all duration-300">
            {person.name}
          </h3>
          <p className="text-sm font-medium text-slate-600 px-4 py-1.5 rounded-full bg-slate-50 inline-block">
            {person.role}
          </p>
        </div>

        {/* Botón mejorado */}
        <Link
          to="/equipo"
          className="mt-6 relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-white to-sky-50 border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-sky-300 group-hover:bg-gradient-to-r group-hover:from-sky-50 group-hover:to-fuchsia-50 overflow-hidden"
          aria-label={`Conocer más sobre ${person.name}`}
        >
          {/* Efecto hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-400/10 to-fuchsia-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          
          <span className="relative">Conócenos</span>
          <span className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">→</span>
        </Link>
      </div>
    </article>
  );
}