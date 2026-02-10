import { Link } from "react-router-dom";

import fondo from "../assets/fondo3.png";

import therapy from "../assets/icon_2.png";
import ambiente from "../assets/icon_4.png";
import family from "../assets/icon_6.png";
import atencion from "../assets/icon_3.png";

const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";
const HERO_TITLE = "text-[#8A3FA8]";
const HERO_TEXT = "text-[#6F2F86]";

export default function AboutSummary() {
  const ITEMS = [
    {
      title: "Rehabilitación\ny terapias",
      text: "Terapias y rehabilitación de lunes a viernes adaptadas a cada residente.",
      icon: therapy,
      href: "/terapias",
      cta: "+ info",
    },
    {
      title: "Un ambiente\nque cuida",
      text: "Un entorno acogedor, tranquilo y con una preocupación genuina por cada persona.",
      icon: ambiente,
    },
    {
      title: "Casa abierta\na la familia",
      text: "Visitas con horario liberado porque la familia es parte fundamental del cuidado.",
      icon: family,
    },
    {
      title: "Atención\nen conjunto",
      text: "Trabajamos junto a la familia para entregar una atención personalizada.",
      icon: atencion,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0">
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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className={`text-center text-4xl sm:text-5xl font-serif italic ${HERO_TITLE}`}>
            Nuestro Enfoque
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />
          <p className={`mx-auto mt-4 max-w-2xl font-serif text-[16px] sm:text-[17px] leading-relaxed ${HERO_TEXT}`}>
            Cuidamos con amor, acompañamiento profesional y rehabilitación integral.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, idx) => (
            <EnfoqueCard
              key={item.title}
              title={item.title}
              text={item.text}
              icon={item.icon}
              delayMs={idx * 70}
              isBigIcon={item.icon === family}
              href={item.href}
              cta={item.cta}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function EnfoqueCard({
  title,
  text,
  icon,
  delayMs = 0,
  isBigIcon = false,
  href,
  cta,
}) {
  return (
    <div
      className={[
        "group relative text-center rounded-3xl",
        "px-6 py-7",
        "bg-white/35 backdrop-blur-md",
        "border border-white/55",
        "shadow-[0_22px_50px_-38px_rgba(40,10,60,0.55)]",
        "transition-all duration-300",
        "hover:bg-white/45 hover:shadow-[0_28px_60px_-40px_rgba(40,10,60,0.65)]",
        "hover:-translate-y-1",
        "flex flex-col",
      ].join(" ")}
      style={{
        animation: `fadeUp 650ms ease-out both`,
        animationDelay: `${delayMs}ms`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(520px 220px at 50% 0%, rgba(255,255,255,0.55), transparent 60%)",
        }}
      />

      {/* Icon */}
      <div className="mx-auto flex items-center justify-center h-[190px] sm:h-[200px] lg:h-[230px]">
        <img
          src={icon}
          alt=""
          className={[
            "object-contain",
            isBigIcon
              ? "w-[175px] h-[175px] sm:w-[185px] sm:h-[185px] lg:w-[220px] lg:h-[220px]"
              : "w-[115px] h-[115px] sm:w-[130px] sm:h-[130px] lg:w-[155px] lg:h-[155px]",
          ].join(" ")}
          style={{ animation: "floaty 3.4s ease-in-out infinite" }}
          draggable={false}
          loading="lazy"
        />
      </div>

      <h3 className={`mt-6 text-[22px] sm:text-[24px] font-serif italic whitespace-pre-line leading-snug ${HERO_TITLE}`}>
        {title}
      </h3>

      <p className={`mt-3 font-serif text-[15px] sm:text-base leading-relaxed ${HERO_TEXT}`}>
        {text}
      </p>

      <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9] opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* CTA solo si viene href */}
      {href ? (
        <div className="mt-6 flex justify-center">
          <Link
            to={href}
            className={[
              "inline-flex items-center justify-center",
              "h-11 px-5 rounded-2xl",
              "text-white font-bold",
              "bg-gradient-to-r",
              BRAND_GRADIENT,
              "shadow-[0_16px_34px_-18px_rgba(195,90,174,0.40)]",
              "hover:brightness-110 active:brightness-95 transition",
              "focus:outline-none focus:ring-4 focus:ring-[#C35AAE]/20",
            ].join(" ")}
          >
            {cta || "+ info"}
          </Link>
        </div>
      ) : (
        <div className="mt-6 h-11" />
      )}
    </div>
  );
}
