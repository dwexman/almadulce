import fondo from "../assets/fondo.png";

import therapy from "../assets/therapy.png";
import ambiente from "../assets/ambiente.png";
import family from "../assets/family.png";
import atencion from "../assets/atencion.png";

export default function AboutSummary() {
  const ITEMS = [
    {
      title: "Rehabilitación\ny terapias",
      text: "Terapias y rehabilitación de lunes a viernes adaptadas a cada residente.",
      icon: therapy,
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
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src={fondo}
          alt=""
          className="h-full w-full object-cover object-center"
          draggable={false}
          loading="lazy"
        />
        {/* velo suave + luz central */}
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

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-center text-4xl sm:text-5xl font-serif text-[#3d2b3f]">
            Nuestro Enfoque
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#8C5095] via-[#6D5399] to-[#4897C3]" />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, idx) => (
            <EnfoqueCard
              key={item.title}
              title={item.title}
              text={item.text}
              icon={item.icon}
              delayMs={idx * 70}
            />
          ))}
        </div>
      </div>

      {/* animaciones */}
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

function EnfoqueCard({ title, text, icon, delayMs = 0 }) {
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
      ].join(" ")}
      style={{
        animation: `fadeUp 650ms ease-out both`,
        animationDelay: `${delayMs}ms`,
      }}
    >
      {/* brillo suave */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(520px 220px at 50% 0%, rgba(255,255,255,0.55), transparent 60%)",
        }}
      />

      {/* Círculo glass */}
      <div className="relative mx-auto w-[110px] h-[110px] rounded-full flex items-center justify-center">
        <div
          className={[
            "absolute inset-0 rounded-full",
            "bg-white/40 backdrop-blur-lg",
            "border border-white/65",
            "shadow-[0_18px_46px_-30px_rgba(40,10,60,0.60)]",
            "transition-all duration-300",
            "group-hover:bg-white/55",
          ].join(" ")}
        />
        <img
          src={icon}
          alt=""
          className="relative w-14 h-14 object-contain"
          draggable={false}
          loading="lazy"
          style={{ animation: "floaty 3.4s ease-in-out infinite" }}
        />
      </div>

      <h3 className="mt-6 text-xl sm:text-[22px] font-semibold text-[#3d2b3f] whitespace-pre-line leading-snug">
        {title}
      </h3>

      <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-[#4b3a4f]/90">
        {text}
      </p>

      {/* línea decorativa */}
      <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#8C5095] via-[#6D5399] to-[#4897C3] opacity-70 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
