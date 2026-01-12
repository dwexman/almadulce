import { useEffect, useMemo, useState } from "react";
import t1 from "../assets/testimonio1.png";
import t2 from "../assets/testimonio2.png";
import t3 from "../assets/testimonio3.png";
import { ChevronLeft, ChevronRight, Heart, Sparkles, Quote, Star } from "lucide-react";

const BRAND_GRADIENT = "from-[#8C5095] via-[#6D5399] to-[#4897C3]";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ITEMS = useMemo(
    () => [
      { img: t1, alt: "Testimonio 1 - Residencia Alma Dulce" },
      { img: t2, alt: "Testimonio 2 - Residencia Alma Dulce" },
      { img: t3, alt: "Testimonio 3 - Residencia Alma Dulce" },
    ],
    []
  );

  const nextSlide = () => {
    if (isTransitioning || ITEMS.length <= 1) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % ITEMS.length);

    setTimeout(() => setIsTransitioning(false), 400);
  };

  const prevSlide = () => {
    if (isTransitioning || ITEMS.length <= 1) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);

    setTimeout(() => setIsTransitioning(false), 400);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex || ITEMS.length <= 1) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => setIsTransitioning(false), 400);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/40 py-16 md:py-24">
      {/* Decorativos brand */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-gradient-to-r from-[#8C5095]/20 to-transparent blur-2xl" />
        <div className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-gradient-to-l from-[#4897C3]/18 to-transparent blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-[#6D5399]/14 to-transparent blur-xl" />

        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/35 to-transparent" />

        {/* Radiales brand (suaves) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 15% 10%, rgba(140,80,149,.10), transparent 55%), radial-gradient(900px 560px at 88% 18%, rgba(72,151,195,.09), transparent 58%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/70 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#4897C3]" />
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Historias Reales
            </span>
            <Heart className="w-4 h-4 text-[#8C5095] animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            <span className="relative inline-block">
              Voces que
              <span
                className={[
                  "absolute -bottom-2 left-0 w-full h-3 -z-10 rounded-full",
                  "bg-gradient-to-r",
                  "from-[#8C5095]/25 via-[#6D5399]/18 to-[#4897C3]/25",
                ].join(" ")}
              />
            </span>
            <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${BRAND_GRADIENT}`}>
              inspiran confianza
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-[#4897C3]/40 to-transparent" />
            <Quote className="w-8 h-8 text-slate-400" />
            <div className="h-px w-20 bg-gradient-to-l from-[#8C5095]/40 to-transparent" />
          </div>

          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
            Conoce las experiencias genuinas de familias que encontraron en nosotros
            el cuidado y calidez que buscaban.
          </p>
        </div>

        {/* Slider Container */}
        <div className={`relative transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Flechas */}
          <div className="flex items-center justify-center gap-8 mb-10">
            <button
              onClick={prevSlide}
              className="group relative p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-xl hover:shadow-2xl border border-slate-200/70 hover:border-[#4897C3]/40 transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Testimonio anterior"
              disabled={isTransitioning || ITEMS.length <= 1}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#4897C3]/12 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronLeft className="relative w-6 h-6 text-slate-700 group-hover:text-[#4897C3] transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="group relative p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-xl hover:shadow-2xl border border-slate-200/70 hover:border-[#8C5095]/40 transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Siguiente testimonio"
              disabled={isTransitioning || ITEMS.length <= 1}
            >
              <div className="absolute -inset-2 bg-gradient-to-l from-[#8C5095]/12 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronRight className="relative w-6 h-6 text-slate-700 group-hover:text-[#8C5095] transition-colors" />
            </button>
          </div>

          {/* Slides */}
          <div className="relative">
            {ITEMS.map((item, index) => (
              <div
                key={index}
                className={`
                  transition-all duration-500 ease-out
                  ${
                    index === currentIndex
                      ? "opacity-100 scale-100 translate-x-0 z-20"
                      : index === (currentIndex - 1 + ITEMS.length) % ITEMS.length
                      ? "opacity-40 -translate-x-20 scale-90 z-10 blur-sm pointer-events-none absolute inset-0"
                      : index === (currentIndex + 1) % ITEMS.length
                      ? "opacity-40 translate-x-20 scale-90 z-10 blur-sm pointer-events-none absolute inset-0"
                      : "opacity-0 pointer-events-none absolute inset-0"
                  }
                `}
                style={{
                  position: index === currentIndex ? "relative" : "absolute",
                }}
              >
                <TestimonialCard img={item.img} alt={item.alt} isActive={index === currentIndex} />
              </div>
            ))}

            {/* Indicadores */}
            {ITEMS.length > 1 && (
              <div className="flex justify-center gap-3 mt-12">
                {ITEMS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="group relative"
                    aria-label={`Ir al testimonio ${index + 1}`}
                    disabled={isTransitioning}
                  >
                    <div
                      className={`
                        w-12 h-1.5 rounded-full transition-all duration-300
                        ${
                          index === currentIndex
                            ? `bg-gradient-to-r ${BRAND_GRADIENT}`
                            : "bg-slate-300 group-hover:bg-slate-400"
                        }
                        ${isTransitioning ? "cursor-not-allowed" : "cursor-pointer"}
                      `}
                    />
                    {index === currentIndex && (
                      <>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Star className="w-4 h-4 text-[#4897C3] fill-[#4897C3] animate-bounce" />
                        </div>
                        <div
                          className={[
                            "absolute -inset-3 rounded-full blur-sm",
                            "bg-gradient-to-r",
                            "from-[#4897C3]/16 via-[#6D5399]/12 to-[#8C5095]/16",
                          ].join(" ")}
                        />
                      </>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Indicador de posición */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/70">
              <span className="text-sm font-medium text-slate-600">
                Testimonio{" "}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${BRAND_GRADIENT} font-bold`}>
                  {currentIndex + 1}
                </span>{" "}
                de {ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ img, alt, isActive }) {
  return (
    <div className={`relative mx-auto max-w-4xl transition-all duration-500 ${isActive ? "scale-100" : "scale-95"}`}>
      {/* Marco decorativo */}
      <div
        className={[
          "absolute -inset-4 rounded-3xl blur-lg opacity-60",
          "bg-gradient-to-r",
          "from-[#4897C3]/18 via-white/30 to-[#8C5095]/18",
        ].join(" ")}
      />

      {/* Card */}
      <div className="relative bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden group">
        {/* Cabecera */}
        <div className="relative px-4 py-3 border-b border-slate-200/50 bg-gradient-to-r from-white to-slate-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${BRAND_GRADIENT} flex items-center justify-center`}>
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#4897C3]/18 to-[#8C5095]/18 rounded-full blur-sm" />
              </div>

              <div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base">Testimonio Verificado</h3>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#4897C3] fill-[#4897C3]" />
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="animate-pulse bg-gradient-to-r from-[#4897C3]/10 to-[#8C5095]/10 px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-slate-600">Experiencia Real</span>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative p-2 md:p-4">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#4897C3]/6 to-[#8C5095]/6 shadow-inner">
            <div className="relative overflow-hidden bg-white">
              <img
                src={img}
                alt={alt}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                style={{
                  maxHeight: "70vh",
                  minHeight: "400px",
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4897C3]/10 via-transparent to-[#8C5095]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Puntitos decorativos */}
            <div className={`absolute top-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />
            <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />
            <div className={`absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />
            <div className={`absolute bottom-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />
          </div>

          {/* Pie imagen */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/85 backdrop-blur-sm rounded-full border border-slate-200/70">
              <Heart className="w-3.5 h-3.5 text-[#8C5095] animate-pulse" />
              <span className="text-xs font-medium text-slate-700">Familias contentas</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-50 to-white px-4 py-3 border-t border-slate-200/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${BRAND_GRADIENT} flex items-center justify-center shadow`}>
                <span className="text-white font-bold text-xs">AD</span>
              </div>
              <span className="text-slate-700 font-medium text-sm">Alma Dulce Residencia</span>
            </div>
            <Sparkles className="w-4 h-4 text-[#4897C3]" />
          </div>
        </div>

        {/* Brillito borde */}
        <div
          className={[
            "absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            "bg-gradient-to-r from-[#4897C3]/0 via-[#4897C3]/10 to-[#8C5095]/0",
          ].join(" ")}
        />
      </div>

      {/* sombra/halo extra */}
      <div
        className={[
          "absolute -inset-4 -z-10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r from-[#4897C3]/14 via-transparent to-[#8C5095]/14",
        ].join(" ")}
      />
    </div>
  );
}
