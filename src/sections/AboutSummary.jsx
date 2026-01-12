import { useState, useEffect, Suspense } from "react";
import logo from "../assets/logoft.png";
import AboutBackdrop3D from "../components/three/AboutBackdrop3D.jsx";

import {
  ConciergeBell,
  UserRound,
  Home,
  Leaf,
  UtensilsCrossed,
  ShieldCheck,
  Camera,
} from "lucide-react";

const BRAND_GRADIENT = "from-[#8C5095] via-[#6D5399] to-[#4897C3]";
const BRAND_GRADIENT_SOFT = "from-[#8C5095]/10 via-[#6D5399]/10 to-[#4897C3]/10";
const BRAND_GRADIENT_SOFT2 = "from-[#8C5095]/12 via-[#6D5399]/10 to-[#4897C3]/12";

export default function AboutSummary() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section
      className="relative overflow-hidden bg-white min-h-screen"
      aria-labelledby="about-heading"
    >
      <h1 id="about-heading" className="sr-only">
        Sobre Alma Dulce - Quiénes Somos
      </h1>

      {/* Fondo 3D */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
          }
        >
          <AboutBackdrop3D />
        </Suspense>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/75 to-white/65 pointer-events-none" />
      <div
        className={[
          "absolute inset-0 pointer-events-none",
          "[background:",
          "radial-gradient(900px_420px_at_12%_8%,rgba(140,80,149,.12),transparent_60%),",
          "radial-gradient(900px_460px_at_92%_20%,rgba(72,151,195,.12),transparent_55%),",
          "radial-gradient(760px_420px_at_55%_90%,rgba(109,83,153,.08),transparent_60%)",
          "]",
        ].join("")}
      />

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
              Conócenos
            </p>

            <div className="relative mt-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Quiénes somos
                <span className="block mt-2">
                  <span
                    className={[
                      "inline-block text-transparent bg-clip-text bg-gradient-to-r",
                      BRAND_GRADIENT,
                    ].join(" ")}
                  >
                    Alma Dulce
                  </span>
                </span>
              </h2>

              <div
                className={[
                  "mt-4 h-1.5 w-32 sm:w-40 rounded-full bg-gradient-to-r",
                  BRAND_GRADIENT,
                ].join(" ")}
              />
            </div>
          </div>

          {/* Logo con cajit” */}
          <div className="mt-6 sm:mt-0">
            <div className="relative">
              {/* glow suave con brand */}
              <div
                className={[
                  "absolute -inset-4 rounded-3xl blur-2xl opacity-70",
                  "bg-gradient-to-r",
                  BRAND_GRADIENT_SOFT2,
                ].join(" ")}
                aria-hidden="true"
              />

              <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm p-4 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={logo}
                  alt="Logo de Residencia Alma Dulce"
                  className="h-[200px] w-auto object-contain"
                  loading="eager"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div
          className={[
            "mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* Columna 1 */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Un hogar cálido, seguro y humano
              </h3>

              <div className="space-y-5">
                <p className="text-slate-700 text-lg leading-relaxed">
                  En{" "}
                  <span
                    className={[
                      "font-bold text-transparent bg-clip-text bg-gradient-to-r",
                      BRAND_GRADIENT,
                    ].join(" ")}
                  >
                    Alma Dulce
                  </span>{" "}
                  acompañamos a las personas mayores con cercanía y respeto.
                  Queremos que la residencia se sienta como hogar: con rutinas
                  saludables, cariño diario y un equipo comprometido.
                </p>

                <p className="text-slate-700 text-lg leading-relaxed">
                  La tranquilidad de la familia también importa: por eso cuidamos
                  cada detalle del día a día y promovemos actividades para mantener
                  cuerpo y mente activos.
                </p>
              </div>

              {/* Grid de características */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MiniCard text="Atención dedicada" icon={ConciergeBell} />
                <MiniCard text="Cuidado personalizado" icon={UserRound} />
                <MiniCard text="Ambiente residencial" icon={Home} />
                <MiniCard text="Bienestar y calma" icon={Leaf} />
                <MiniCard text="Alimentación cuidada" icon={UtensilsCrossed} />
                <MiniCard text="Seguridad 24/7" icon={ShieldCheck} />
              </div>
            </GlassCard>
          </div>

          {/* Columna 2 */}
          <div className="space-y-6">
            {/* Imagen */}
            <GlassCard className="p-0 overflow-hidden">
              <div className="aspect-[4/3] w-full grid place-items-center bg-gradient-to-br from-slate-50 to-white relative">
                <div
                  className={[
                    "absolute inset-0 opacity-90",
                    "bg-[radial-gradient(700px_320px_at_20%_20%,rgba(140,80,149,.10),transparent_60%),",
                    "radial-gradient(700px_360px_at_80%_30%,rgba(72,151,195,.10),transparent_60%)]",
                  ].join("")}
                />
                <div className="relative text-center px-6">
                  <div
                    className={[
                      "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4",
                      "bg-gradient-to-r",
                      BRAND_GRADIENT_SOFT,
                      "border border-slate-200/70",
                      "backdrop-blur-sm",
                    ].join(" ")}
                  >
                    <Camera className="w-7 h-7 text-slate-700" strokeWidth={1.8} />
                  </div>
                  <p className="text-slate-900 font-bold text-lg">Espacio para imagen</p>
                  <p className="mt-2 text-slate-600 text-sm">
                    Residencia / Equipo / Actividades
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Cita */}
            <GlassCard className="p-6">
              <div className="flex items-start">
                <span className="text-3xl text-slate-300 mr-3">"</span>
                <div>
                  <p className="text-slate-900 font-semibold text-lg">
                    Un lugar para vivir con calma, compañía y cuidado profesional.
                  </p>
                  <p className="mt-3 text-slate-600 font-medium">
                    — Residencia Alma Dulce
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <GlassCard
              className={[
                "p-6 border-slate-200/70",
                "bg-gradient-to-br",
                BRAND_GRADIENT_SOFT2,
              ].join(" ")}
            >
              <h4 className="font-bold text-slate-900 mb-3">¿Quieres conocer más?</h4>
              <p className="text-slate-700 text-sm mb-4">
                Contáctanos para una visita guiada o más información sobre nuestros
                servicios.
              </p>

              <button
                className={[
                  "w-full py-3 text-white font-semibold rounded-xl transition-opacity hover:opacity-90",
                  "bg-gradient-to-r",
                  BRAND_GRADIENT,
                ].join(" ")}
                aria-label="Contactar a Residencia Alma Dulce"
              >
                Solicitar información
              </button>
            </GlassCard>
          </div>
        </div>

        {/* Stats */}
        <div
          className={[
            "mt-12 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <GlassCard className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <StatCard number="24/7" label="Atención" />
              <StatCard number="100%" label="Personal cualificado" />
              <StatCard number="10+" label="Años de experiencia" />
              <StatCard number="★" label="Calidad" />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

// GlassCard
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
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30" />
      <div className="relative p-6">{children}</div>
    </div>
  );
}

// MiniCard
function MiniCard({ text, icon: Icon }) {
  return (
    <div
      className="rounded-xl border border-slate-200 bg-white/80 p-4 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={text}
    >
      <div className="flex items-center gap-3">
        <div
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700"
          aria-hidden="true"
        >
          <Icon className="w-5 h-5" strokeWidth={1.6} />
        </div>

        <div>
          <div
            className={[
              "h-1 w-8 rounded-full bg-gradient-to-r mb-2",
              BRAND_GRADIENT,
            ].join(" ")}
          />
          <p className="font-semibold text-slate-800">{text}</p>
        </div>
      </div>
    </div>
  );
}

// StatCard
function StatCard({ number, label }) {
  return (
    <div className="p-4">
      <p
        className={[
          "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r",
          BRAND_GRADIENT,
        ].join(" ")}
      >
        {number}
      </p>
      <p className="text-slate-600 font-medium mt-2">{label}</p>
    </div>
  );
}
