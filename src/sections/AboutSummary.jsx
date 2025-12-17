import logo from "../assets/almadulcelogo.png";
import AboutBackdrop3D from "../components/three/AboutBackdrop3D.jsx";

export default function AboutSumary() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Fondo 3D */}
            <AboutBackdrop3D />

            {/* Capas de color para “marca” */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-slate-50/65 pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none [background:radial-gradient(900px_420px_at_12%_8%,rgba(56,189,248,.22),transparent_60%),radial-gradient(900px_460px_at_92%_20%,rgba(168,85,247,.22),transparent_55%)]" />


            <div className="relative mx-auto max-w-6xl px-4 py-20">
                {/* Header */}
                <div className="flex items-start justify-between gap-6">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold tracking-[0.35em] uppercase text-slate-500 animate-[fadeUp_900ms_ease-out_both]">
                            Conócenos
                        </p>

                        {/* Título con glow + gradiente animado */}
                        <div className="relative mt-3">
                            <div className="pointer-events-none absolute -inset-x-8 -inset-y-6 rounded-full bg-sky-300/25 blur-3xl animate-[glowTitle_2.8s_ease-in-out_infinite]" />

                            <h2 className="relative text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 animate-[fadeUp_900ms_120ms_ease-out_both]">
                                <span className="inline-block animate-[titleFloat_3.2s_ease-in-out_infinite]">
                                    Quiénes somos
                                </span>

                                <span className="block mt-2">
                                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-700 bg-[length:200%_200%] animate-[gradMove_3.6s_ease-in-out_infinite]">
                                        Alma Dulce
                                        {/* Shine sobre el texto */}
                                        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                                            <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/25 blur-md rotate-12 animate-[shine_3.2s_ease-in-out_infinite]" />
                                        </span>
                                    </span>
                                </span>
                            </h2>

                            {/* underline glow */}
                            <div className="mt-4 h-[4px] w-40 sm:w-56 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-600 blur-[0.2px] animate-[underlineGlow_2.2s_ease-in-out_infinite]" />
                        </div>
                    </div>

                    {/* Logo glass flotante */}
                    <div className="hidden sm:block animate-[floatLogo_3.4s_ease-in-out_infinite]">
                        <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-xl p-4 overflow-hidden">
                            <div className="pointer-events-none absolute inset-0 opacity-70">
                                <div className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-sky-200/70 to-transparent blur-xl animate-[shineSoft_5.4s_ease-in-out_infinite]" />
                            </div>
                            <img
                                src={logo}
                                alt="Residencia Alma Dulce"
                                className="relative h-16 w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Layout */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
                    {/* Texto principal */}
                    <GlassCard className="p-7 sm:p-9 animate-[fadeUp_900ms_220ms_ease-out_both]">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                            Un hogar cálido, seguro y humano
                        </h3>

                        <p className="mt-4 text-slate-700 text-lg leading-relaxed">
                            En <span className="font-bold">Alma Dulce</span> acompañamos a las
                            personas mayores con cercanía y respeto. Queremos que la residencia
                            se sienta como hogar: con rutinas saludables, cariño diario y un
                            equipo comprometido.
                        </p>

                        <p className="mt-4 text-slate-700 text-lg leading-relaxed">
                            La tranquilidad de la familia también importa: por eso cuidamos
                            cada detalle del día a día y promovemos actividades para mantener
                            cuerpo y mente activos.
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            <MiniCard text="Cuidado con cercanía" />
                            <MiniCard text="Atención diaria" />
                            <MiniCard text="Ambiente familiar" />
                            <MiniCard text="Bienestar integral" />
                        </div>
                    </GlassCard>

                    {/* Hueco para foto */}
                    <div className="animate-[fadeUp_900ms_320ms_ease-out_both]">
                        <GlassCard className="p-0 overflow-hidden">
                            <div className="aspect-[4/3] w-full grid place-items-center bg-gradient-to-br from-slate-50 to-white relative">
                                {/* glow suave */}
                                <div className="pointer-events-none absolute -inset-16 bg-sky-200/25 blur-3xl animate-[glowSoft_3.2s_ease-in-out_infinite]" />
                                <div className="relative text-center px-6">
                                    <p className="text-slate-900 font-extrabold text-xl">
                                        Aquí irá una foto
                                    </p>
                                    <p className="mt-2 text-slate-600 font-semibold">
                                        (residencia / equipo / actividades)
                                    </p>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="mt-4 p-6 sm:p-7">
                            <p className="text-slate-900 font-extrabold text-lg sm:text-xl">
                                Un lugar para vivir con calma, compañía y cuidado.
                            </p>
                            <p className="mt-2 text-slate-600 font-semibold">
                                — Residencia Alma Dulce
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLogo {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes titleFloat {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes glowTitle {
          0%,100% { opacity: .45; transform: scale(1); }
          50% { opacity: .85; transform: scale(1.06); }
        }
        @keyframes glowSoft {
          0%,100% { opacity: .35; transform: scale(1); }
          50% { opacity: .70; transform: scale(1.06); }
        }
        @keyframes gradMove {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes underlineGlow {
          0%,100% { opacity: .35; transform: scaleX(.75); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes shine {
          0% { transform: translateX(-120%) rotate(12deg); opacity: 0; }
          25% { opacity: .9; }
          60% { opacity: .2; }
          100% { transform: translateX(260%) rotate(12deg); opacity: 0; }
        }
        @keyframes shineSoft {
          0% { transform: translateX(-140%) rotate(12deg); opacity: 0; }
          25% { opacity: .9; }
          65% { opacity: .25; }
          100% { transform: translateX(320%) rotate(12deg); opacity: 0; }
        }
      `}</style>
        </section>
    );
}

function GlassCard({ className = "", children }) {
    return (
        <div
            className={[
                "relative rounded-3xl border border-slate-200 shadow-xl overflow-hidden",
                // base glass
                "bg-white/80 backdrop-blur-md",
                // en mobile subimos contraste (fondo más oscuro dentro)
                "sm:bg-white/70",
                "hover:shadow-2xl transition",
                className,
            ].join(" ")}
        >
            {/* brillo animado (sutil) */}
            <div className="pointer-events-none absolute inset-0 opacity-50">
                <div className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-sky-200/60 to-transparent blur-xl animate-[shineSoft_5.6s_ease-in-out_infinite]" />
            </div>

            {/* overlay de contraste SOLO en mobile */}
            <div className="pointer-events-none absolute inset-0 sm:hidden bg-white/35" />

            {/* borde suave */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />

            <div className="relative">{children}</div>
        </div>
    );
}


function MiniCard({ text }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white/65 backdrop-blur-md px-4 py-3 shadow hover:shadow-lg transition">
            <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-600" />
            <p className="mt-2 font-bold text-slate-800">{text}</p>
        </div>
    );
}
