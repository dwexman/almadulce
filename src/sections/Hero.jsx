import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import hero from "../assets/hero.png";

const BRAND_GRADIENT = "from-[#8C5095] via-[#6D5399] to-[#4897C3]";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Fondo imagen */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Residencia Alma Dulce"
          className="h-full w-full object-cover object-center"
          loading="eager"
          draggable={false}
        />

        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/55 to-white/20" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[520px] sm:min-h-[560px] lg:min-h-[620px] flex items-center">
          <div className="max-w-2xl pt-10 pb-14">
            <h1 className="text-[#3d2b3f] font-semibold tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              Un hogar donde
              <br />
              el cuidado se siente
            </h1>

            <p className="mt-5 text-[#4b3a4f] text-base sm:text-lg lg:text-xl leading-relaxed">
              Te damos la bienvenida a nuestra residencia para adultos mayores,
              un lugar cálido donde el bienestar y la rehabilitación son nuestra
              prioridad.
            </p>

            {/* Botones */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              {/* CTA principal (igual que navbar) */}
              <Link
                to="/cotiza"
                className={[
                  "inline-flex items-center justify-center",
                  "h-12 px-6 rounded-2xl",
                  "text-white font-extrabold",
                  "bg-gradient-to-r",
                  BRAND_GRADIENT,
                  "shadow-[0_14px_30px_-14px_rgba(109,83,153,0.6)]",
                  "hover:brightness-110 active:brightness-95 transition",
                  "focus:outline-none focus:ring-4 focus:ring-[#6D5399]/25",
                ].join(" ")}
              >
                Cotiza tu residencia
              </Link>

              {/* CTA secundaria con pin */}
              <Link
                to="/residencias"
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "h-12 px-6 rounded-2xl",
                  "bg-white/85 backdrop-blur-md",
                  "border border-slate-200/80",
                  "text-slate-800 font-bold",
                  "shadow-sm",
                  "hover:bg-white hover:shadow-md transition",
                ].join(" ")}
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#8C5095]/10">
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
