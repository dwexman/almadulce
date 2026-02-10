import { FaWhatsapp } from "react-icons/fa";
import fondo2 from "../assets/fondo8.png";
import { useEffect, useRef } from "react";

export default function Contacto() {
  const agendaHref = "/contacto";

  const phone = "56952247308";
  const message = encodeURIComponent(
    "Hola 😊 Me gustaría agendar una visita y recibir información sobre Alma Dulce."
  );
  const waHref = `https://wa.me/${phone}?text=${message}`;

  const closingRef = useRef(null);

  useEffect(() => {
    const el = closingRef.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    let raf = 0;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const clamp = (v) => Math.max(-1, Math.min(1, v));
      const x = clamp(dx);
      const y = clamp(dy);

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", String(x));
        el.style.setProperty("--py", String(y));
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", "0");
        el.style.setProperty("--py", "0");
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0">
        <img
          src={fondo2}
          alt=""
          className="h-full w-full object-cover object-center"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 420px at 22% 30%, rgba(195,90,174,0.24), transparent 65%)," +
              "radial-gradient(900px 420px at 85% 60%, rgba(99,166,201,0.20), transparent 65%)," +
              "radial-gradient(900px 380px at 50% 12%, rgba(255,255,255,0.16), transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="title-glow font-serif italic text-white text-4xl sm:text-6xl leading-tight tracking-tight">
            Elegir una residencia es
            <br className="hidden sm:block" />
            una decisión importante.
          </h2>

          <p className="mt-5 subtitle-glow font-serif text-white/90 text-xl sm:text-3xl">
            Te acompañamos en cada paso.
          </p>

          <div className="mt-14 flex flex-col items-center gap-5">
            <a
              href={agendaHref}
              className="btn-pill inline-flex items-center justify-center font-serif"
              aria-label="Agendar una visita"
            >
              Agenda una visita
            </a>

            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="wa-link inline-flex items-center gap-4 font-serif"
              aria-label="Hablar por WhatsApp"
            >
              <span className="wa-dot inline-flex items-center justify-center">
                <FaWhatsapp className="wa-ico" aria-hidden="true" />
              </span>
              <span>Hablemos ahora</span>
            </a>
          </div>

          {/* CIERRE con glass + shine + parallax */}
          <div className="closing mt-14 sm:mt-16 mx-auto">
            <div ref={closingRef} className="closing-card">
              <div className="closing-glow" aria-hidden="true" />
              <div className="closing-shine" aria-hidden="true" />

              <p className="closing-p">
                En Alma Dulce no creemos en el cuidado apurado ni impersonal.
                <br className="hidden sm:block" />
                Creemos en mirar a los ojos, en escuchar, en acompañar y en rehabilitar
                con respeto y cariño.
              </p>

              <div className="closing-divider" aria-hidden="true" />

              <p className="closing-strong">
                Porque cuando eliges Alma Dulce, eliges tranquilidad para tu familia y amor
                para quien más quieres.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .title-glow{
          text-shadow: 0 22px 45px rgba(0,0,0,0.45);
        }
        .subtitle-glow{
          text-shadow: 0 18px 35px rgba(0,0,0,0.35);
        }

        /* === BOTÓN PILL 3D === */
        .btn-pill{
          position: relative;
          padding: 18px 46px;
          border-radius: 999px;
          font-size: 26px;
          font-weight: 700;
          color: rgba(255,255,255,0.98);
          letter-spacing: 0.2px;

          background: linear-gradient(90deg, #C35AAE 0%, #8C63B7 45%, #5E8FC7 100%);
          border: 1px solid rgba(255,255,255,0.22);

          box-shadow:
            inset 0 2px 0 rgba(255,255,255,0.35),
            inset 0 -3px 0 rgba(0,0,0,0.18),
            0 18px 0 rgba(0,0,0,0.22),
            0 26px 40px rgba(0,0,0,0.34);

          transition: transform .18s ease, filter .18s ease, box-shadow .18s ease;
          transform: translateY(-1px);
        }

        .btn-pill:before{
          content:"";
          position:absolute;
          inset: 3px 4px auto 4px;
          height: 52%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255,255,255,0.30), rgba(255,255,255,0));
          pointer-events:none;
          filter: blur(0.2px);
        }

        .btn-pill:hover{
          filter: brightness(1.06);
          transform: translateY(-2px);
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,0.38),
            inset 0 -3px 0 rgba(0,0,0,0.18),
            0 20px 0 rgba(0,0,0,0.22),
            0 30px 46px rgba(0,0,0,0.36);
        }

        .btn-pill:active{
          transform: translateY(2px);
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,0.26),
            inset 0 -2px 0 rgba(0,0,0,0.20),
            0 10px 0 rgba(0,0,0,0.20),
            0 16px 28px rgba(0,0,0,0.30);
        }

        /* === WhatsApp === */
        .wa-link{
          font-size: 24px;
          font-weight: 700;
          color: rgba(255,255,255,0.90);
          text-shadow: 0 10px 22px rgba(0,0,0,0.25);

          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 16px 28px rgba(0,0,0,0.18);

          transition: color .18s ease, transform .18s ease, background .18s ease;
        }
        .wa-link:hover{
          color: rgba(255,255,255,0.98);
          transform: translateY(-1px);
          background: rgba(255,255,255,0.11);
        }

        .wa-dot{
          width: 38px;
          height: 38px;
          border-radius: 999px;
          background: rgba(37,211,102,0.95);
          box-shadow: 0 10px 22px rgba(0,0,0,0.28);
        }
        .wa-ico{
          width: 22px;
          height: 22px;
          color: white;
        }

        /* === CIERRE: glass + shine + parallax === */
        .closing{
          max-width: 980px;
        }

        .closing-card{
          --px: 0;
          --py: 0;

          position: relative;
          padding: 26px 26px;
          border-radius: 22px;
          overflow: hidden;

          background: rgba(255,255,255,0.085);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          box-shadow:
            0 24px 60px rgba(0,0,0,0.40),
            inset 0 1px 0 rgba(255,255,255,0.22);

          transform: perspective(900px)
            rotateX(calc(var(--py) * -3deg))
            rotateY(calc(var(--px) * 4deg))
            translateY(-1px);
          transition: transform .12s ease;
          will-change: transform;
        }

        .closing-glow{
          position: absolute;
          inset: -45px;
          background:
            radial-gradient(520px 180px at 18% 22%, rgba(195,90,174,0.22), transparent 60%),
            radial-gradient(520px 180px at 84% 70%, rgba(99,166,201,0.18), transparent 62%);
          filter: blur(10px);
          opacity: 0.95;
          pointer-events: none;

          transform: translate(
            calc(var(--px) * 10px),
            calc(var(--py) * 10px)
          );
          transition: transform .12s ease;
          will-change: transform;
        }

        .closing-shine{
          position: absolute;
          inset: -60px;
          pointer-events: none;
          opacity: 0.0;

          background: linear-gradient(
            115deg,
            transparent 0%,
            transparent 35%,
            rgba(255,255,255,0.30) 45%,
            rgba(255,255,255,0.12) 50%,
            transparent 60%,
            transparent 100%
          );

          transform: translateX(-40%) rotate(8deg);
          animation: shineSweep 6.8s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes shineSweep{
          0%   { opacity: 0; transform: translateX(-55%) rotate(8deg); }
          10%  { opacity: 0.55; }
          35%  { opacity: 0.0; transform: translateX(55%) rotate(8deg); }
          100% { opacity: 0.0; transform: translateX(55%) rotate(8deg); }
        }

        .closing-p{
          position: relative;
          margin: 0;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: 22px;
          line-height: 1.6;
          color: rgba(255,255,255,0.92);
          text-shadow: 0 16px 34px rgba(0,0,0,0.38);
        }

        .closing-divider{
          position: relative;
          height: 1px;
          margin: 18px auto 16px;
          width: min(640px, 92%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.30), transparent);
        }

        .closing-strong{
          position: relative;
          margin: 0;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: 24px;
          line-height: 1.55;
          font-weight: 900;
          color: rgba(255,255,255,0.98);
          text-shadow: 0 18px 42px rgba(0,0,0,0.42);
        }

        @media (prefers-reduced-motion: reduce){
          .closing-card{ transition: none; transform: none; }
          .closing-glow{ transition: none; transform: none; }
          .closing-shine{ animation: none; opacity: 0; }
        }

        @media (max-width: 640px){
          .btn-pill{
            font-size: 22px;
            padding: 16px 38px;
          }

          .wa-link{
            font-size: 20px;
            padding: 10px 16px;
          }
          .wa-dot{ width: 34px; height: 34px; }
          .wa-ico{ width: 20px; height: 20px; }

          .closing-card{
            padding: 18px 16px;
            border-radius: 18px;
            transform: none;
          }
          .closing-glow{ transform: none; }
          .closing-p{ font-size: 18px; }
          .closing-strong{ font-size: 19px; }
        }
      `}</style>
    </section>
  );
}
