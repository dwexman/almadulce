import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import fondo from "../assets/fondo3.png";

import img1 from "../assets/life/1.JPG";
import img2 from "../assets/life/2.JPG";
import img3 from "../assets/life/3.JPG";
import img4 from "../assets/life/4.jpg";
import img5 from "../assets/life/5.jpg";
import img6 from "../assets/life/6.jpg";
import img7 from "../assets/life/7.jpg";
import img8 from "../assets/life/8.jpg";
import img9 from "../assets/life/9.jpg";

export default function LifeSummary() {
  const IMAGES = useMemo(
    () => [img1, img2, img3, img4, img5, img6, img7, img8, img9],
    []
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openAt = (idx) => {
    setActive(idx);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => setActive((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setActive((i) => (i + 1) % IMAGES.length);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
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
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#4A2E52]">
            Nuestra vida en Alma Dulce
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#C35AAE] via-[#7B6AB2] to-[#63A6C9]" />
        </div>

        <div className="mt-12 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => openAt(idx)}
              className={[
                "group relative overflow-hidden rounded-3xl",
                "bg-white/40 backdrop-blur-sm",
                "border border-white/60",
                "shadow-[0_22px_50px_-40px_rgba(40,10,60,0.55)]",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:bg-white/55",
                "focus:outline-none focus:ring-4 focus:ring-[#7B6AB2]/20",
              ].join(" ")}
              aria-label={`Abrir imagen ${idx + 1}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Alma Dulce ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute left-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-white/60 px-3 py-1 text-sm font-serif text-[#4A2E52]">
                  Ver foto <span className="text-[#6B5670]">↗</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Galería"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-3xl bg-black">
              <img
                src={IMAGES[active]}
                alt={`Alma Dulce ${active + 1}`}
                className="w-full max-h-[78vh] object-contain"
                draggable={false}
              />

              <button
                type="button"
                onClick={close}
                className="absolute top-3 right-3 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/90 hover:bg-white transition border border-slate-200"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>

              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/90 hover:bg-white transition border border-slate-200"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-7 h-7 text-slate-900" />
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/90 hover:bg-white transition border border-slate-200"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-7 h-7 text-slate-900" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-white/85 backdrop-blur-md border border-white/60 px-3 py-1 text-sm font-serif text-[#4A2E52]">
                  {active + 1} / {IMAGES.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
