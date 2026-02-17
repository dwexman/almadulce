import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import fondo from "../assets/fondo3.png";

// Residencia 1 (12)
import res1 from "../assets/residencias/residencia1/res1.jpg";
import res2 from "../assets/residencias/residencia1/res2.jpg";
import res3 from "../assets/residencias/residencia1/res3.jpg";
import res4 from "../assets/residencias/residencia1/res4.jpg";
import res5 from "../assets/residencias/residencia1/res5.jpg";
import res6 from "../assets/residencias/residencia1/res6.jpg";
import res7 from "../assets/residencias/residencia1/res7.jpg";
import res8 from "../assets/residencias/residencia1/res8.jpg";
import res9 from "../assets/residencias/residencia1/res9.jpg";
import res10 from "../assets/residencias/residencia1/res10.jpg";
import res11 from "../assets/residencias/residencia1/res11.JPG";
import res12 from "../assets/residencias/residencia1/res12.JPG";

// Residencia 2 (6)
import resi1 from "../assets/residencias/residencia2/resi1.jpg";
import resi2 from "../assets/residencias/residencia2/resi2.jpg";
import resi3 from "../assets/residencias/residencia2/resi3.jpg";
import resi4 from "../assets/residencias/residencia2/resi4.jpg";
import resi5 from "../assets/residencias/residencia2/resi5.jpg";
import resi6 from "../assets/residencias/residencia2/resi6.jpg";

const BRAND_GRADIENT = "from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]";
const TITLE = "text-[#8A3FA8]";
const BODY = "text-[#6F2F86]";

