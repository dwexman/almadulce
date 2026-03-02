import { useEffect, useMemo, useState } from "react";
import { X, Quote } from "lucide-react";
import fondo from "../assets/fondo3.png";

const HERO_TITLE = "text-[#8A3FA8]";
const HERO_TEXT = "text-[#6F2F86]";
const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";

export default function TestimonialsSection() {
  const TESTIMONIALS = useMemo(
    () => [
      {
        name: "Marcela",
        subtitle: "Hija de Sylvia (91 años)",
        text: `Me encontré con Alma Dulce el 2024, cuando mi madre Sylvia de 89 años, vivía conmigo su única hija. La situación era compleja para su salud, quería vivir sola, olvidaba si había tomado sus remedios, no quería levantarse lo cual provocó algunas caídas por la poca musculatura desarrollada, siendo la más compleja una fractura de Trocanter mayor (parte del femur), siendo la primera opción intervenir quirúrgicamente.

Cada vez que mi madre llegaba a un Centro Médico por una Urgencia me pedía no quedar hospitalizada y perdía la noción del tiempo y en ocasiones del espacio. Durante su tratamiento que duró más de 4 meses, me di cuenta que por más que quisiera cuidarla no lo lograba y cada vez su calidad de vida se estaba empeorando. Subió de peso, no se levantaba y cada vez le costaba más movilizarse perdiendo fácilmente el equilibrio.

Muchas veces me pidió que la llevara a un "Hogar", para que nadie le dijera lo que podía hacer.

Mi madre y yo necesitábamos un lugar en donde ella estuviera acompañada y monitoreada las 24 horas del día, en donde compartiera con personas con vidas similares a la de ella y que tuviera mucho jardín para sus amadas plantas.

Ahora creo que fue Alma Dulce quien se encontró con nosotras, ha sido un camino con altos y bajos, mi madre ya de 91 años está muy bien físicamente (mencionado por su Geriatra). Hoy está en estudio un deterioro cognitivo, pero tiene muy claro que el jardinero no siempre le hace caso, que las cuidadoras no siempre la dejan salir a regar y por eso se enoja mucho, y que la Sra. que cocina tiene buena mano.

Se pone contenta cuando vamos a la peluquería, a almorzar a los chinos o a tomar helado al Emporio Rosa.

Creo que siempre sentiré un grado de arrepentimiento por no cuidarla, pero tengo la convicción de que Sylvia está bien como está hoy por vivir en Alma Dulce La Reina. Sus enfermedades crónicas están controladas y participa de algunas de las terapias que ofrece la Residencia, porque a ella solo le interesan sus plantas.

Muchas gracias Alma Dulce, sus cuidadoras, la chef, Nicole (dueña y enfermera) y el jardinero que no hace caso.`,
      },
      {
        name: "Natalia y Paula Piergentili Domenech",
        subtitle: "Hijas de Alejandro",
        text: `Mi papá llegó a la residencia Alma Dulce en noviembre de 2024. Llevaba años conviviendo con Alzheimer en un grado de deterioro medio, pero tras una hospitalización su condición avanzó y comenzó a necesitar cuidados permanentes, día y noche.

En casa hicimos todo lo posible por acompañarlo, pero comprendimos que ya no solo necesitaba estar cuidado: necesitaba estar estimulado, motivado y acompañado de manera constante.

En Alma Dulce encontramos mucho más que un lugar seguro. Es el único hombre de la residencia y, dentro de su condición, ha logrado construir vínculos: tiene amigas, participa con entusiasmo en las terapias, se come todo —lo que para nosotras es una enorme alegría— y sigue siendo el hombre atento y amable que siempre ha sido. Las cuidadoras lo quieren, lo asisten con dedicación y lo regalonean con una ternura que conmueve profundamente.

Para nosotras, sus hijas, no existen palabras suficientes para agradecer la tranquilidad que sentimos al saber que nuestro papá está seguro, cuidado y querido. Alma Dulce es un espacio hecho para brindar amor, alegría y atención, pero también es un lugar que acoge a las familias y donde siempre nos sentimos verdaderamente bienvenidas.`,
      },
      {
        name: "Verónica Pizarro de la Fuente",
        subtitle: "Familiar de residente",
        text: `Durante su permanencia en Alma Dulce Las Condes, ella ha estado muy bien, existe mucha preocupación por los residentes, su aseo y alimentación oportunamente como también la administración de sus medicinas, un reporte de cómo se encuentra, atención afable con sus visitas y lo mas destacable son las actividades que realizan de lunes a viernes con los especialistas que trabajan. Considero que VIVEN el día a día de muy buena forma, y no pasan el día. Estoy muy agradecida de la atención y cuidado que tienen con mi amada madrecita, pronta a cumplir sus 90 años.`,
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openAt = (idx) => {
    setActive(idx);
    setOpen(true);
  };

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
        <div className="absolute inset-0 bg-white/25" />
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
          <h2 className={`text-4xl sm:text-5xl font-serif italic ${HERO_TITLE}`}>
            Testimonios
          </h2>
          <div
            className={`mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`}
          />
          <p
            className={`mx-auto mt-4 max-w-2xl font-serif text-[16px] sm:text-[17px] leading-relaxed ${HERO_TEXT}`}
          >
            Historias reales de familias que confiaron en nosotros.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={idx}
              className={[
                "relative overflow-hidden rounded-3xl",
                "bg-white/40 backdrop-blur-sm",
                "border border-white/60",
                "shadow-[0_22px_50px_-40px_rgba(40,10,60,0.55)]",
                "p-6 sm:p-7",
                "flex flex-col",
                "min-h-[420px]",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white/70 border border-white/60">
                  <Quote className="w-5 h-5 text-[#8A3FA8]" />
                </div>

                <div className="min-w-0">
                  <p className="font-serif font-semibold text-[#6F2F86] leading-tight">
                    {t.name}
                  </p>
                  <p className="font-serif text-[13px] text-[#8A3FA8]/90">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              <p
                className={[
                  "mt-4 font-serif text-[15px] leading-relaxed text-[#6F2F86]",
                  "whitespace-pre-line",
                  "line-clamp-8",
                ].join(" ")}
              >
                {t.text}
              </p>

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  onClick={() => openAt(idx)}
                  className={[
                    "inline-flex items-center gap-2",
                    "rounded-full px-4 py-2",
                    "bg-white/80 hover:bg-white transition",
                    "border border-white/60",
                    "font-serif text-sm text-[#8A3FA8]",
                    "shadow-[0_12px_30px_-22px_rgba(40,10,60,0.55)]",
                    "focus:outline-none focus:ring-4 focus:ring-[#7B6AB2]/20",
                  ].join(" ")}
                >
                  Leer completo <span className="text-[#6F2F86]">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Testimonio completo"
          onClick={close}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-3xl bg-white/95 border border-white/60 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.55)]">
              <button
                type="button"
                onClick={close}
                className="absolute top-3 right-3 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white hover:bg-white transition border border-slate-200"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white border border-slate-200">
                    <Quote className="w-5 h-5 text-[#8A3FA8]" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-serif font-semibold text-[#6F2F86] leading-tight">
                      {TESTIMONIALS[active].name}
                    </p>
                    <p className="font-serif text-[13px] text-[#8A3FA8]/90">
                      {TESTIMONIALS[active].subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-5 max-h-[65vh] overflow-auto pr-2">
                  <p className="font-serif text-[15px] sm:text-[16px] leading-relaxed text-[#6F2F86] whitespace-pre-line">
                    {TESTIMONIALS[active].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}