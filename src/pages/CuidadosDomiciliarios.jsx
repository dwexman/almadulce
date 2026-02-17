import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

import fondo from "../assets/fondo3.png";

const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";
const TITLE = "text-[#8A3FA8]";
const BODY = "text-[#6F2F86]";

const CARE_SECTIONS = [
  {
    id: "basicos",
    emoji: "🧡",
    title: "Cuidados Básicos",
    subtitle: "Acompañamiento diario y bienestar general",
    bullets: [
      "Presencia cercana y compañía constante",
      "Aseo y confort, con respeto y cuidado",
      "Paseos y acompañamiento, según condición",
      "Apoyo en actividades de la vida diaria",
      "Contención emocional y apoyo permanente",
    ],
    closing:
      "Pensados para entregar calma, compañía y apoyo en el día a día, cuidando la dignidad y el ritmo de cada persona.",
  },
  {
    id: "avanzados",
    emoji: "💜",
    title: "Cuidados Avanzados",
    subtitle: "Para mayor dependencia o necesidades de salud",
    bullets: [
      "Administración segura de medicamentos",
      "Estimulación y movilización en cama",
      "Cuidados postoperatorios, con supervisión y apoyo continuo",
      "Apoyo en procesos de rehabilitación",
      "Supervisión continua del estado general",
    ],
    closing:
      "Orientados a acompañar procesos más complejos con una mirada humana, profesional y cuidadosa, dando tranquilidad a la familia.",
  },
];

export default function CuidadosDomiciliarios() {
  return (
    <div className="min-h-screen">
      {/* Fondo GLOBAL fijo: SOLO imagen */}
      <div className="fixed inset-0 -z-10">
        <img
          src={fondo}
          alt=""
          className="h-full w-full object-cover object-center"
          draggable={false}
          loading="lazy"
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <Navbar />
      </div>

      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/85 backdrop-blur-md shadow-[0_18px_40px_-28px_rgba(40,10,60,0.20)]">
            <div className="relative p-7 sm:p-10">
              <div className="flex flex-col gap-7 sm:gap-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-3 py-1 shadow-[0_12px_22px_-18px_rgba(40,10,60,0.14)]">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />
                      <span className={`font-serif text-[13px] ${BODY}`}>
                        Cuidado en casa • Presencia real • Tranquilidad para tu familia
                      </span>
                    </div>

                    <h1
                      className={`mt-4 font-serif italic font-semibold tracking-tight leading-[1.06] text-4xl sm:text-5xl ${TITLE}`}
                    >
                      Cuidados Domiciliarios
                      <span className="block">Alma Dulce</span>
                    </h1>

                    <p className={`mt-4 font-serif text-base sm:text-lg leading-relaxed ${BODY}`}>
                      <span className="font-semibold">La tranquilidad de cuidar bien, en el hogar.</span>
                      <br />
                      En Alma Dulce ofrecemos cuidados domiciliarios para personas mayores con un enfoque humano,
                      profesional y lleno de amor, permitiendo que tu ser querido reciba la atención que necesita
                      en la comodidad y seguridad de su hogar.
                    </p>

                    <p className={`mt-4 font-serif text-base sm:text-lg leading-relaxed ${BODY}`}>
                      Somos una de las mejores opciones en cuidado del adulto mayor, porque entregamos acompañamiento
                      real, atención de calidad y un trato cercano que brinda tranquilidad a las familias.
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
                  <div className="h-1.5 w-44 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />

                  <div className="flex flex-wrap gap-2">
                    {CARE_SECTIONS.map((s) => (
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
                        <span className="whitespace-nowrap">{shortLabelCare(s.title)}</span>
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
                    Cotiza cuidados a domicilio
                  </Link>

                  <a
                    href="#planes"
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
                    Ver cuidados
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE TEXTO + STATS */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <CardShell className="px-6 sm:px-8 py-7">
              <p className={`font-serif text-[16px] sm:text-[17px] leading-relaxed ${BODY}`}>
                Cuidar en casa puede ser una experiencia hermosa… y también desafiante. Por eso acompañamos con
                presencia real, rutinas claras y un trato cálido, para que tu familia sienta confianza y tranquilidad
                todos los días.
              </p>

              <p className={`mt-5 font-serif text-[16px] sm:text-[17px] leading-relaxed ${BODY}`}>
                Aquí no solo ayudamos con tareas. <br />
                <span className="font-semibold text-[#8A3FA8]">Acompañamos.</span>{" "}
                <span className="font-semibold text-[#8A3FA8]">Cuidamos.</span>{" "}
                <span className="font-semibold text-[#8A3FA8]">Estamos presentes.</span>
              </p>
            </CardShell>

            <div className="grid gap-6">
              <MiniStat title="Enfoque humano y cercano" text="Trato respetuoso, cálido y con contención emocional." />
              <MiniStat title="Cuidado profesional" text="Apoyo seguro según necesidades, con supervisión y responsabilidad." />
              <MiniStat title="Tranquilidad para la familia" text="Acompañamiento real para que no sientas que estás sola." />
            </div>
          </div>

          {/* CARDS */}
          <div id="planes" className="mt-12 grid gap-10 sm:grid-cols-2">
            {CARE_SECTIONS.map((s, idx) => (
              <ServiceCard key={s.id} {...s} delayMs={idx * 55} minHeight="min-h-[520px]" />
            ))}
          </div>

          {/* VALORES */}
          <div className="mt-12">
            <CardShell className="px-6 sm:px-8 py-7">
              <div className="flex flex-col gap-4">
                <h3 className="font-serif italic font-semibold text-[22px] text-[#8A3FA8]">
                  Valores y orientación
                </h3>

                <p className={`font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                  <span className="font-semibold text-[#8A3FA8]">Valores desde $50.000 diarios.</span>
                  <br />
                  Consulte por valores de horarios extendidos. Estaremos encantados de orientarle.
                </p>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                <p className={`font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                  <span className="font-semibold text-[#8A3FA8]">Alma Dulce.</span> Cuidado con amor, confianza y
                  presencia real, también en casa.
                </p>

                <div className="mt-2 flex flex-col sm:flex-row gap-4">
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
                    Quiero cotizar
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
              </div>
            </CardShell>
          </div>

          <div className="mt-12 pb-14">
            <CardShell className="px-6 sm:px-8 py-7">
              <p className={`font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                En Alma Dulce no creemos en el cuidado apurado ni impersonal. Creemos en mirar a los ojos, en escuchar,
                en acompañar y en cuidar con respeto y cariño.
              </p>
              <p className={`mt-4 font-serif text-[16px] sm:text-[18px] leading-relaxed ${BODY}`}>
                Porque cuando eliges Alma Dulce, eliges tranquilidad para tu familia y amor para quien más quieres.
              </p>
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

function shortLabelCare(title) {
  if (title.includes("Básicos")) return "Básicos";
  if (title.includes("Avanzados")) return "Avanzados";
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

function ServiceCard({ id, emoji, title, subtitle, bullets, closing, delayMs = 0, minHeight = "min-h-[560px]" }) {
  return (
    <div
      id={id}
      style={{
        animation: `fadeUp 650ms ease-out both`,
        animationDelay: `${delayMs}ms`,
      }}
    >
      <CardShell className={`px-6 py-7 flex flex-col ${minHeight}`}>
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
