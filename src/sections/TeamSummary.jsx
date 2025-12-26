import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

// Si después quieres usar imágenes reales, cambia `photo` por imports locales.
// Ejemplo: import team1 from "../assets/team/team1.jpg";

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
    <section className="relative overflow-hidden bg-white" aria-labelledby="team-heading">
      {/* Decor radial (mismo lenguaje que AboutSummary) */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(900px_420px_at_12%_8%,rgba(56,189,248,.14),transparent_60%),radial-gradient(900px_460px_at_92%_20%,rgba(168,85,247,.14),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white to-slate-50/60" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Header */}
        <div
          className={[
            "flex flex-col sm:flex-row items-start justify-between gap-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide uppercase text-slate-600 mb-2">
              Nuestro equipo
            </p>

            <div className="relative mt-3">
              <h2
                id="team-heading"
                className="text-4xl sm:text-5xl font-bold text-slate-900"
              >
                Personas que cuidan con
                <span className="block mt-2">
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-fuchsia-600">
                    cariño y profesionalismo
                  </span>
                </span>
              </h2>

              <div className="mt-4 h-1.5 w-40 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
            </div>

            <p className="mt-6 text-slate-700 text-lg leading-relaxed">
              En <span className="font-bold text-sky-600">Alma Dulce</span> el equipo lo es todo:
              cercanía, respeto y acompañamiento real en cada detalle del día.
            </p>
          </div>

          {/* CTA derecha */}
          <div className="mt-2 sm:mt-10">
            <Link
              to="/equipo"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 px-5 py-3 font-semibold text-slate-900"
              aria-label="Ver equipo completo"
            >
              Ver equipo completo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Grid de 8 */}
        <div
          className={[
            "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {TEAM.map((p, idx) => (
            <TeamCard key={`${p.name}-${idx}`} person={p} index={idx} />
          ))}
        </div>

        {/* Botón final centrado (por si lo quieres adicional) */}
        <div
          className={[
            "mt-12 flex justify-center transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <Link
            to="/equipo"
            className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white px-8 py-4 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Conócenos</span>
            <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Animaciones tipo Hero (sin libs) */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px) scale(0.98); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
      `}</style>
    </section>
  );
}

function TeamCard({ person, index }) {
  return (
    <article
      className={[
        "group relative rounded-2xl border border-slate-200/80",
        "bg-white/85 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300",
        "overflow-hidden",
      ].join(" ")}
      style={{
        animation: `fadeUp 700ms ${120 + index * 70}ms ease-out both`,
      }}
    >
      {/* halo hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-gradient-to-r from-sky-400/20 to-fuchsia-400/20 blur-2xl" />
      </div>

      {/* ring interior como tu GlassCard */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30" />

      <div className="relative p-6 flex flex-col items-center text-center">
        {/* Foto circular */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-sky-300/30 to-fuchsia-300/30" />
          <img
            src={person.photo}
            alt={`${person.name} - ${person.role}`}
            className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-md transition-transform duration-500 group-hover:scale-[1.05] group-hover:rotate-[0.5deg]"
            loading="lazy"
          />
        </div>

        <h3 className="mt-4 text-lg font-extrabold text-slate-900">
          {person.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-600">
          {person.role}
        </p>

        {/* Botón Conócenos */}
        <Link
          to="/equipo"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-sky-200"
          aria-label={`Conocer más sobre ${person.name}`}
        >
          Conócenos
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </article>
  );
}
