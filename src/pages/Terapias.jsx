import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

import fondo from "../assets/fondo3.png";

const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";
const TITLE = "text-[#8A3FA8]";
const BODY = "text-[#6F2F86]";

const SECTIONS = [
  {
    id: "fono",
    emoji: "🌷",
    title: "Fonoaudiología en Alma Dulce",
    subtitle: "Comunicación, alimentación segura y bienestar",
    bullets: [
      "Trastornos de la deglución (disfagia)",
      "Dificultades del habla y lenguaje",
      "Estimulación cognitiva y comunicativa",
      "Prevención de aspiraciones y complicaciones",
    ],
    closing:
      "Cada intervención se realiza de forma personalizada, respetuosa y cercana, entendiendo que detrás de cada diagnóstico hay una persona que merece ser escuchada y cuidada.",
  },
  {
    id: "kine",
    emoji: "🌿",
    title: "Kinesiología en Alma Dulce",
    subtitle: "Movimiento que devuelve confianza y autonomía",
    bullets: [
      "Rehabilitación funcional",
      "Prevención de caídas",
      "Fortalecimiento muscular",
      "Ejercicios respiratorios y posturales",
    ],
    closing:
      "Todo se realiza con un enfoque progresivo, seguro y humano, respetando los límites y celebrando cada pequeño avance.",
  },
  {
    id: "to",
    emoji: "🌸",
    title: "Terapia Ocupacional en Alma Dulce",
    subtitle: "Autonomía, sentido y calidad de vida",
    bullets: [
      "Actividades de la vida diaria",
      "Estimulación cognitiva",
      "Mantención de habilidades funcionales",
      "Adaptación de espacios y rutinas",
    ],
    closing:
      "Nuestro objetivo es que cada persona se sienta útil, valorada y acompañada, reforzando su autoestima y bienestar emocional.",
  },
  {
    id: "danza",
    emoji: "💃",
    title: "Danza Terapéutica en Alma Dulce",
    subtitle: "Movimiento, emoción y alegría compartida",
    bullets: [
      "Mejora del equilibrio y coordinación",
      "Estimulación cognitiva",
      "Expresión emocional",
      "Fortalecimiento del vínculo social",
    ],
    closing:
      "No se trata de pasos perfectos, sino de disfrutar el movimiento en un ambiente seguro, alegre y lleno de cariño.",
  },
  {
    id: "acond",
    emoji: "🏃‍♀️",
    title: "Acondicionamiento Físico en Alma Dulce",
    subtitle: "Fuerza y equilibrio para una vida más segura",
    bullets: [
      "Ejercicios adaptados de fuerza y resistencia",
      "Trabajo de equilibrio y coordinación",
      "Rutinas personalizadas según condición física",
    ],
    closing:
      "Siempre bajo supervisión profesional y con un enfoque cuidadoso, respetuoso y motivador.",
  },
  {
    id: "nutri",
    emoji: "🥗",
    title: "Nutrición en Alma Dulce",
    subtitle: "Alimentación que cuida y acompaña",
    bullets: [
      "Prevención de desnutrición",
      "Apoyo a patologías crónicas",
      "Adaptación de texturas y requerimientos especiales",
      "Acompañamiento nutricional continuo",
    ],
    closing: "Porque alimentarse bien también es una forma de sentirse cuidado.",
  },
  {
    id: "alim",
    emoji: "👩‍🍳",
    title: "Manipulación de Alimentos en Alma Dulce",
    subtitle: "Seguridad, higiene y dedicación diaria",
    bullets: [
      "La higiene en cada proceso",
      "El respeto por dietas especiales",
      "La calidad y seguridad de los alimentos",
    ],
    closing:
      "Sabemos que una buena alimentación comienza con una preparación responsable y consciente.",
  },
  {
    id: "enf",
    emoji: "🩺",
    title: "Enfermería en Alma Dulce",
    subtitle: "Cuidado profesional, permanente y humano",
    bullets: [
      "Supervisión del estado de salud",
      "Administración segura de medicamentos",
      "Control de signos vitales",
      "Coordinación con el equipo de rehabilitación",
    ],
    closing:
      "La enfermería en Alma Dulce se ejerce con vocación, experiencia y profundo respeto por la persona mayor.",
  },
  {
    id: "tens",
    emoji: "🤍",
    title: "Técnicos en Enfermería (TENS) en Alma Dulce",
    subtitle: "Presencia constante y cuidado con cariño",
    bullets: ["Aseo y confort", "Movilidad y alimentación", "Observación continua del bienestar"],
    closing:
      "Su labor es esencial para crear un ambiente cálido, seguro y familiar, donde cada residente se sienta contenido y acompañado.",
  },
];

