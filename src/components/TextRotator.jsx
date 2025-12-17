import { useEffect, useMemo, useState } from "react";

export default function TextRotator({
  items = [],
  intervalMs = 4200, // más lento
  title = "Servicios y comodidades",
  className = "",
}) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const [index, setIndex] = useState(0);
  const [spinKey, setSpinKey] = useState(0);

  useEffect(() => {
    if (safeItems.length < 2) return;

    const t = setInterval(() => {
      setSpinKey((k) => k + 1);

      // Cambiamos el texto a mitad del giro (cuando el texto está “oculto”)
      const mid = Math.floor(intervalMs * 0.5);
      setTimeout(() => {
        setIndex((i) => (i + 1) % safeItems.length);
      }, mid);
    }, intervalMs);

    return () => clearInterval(t);
  }, [safeItems.length, intervalMs]);

  if (!safeItems.length) return null;

  return (
    <div className={className}>
      <div className="relative">
        {/* Glow general detrás */}
        <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-white/10 blur-2xl animate-[glowSoft_2.8s_ease-in-out_infinite]" />

        {/* Título */}
        <div className="mb-2 text-white/80 text-sm sm:text-base font-semibold tracking-wide">
          {title}
        </div>

        {/* Escena 3D */}
        <div className="relative [perspective:1400px]">
          {/* Card: giro 360° vertical (rotateX) */}
          <div
            key={spinKey}
            className={[
              "relative overflow-hidden",
              "rounded-[26px] border border-white/25 bg-white/12 backdrop-blur-md",
              "shadow-[0_20px_60px_rgba(0,0,0,0.25)]",
              "px-5 py-5 sm:px-6 sm:py-6",
              "animate-[spin360X_ease-in-out_forwards]",
            ].join(" ")}
            style={{ animationDuration: `${intervalMs}ms` }}
          >
            {/* Shine diagonal */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-md animate-[shineWide_3.6s_ease-in-out_infinite]" />
            </div>

            {/* Opción A: Aura/borde animado (sutil) */}
            <div className="pointer-events-none absolute inset-0 rounded-[26px]">
              <div className="absolute inset-0 rounded-[26px] border border-white/20" />
              <div className="absolute inset-0 rounded-[26px] ring-1 ring-white/10" />
              <div className="absolute inset-0 rounded-[26px] overflow-hidden">
                <div className="absolute -inset-24 animate-[aura_4.2s_linear_infinite]">
                  <div className="h-32 w-32 rounded-full bg-white/12 blur-2xl" />
                </div>
              </div>
            </div>

            {/* Texto (se oculta cuando el card está de canto) */}
            <div
              className="relative flex items-center justify-center text-center animate-[textHideShow_ease-in-out_forwards]"
              style={{ animationDuration: `${intervalMs}ms` }}
            >
              <span
                className="block font-extrabold tracking-tight text-xl sm:text-2xl md:text-3xl drop-shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
                style={{
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,.92), rgba(255,255,255,1))",
                  WebkitBackgroundClip: "text",
                }}
              >
                {safeItems[index]}
              </span>
            </div>

            {/* Opción C: Underline glow */}
            <div className="relative mt-3 flex justify-center">
              <div className="h-[3px] w-40 sm:w-56 rounded-full bg-white/35 blur-[0.5px] animate-[underlineGlow_2.2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes glowSoft {
          0%,100% { opacity: .45; transform: scale(1); }
          50% { opacity: .85; transform: scale(1.03); }
        }

        /* Giro completo 360° vertical (arriba-abajo) */
        @keyframes spin360X {
          0%   { transform: rotateX(0deg); }
          100% { transform: rotateX(360deg); }
        }

        /* Oculta el texto cuando el card está “de canto” */
        @keyframes textHideShow {
          0%   { opacity: 1; transform: translateY(0); filter: blur(0); }
          18%  { opacity: 1; }
          35%  { opacity: 0; transform: translateY(-6px); filter: blur(2px); }
          65%  { opacity: 0; transform: translateY(6px);  filter: blur(2px); }
          82%  { opacity: 1; transform: translateY(0); filter: blur(0); }
          100% { opacity: 1; }
        }

        @keyframes shineWide {
          0% { transform: translateX(-140%) rotate(12deg); opacity: 0; }
          25% { opacity: .9; }
          55% { opacity: .25; }
          100% { transform: translateX(320%) rotate(12deg); opacity: 0; }
        }

        /* Aura que recorre el borde */
        @keyframes aura {
          0%   { transform: translate(-35%, -20%) rotate(0deg); }
          50%  { transform: translate(60%, 40%) rotate(180deg); }
          100% { transform: translate(-35%, -20%) rotate(360deg); }
        }

        /* Underline glow */
        @keyframes underlineGlow {
          0%,100% { opacity: .35; transform: scaleX(.75); }
          50% { opacity: .9; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
