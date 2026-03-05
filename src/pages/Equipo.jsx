import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

import fondo from "../assets/fondo3.png";

import danza from "../assets/equipo/danza.jpeg";
import kine from "../assets/equipo/kine.jpeg";
import maca from "../assets/equipo/maca2.jpeg";
import nico from "../assets/equipo/nico2.jpeg";
import teo from "../assets/equipo/teo2.jpeg";
import vale from "../assets/equipo/vale.jpeg";
import danae from "../assets/equipo/danae.jpeg";

const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";
const TITLE = "text-[#8A3FA8]";
const BODY = "text-[#6F2F86]";

function initials(name = "") {
  const clean = String(name).trim().replace(/\s+/g, " ");
  if (!clean) return "AD";

  const parts = clean.split(" ").filter(Boolean);
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] || "" : "";
  return (first + last).toUpperCase() || "AD";
}

function Avatar({ src, name }) {
  // 🔧 Ajustes finos por persona (solo para fotos específicas)
  const tweak = (name || "").toLowerCase();
  const perPersonTransform = (() => {
    if (tweak.includes("valentina vergara tapia"))
      return "scale(1.14) translateY(-26px) translateX(8px)"; // más arriba + a la derecha
    if (tweak.includes("marielsa fuentes"))
      return "scale(1.14) translateY(-22px)"; // un poco más arriba
    if (tweak.includes("sebastián castillo"))
      return "scale(1.14) translateY(-22px)"; // un poco más arriba (kine)
    return "scale(1.14) translateY(-18px)"; // default
  })();

  if (src) {
    return (
      <div className="avatar">
        <img
          src={src}
          alt={name}
          className="avatar-img"
          style={{ transform: perPersonTransform }}
          draggable={false}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="avatar avatar-fallback" aria-label={name}>
      <span className="avatar-initials">{initials(name)}</span>
    </div>
  );
}

function Card({ person, idx }) {
  return (
    <article
      className="team-card"
      style={{
        animation: `fadeUp 650ms ease-out both`,
        animationDelay: `${idx * 60}ms`,
      }}
    >
      <div className="team-head">
        <Avatar src={person.photo} name={person.name} />

        <div className="team-meta">
          <h3 className={`team-name font-serif italic ${TITLE}`}>{person.name}</h3>
          <p className={`team-role font-serif ${BODY}`}>{person.role}</p>
          {person.subrole ? <p className="team-subrole">{person.subrole}</p> : null}
        </div>
      </div>

      {person.degrees?.length ? (
        <ul className="team-degList">
          {person.degrees.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      ) : null}

      <p className={`team-bio font-serif ${BODY}`}>{person.bio}</p>

      <div className="mt-6 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9] opacity-70" />
    </article>
  );
}

export default function Equipo() {
  const phone = "56952247308";
  const message = encodeURIComponent(
    "Hola 😊 Me gustaría agendar una visita y recibir información sobre Alma Dulce."
  );
  const waHref = `https://wa.me/${phone}?text=${message}`;

  const INTRO = [
    "En Alma Dulce no solo ofrecemos cuidado.",
    "Ofrecemos tranquilidad.",
    "Cada una de nuestras sedes está liderada por enfermeras con formación de postgrado y amplia experiencia en Unidades de Paciente Crítico Adulto. Esto significa que tu ser querido está en manos de profesionales capacitadas para detectar a tiempo cualquier cambio de salud, prevenir complicaciones y actuar con criterio clínico y seguridad.",
    "Aquí el cuidado es humano, pero también es experto.",
  ];

  const TEAM = [
    {
      name: "Nicole Soto Figueroa",
      role: "Directora General - Fundadora Grupo Alma Dulce",
      subrole:
        "Directora Casa Echeñique, Casa La Cisterna, Casa Miguel Claro y Casa Roberto del Río",
      degrees: ["Diplomada en Paciente Crítico – PUC", "Magíster en Enfermería – UNAB"],
      bio:
        "Con más de 10 años de experiencia en paciente crítico, fundé Alma Dulce con un propósito claro: elevar el estándar del cuidado del adulto mayor en Chile, integrando rehabilitación, supervisión clínica permanente y amor genuino por cada residente.",
      photo: nico,
    },
    {
      name: "Macarena Rojas Saavedra",
      role: "Directora Técnica – Casa Las Condes",
      degrees: [
        "Postítulo en Cuidados Críticos del Adulto – PUC",
        "Magíster en Enfermería – PUC",
        "Experiencia en UPC Adulto",
      ],
      bio:
        "Su sólida formación y trayectoria en alta complejidad garantizan una supervisión rigurosa y un cuidado profesional de excelencia.",
      photo: maca,
    },
    {
      name: "Daniela Fuentes Cepeda",
      role: "Directora Técnica – Casa Lo Arcaya",
      degrees: [
        "Diplomado en Dirección y Coordinación en Servicios de Enfermería – PUC",
        "Experiencia en UPC Adulto",
      ],
      bio:
        "Combina liderazgo organizacional y experiencia clínica para asegurar procesos seguros, ordenados y centrados en la calidad de vida.",
      photo: null,
    },
    {
      name: "Valentina Vergara Tapia",
      role: "Directora Técnica – Casa Simón Bolívar",
      degrees: [
        "Cursando Diplomado en Geriatría y Gerontología – Universidad de los Andes",
        "Experiencia en UPC Adulto",
      ],
      bio:
        "Aporta una mirada actualizada en geriatría, fortaleciendo nuestro enfoque en rehabilitación y funcionalidad.",
      photo: vale,
    },
    {
      name: "Danae Leyton",
      role: "Fonoaudióloga – Residencia Alma Dulce",
      degrees: [],
      bio:
        "En Alma Dulce la rehabilitación es parte esencial del cuidado. Danae es responsable de la evaluación y tratamiento de trastornos de comunicación y deglución en nuestros residentes, especialmente en casos de demencia, secuelas de ACV y disfagia. Su intervención permite prevenir complicaciones, mejorar la seguridad al alimentarse y mantener la capacidad de comunicación, aportando directamente a la calidad de vida.",
      photo: danae,
    },
    {
      name: "Michelle Palma",
      role: "Terapeuta Ocupacional – Residencia Alma Dulce",
      degrees: [],
      bio:
        "En Alma Dulce promovemos la autonomía y la funcionalidad como parte esencial de una vida digna. Michelle trabaja en la estimulación cognitiva, motora y funcional, diseñando planes personalizados que buscan mantener habilidades, prevenir el deterioro y favorecer la independencia en las actividades de la vida diaria. Su labor es clave en procesos de rehabilitación, deterioro cognitivo y acompañamiento en distintas etapas de dependencia.",
      photo: teo,
    },
    {
      name: "Sebastián Castillo",
      role: "Kinesiólogo – Residencia Alma Dulce",
      degrees: [],
      bio:
        "En Alma Dulce la movilidad es parte fundamental de la calidad de vida. Sebastián es responsable de la evaluación y rehabilitación motora, trabajando en prevención de caídas, fortalecimiento muscular, mantención de la marcha y recuperación funcional. Su intervención es clave en procesos post hospitalización, patologías neurológicas y respiratorias, y prevención del desacondicionamiento físico propio de la edad.",
      photo: kine,
    },
    {
      name: "Marielsa Fuentes",
      role: "Taller EBAM – Estimulación y Baile para el Adulto Mayor",
      degrees: [],
      bio:
        "En Alma Dulce creemos que el movimiento también puede ser alegría. Marielsa lidera el Taller EBAM, un espacio terapéutico que combina danza, coordinación y estimulación cognitiva, favoreciendo la movilidad, el ánimo y la socialización. Sus clases promueven expresión, energía y conexión, adaptándose a las capacidades de cada persona.",
      photo: danza,
    },
    {
      name: "Ricardo Barra",
      role: "Profesor de Educación Física y Acondicionamiento Físico – Residencia Alma Dulce",
      degrees: [],
      bio:
        "En Alma Dulce promovemos el movimiento como parte esencial de una vida activa y saludable. Ricardo lidera programas de acondicionamiento físico adaptado, enfocados en fortalecer musculatura, mejorar equilibrio, coordinación y resistencia, siempre respetando el nivel funcional de cada residente. Su trabajo contribuye a prevenir caídas, mantener la autonomía y favorecer el bienestar físico general.",
      photo: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Fondo GLOBAL */}
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

      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <Navbar />
      </div>

      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* HERO */}
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
                Nuestro equipo
              </h1>

              <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />

              <div className="mx-auto mt-6 max-w-4xl space-y-3">
                {INTRO.map((t) => (
                  <p
                    key={t}
                    className={`font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}
                  >
                    {t}
                  </p>
                ))}
              </div>

              <div className="mx-auto mt-7 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <p
                className={`mx-auto mt-6 max-w-4xl font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}
              >
                Conoce a quienes acompañan y cuidan cada día, con criterio clínico y calidez humana.
              </p>
            </div>
          </section>

          {/* GRID */}
          <section className="mt-12 sm:mt-14 grid gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-visible items-start">
            {TEAM.map((p, idx) => (
              <Card key={p.name} person={p} idx={idx} />
            ))}
          </section>

          {/* CTA */}
          <section className="mt-14 sm:mt-16 pb-14">
            <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/85 backdrop-blur-md shadow-[0_18px_40px_-28px_rgba(40,10,60,0.20)]">
              <div className="relative p-7 sm:p-10 text-center">
                <h2 className={`font-serif italic font-semibold text-3xl sm:text-4xl ${TITLE}`}>
                  Agenda una visita y conversemos
                </h2>

                <p className={`mt-3 font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                  Estamos aquí para acompañarte en esta importante decisión.
                </p>

                <div className="mt-8 flex flex-col items-center gap-5">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
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
                  </a>

                  <Link
                    to="/nosotros"
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
                    Volver a Nosotros
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

        .team-card{
          position: relative;
          border-radius: 32px;
          padding: 24px 22px 20px 22px;
          background: rgba(255,255,255,0.87);
          border: 1px solid rgba(138,63,168,0.14);
          box-shadow: 0 18px 48px -32px rgba(40,10,60,0.32);
          transition: transform .22s ease, box-shadow .22s ease, background .22s ease, border-color .22s ease, filter .22s ease;
          display: flex;
          flex-direction: column;
          height: 480px;
          transform-origin: center;
          will-change: transform;
          overflow: hidden;
          z-index: 0;
          isolation: isolate;
        }

        .team-card:before{
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
          padding: 1px;
          background: linear-gradient(120deg, rgba(195,90,174,0.38), rgba(123,106,178,0.26), rgba(99,166,201,0.26));
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.78;
          pointer-events: none;
          z-index: 0;
        }

        .team-card:after{
          content: "";
          position: absolute;
          inset: -80px -80px auto auto;
          width: 260px;
          height: 260px;
          background:
            radial-gradient(circle at 30% 30%, rgba(195,90,174,0.20), transparent 58%),
            radial-gradient(circle at 70% 70%, rgba(99,166,201,0.16), transparent 62%),
            radial-gradient(circle at 45% 80%, rgba(123,106,178,0.16), transparent 60%);
          filter: blur(2px);
          opacity: 0.95;
          pointer-events: none;
          z-index: 0;
        }

        .team-card > *{ position: relative; z-index: 1; }

        .team-card:hover{
          animation: none !important;
          transform: translateY(-10px) scale(1.14);
          background: rgba(255,255,255,0.95);
          border-color: rgba(138,63,168,0.24);
          box-shadow:
            0 44px 120px -52px rgba(40,10,60,0.45),
            0 14px 34px -24px rgba(195,90,174,0.28);
          z-index: 80;
          filter: saturate(1.02);
        }

        .team-head{
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 14px;
        }

        .team-meta{ min-width: 0; flex: 1; }

        .team-name{
          font-size: 21px;
          font-weight: 900;
          margin: 0;
          line-height: 1.15;
        }

        .team-role{
          font-size: 15px;
          font-weight: 850;
          margin: 7px 0 0 0;
          opacity: 0.95;
        }

        .team-subrole{
          margin: 7px 0 0 0;
          font-size: 13px;
          font-weight: 750;
          color: rgba(80,40,110,0.72);
          line-height: 1.35;
        }

        .team-degList{
          list-style: none;
          padding: 0;
          margin: 4px 0 12px 0;
          display: grid;
          gap: 7px;
        }

        .team-degList li{
          font-size: 13px;
          font-weight: 750;
          color: rgba(80,40,110,0.72);
          padding-left: 14px;
          position: relative;
          line-height: 1.35;
        }

        .team-degList li:before{
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 999px;
          position: absolute;
          left: 0;
          top: 7px;
          background: linear-gradient(90deg, #C35AAE, #7B6AB2, #63A6C9);
          opacity: 0.9;
        }

        .team-bio{
          margin: 0;
          font-size: 15px;
          line-height: 1.65;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 10;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .avatar{
          width: 126px;
          height: 126px;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(138,63,168,0.18);
          background: rgba(255,255,255,0.92);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.75),
            0 22px 40px -28px rgba(40,10,60,0.38);
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          position: relative;
        }

        .avatar:before{
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 999px;
          background: linear-gradient(120deg, rgba(195,90,174,0.55), rgba(123,106,178,0.35), rgba(99,166,201,0.35));
          opacity: 0.65;
          filter: blur(7px);
          pointer-events: none;
        }

        .avatar-img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          position: relative;
          z-index: 1;
          transform: scale(1.14) translateY(-18px);
        }

        .avatar-fallback{
          background:
            radial-gradient(160px 110px at 30% 15%, rgba(255,255,255,0.96), rgba(255,255,255,0.72)),
            linear-gradient(90deg, rgba(195,90,174,0.20), rgba(123,106,178,0.20), rgba(99,166,201,0.20));
        }

        .avatar-initials{
          font-weight: 950;
          letter-spacing: 0.6px;
          font-size: 30px;
          color: rgba(138,63,168,0.95);
          position: relative;
          z-index: 1;
        }

        @media (max-width: 640px){
          .team-card{ height: auto; }
          .team-card:hover{ transform: translateY(-6px) scale(1.06); }
          .avatar{ width: 112px; height: 112px; }
          .team-bio{ -webkit-line-clamp: 12; }
        }
      `}</style>
    </div>
  );
}