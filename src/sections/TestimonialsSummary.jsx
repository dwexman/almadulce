import { useEffect, useMemo, useState } from "react";
import t1 from "../assets/testimonio1.png";
import t2 from "../assets/testimonio2.png";
import t3 from "../assets/testimonio3.png";
import { ChevronLeft, ChevronRight, Heart, Sparkles, Quote, Star } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/30 to-fuchsia-50/30 py-16 md:py-24">
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-sky-200/40 to-transparent blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-l from-fuchsia-200/40 to-transparent blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-amber-200/20 to-transparent blur-xl" />
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con más personalidad */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Historias Reales
            </span>
            <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            <span className="relative inline-block">
              Voces que
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-sky-300/40 to-fuchsia-300/40 -z-10 rounded-full" />
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-500 to-purple-600">
              inspiran confianza
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-sky-400 to-transparent" />
            <Quote className="w-8 h-8 text-slate-400" />
            <div className="h-px w-20 bg-gradient-to-l from-fuchsia-400 to-transparent" />
          </div>
          
          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
            Conoce las experiencias genuinas de familias que encontraron en nosotros
            el cuidado y calidez que buscaban.
          </p>
        </div>

        {/* Slider Container */}
        <div className={`relative transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Flechas de navegación con estilo */}
          <div className="flex items-center justify-center gap-8 mb-10">
            <button
              onClick={prevSlide}
              className="group relative p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-xl hover:shadow-2xl border border-slate-200 hover:border-sky-300 transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Testimonio anterior"
              disabled={isTransitioning || ITEMS.length <= 1}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronLeft className="relative w-6 h-6 text-slate-700 group-hover:text-sky-600 transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              className="group relative p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-xl hover:shadow-2xl border border-slate-200 hover:border-fuchsia-300 transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Siguiente testimonio"
              disabled={isTransitioning || ITEMS.length <= 1}
            >
              <div className="absolute -inset-2 bg-gradient-to-l from-fuchsia-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronRight className="relative w-6 h-6 text-slate-700 group-hover:text-fuchsia-600 transition-colors" />
            </button>
          </div>

          {/* Slides Container */}
          <div className="relative">
            {/* Slides con efecto 3D */}
            {ITEMS.map((item, index) => (
              <div
                key={index}
                className={`
                  transition-all duration-500 ease-out
                  ${index === currentIndex 
                    ? 'opacity-100 scale-100 translate-x-0 z-20' 
                    : index === (currentIndex - 1 + ITEMS.length) % ITEMS.length
                    ? 'opacity-40 -translate-x-20 scale-90 z-10 blur-sm pointer-events-none absolute inset-0'
                    : index === (currentIndex + 1) % ITEMS.length
                    ? 'opacity-40 translate-x-20 scale-90 z-10 blur-sm pointer-events-none absolute inset-0'
                    : 'opacity-0 pointer-events-none absolute inset-0'
                  }
                `}
                style={{
                  position: index === currentIndex ? 'relative' : 'absolute',
                }}
              >
                <TestimonialCard 
                  img={item.img} 
                  alt={item.alt} 
                  isActive={index === currentIndex}
                />
              </div>
            ))}

            {/* Indicadores de puntos con estrellas */}
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
                    <div className={`
                      w-12 h-1.5 rounded-full transition-all duration-300
                      ${index === currentIndex 
                        ? 'bg-gradient-to-r from-sky-500 via-fuchsia-500 to-purple-500' 
                        : 'bg-slate-300 group-hover:bg-slate-400'
                      }
                      ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `} />
                    {index === currentIndex && (
                      <>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500 animate-bounce" />
                        </div>
                        <div className="absolute -inset-3 bg-gradient-to-r from-sky-200/20 to-fuchsia-200/20 rounded-full blur-sm" />
                      </>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Indicador de posición */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
              <span className="text-sm font-medium text-slate-600">
                Testimonio <span className="text-sky-600 font-bold">{currentIndex + 1}</span> de {ITEMS.length}
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
    <div className={`relative mx-auto max-w-4xl transition-all duration-500 ${isActive ? 'scale-100' : 'scale-95'}`}>
      {/* Marco decorativo */}
      <div className="absolute -inset-4 bg-gradient-to-r from-sky-100/50 via-white/30 to-fuchsia-100/50 rounded-3xl blur-lg opacity-60" />
      
      {/* Card principal con efecto 3D */}
      <div className="relative bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden group">
        {/* Cabecera decorativa MÁS COMPACTA */}
        <div className="relative bg-gradient-to-r from-sky-50 to-fuchsia-50 px-4 py-3 border-b border-slate-200/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 to-fuchsia-400/20 rounded-full blur-sm" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base">Testimonio Verificado</h3>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="animate-pulse bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-slate-600">Experiencia Real</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenedor de imagen MÁS GRANDE */}
        <div className="relative p-2 md:p-4">
          {/* Marco interno con efecto de profundidad - MENOS PADDING */}
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-sky-50/30 to-fuchsia-50/30 shadow-inner">
            {/* Imagen principal - MÁS GRANDE */}
            <div className="relative overflow-hidden bg-white">
              <img
                src={img}
                alt={alt}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                style={{
                  maxHeight: '70vh',
                  minHeight: '400px',
                  objectFit: 'contain',
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              
              {/* Overlay con gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-transparent to-fuchsia-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Elementos decorativos en las esquinas - MÁS PEQUEÑOS */}
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400" />
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400" />
          </div>
          
          {/* Pie de imagen decorativo - MÁS COMPACTO */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200">
              <Heart className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span className="text-xs font-medium text-slate-700">Familia Contentos</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </div>
        
        {/* Pie de card - MÁS COMPACTO */}
        <div className="bg-gradient-to-r from-slate-50 to-white px-4 py-3 border-t border-slate-200/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 flex items-center justify-center shadow">
                <span className="text-white font-bold text-xs">AD</span>
              </div>
              <span className="text-slate-700 font-medium text-sm">Alma Dulce Residencia</span>
            </div>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
        </div>
        
        {/* Efecto de brillo en los bordes */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-sky-400/0 via-sky-400/10 to-fuchsia-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      
      {/* Sombras y efectos 3D */}
      <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-sky-200/20 via-transparent to-fuchsia-200/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}