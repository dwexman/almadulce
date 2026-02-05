import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import portada from "../assets/portada.jpeg";

const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF7FB]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-[46%] min-w-[420px] hidden lg:block">
          <img
            src={portada}
            alt=""
            className="h-full w-full object-cover object-[70%_30%]"
            draggable={false}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FFF7FB]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FFF7FB]/70" />
        </div>

        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#C35AAE]/10 blur-3xl" />
        <div className="absolute -bottom-52 -right-52 h-[620px] w-[620px] rounded-full bg-[#63A6C9]/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[520px] sm:min-h-[560px] lg:min-h-[620px] flex items-center">
          <div className="max-w-2xl pt-10 pb-14 lg:pr-10">
            <h1 className="text-[#4A2E52] font-serif italic font-semibold tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              Un hogar donde
              <br />
              el cuidado se siente
            </h1>

            <p className="mt-5 font-serif text-[#6B5670] text-base sm:text-lg lg:text-xl leading-relaxed">
              Te damos la bienvenida a nuestra residencia para adultos mayores,
              un lugar cálido donde el bienestar y la rehabilitación son nuestra
              prioridad.
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
                  "bg-white/80 backdrop-blur-sm",
                  "border border-white/70",
                  "text-[#4A2E52] font-semibold",
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

            <div className="mt-10 lg:hidden">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={portada}
                  alt="Residencia Alma Dulce"
                  className="h-[260px] w-full object-cover object-[70%_30%]"
                  draggable={false}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFF7FB]/45 via-transparent to-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
