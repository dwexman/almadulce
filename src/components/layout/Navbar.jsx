import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/almadulcelogo.png";

const LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Equipo", to: "/equipo" },
  { label: "Residencias", to: "/residencias" },
  { label: "Testimonios", to: "/testimonios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    [
      "px-3 py-2 rounded-xl text-sm font-semibold transition",
      "hover:bg-white/10 hover:backdrop-blur",
      isActive ? "bg-white/15" : "",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-sky-500 via-sky-600 to-fuchsia-700 text-white shadow-lg">
        <div className="w-full px-2 sm:px-4">
          {/* ALTURA FIJA */}
          <div className="h-16 flex items-center justify-between">
            {/* Logo pegado a la izquierda, ocupando toda la altura del navbar */}
            <Link
              to="/"
              className="flex items-stretch -ml-1"
              onClick={() => setOpen(false)}
              aria-label="Ir al inicio"
            >
              {/* Glass SIN aumentar altura: h-16 y padding horizontal mínimo */}
              <div className="h-16 flex items-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-md px-2">
                {/* Logo MÁS GRANDE pero limitado por h-16 */}
                <img
                  src={logo}
                  alt="Residencia Alma Dulce"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-1">
              {LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} className={navLinkClass}>
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop: iconos más grandes y pegados a la derecha */}
            <div className="hidden md:flex items-center gap-3 -mr-1">
              <button
                type="button"
                className="p-2 rounded-2xl hover:bg-white/10 transition"
                aria-label="Instagram"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="p-2 rounded-2xl hover:bg-white/10 transition"
                aria-label="Facebook"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 9h3V6h-3c-1.657 0-3 1.343-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.552.448-1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile: hamburguesa a la derecha */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-2xl p-2 hover:bg-white/10 transition -mr-1"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              type="button"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                )}
              </svg>
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
              <div className="flex flex-col gap-1 rounded-2xl bg-white/10 p-2 backdrop-blur border border-white/10">
                {LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={navLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                ))}

                <div className="mt-2 flex items-center gap-3 px-2 pb-1">
                  <button
                    type="button"
                    className="p-2 rounded-2xl bg-white/10 hover:bg-white/15 transition"
                    aria-label="Instagram"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M17.5 6.5h.01"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="p-2 rounded-2xl bg-white/10 hover:bg-white/15 transition"
                    aria-label="Facebook"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M14 9h3V6h-3c-1.657 0-3 1.343-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.552.448-1 1-1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