const clamp2 = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export default function ResidenciasPage() {
  const r1Images = useMemo(
    () => [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12],
    []
  );
  const r2Images = useMemo(() => [resi1, resi2, resi3, resi4, resi5, resi6], []);

  const RESIDENCES = useMemo(
    () => [
      {
        id: "residencia-colina",
        name: "Residencia Colina",
        address: "Lo Arcaya 891 parcela 3A lote 4, Colina",
        images: r1Images,
      },
      {
        id: "residencia-la-reina",
        name: "Residencia La Reina",
        address: "Echeñique 7227, La Reina",
        images: r2Images,
      },
    ],
    [r1Images, r2Images]
  );

  const scrollToCard = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const mapQuery = `${RESIDENCES[0].address} ; ${RESIDENCES[1].address}`;
  const MAP_ZOOM = 11;
  const mapEmbedSrc = `https://www.google.com/maps?output=embed&q=${encodeURIComponent(mapQuery)}&z=${MAP_ZOOM}`;

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

      {/* Navbar fijo arriba */}
      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <Navbar />
      </div>

      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className={`text-center text-4xl sm:text-5xl font-serif italic ${TITLE}`}>
              Residencias
            </h1>
            <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />
            <p className={`mx-auto mt-4 max-w-2xl font-serif text-[16px] sm:text-[17px] leading-relaxed ${BODY}`}>
              Espacios cálidos y seguros, pensados para sentirse en casa.
            </p>
          </div>

          {/* 2 cards mismo porte */}
          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-stretch">
            <div id={RESIDENCES[0].id} className="scroll-mt-28 h-full">
              <ResidenceCard
                name={RESIDENCES[0].name}
                address={RESIDENCES[0].address}
                images={RESIDENCES[0].images}
              />
            </div>

            <div id={RESIDENCES[1].id} className="scroll-mt-28 h-full">
              <ResidenceCard
                name={RESIDENCES[1].name}
                address={RESIDENCES[1].address}
                images={RESIDENCES[1].images}
              />
            </div>
          </div>

          {/* MAPA + INDICADORES */}
          <div className="mt-12 pb-14">
            <CardShell className="p-0 overflow-hidden">
              <div className="px-6 sm:px-8 pt-7 sm:pt-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-3 py-1 shadow-[0_12px_22px_-18px_rgba(40,10,60,0.14)]">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />
                  <span className={`font-serif text-[13px] ${BODY}`}>Ubicación de nuestras residencias</span>
                </div>

                <h2 className="mt-4 font-serif italic font-semibold text-[22px] sm:text-[26px] text-[#8A3FA8] leading-snug">
                  Mapa
                </h2>

                <p className={`mt-2 font-serif text-[15px] sm:text-[16px] leading-relaxed ${BODY}`}>
                  Pasa el mouse por los indicadores rojos para ver la dirección y haz click para ir a la residencia.
                </p>
              </div>

              <div className="mt-6 px-4 sm:px-6 pb-7 sm:pb-8">
                <div className="relative overflow-hidden rounded-[26px] border border-white/70 bg-white/40 backdrop-blur-md shadow-[0_22px_50px_-38px_rgba(40,10,60,0.55)]">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                    <iframe
                      title="Mapa Alma Dulce"
                      src={mapEmbedSrc}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(900px 520px at 10% 20%, rgba(195,90,174,.10), transparent 60%)," +
                          "radial-gradient(900px 520px at 90% 20%, rgba(99,166,201,.10), transparent 60%)",
                      }}
                    />
                  </div>

                  <div className="px-5 sm:px-6 py-5 bg-white/35 backdrop-blur-md border-t border-white/60">
                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-3">
                        {RESIDENCES.map((r) => (
                          <MarkerPill
                            key={r.id}
                            label={r.name}
                            address={r.address}
                            onClick={() => scrollToCard(r.id)}
                          />
                        ))}
                      </div>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={[
                          "inline-flex items-center justify-center",
                          "h-10 px-4 rounded-2xl",
                          "text-white font-bold",
                          "bg-gradient-to-r",
                          BRAND_GRADIENT,
                          "shadow-[0_16px_34px_-18px_rgba(195,90,174,0.40)]",
                          "hover:brightness-110 active:brightness-95 transition",
                          "focus:outline-none focus:ring-4 focus:ring-[#C35AAE]/20",
                          "self-start sm:self-auto",
                        ].join(" ")}
                      >
                        Abrir Maps
                      </a>
                    </div>
                  </div>
                </div>
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
      `}</style>
    </div>
  );
}

function ResidenceCard({ name, address, images }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const total = images.length;

  const go = (next) => {
    setIndex((prev) => {
      const val = typeof next === "function" ? next(prev) : next;
      return ((val % total) + total) % total;
    });
  };

  const next = () => go((i) => i + 1);
  const prev = () => go((i) => i - 1);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4200);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, total]);

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div
      className="relative h-full"
      style={{ animation: `fadeUp 650ms ease-out both` }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <CardShell className="p-0 overflow-hidden h-full flex flex-col">
        {/* HEADER con altura fija para alinear el inicio del slider */}
        <div className="px-6 sm:px-8 pt-7 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="h-[110px] sm:h-[118px] flex flex-col justify-start">
                <h3 className="font-serif italic font-semibold text-[22px] sm:text-[26px] text-[#8A3FA8] leading-snug">
                  {name}
                </h3>

                <p className="mt-2 font-serif text-[15px] sm:text-[16px] leading-relaxed text-[#6F2F86]">
                  <span className="font-semibold">Dirección:</span>{" "}
                  <span className="font-semibold inline-block align-top min-h-[48px] sm:min-h-[52px]" style={clamp2}>
                    {address}
                  </span>
                </p>
              </div>
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className={[
                "inline-flex items-center justify-center",
                "h-11 px-5 rounded-2xl",
                "text-white font-bold",
                "bg-gradient-to-r",
                BRAND_GRADIENT,
                "shadow-[0_16px_34px_-18px_rgba(195,90,174,0.40)]",
                "hover:brightness-110 active:brightness-95 transition",
                "focus:outline-none focus:ring-4 focus:ring-[#C35AAE]/20",
                "shrink-0",
                "sm:mt-1",
              ].join(" ")}
            >
              Ver en Maps
            </a>
          </div>
        </div>

        <div className="mt-6 px-4 sm:px-6 pb-7 sm:pb-8 flex-1">
          <div className="relative overflow-hidden rounded-[26px] border border-white/70 bg-white/40 backdrop-blur-md shadow-[0_22px_50px_-38px_rgba(40,10,60,0.55)]">
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={images[index]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
                draggable={false}
                loading="lazy"
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10, 3, 18, .22), transparent 55%)," +
                    "radial-gradient(900px 520px at 10% 20%, rgba(195,90,174,.12), transparent 60%)," +
                    "radial-gradient(900px 520px at 90% 20%, rgba(99,166,201,.12), transparent 60%)",
                }}
              />

              <div className="absolute left-4 top-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/70 px-3 py-1 shadow-[0_14px_26px_-20px_rgba(40,10,60,0.22)]">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />
                  <span className="font-serif text-[13px] text-[#6F2F86]">
                    {index + 1} / {total}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={prev}
                aria-label="Anterior"
                className={[
                  "absolute left-3 top-1/2 -translate-y-1/2",
                  "h-11 w-11 rounded-2xl",
                  "bg-white/70 backdrop-blur-md",
                  "border border-white/70",
                  "shadow-[0_18px_40px_-28px_rgba(40,10,60,0.35)]",
                  "hover:bg-white/85 transition",
                  "grid place-items-center",
                ].join(" ")}
              >
                <span className="text-[#8A3FA8] text-[22px] leading-none">‹</span>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Siguiente"
                className={[
                  "absolute right-3 top-1/2 -translate-y-1/2",
                  "h-11 w-11 rounded-2xl",
                  "bg-white/70 backdrop-blur-md",
                  "border border-white/70",
                  "shadow-[0_18px_40px_-28px_rgba(40,10,60,0.35)]",
                  "hover:bg-white/85 transition",
                  "grid place-items-center",
                ].join(" ")}
              >
                <span className="text-[#8A3FA8] text-[22px] leading-none">›</span>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Ir a foto ${i + 1}`}
                      onClick={() => go(i)}
                      className={[
                        "h-2.5 rounded-full transition-all",
                        active ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/75",
                        "shadow-[0_10px_18px_-14px_rgba(0,0,0,0.55)]",
                      ].join(" ")}
                    />
                  );
                })}
              </div>
            </div>

            <div className="px-5 sm:px-6 py-4 bg-white/35 backdrop-blur-md border-t border-white/60">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  className={[
                    "inline-flex items-center justify-center",
                    "h-10 px-4 rounded-2xl",
                    "bg-white/70 backdrop-blur-md",
                    "border border-white/70",
                    "text-[#8A3FA8] font-semibold",
                    "shadow-[0_12px_22px_-18px_rgba(40,10,60,0.16)]",
                    "hover:bg-white/85 transition",
                  ].join(" ")}
                >
                  {paused ? "Reanudar" : "Pausar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardShell>
    </div>
  );
}

