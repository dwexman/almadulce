import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import portada from "../assets/portada.jpeg";

const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF7FB]">
      <div className="absolute inset-0 pointer-events-none">
        {/* MOBILE BG */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={portada}
            alt=""
            className="h-full w-full object-cover object-[70%_25%] opacity-[0.88] contrast-[1.12] brightness-[1.02] saturate-[1.06]"
            draggable={false}
            loading="eager"
          />
          {/* overlays un poco más fuertes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7FB]/45 via-[#FFF7FB]/24 to-[#FFF7FB]/52" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF7FB]/74 via-[#FFF7FB]/38 to-transparent" />
        </div>

        {/* DESKTOP BG */}
        <div className="absolute inset-y-0 right-0 w-[46%] min-w-[420px] hidden lg:block">
          <img
            src={portada}
            alt=""
            className="h-full w-full object-cover object-[70%_30%] contrast-[1.06] brightness-[1.01]"
            draggable={false}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FFF7FB]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FFF7FB]/70" />
        </div>

        {/* blobs */}
        <div className="absolute -top-44 -left-44 h-[640px] w-[640px] rounded-full bg-[#C35AAE]/20 blur-3xl" />
        <div className="absolute -top-24 left-0 h-[360px] w-[520px] bg-gradient-to-br from-[#C35AAE]/22 via-[#FFF7FB]/0 to-transparent blur-2xl" />
        <div className="absolute -bottom-52 -right-52 h-[620px] w-[620px] rounded-full bg-[#63A6C9]/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[520px] sm:min-h-[560px] lg:min-h-[620px] flex items-center">
          <div className="max-w-2xl pt-10 pb-14 lg:pr-10">
            {/* Título estilo “RESIDENCIA / ALMA DULCE” */}
            <div className="mb-6">
              <p className="font-serif tracking-[0.18em] text-[15px] sm:text-[16px] text-[#8A3FA8]/85">
                RESIDENCIA
              </p>

              {/* wrapper inline-block para que la línea mida EXACTO el ancho del texto */}
              <div className="inline-block">
                <h1
                  className={[
                    "mt-1 font-serif font-semibold tracking-tight leading-[0.95]",
                    "text-4xl sm:text-5xl lg:text-6xl",
                    "bg-gradient-to-r",
                    BRAND_GRADIENT,
                    "bg-clip-text text-transparent",
                  ].join(" ")}
                >
                  ALMA DULCE
                </h1>

                <div className={["mt-3 h-1 w-full rounded-full bg-gradient-to-r", BRAND_GRADIENT].join(" ")} />
              </div>
            </div>

            <h2 className="text-[#8A3FA8] font-serif italic font-semibold tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
              Un hogar donde
              <br />
              el cuidado se siente
            </h2>

            <p className="mt-5 font-serif text-[#6F2F86] text-base sm:text-lg lg:text-xl leading-relaxed">
              En Alma Dulce cuidamos a las personas mayores con amor, respeto y compañía diaria,
              entregando atención de calidad y apoyo en su rehabilitación, para que vivan esta etapa
              con tranquilidad en un entorno seguro y familiar.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Link
                to="/cotiza"
                className={[
                  "inline-flex items-center justify-center",
                  "h-12 px-6 rounded-2xl",
                  "text-white font-bold",
                  "bg-gradient-to-r",
                  BRAND_GRADIENT,
                  "shadow-[0_14px_28px_-14px_rgba(195,90,174,0.45)]",
                  "hover:brightness-110 active:brightness-95 transition",
                  "focus:outline-none focus:ring-4 focus:ring-[#C35AAE]/20",
                ].join(" ")}
              >
                Cotiza tu residencia
              </Link>

              <Link
                to="/residencias"
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "h-12 px-6 rounded-2xl",
                  "bg-white/85 backdrop-blur-sm",
                  "border border-white/70",
                  "text-[#8A3FA8] font-semibold",
                  "shadow-[0_10px_22px_-16px_rgba(40,10,60,0.25)]",
                  "hover:bg-white hover:shadow-[0_14px_26px_-18px_rgba(40,10,60,0.30)] transition",
                ].join(" ")}
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#C35AAE]/12">
                  <MapPin className="w-4 h-4 text-[#8C5095]" strokeWidth={2.2} />
                </span>
                Encuentra tu Alma Dulce
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
