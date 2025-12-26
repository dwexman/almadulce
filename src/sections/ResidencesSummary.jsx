import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function ResidencesSummary() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const RESIDENCES = useMemo(
    () => [
      {
        name: "Alma Dulce — Casa Principal",
        location: "Santiago, Chile",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        highlights: ["Cuidados 24/7", "Áreas verdes", "Actividades diarias"],
      },
      {
        name: "Alma Dulce — Residencia Jardín",
        location: "La Reina, Santiago",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
        highlights: ["Alimentación y nutrición", "Ambiente familiar", "Terapias"],
      },
      {
        name: "Alma Dulce — Espacio Tranquilo",
        location: "Ñuñoa, Santiago",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        highlights: ["Calefacción central", "Controles diarios", "Estacionamientos"],
      },
    ],
    []
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/30" aria-labelledby="residences-heading">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(900px_420px_at_10%_10%,rgba(56,189,248,.08),transparent_60%),radial-gradient(900px_460px_at_90%_25%,rgba(168,85,247,.08),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white via-transparent to-sky-50/30" />
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-sky-100/40 to-purple-100/40 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-fuchsia-100/30 to-sky-100/30 rounded-full blur-3xl opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Header */}
        <div
          className={[
            "flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-100 to-fuchsia-100 border border-sky-200/50 mb-4">
              <span className="text-sky-600 text-sm font-semibold tracking-wide uppercase">
                Espacios pensados con amor
              </span>
            </div>

            <div className="relative mt-2">
              <h2 id="residences-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                Nuestras residencias
                <span className="block mt-3">
                  <span className="inline-block bg-gradient-to-r from-sky-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                    cómodas, seguras y acogedoras
                  </span>
                </span>
              </h2>
              
              <div className="flex items-center gap-4 mt-6">
                <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400 opacity-60" />
                <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 opacity-40" />
              </div>
            </div>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-3xl">
              Cada casa está diseñada con atención al detalle para que nuestros residentes vivan con tranquilidad, 
              compañía y atención profesional en un entorno cálido y familiar.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <Link
              to="/residencias"
              className="group inline-flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-lg hover:shadow-xl hover:border-sky-200 transition-all duration-300 px-6 py-4 font-semibold text-slate-800 hover:text-sky-700"
              aria-label="Ver todas las residencias"
            >
              <span className="relative">
                Ver todas
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-sky-400 to-fuchsia-400 transition-all duration-300" />
              </span>
              <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-sky-500">→</span>
            </Link>
          </div>
        </div>

        {/* Cards preview - grid con alturas iguales */}
        <div
          className={[
            "mt-16 grid gap-8 lg:grid-cols-3 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {RESIDENCES.map((r, idx) => (
            <ResidenceCard key={`${r.name}-${idx}`} residence={r} index={idx} />
          ))}
        </div>

        {/* CTA grande */}
        <div
          className={[
            "mt-16 relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white to-sky-50/50 backdrop-blur-sm shadow-2xl p-8 sm:p-10 transition-all duration-700 delay-200 hover:shadow-2xl hover:border-sky-200/60",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* Fondo decorativo CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-200/20 to-fuchsia-200/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sky-600 mb-3">
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Conoce cada detalle
                </p>
              </div>
              <p className="text-slate-900 font-extrabold text-2xl sm:text-3xl">
                ¿Quieres verlas en detalle?
              </p>
              <p className="mt-3 text-slate-600 text-lg">
                Explora fotos, servicios completos, ubicación exacta y cómo agendar una visita personalizada.
              </p>
            </div>

            <Link
              to="/residencias"
              className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-blue-500 to-fuchsia-500 text-white px-8 py-4 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-w-[220px]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <span>Conocer residencias</span>
                <span className="text-xl transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResidenceCard({ residence, index }) {
  return (
    <article
      className={[
        "group relative flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200/60",
        "bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-sm",
        "shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",
      ].join(" ")}
      style={{ 
        animation: `fadeUp 700ms ${120 + index * 90}ms ease-out both` 
      }}
    >
      {/* Imagen - altura fija */}
      <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
        <img
          src={residence.image}
          alt={residence.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
        
        {/* Halo hover */}
        <div className="pointer-events-none absolute -inset-10 bg-gradient-to-r from-sky-400/20 via-transparent to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      </div>

      {/* Contenido - se expande para ocupar espacio disponible */}
      <div className="flex flex-col flex-1 p-7">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-800 transition-colors duration-300">
            {residence.name}
          </h3>
          <div className="mt-2">
            <p className="text-sm font-medium text-slate-600">{residence.location}</p>
          </div>
        </div>

        {/* Chips - contenedor con altura mínima fija */}
        <div className="mt-6 mb-4 flex-1 min-h-[72px]">
          <div className="flex flex-wrap gap-2">
            {residence.highlights.map((h, i) => (
              <span
                key={h}
                className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-sky-700 hover:border-sky-200 hover:bg-sky-50/50 transition-all duration-300 group-hover:shadow-sm"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Botón - posición fija en la parte inferior */}
        <div className="pt-6 mt-auto border-t border-slate-100">
          <Link
            to="/residencias"
            className="group/btn inline-flex items-center justify-between w-full rounded-xl border border-slate-200 bg-gradient-to-r from-white to-slate-50/80 px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-sm hover:shadow-md hover:border-sky-200 hover:from-sky-50/30 hover:to-white transition-all duration-300"
            aria-label={`Conocer más sobre ${residence.name}`}
          >
            <span>Ver detalle completo</span>
            <span className="flex items-center gap-1">
              <span className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">
                Explorar
              </span>
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Borde hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-sky-200/50 transition-all duration-500 pointer-events-none" />
    </article>
  );
}