import { FaWhatsapp } from "react-icons/fa";
import fondo2 from "../assets/fondo2.png";

const BRAND_GRADIENT = "from-[#8C5095] via-[#6D5399] to-[#4897C3]";

export default function Contacto() {
  const agendaHref = "/contacto"; // ajusta a tu link real

  const phone = "56911112222"; // cámbialo
  const message = encodeURIComponent(
    "Hola 😊 Me gustaría agendar una visita y recibir información sobre Alma Dulce."
  );
  const waHref = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Fondo FULL */}
      <div className="absolute inset-0">
        <img
          src={fondo2}
          alt=""
          className="h-full w-full object-cover object-center"
          draggable={false}
          loading="lazy"
        />
        {/* oscurecer para que el texto destaque */}
        <div className="absolute inset-0 bg-black/35" />

        {/* luces brand */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 420px at 22% 30%, rgba(140,80,149,0.22), transparent 65%)," +
              "radial-gradient(900px 420px at 85% 60%, rgba(72,151,195,0.18), transparent 65%)," +
              "radial-gradient(900px 380px at 50% 12%, rgba(255,255,255,0.16), transparent 60%)",
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          {/* Título: más “pro”, con halo */}
          <h2 className="title-glow font-serif text-white text-4xl sm:text-6xl leading-tight tracking-tight">
            Elegir una residencia es
            <br className="hidden sm:block" />
            una decisión importante.
          </h2>

          <p className="mt-5 subtitle-glow text-white/90 text-xl sm:text-3xl font-medium">
            Te acompañamos en cada paso.
          </p>

          {/* Acciones */}
          <div className="mt-10 flex flex-col items-center gap-5">
            {/* ✅ Glass SOLO para el botón */}
            <div className="btn-wrap">
              <a
                href={agendaHref}
                className={[
                  "btn-cta group relative inline-flex items-center justify-center",
                  "rounded-2xl px-12 py-5",
                  "text-white font-extrabold text-xl sm:text-2xl",
                  "bg-gradient-to-r",
                  BRAND_GRADIENT,
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:brightness-110",
                  "active:translate-y-0 active:scale-[0.99]",
                  "focus:outline-none focus:ring-4 focus:ring-white/25",
                ].join(" ")}
                aria-label="Agendar una visita"
              >
                {/* shimmer */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/25 blur-xl rotate-12 translate-x-[-120%] group-hover:translate-x-[260%] transition-transform duration-700" />
                </span>
                <span className="relative">Agenda una visita</span>
              </a>
            </div>

            {/* ✅ WhatsApp más grande + pill glass */}
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className={[
                "wa-pill group inline-flex items-center gap-4",
                "rounded-full px-6 py-3",
                "text-white font-semibold text-lg sm:text-xl",
                "transition-all duration-300",
                "hover:-translate-y-0.5",
              ].join(" ")}
              aria-label="Hablar por WhatsApp"
            >
              <span className="wa-icon inline-flex items-center justify-center rounded-full">
                <FaWhatsapp className="text-white" aria-hidden="true" />
              </span>
              <span className="underline underline-offset-4 decoration-white/35 group-hover:decoration-white/70 transition">
                Hablemos ahora
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* CSS local para hacerlo menos plano */}
      <style>{`
        .title-glow{
          text-shadow: 0 22px 45px rgba(0,0,0,0.45);
        }
        .subtitle-glow{
          text-shadow: 0 18px 35px rgba(0,0,0,0.35);
        }

        /* Glass SOLO en el wrapper del botón */
        .btn-wrap{
          position: relative;
          padding: 10px;
          border-radius: 22px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.28);
          backdrop-filter: blur(14px);
          box-shadow: 0 26px 70px -50px rgba(0,0,0,0.75);
        }
        .btn-cta{
          box-shadow: 0 24px 60px -32px rgba(0,0,0,0.85);
          border: 2px solid rgba(255,255,255,0.55);
        }

        /* WhatsApp pill glass */
        .wa-pill{
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.28);
          backdrop-filter: blur(14px);
          box-shadow: 0 24px 60px -45px rgba(0,0,0,0.75);
        }
        .wa-icon{
          width: 56px;
          height: 56px;
          background: rgba(37,211,102,0.95);
          box-shadow: 0 18px 45px -28px rgba(0,0,0,0.8);
          border: 2px solid rgba(255,255,255,0.35);
        }
        .wa-icon svg{
          width: 30px;
          height: 30px;
        }

        @media (max-width: 640px){
          .wa-icon{ width: 52px; height: 52px; }
          .wa-icon svg{ width: 28px; height: 28px; }
        }
      `}</style>
    </section>
  );
}
