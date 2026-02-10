import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

import fondo from "../assets/fondo3.png";

const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";
const TITLE = "text-[#8A3FA8]";
const BODY = "text-[#6F2F86]";

export default function Nosotros() {
  const agendaHref = "/contacto";

  const phone = "56952247308";
  const message = encodeURIComponent(
    "Hola 😊 Me gustaría agendar una visita y recibir información sobre Alma Dulce."
  );
  const waHref = `https://wa.me/${phone}?text=${message}`;

  const ITEMS = [
    {
      emoji: "🤍",
      title: "Cuidado con amor y respeto",
      text: "Tratamos a cada residente como parte de nuestra familia. Conocemos sus historias, respetamos sus tiempos y cuidamos con cercanía, paciencia y cariño.",
    },
    {
      emoji: "🌿",
      title: "Enfoque en rehabilitación y autonomía",
      text: "Trabajamos para mantener y recuperar capacidades físicas y cognitivas, fomentando la independencia y la calidad de vida mediante terapias personalizadas.",
    },
    {
      emoji: "🩺",
      title: "Equipo profesional y permanente",
      text: "Contamos con enfermería, TENS y profesionales de la salud que supervisan y acompañan de forma continua, brindando seguridad y confianza a las familias.",
    },
    {
      emoji: "🥗",
      title: "Alimentación segura y supervisada",
      text: "Entregamos una alimentación balanceada, adaptada a cada necesidad, preparada con altos estándares de higiene y cuidado.",
    },
    {
      emoji: "🌸",
      title: "Bienestar físico, mental y emocional",
      text: "Promovemos actividades terapéuticas, estimulación cognitiva y espacios de encuentro que fortalecen el ánimo, la autoestima y el vínculo social.",
    },
    {
      emoji: "🏡",
      title: "Un hogar cálido y seguro",
      text: "Nuestras residencias están pensadas para sentirse como en casa: ambientes acogedores, seguros y respetuosos.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Fondo GLOBAL: igual que AboutSummary (imagen cover) */}
      <div className="fixed inset-0 -z-10">
        <img
          src={fondo}
          alt=""
          className="h-full w-full object-cover object-center"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 420px at 50% 20%, rgba(255,255,255,0.55), transparent 60%)," +
              "radial-gradient(900px 520px at 15% 85%, rgba(140,80,149,0.10), transparent 65%)," +
              "radial-gradient(900px 520px at 85% 85%, rgba(72,151,195,0.10), transparent 65%)",
          }}
        />
      </div>

      {/* Navbar fijo */}
      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <Navbar />
      </div>

      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* HERO / INTRO */}
          <section className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/85 backdrop-blur-md shadow-[0_18px_40px_-28px_rgba(40,10,60,0.20)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(720px 260px at 20% 10%, rgba(255,255,255,0.90), transparent 60%)," +
                  "radial-gradient(520px 240px at 85% 0%, rgba(195,90,174,0.14), transparent 60%)," +
                  "radial-gradient(520px 240px at 95% 95%, rgba(99,166,201,0.12), transparent 65%)",
              }}
            />

            <div className="relative p-7 sm:p-10 text-center">
              <h1 className={`text-4xl sm:text-5xl font-serif italic ${TITLE}`}>
                ¿Por qué elegir Alma Dulce?
              </h1>

              <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />

              <p className={`mx-auto mt-5 max-w-3xl font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                Elegir una residencia para quien más quieres es una decisión importante.
                <br className="hidden sm:block" />
                En Alma Dulce ofrecemos mucho más que cuidado: entregamos tranquilidad, profesionalismo y amor verdadero.
              </p>

              <p className={`mx-auto mt-5 max-w-3xl font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                Somos una residencia del adulto mayor con un modelo de atención integral y humano,
                enfocado en la rehabilitación, la seguridad y el bienestar emocional.
              </p>

              <div className="mx-auto mt-7 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <p className={`mx-auto mt-7 max-w-3xl font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                <span className="font-extrabold text-[#8A3FA8]">💜 Alma Dulce</span>
                <br />
                Un lugar donde el cuidado se hace con amor, profesionalismo y dignidad.
              </p>
            </div>
          </section>

          {/* CARDS */}
          <section className="mt-12 sm:mt-14 grid gap-6 sm:gap-7 md:grid-cols-2">
            {ITEMS.map((it, idx) => (
              <article
                key={it.title}
                className="feature-card"
                style={{
                  animation: `fadeUp 650ms ease-out both`,
                  animationDelay: `${idx * 70}ms`,
                }}
              >
                <div className="feature-top">
                  <span className="feature-emoji" aria-hidden="true">
                    {it.emoji}
                  </span>
                  <h3 className={`feature-title font-serif italic ${TITLE}`}>{it.title}</h3>
                </div>

                <p className={`feature-text font-serif ${BODY}`}>{it.text}</p>

                <div className="mt-6 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9] opacity-70" />
              </article>
            ))}
          </section>

          {/* CIERRE + CTA */}
          <section className="mt-14 sm:mt-16 pb-14">
            <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/85 backdrop-blur-md shadow-[0_18px_40px_-28px_rgba(40,10,60,0.20)]">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(720px 260px at 20% 10%, rgba(255,255,255,0.90), transparent 60%)," +
                    "radial-gradient(520px 240px at 85% 0%, rgba(195,90,174,0.14), transparent 60%)," +
                    "radial-gradient(520px 240px at 95% 95%, rgba(99,166,201,0.12), transparent 65%)",
                }}
              />

              <div className="relative p-7 sm:p-10 text-center">
                <p className={`mx-auto max-w-3xl font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                  En Alma Dulce no creemos en el cuidado apurado ni impersonal.
                  Creemos en mirar a los ojos, en escuchar, en acompañar y en rehabilitar con respeto y cariño.
                </p>

                <p className={`mx-auto mt-4 max-w-3xl font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                  Porque cuando eliges Alma Dulce, eliges tranquilidad para tu familia y amor para quien más quieres.
                </p>

                <h2 className={`mt-8 font-serif italic font-semibold text-3xl sm:text-4xl ${TITLE}`}>
                  👉 Agenda una visita y conversemos
                </h2>

                <p className={`mt-3 font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                  Estamos aquí para acompañarte en esta importante decisión.
                </p>

                <div className="mt-8 flex flex-col items-center gap-5">
                  <Link
                    to={agendaHref}
                    className={[
                      "inline-flex items-center justify-center",
                      "h-12 px-6 rounded-2xl",
                      "text-white font-bold",
                      "bg-gradient-to-r",
                      BRAND_GRADIENT,
                      "shadow-[0_16px_34px_-18px_rgba(195,90,174,0.35)]",
                      "hover:brightness-110 active:brightness-95 transition",
                      "focus:outline-none focus:ring-4 focus:ring-[#C35AAE]/20",
                    ].join(" ")}
                  >
                    Agenda una visita
                  </Link>

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

                  <Link
                    to="/"
                    className={[
                      "inline-flex items-center justify-center",
                      "h-11 px-5 rounded-2xl",
                      "bg-white",
                      "border border-black/5",
                      `${TITLE} font-semibold`,
                      "shadow-[0_12px_22px_-18px_rgba(40,10,60,0.14)]",
                      "hover:shadow-[0_16px_28px_-20px_rgba(40,10,60,0.18)] transition",
                    ].join(" ")}
                  >
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style>{`
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        @keyframes fadeUp{
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .feature-card{
          position: relative;
          border-radius: 28px;
          padding: 22px 20px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(138,63,168,0.12);
          box-shadow: 0 18px 40px -28px rgba(40,10,60,0.30);
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }

        .feature-card:hover{
          transform: translateY(-2px);
          background: rgba(255,255,255,0.92);
          box-shadow: 0 26px 60px -34px rgba(40,10,60,0.34);
        }

        .feature-top{
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .feature-emoji{
          width: 44px;
          height: 44px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.90);
          border: 1px solid rgba(138,63,168,0.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.70);
          font-size: 20px;
        }

        .feature-title{
          font-size: 22px;
          font-weight: 800;
        }

        .feature-text{
          margin: 0;
          font-size: 16px;
          line-height: 1.6;
        }

        .wa-link{
          font-size: 20px;
          font-weight: 800;
          color: rgba(111,47,134,0.92);
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 14px 28px -22px rgba(40,10,60,0.25);
          transition: transform .18s ease, background .18s ease;
        }
        .wa-link:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,0.98);
        }

        .wa-dot{
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: rgba(37,211,102,0.95);
          box-shadow: 0 10px 22px rgba(0,0,0,0.18);
        }
        .wa-ico{
          width: 20px;
          height: 20px;
          color: white;
        }

        @media (max-width: 640px){
          .feature-title{ font-size: 20px; }
          .feature-text{ font-size: 15px; }
        }
      `}</style>
    </div>
  );
}
