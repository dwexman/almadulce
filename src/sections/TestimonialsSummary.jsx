import { useEffect, useMemo, useState } from "react";
import t1 from "../assets/testimonio1.png";
import t2 from "../assets/testimonio2.png";
import t3 from "../assets/testimonio3.png";
import { ChevronLeft, ChevronRight, Pause, Play, Quote, Heart, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
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

  // Auto-rotación
  useEffect(() => {
    if (!autoPlay || ITEMS.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, currentIndex, ITEMS.length]);

  const nextSlide = () => {
    if (isTransitioning || ITEMS.length <= 1) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % ITEMS.length);
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning || ITEMS.length <= 1) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex || ITEMS.length <= 1) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-100/30 to-fuchsia-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-sky-100/20 to-fuchsia-100/20 rounded-full blur-3xl" />
        
        {/* Patrón de puntos sutiles */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con más estilo */}
        <div
          className={[
            "flex flex-col items-center text-center gap-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <div className="max-w-3xl relative">
            {/* Badge decorativo */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-fuchsia-50 border border-sky-100/50 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <p className="text-sm font-semibold tracking-wide uppercase text-sky-600">
                Testimonios Reales
              </p>
              <Heart className="w-4 h-4 text-fuchsia-500 animate-pulse" />
            </div>

            <h2
              id="testimonials-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
            >
              Palabras de{" "}
              <span className="relative">
                <span className="relative z-10">nuestros residentes</span>
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-sky-200/50 to-fuchsia-200/50 -z-10" />
              </span>
              <span className="block mt-3">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-500 to-purple-600 animate-gradient">
                  y sus familias
                </span>
              </span>
            </h2>

            {/* Línea decorativa con iconos */}
            <div className="relative mt-8 flex items-center justify-center">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-sky-300" />
              <div className="mx-4">
                <Quote className="w-8 h-8 text-slate-400" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-fuchsia-300" />
            </div>

            <p className="mt-8 text-slate-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Descubre las experiencias reales de quienes confían en nosotros. 
              Cada testimonio cuenta una historia única de cuidado, dedicación y cariño.
            </p>
          </div>
        </div>

        {/* Slider Container */}
        <div
          className={[
            "relative mt-20 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Controles de navegación con estilo */}
          <div className="flex items-center justify-between mb-10 px-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={prevSlide}
                  className="group relative p-3.5 rounded-full bg-white shadow-lg hover:shadow-xl border border-slate-200 hover:border-sky-300 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                  aria-label="Testimonio anterior"
                  disabled={isTransitioning || ITEMS.length <= 1}
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-sky-600 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
              
              <div className="relative">
                <button
                  onClick={nextSlide}
                  className="group relative p-3.5 rounded-full bg-white shadow-lg hover:shadow-xl border border-slate-200 hover:border-fuchsia-300 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                  aria-label="Siguiente testimonio"
                  disabled={isTransitioning || ITEMS.length <= 1}
                >
                  <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-fuchsia-600 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
              
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-300 to-transparent mx-3" />
              
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="group relative px-4 py-2.5 rounded-full bg-white shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-300 flex items-center gap-2"
                aria-label={autoPlay ? "Pausar rotación" : "Reanudar rotación"}
              >
                <div className="relative z-10 flex items-center gap-2">
                  {autoPlay ? (
                    <>
                      <Pause className="w-4 h-4 text-sky-600" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-sky-600 transition-colors">Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 text-fuchsia-600" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-fuchsia-600 transition-colors">Reproducir</span>
                    </>
                  )}
                </div>
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  autoPlay 
                    ? "bg-gradient-to-r from-sky-50 to-transparent" 
                    : "bg-gradient-to-r from-fuchsia-50 to-transparent"
                } opacity-0 group-hover:opacity-100`} />
              </button>
            </div>

            {/* Contador de slides con estilo */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg border border-slate-200">
                <div className="flex items-center gap-1">
                  <span className="text-base font-bold text-sky-600">{currentIndex + 1}</span>
                  <span className="text-slate-400 mx-1">/</span>
                  <span className="text-slate-700 font-medium">{ITEMS.length}</span>
                  <span className="text-slate-500 text-sm ml-2">testimonios</span>
                </div>
              </div>
              <div className="absolute -z-10 -inset-2 bg-gradient-to-r from-sky-200/30 to-fuchsia-200/30 blur-lg rounded-full" />
            </div>
          </div>

          {/* Slides Container */}
          <div className="relative">
            {/* Slides */}
            {ITEMS.map((item, index) => (
              <div
                key={index}
                className={`
                  transition-all duration-700 ease-in-out mx-auto
                  ${index === currentIndex 
                    ? "opacity-100 translate-y-0 scale-100 z-10" 
                    : "opacity-0 translate-y-4 scale-95 z-0 absolute inset-0 pointer-events-none"
                  }
                `}
                style={{
                  position: index === currentIndex ? 'relative' : 'absolute',
                  display: index === currentIndex ? 'block' : 'none'
                }}
              >
                <TestimonialCard img={item.img} alt={item.alt} />
              </div>
            ))}

            {/* Indicadores de puntos con estilo */}
            {ITEMS.length > 1 && (
              <div className="flex justify-center gap-3 mt-10">
                {ITEMS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="group relative"
                    aria-label={`Ir al testimonio ${index + 1}`}
                    disabled={isTransitioning}
                  >
                    <div className={`
                      w-10 h-2 rounded-full transition-all duration-300
                      ${index === currentIndex 
                        ? "bg-gradient-to-r from-sky-500 to-fuchsia-500" 
                        : "bg-slate-300 group-hover:bg-slate-400"
                      }
                      ${isTransitioning ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                    `} />
                    {index === currentIndex && (
                      <div className="absolute -top-1 -inset-x-1 h-4 bg-gradient-to-r from-sky-200/30 to-fuchsia-200/30 rounded-full blur-sm" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ img, alt }) {
  return (
    <article className="relative group">
      {/* Contenedor principal con fondo decorativo */}
      <div className="relative max-w-2xl mx-auto">
        {/* Fondo decorativo para el "hueco" */}
        <div className="absolute -inset-6 bg-gradient-to-br from-sky-50/50 to-fuchsia-50/50 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Marco decorativo */}
        <div className="absolute -inset-4 border-2 border-transparent rounded-2xl bg-gradient-to-r from-sky-200/20 to-fuchsia-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Card principal */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200/80 group-hover:border-slate-300 transition-all duration-500">
          {/* Encabezado decorativo de la card */}
          <div className="relative bg-gradient-to-r from-sky-50 to-fuchsia-50 py-3 px-6 border-b border-slate-200/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-700">Testimonio Verificado</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-3 h-3 text-rose-400 fill-rose-400" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Contenedor de imagen con marco interno */}
          <div className="relative p-6">
            {/* Marco interno decorativo */}
            <div className="absolute inset-4 border border-slate-100 rounded-xl pointer-events-none" />
            
            {/* Puntos decorativos en las esquinas */}
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-sky-400/50" />
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-fuchsia-400/50" />
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-sky-400/50" />
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-fuchsia-400/50" />
            
            {/* Imagen más grande con marco */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-50/30 to-fuchsia-50/30 p-1">
              <img
                src={img}
                alt={alt}
                className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-inner"
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              
              {/* Overlay sutil con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Texto decorativo debajo de la imagen */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-slate-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50">
                <Quote className="w-4 h-4 text-sky-500" />
                <span className="text-sm text-slate-600 font-medium">Experiencia compartida con amor</span>
                <Quote className="w-4 h-4 text-fuchsia-500" />
              </div>
            </div>
          </div>
          
          {/* Pie de card decorativo */}
          <div className="relative bg-gradient-to-r from-slate-50 to-white py-3 px-6 border-t border-slate-200/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">AD</span>
                </div>
                <span className="text-sm text-slate-600">Alma Dulce Residencia</span>
              </div>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos flotantes */}
        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-sky-400/20 to-fuchsia-400/20 blur-sm" />
        <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-sky-400/20 to-fuchsia-400/20 blur-sm" />
      </div>
    </article>
  );
}