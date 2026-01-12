import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoft.png";
import { Instagram, Facebook, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Equipo", to: "/equipo" },
  { label: "Residencias", to: "/residencias" },
  { label: "Testimonios", to: "/testimonios" },
];

const BRAND_GRADIENT = "from-[#8C5095] via-[#6D5399] to-[#4897C3]";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    [
      "relative px-3 py-2 rounded-xl text-sm font-semibold transition",
      "text-slate-700 hover:text-slate-900",
      "hover:bg-slate-900/5",
      isActive ? "text-slate-900 bg-slate-900/5" : "",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50">
      {/* ✅ shadow uniforme en TODO el navbar (no franja) */}
      <div className="bg-white/90 backdrop-blur-xl shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)]">
        <div className="w-full px-3 sm:px-4">
          <div className="h-20 flex items-center justify-between">
            {/* Logo grande pegado a la izquierda */}
            <div className="relative flex items-center">
              <div className="relative w-[220px] h-20">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  aria-label="Ir al inicio"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                  style={{ height: 220, marginTop: 10 }}
                >
                  <img
                    src={logo}
                    alt="Residencia Alma Dulce"
                    className="object-contain select-none"
                    style={{
                      height: 220,
                      width: "auto",
                      maxWidth: 520,
                      display: "block",
                    }}
                    loading="eager"
                    draggable={false}
                  />
                </Link>
              </div>
            </div>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-1">
              {LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} className={navLinkClass}>
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{l.label}</span>
                      {isActive && (
                        <span
                          className={[
                            "absolute left-3 right-3 -bottom-1 h-[3px] rounded-full",
                            "bg-gradient-to-r",
                            BRAND_GRADIENT,
                          ].join(" ")}
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop icons */}
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                className="p-2 rounded-2xl bg-white hover:bg-slate-900/5 transition border border-slate-200/70"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-slate-700" strokeWidth={1.7} />
              </button>

              <button
                type="button"
                className="p-2 rounded-2xl bg-white hover:bg-slate-900/5 transition border border-slate-200/70"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-slate-700" strokeWidth={1.7} />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-2xl p-2 transition border border-slate-200/80 bg-white hover:bg-slate-900/5"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              type="button"
            >
              {open ? (
                <X className="w-7 h-7 text-slate-800" strokeWidth={2.2} />
              ) : (
                <Menu className="w-7 h-7 text-slate-800" strokeWidth={2.2} />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={[
              "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="pb-4 pt-2">
              <div className="flex flex-col gap-1 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/70 shadow-sm p-2">
                {LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "relative px-3 py-2 rounded-xl text-sm font-semibold transition",
                        "text-slate-700 hover:text-slate-900 hover:bg-slate-900/5",
                        isActive ? "text-slate-900 bg-slate-900/5" : "",
                      ].join(" ")
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{l.label}</span>
                        {isActive && (
                          <span
                            className={[
                              "absolute left-3 right-3 bottom-1 h-[3px] rounded-full",
                              "bg-gradient-to-r",
                              BRAND_GRADIENT,
                            ].join(" ")}
                            aria-hidden="true"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}

                <div className="mt-2 flex items-center gap-2 px-2 pb-1">
                  <button
                    type="button"
                    className="p-2 rounded-2xl bg-white hover:bg-slate-900/5 transition border border-slate-200/70"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-slate-700" strokeWidth={1.7} />
                  </button>

                  <button
                    type="button"
                    className="p-2 rounded-2xl bg-white hover:bg-slate-900/5 transition border border-slate-200/70"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-slate-700" strokeWidth={1.7} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ ÚNICA separación: línea degradé */}
        <div className={`h-[4px] w-full bg-gradient-to-r ${BRAND_GRADIENT}`} />
      </div>
    </header>
  );
}
