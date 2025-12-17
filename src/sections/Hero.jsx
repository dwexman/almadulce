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
        <section className="relative overflow-hidden">
            {/* Fondo gradiente base + “pulse” suave */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-sky-600 to-fuchsia-700" />
            <div className="absolute inset-0 opacity-40 animate-[bgPulse_6s_ease-in-out_infinite]" />

            {/* Blobs más notorios */}
            <div className="absolute -top-28 -left-24 h-96 w-96 rounded-full bg-white/18 blur-3xl animate-[blob_9s_ease-in-out_infinite]" />
            <div className="absolute -bottom-40 -right-28 h-[520px] w-[520px] rounded-full bg-white/14 blur-3xl animate-[blob2_11s_ease-in-out_infinite]" />
            <div className="absolute top-10 right-24 h-56 w-56 rounded-full bg-white/12 blur-2xl animate-[blob3_8s_ease-in-out_infinite]" />

            {/* Overlay para legibilidad */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Contenido (más arriba) */}
            <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 sm:pt-12 sm:pb-16">
                <div className="grid gap-10 md:grid-cols-2 md:items-start">
                    {/* Izquierda */}
                    <div className="text-white">
                        <p className="text-sm sm:text-base font-semibold tracking-[0.35em] uppercase opacity-95 animate-[fadeUp_900ms_ease-out_both]">
                            Residencia
                        </p>

                        {/* Glow detrás del título */}
                        <div className="relative mt-2">
                            <div className="pointer-events-none absolute -inset-x-6 -inset-y-6 rounded-full bg-white/12 blur-2xl animate-[glow_2.8s_ease-in-out_infinite]" />

                            <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] animate-[fadeUp_900ms_120ms_ease-out_both]">
                                <span className="relative inline-block">
                                    Alma Dulce
                                    {/* Shine */}
                                    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                                        <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/25 blur-md rotate-12 animate-[shine_2.6s_ease-in-out_infinite]" />
                                    </span>
                                </span>
                            </h1>
                        </div>

                        <p className="mt-4 text-2xl sm:text-3xl font-bold text-white/95 animate-[fadeUp_900ms_220ms_ease-out_both]">
                            Un hogar para el Adulto Mayor
                        </p>

                        <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-xl animate-[fadeUp_900ms_320ms_ease-out_both]">
                            Acompañamiento cercano, cuidado profesional y un ambiente cálido
                            para vivir con tranquilidad.
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-[fadeUp_900ms_420ms_ease-out_both]">
                            <Link
                                to="/quienes-somos"
                                className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-7 py-3.5 font-extrabold shadow-xl hover:opacity-90 transition"
                            >
                                Conócenos
                            </Link>

                            <Link
                                to="/residencias"
                                className="inline-flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur border border-white/25 px-7 py-3.5 font-bold hover:bg-white/20 transition"
                            >
                                Ver residencias
                            </Link>
                        </div>

                        {/* Rotador */}
                        <div className="mt-8 animate-[fadeUp_900ms_520ms_ease-out_both]">

                            <TextRotator
                                items={FEATURES}
                                intervalMs={4200}
                                title="Servicios y comodidades"
                                className="mt-8 max-w-xl"
                            />
                        </div>
                    </div>

                    {/* Derecha: Flyer */}
                    <div className="md:justify-self-end animate-[fadeIn_900ms_250ms_ease-out_both]">
                        <div className="relative rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-2 sm:p-3">
                            <img
                                src={flyer}
                                alt="Alma Dulce - Flyer"
                                className="w-full max-w-[520px] rounded-2xl object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Animaciones CSS */}
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, 18px) scale(1.08); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-28px, -22px) scale(1.10); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-12px, 22px) scale(1.06); }
        }
        @keyframes glow {
          0%,100% { opacity: .55; transform: scale(1); }
          50% { opacity: .95; transform: scale(1.06); }
        }
        @keyframes shine {
          0% { transform: translateX(-120%) rotate(12deg); opacity: 0; }
          35% { opacity: .9; }
          60% { opacity: .2; }
          100% { transform: translateX(260%) rotate(12deg); opacity: 0; }
        }
        @keyframes bgPulse {
          0%,100% { background: rgba(255,255,255,.00); }
          50% { background: rgba(255,255,255,.06); }
        }
      `}</style>
        </section>
    );
}
