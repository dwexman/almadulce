import { Link } from "react-router-dom";
import logo from "../../assets/logoft.png";

const BRAND_GRADIENT = "from-[#8C5095] via-[#6D5399] to-[#4897C3]";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Línea degradé arriba */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${BRAND_GRADIENT}`} />

      <div className="bg-slate-50/70 backdrop-blur-xl shadow-[0_-12px_30px_-28px_rgba(15,23,42,0.35)]">
        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:py-10">
          {/* Top (compacto) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Brand mini */}
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Residencia Alma Dulce"
                className="h-[72px] sm:h-[86px] w-auto object-contain drop-shadow-[0_10px_18px_rgba(15,23,42,0.10)]"
                loading="lazy"
                draggable={false}
              />

              <div className="text-slate-900">
                <p className="font-extrabold leading-tight">Residencia Alma Dulce</p>
                <p className="text-slate-600 text-sm">Un hogar para el adulto mayor</p>
                <div className={`mt-2 h-1 w-24 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />
              </div>
            </div>

            {/* Contacto (solo lo de la derecha) */}
            <div className="text-slate-900">
              <p className="font-extrabold text-base sm:text-lg">Contacto</p>

              <div className="mt-3 space-y-2 text-slate-700 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <IconPin />
                  <p className="leading-relaxed">
                    Santiago, Chile
                    <span className="block text-slate-500 text-xs sm:text-sm">
                      Visitas con coordinación previa
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <IconPhone />
                  <a className="hover:underline" href="tel:+56912345678">
                    +56952247308
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <IconMail />
                  <a className="hover:underline" href="mailto:contacto@almadulce.cl">
                    residenciaalmadulce@gmail.com
                  </a>
                </div>
              </div>

              {/* Redes */}
              <div className="mt-4">
                <p className="text-slate-600 text-xs font-semibold uppercase tracking-wide">
                  Síguenos
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <SocialButton label="Instagram" />
                  <SocialButton label="Facebook" />
                  <SocialButton label="WhatsApp" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 h-px w-full bg-slate-200/70" />

          {/* Bottom */}
          <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-slate-600 text-xs sm:text-sm">
            <p>© {year} Residencia Alma Dulce. Todos los derechos reservados.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/privacidad" className="hover:underline">
                Privacidad
              </Link>
              <Link to="/terminos" className="hover:underline">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ label }) {
  return (
    <button
      type="button"
      className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/70 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-900/5 transition"
      aria-label={label}
    >
      {label}
    </button>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.5a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 4 4l1.58-1.16a2 2 0 0 1 2.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