export default function TerapiasPage() {
  return (
    <div className="min-h-screen bg-[#FFF7FB]">
      {/* Fondo GLOBAL fijo (evita “espacio blanco” abajo y no se agranda) */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "520px",
          }}
        />
        <div className="absolute inset-0 bg-[#FFF7FB]/55" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 420px at 50% 12%, rgba(255,255,255,0.72), transparent 60%)," +
              "radial-gradient(900px 520px at 15% 88%, rgba(195,90,174,0.12), transparent 65%)," +
              "radial-gradient(900px 520px at 85% 88%, rgba(99,166,201,0.12), transparent 65%)",
          }}
        />
        <div className="absolute -top-56 -left-56 h-[680px] w-[680px] rounded-full bg-[#C35AAE]/16 blur-3xl" />
        <div className="absolute -bottom-56 -right-56 h-[680px] w-[680px] rounded-full bg-[#63A6C9]/12 blur-3xl" />
      </div>

      {/* Navbar fijo */}
      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <Navbar />
      </div>

      {/* IMPORTANTE: NO le pongas overflow-y-scroll a este main */}
      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* HERO MINI */}
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
            <div className="relative p-7 sm:p-10">
              <div className="flex flex-col gap-7 sm:gap-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-3 py-1 shadow-[0_12px_22px_-18px_rgba(40,10,60,0.14)]">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />
                      <span className={`font-serif text-[13px] ${BODY}`}>
                        Rehabilitación integral • Cuidado con amor
                      </span>
                    </div>

                    <h1 className={`mt-4 font-serif italic font-semibold tracking-tight leading-[1.06] text-4xl sm:text-5xl ${TITLE}`}>
                      Terapias & Modelo de Cuidado
                    </h1>

                    <p className={`mt-4 font-serif text-base sm:text-lg leading-relaxed ${BODY}`}>
                      En Alma Dulce creemos que envejecer no significa perder dignidad, propósito ni cariño.
                      Trabajamos con un equipo interdisciplinario para mantener y recuperar capacidades físicas,
                      cognitivas y emocionales, siempre con respeto, cercanía y corazón.
                    </p>
                  </div>

                  <Link
                    to="/"
                    className={[
                      "shrink-0 hidden sm:inline-flex items-center justify-center",
                      "h-11 px-5 rounded-2xl",
                      "bg-white",
                      "border border-black/5",
                      `${TITLE} font-semibold`,
                      "shadow-[0_12px_22px_-18px_rgba(40,10,60,0.14)]",
                      "hover:shadow-[0_16px_28px_-20px_rgba(40,10,60,0.18)] transition",
                    ].join(" ")}
                  >
                    Volver
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="h-1.5 w-40 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />

                  <div className="flex flex-wrap gap-2">
                    {SECTIONS.slice(0, 6).map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={[
                          "inline-flex items-center gap-2",
                          "rounded-full px-3.5 py-2",
                          "bg-white",
                          "border border-black/5",
                          "shadow-[0_12px_22px_-18px_rgba(40,10,60,0.12)]",
                          "hover:shadow-[0_16px_28px_-20px_rgba(40,10,60,0.16)] transition",
                          "text-[13px] font-serif",
                          BODY,
                        ].join(" ")}
                      >
                        <span className="text-[14px]" aria-hidden="true">
                          {s.emoji}
                        </span>
                        <span className="whitespace-nowrap">{shortLabel(s.title)}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/cotiza"
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
                    Cotiza tu residencia
                  </Link>

                  <a
                    href="#cards"
                    className={[
                      "inline-flex items-center justify-center",
                      "h-12 px-6 rounded-2xl",
                      "bg-white",
                      "border border-black/5",
                      "text-[#8A3FA8] font-semibold",
                      "shadow-[0_12px_22px_-18px_rgba(40,10,60,0.12)]",
                      "hover:shadow-[0_16px_28px_-20px_rgba(40,10,60,0.16)] transition",
                    ].join(" ")}
                  >
                    Ver terapias
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* INTRO + STATS */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <CardShell className="px-6 sm:px-8 py-7">
              <p className={`font-serif text-[16px] sm:text-[17px] leading-relaxed ${BODY}`}>
                Cada persona que llega a nuestras residencias trae una historia, una familia y una forma única de vivir.
                Por eso trabajamos con un equipo interdisciplinario, enfocado en mantener y recuperar capacidades físicas,
                cognitivas y emocionales, respetando los tiempos y necesidades de cada residente.
              </p>

              <p className={`mt-5 font-serif text-[16px] sm:text-[17px] leading-relaxed ${BODY}`}>
                Aquí no solo cuidamos cuerpos. <br />
                <span className="font-semibold text-[#8A3FA8]">Cuidamos personas.</span>{" "}
                <span className="font-semibold text-[#8A3FA8]">Cuidamos historias.</span>{" "}
                <span className="font-semibold text-[#8A3FA8]">Cuidamos con el corazón.</span>
              </p>
            </CardShell>

            <div className="grid gap-6">
              <MiniStat title="Equipo interdisciplinario" text="Profesionales coordinados para acompañar cuerpo, mente y emoción." />
              <MiniStat title="Rehabilitación progresiva" text="Enfoque seguro, respetuoso y humano, celebrando cada avance." />
              <MiniStat title="Cuidado con sentido" text="Rutinas y apoyos pensados para dignidad, autonomía y bienestar real." />
            </div>
          </div>

          {/* CARDS */}
          <div id="cards" className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.map((s, idx) => (
              <ServiceCard key={s.id} {...s} delayMs={idx * 55} />
            ))}
          </div>

          {/* CIERRE */}
          <div className="mt-12 pb-14">
            <CardShell className="px-6 sm:px-8 py-7">
              <p className={`font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                En Alma Dulce no creemos en el cuidado apurado ni impersonal. Creemos en mirar a los ojos, en escuchar,
                en acompañar y en rehabilitar con respeto y cariño.
              </p>
              <p className={`mt-4 font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                Porque cuando eliges Alma Dulce, eliges tranquilidad para tu familia y amor para quien más quieres.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/cotiza"
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
                  Cotiza tu residencia
                </Link>

                <Link
                  to="/"
                  className={[
                    "inline-flex items-center justify-center",
                    "h-12 px-6 rounded-2xl",
                    "bg-white",
                    "border border-black/5",
                    "text-[#8A3FA8] font-semibold",
                    "shadow-[0_12px_22px_-18px_rgba(40,10,60,0.12)]",
                    "hover:shadow-[0_16px_28px_-20px_rgba(40,10,60,0.16)] transition",
                  ].join(" ")}
                >
                  Volver al inicio
                </Link>
              </div>
            </CardShell>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatSoft {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

function shortLabel(title) {
  if (title.includes("Fonoaudiología")) return "Fono";
  if (title.includes("Kinesiología")) return "Kine";
  if (title.includes("Terapia Ocupacional")) return "T. Ocup.";
  if (title.includes("Danza")) return "Danza";
  if (title.includes("Acondicionamiento")) return "Acond.";
  if (title.includes("Nutrición")) return "Nutrición";
  if (title.includes("Manipulación")) return "Alimentos";
  if (title.includes("Enfermería")) return "Enfermería";
  if (title.includes("Técnicos")) return "TENS";
  return title;
}

function CardShell({ children, className = "" }) {
  return (
    <div
      className={[
        "relative rounded-[30px]",
        "bg-white",
        "border border-[#8A3FA8]/16",
        "ring-1 ring-black/5",
        "shadow-[0_18px_40px_-28px_rgba(17,24,39,0.35)]",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_rgba(17,24,39,0.42)]",
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(520px 220px at 40% 0%, rgba(195,90,174,0.10), transparent 60%)," +
            "radial-gradient(520px 220px at 95% 10%, rgba(99,166,201,0.10), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function MiniStat({ title, text }) {
  return (
    <CardShell className="px-6 py-6">
      <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9] opacity-80" />
      <h3 className="mt-4 font-serif italic font-semibold text-[18px] text-[#8A3FA8]">
        {title}
      </h3>
      <p className="mt-2 font-serif text-[15px] leading-relaxed text-[#6F2F86]">
        {text}
      </p>
    </CardShell>
  );
}

function ServiceCard({ id, emoji, title, subtitle, bullets, closing, delayMs = 0 }) {
  return (
    <div
      id={id}
      style={{
        animation: `fadeUp 650ms ease-out both`,
        animationDelay: `${delayMs}ms`,
      }}
    >
      <CardShell className="px-6 py-7 flex flex-col min-h-[560px]">
        <div className="flex items-start gap-3">
          <div className="relative shrink-0">
            <span className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#C35AAE]/18 via-[#7B6AB2]/14 to-[#63A6C9]/16 blur-xl opacity-60" />
            <div
              className={[
                "relative grid place-items-center",
                "w-12 h-12 rounded-2xl",
                "bg-white",
                "border border-[#8A3FA8]/10",
                "shadow-[0_14px_26px_-20px_rgba(40,10,60,0.18)]",
              ].join(" ")}
              style={{ animation: "floatSoft 4.8s ease-in-out infinite" }}
            >
              <span className="text-[20px]" aria-hidden="true">
                {emoji}
              </span>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="font-serif italic font-semibold text-[19px] sm:text-[20px] text-[#8A3FA8] leading-snug">
              {title}
            </h2>
            <p className="mt-1 font-serif text-[14px] sm:text-[15px] text-[#6F2F86] opacity-90">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="mt-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9] opacity-75" />

        <ul className="mt-5 space-y-2 font-serif text-[14px] sm:text-[15px] text-[#6F2F86] leading-relaxed">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 font-serif text-[14px] sm:text-[15px] leading-relaxed text-[#6F2F86]">
          {closing}
        </p>

        <div className="mt-auto pt-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        </div>
      </CardShell>
    </div>
  );
}
