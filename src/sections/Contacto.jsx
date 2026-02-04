import { FaWhatsapp } from "react-icons/fa";
import fondo2 from "../assets/fondo8.png";

export default function Contacto() {
  const agendaHref = "/contacto";

  const phone = "56911112222";
  const message = encodeURIComponent(
    "Hola 😊 Me gustaría agendar una visita y recibir información sobre Alma Dulce."
  );
  const waHref = `https://wa.me/${phone}?text=${message}`;

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
        </div>
      </div>

      <style>{`
        .title-glow{
          text-shadow: 0 22px 45px rgba(0,0,0,0.45);
        }
        .subtitle-glow{
          text-shadow: 0 18px 35px rgba(0,0,0,0.35);
        }

        /* === BOTÓN PILL 3D (más relieve + sombra abajo) === */
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

        /* === WhatsApp: más grande y estilo botón sutil === */
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
        }
      `}</style>
    </section>
  );
}
