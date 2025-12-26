import { useState, useEffect, Suspense } from "react";
import logo from "../assets/almadulcelogo.png";
import AboutBackdrop3D from "../components/three/AboutBackdrop3D.jsx";

export default function AboutSummary() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative overflow-hidden bg-white min-h-screen"
      aria-labelledby="about-heading"
    >
      {/* Encabezado accesible */}
      <h1 id="about-heading" className="sr-only">
        Sobre Alma Dulce - Quiénes Somos
      </h1>

      {/* Fondo 3D con carga diferida */}
      <div className="absolute inset-0">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
        }>
          <AboutBackdrop3D />
        </Suspense>
      </div>

      {/* Overlays de gradiente más sutiles */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/60 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(900px_420px_at_12%_8%,rgba(56,189,248,.15),transparent_60%),radial-gradient(900px_460px_at_92%_20%,rgba(168,85,247,.15),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Header mejorado */}
        <div className={`flex flex-col sm:flex-row items-start justify-between gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide uppercase text-slate-600 mb-2">
              Conócenos
            </p>

            {/* Título simplificado y más accesible */}
            <div className="relative mt-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Quiénes somos
                <span className="block mt-2">
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-fuchsia-600">
                    Alma Dulce
                  </span>
                </span>
              </h2>

              {/* Subrayado más sutil */}
              <div className="mt-4 h-1.5 w-32 sm:w-40 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
            </div>
          </div>

          {/* Logo más funcional */}
          <div className="mt-6 sm:mt-0">
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-4 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <img
                src={logo}
                alt="Logo de Residencia Alma Dulce"
                className="h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Contenido principal - Layout mejorado */}
        <div className={`mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Columna 1: Texto principal */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Un hogar cálido, seguro y humano
              </h3>

              <div className="space-y-5">
                <p className="text-slate-700 text-lg leading-relaxed">
                  En <span className="font-bold text-sky-600">Alma Dulce</span> acompañamos a las
                  personas mayores con cercanía y respeto. Queremos que la residencia
                  se sienta como hogar: con rutinas saludables, cariño diario y un
                  equipo comprometido.
                </p>

                <p className="text-slate-700 text-lg leading-relaxed">
                  La tranquilidad de la familia también importa: por eso cuidamos
                  cada detalle del día a día y promovemos actividades para mantener
                  cuerpo y mente activos.
                </p>
              </div>

              {/* Grid de características mejorado */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MiniCard 
                  text="Cuidado con cercanía" 
                  icon="👵"
                />
                <MiniCard 
                  text="Atención personalizada" 
                  icon="💖"
                />
                <MiniCard 
                  text="Ambiente familiar" 
                  icon="🏡"
                />
                <MiniCard 
                  text="Bienestar integral" 
                  icon="✨"
                />
                <MiniCard 
                  text="Actividades diarias" 
                  icon="🎨"
                />
                <MiniCard 
                  text="Seguridad 24/7" 
                  icon="🛡️"
                />
              </div>
            </GlassCard>
          </div>

          {/* Columna 2: Foto y cita */}
          <div className="space-y-6">
            {/* Espacio para foto con mejor placeholder */}
            <GlassCard className="p-0 overflow-hidden">
              <div className="aspect-[4/3] w-full grid place-items-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
                <div className="relative text-center px-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-sky-100 to-fuchsia-100 mb-4">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-slate-800 font-bold text-lg">
                    Espacio para imagen
                  </p>
                  <p className="mt-2 text-slate-600 text-sm">
                    Residencia / Equipo / Actividades
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Cita destacada */}
            <GlassCard className="p-6">
              <div className="flex items-start">
                <span className="text-3xl text-slate-300 mr-3">"</span>
                <div>
                  <p className="text-slate-800 font-semibold text-lg">
                    Un lugar para vivir con calma, compañía y cuidado profesional.
                  </p>
                  <p className="mt-3 text-slate-600 font-medium">
                    — Residencia Alma Dulce
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Información de contacto/CTA */}
            <GlassCard className="p-6 bg-gradient-to-br from-sky-50/50 to-fuchsia-50/50 border-sky-100">
              <h4 className="font-bold text-slate-800 mb-3">
                ¿Quieres conocer más?
              </h4>
              <p className="text-slate-700 text-sm mb-4">
                Contáctanos para una visita guiada o más información sobre nuestros servicios.
              </p>
              <button 
                className="w-full py-3 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                aria-label="Contactar a Residencia Alma Dulce"
              >
                Solicitar información
              </button>
            </GlassCard>
          </div>
        </div>

        {/* Sección adicional (opcional) */}
        <div className={`mt-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <GlassCard className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <StatCard number="24/7" label="Atención" />
              <StatCard number="100%" label="Personal cualificado" />
              <StatCard number="10+" label="Años de experiencia" />
              <StatCard number="⭐" label="Calidad certificada" />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

// Componente GlassCard optimizado
function GlassCard({ className = "", children, ...props }) {
  return (
    <div
      className={[
        "relative rounded-2xl border border-slate-200/80",
        "bg-white/85 backdrop-blur-sm",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "overflow-hidden",
        className,
      ].join(" ")}
      {...props}
    >
      {/* Borde sutil */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30" />
      
      <div className="relative p-6">
        {children}
      </div>
    </div>
  );
}

// Componente MiniCard mejorado
function MiniCard({ text, icon }) {
  return (
    <div 
      className="rounded-xl border border-slate-200 bg-white/80 p-4 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={text}
    >
      <div className="flex items-center gap-3">
        <div className="text-xl">{icon}</div>
        <div>
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500 mb-2" />
          <p className="font-semibold text-slate-800">{text}</p>
        </div>
      </div>
    </div>
  );
}

// Componente StatCard nuevo
function StatCard({ number, label }) {
  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-fuchsia-600">
        {number}
      </p>
      <p className="text-slate-600 font-medium mt-2">{label}</p>
    </div>
  );
}