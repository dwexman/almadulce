import { Link } from "react-router-dom";
import TextRotator from "../components/TextRotator.jsx";
import flyer from "../assets/almadulceflyer.png";

export default function Hero() {
  const FEATURES = [
    "Cuidados personales 24/7",
    "Personal certificado",
    "Programas de terapia ocupacional",
    "Actividades físicas y cognitivas",
    "Actividades recreativas",
    "Servicio de alimentación y nutrición",
    "Servicio doméstico",
    "Calefacción central",
    "Talleres recreativos",
    "Controles de signos vitales diarios",
    "Atención kinésica",
    "Estacionamientos de visitas",
    "Áreas verdes",
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Fondo blanco */}
      <div className="absolute inset-0 bg-white" />

      {/* ✅ Luces suaves SOLO azul/cyan (sin rosado arriba) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 520px at 12% 12%, rgba(84,115,176,0.10), transparent 62%)," +
            "radial-gradient(900px 560px at 88% 18%, rgba(72,151,195,0.10), transparent 64%)," +
            "radial-gradient(700px 520px at 55% 0%, rgba(109,83,153,0.06), transparent 58%)",
        }}
      />

      {/* Ruido ultra sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.22] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      {/* Blobs muy suaves (marca, sin rosado) */}
      <div
        className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full blur-3xl opacity-25 animate-[blob_18s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(84,115,176,0.14), transparent 64%)",
        }}
      />
      <div
        className="absolute -bottom-48 -right-40 h-[680px] w-[680px] rounded-full blur-3xl opacity-22 animate-[blob2_22s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(72,151,195,0.14), transparent 66%)",
        }}
      />

      {/* Líneas finas */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Izquierda */}
          <div className="text-slate-900">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-slate-200 shadow-sm mb-6 animate-[fadeUp_700ms_ease-out_both]">
              <span className="h-2 w-2 rounded-full animate-pulse bg-[#5473B0]" />
              <p className="text-sm font-semibold tracking-wider uppercase text-slate-700">
                Residencia premium para el adulto mayor
              </p>
            </div>

            {/* Título */}
            <div className="relative">
              <h1 className="relative text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight animate-[fadeUp_700ms_100ms_ease-out_both]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8C5095] via-[#6D5399] to-[#4897C3]">
                  Alma Dulce
                </span>

                {/* ✅ Subtítulo sin rosado: slate elegante */}
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-700 mt-4">
                  Donde cada día cuenta
                </span>
              </h1>

              {/* Subrayado marca */}
              <div className="mt-6 h-1.5 w-40 rounded-full bg-gradient-to-r from-[#8C5095] via-[#6D5399] to-[#4897C3]" />
            </div>

            {/* Subtítulo */}
            <p className="mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-slate-800 max-w-2xl leading-relaxed animate-[fadeUp_700ms_200ms_ease-out_both]">
              Un <span className="font-bold">hogar cálido</span> con{" "}
              <span className="font-bold">atención profesional</span> y{" "}
              <span className="font-bold">acompañamiento personalizado</span>
            </p>

            {/* Descripción */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed animate-[fadeUp_700ms_300ms_ease-out_both]">
              Brindamos un ambiente seguro, cómodo y lleno de cariño para que
              nuestros residentes disfruten de su vida con dignidad y felicidad.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-[fadeUp_700ms_400ms_ease-out_both]">
              <Link
                to="/quienes-somos"
                className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 font-bold shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#8C5095,#6D5399,#4897C3)",
                }}
              >
                <span className="relative z-10">Conócenos</span>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,#7B467F,#5F4A86,#3F86AD)",
                  }}
                />
              </Link>

              <Link
                to="/residencias"
                className="group relative inline-flex items-center justify-center rounded-2xl bg-white/85 backdrop-blur-md border-2 px-8 py-4 font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-slate-900"
                style={{ borderColor: "rgba(109,83,153,0.30)" }}
              >
                <span className="relative z-10">Ver residencias</span>
                <span className="ml-3 text-lg text-slate-500 group-hover:text-slate-700 transition-colors">
                  →
                </span>
              </Link>
            </div>

            {/* ✅ Rotador: panel degradé + letras blancas (legible sí o sí) */}
            <div className="mt-12 animate-[fadeUp_700ms_500ms_ease-out_both]">
              <div className="hero-rotator rounded-3xl p-5 sm:p-6 shadow-lg border border-black/5"
                   style={{
                     backgroundImage:
                       "linear-gradient(90deg,#8C5095,#6D5399,#4897C3)",
                   }}
              >
                <TextRotator
                  items={FEATURES}
                  intervalMs={3500}
                  title={
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                      <span className="text-lg font-semibold text-white/95">
                        Servicios y comodidades
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                    </div>
                  }
                  className="text-lg text-white/90"
                />
              </div>
            </div>

            {/* Indicador scroll */}
            <div className="mt-16 animate-bounce-slow opacity-60">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium text-slate-600">
                  Explora más
                </span>
                <div className="h-8 w-px bg-gradient-to-b from-slate-400 to-transparent" />
              </div>
            </div>
          </div>

          {/* Derecha */}
          <div className="relative lg:justify-self-end animate-[fadeIn_800ms_300ms_ease-out_both]">
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(109,83,153,0.12), transparent 60%)",
              }}
            />

            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-35"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(140,80,149,0.18), transparent, rgba(72,151,195,0.18))",
                }}
              />

              <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl p-2 sm:p-4 overflow-hidden">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-black/[0.03] to-transparent" />

                <img
                  src={flyer}
                  alt="Alma Dulce - Un hogar cálido para el adulto mayor"
                  className="w-full max-w-[600px] rounded-2xl object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-500 text-lg italic">
                "Un espacio diseñado con amor y profesionalismo"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animaciones + fix legibilidad rotator (por si internamente trae bg blanco) */}
      <style>{`
        .hero-rotator, .hero-rotator * { color: rgba(255,255,255,0.92); }
        .hero-rotator .bg-white,
        .hero-rotator .bg-white\\/10,
        .hero-rotator .bg-white\\/20,
        .hero-rotator .bg-white\\/80,
        .hero-rotator .bg-white\\/90 {
          background-color: transparent !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px) scale(0.95); filter: blur(4px); }
          to { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -30px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-20px, 40px) scale(0.9) rotate(240deg); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-50px, 30px) scale(1.15) rotate(-120deg); }
          66% { transform: translate(30px, -40px) scale(0.85) rotate(-240deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        @media (max-width: 768px) {
          .text-8xl { font-size: 3.5rem; }
          .text-7xl { font-size: 3rem; }
          .text-6xl { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
}
