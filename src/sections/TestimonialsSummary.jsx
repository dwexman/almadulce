import { useEffect, useMemo, useRef, useState } from "react";
import t1 from "../assets/testimonio1.png";
import t2 from "../assets/testimonio2.png";
import t3 from "../assets/testimonio3.png";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => setIsVisible(true), []);

  const ITEMS = useMemo(
    () => [
      { img: t1, alt: "Testimonio 1 - Residencia Alma Dulce" },
      { img: t2, alt: "Testimonio 2 - Residencia Alma Dulce" },
      { img: t3, alt: "Testimonio 3 - Residencia Alma Dulce" },
    ],
    []
  );

  // Duplicamos para loop infinito visual
  const LOOP = useMemo(() => [...ITEMS, ...ITEMS, ...ITEMS], [ITEMS]);

  // Pausar si el usuario prefiere menos animación
  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  const shouldPause = paused || reducedMotion;

  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="testimonials-heading">
      {/* Fondo suave */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(900px_420px_at_12%_8%,rgba(56,189,248,.14),transparent_60%),radial-gradient(900px_460px_at_92%_20%,rgba(168,85,247,.14),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white to-slate-50/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-28">
        {/* Header */}
        <div
          className={[
            "flex flex-col lg:flex-row items-start justify-between gap-8 mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-fuchsia-50 border border-sky-100 mb-4">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500"></span>
              <p className="text-sm font-semibold tracking-wide uppercase text-slate-700">
                Experiencias reales
              </p>
            </div>

            <div className="relative">
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Testimonios
                <span className="block mt-2">
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-500 to-sky-600 bg-[length:200%_auto] animate-gradient">
                    que se sienten de verdad
                  </span>
                </span>
              </h2>
              <div className="mt-6 w-48 h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>
            </div>

            <p className="mt-8 text-slate-700 text-lg leading-relaxed max-w-3xl">
              Para que puedas leerlos bien, los mostramos grandes y van deslizándose suavemente.
              <span className="block mt-3 text-slate-500 text-base">
                Pasa el cursor para pausar
              </span>
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className={`w-3 h-3 rounded-full ${shouldPause ? 'bg-amber-500' : 'bg-emerald-500'} animate-pulse`}></div>
              </div>
              <span className="text-sm font-semibold text-slate-800">
                {shouldPause ? "Pausado" : "Deslizando"}
              </span>
              <span className="text-lg">{shouldPause ? "⏸️" : "↔️"}</span>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div
          className={[
            "mt-16 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/70 backdrop-blur-sm",
            "shadow-2xl shadow-sky-100/50 overflow-hidden relative",
            "transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-label="Carrusel de testimonios"
        >
          {/* Efecto de borde sutil */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
          
          {/* Track */}
          <div className="relative py-8">
            {/* Indicadores de navegación */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 flex gap-1.5">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="w-2 h-2 rounded-full bg-slate-300/70"></div>
              ))}
            </div>

            <div
              ref={trackRef}
              className={[
                "flex gap-6 px-4 sm:px-8",
                "will-change-transform",
                "animate-marquee",
                shouldPause ? "paused" : "",
              ].join(" ")}
            >
              {LOOP.map((it, idx) => (
                <TestimonialSlide key={idx} img={it.img} alt={it.alt} />
              ))}
            </div>

            {/* Gradientes laterales mejorados */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white to-transparent z-10" />
          </div>
        </div>

        {/* Botones de navegación (opcional) */}
        <div className="flex justify-center gap-3 mt-8">
          <button 
            className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-slate-300"
            onClick={() => setPaused(true)}
            aria-label="Pausar animación"
          >
            ⏸️
          </button>
          <button 
            className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-slate-300"
            onClick={() => setPaused(false)}
            aria-label="Reanudar animación"
          >
            ▶️
          </button>
        </div>
      </div>

      <style>{`
        /* En desktop: 2 slides visibles grandes. En mobile: 1 visible */
        .slide {
          flex: 0 0 92%;
        }
        @media (min-width: 640px) {
          .slide { flex-basis: 70%; }
        }
        @media (min-width: 1024px) {
          .slide { flex-basis: 48%; }
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Velocidad: ajusta si quieres más lento/rápido */
        .animate-marquee {
          animation: marquee 6s linear infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        /* Pausa */
        .paused {
          animation-play-state: paused;
        }

        /* Respeto a reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee, 
          .animate-gradient,
          .animate-shimmer,
          .animate-pulse { 
            animation: none !important; 
            transform: none !important; 
          }
        }

        /* Suavizar el carrusel */
        .animate-marquee {
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Efecto de elevación para slides */
        .slide {
          transition: transform 0.3s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px) scale(0.985); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
      `}</style>
    </section>
  );
}

function TestimonialSlide({ img, alt }) {
  return (
    <article className="slide group relative">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/10 via-fuchsia-400/10 to-sky-400/10 blur-xl"></div>
        </div>
        
        {/* Badge en la esquina */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200">
            <span className="text-xs font-semibold text-slate-700">📄 Testimonio</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={img}
            alt={alt}
            className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Indicador de interacción */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 rounded-full bg-white shadow-md">
            <span className="text-slate-600 text-sm">👁️ Ver</span>
          </div>
        </div>
      </div>
    </article>
  );
}