function MarkerPill({ label, address, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative",
        "inline-flex items-center gap-2",
        "h-10 px-4 rounded-2xl",
        "bg-white/70 backdrop-blur-md",
        "border border-white/70",
        "shadow-[0_12px_22px_-18px_rgba(40,10,60,0.16)]",
        "hover:bg-white/85 transition",
        "text-left",
      ].join(" ")}
    >
      <span className="relative grid place-items-center w-7 h-7 rounded-xl bg-[#E32525] shadow-[0_10px_20px_-14px_rgba(227,37,37,0.85)]">
        <span className="w-2.5 h-2.5 rounded-full bg-white" />
      </span>

      <span className="font-serif italic font-semibold text-[14px] text-[#8A3FA8]">
        {label}
      </span>

      <span
        className={[
          "pointer-events-none absolute left-1/2 -translate-x-1/2",
          "-top-3 -translate-y-full",
          "opacity-0 group-hover:opacity-100 transition-opacity",
          "whitespace-nowrap",
          "rounded-2xl px-3 py-2",
          "bg-white/90 backdrop-blur-md",
          "border border-black/5",
          "shadow-[0_18px_40px_-28px_rgba(40,10,60,0.30)]",
          "font-serif text-[13px] text-[#6F2F86]",
        ].join(" ")}
      >
        {address}
      </span>
    </button>
  );
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
