import { Link } from "react-router-dom";
import logo from "../../assets/almadulcelogo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Fondo gradiente estilo Alma Dulce */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-sky-600 to-fuchsia-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5" />

      {/* Blobs sutiles */}
      <div className="pointer-events-none absolute -top-36 -left-36 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl animate-[footerBlob_14s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl animate-[footerBlob2_18s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + texto */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg px-4 py-3">
              <img
                src={logo}
                alt="Residencia Alma Dulce"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
              <div className="text-white">
                <p className="font-extrabold leading-tight">Residencia Alma Dulce</p>
                <p className="text-white/85 text-sm">Un hogar para el adulto mayor</p>
              </div>
            </div>

            <p className="mt-5 text-white/90 text-base leading-relaxed max-w-xl">
              Acompañamos a las personas mayores con cercanía, respeto y atención profesional,
              en un entorno cálido y seguro.
            </p>

            {/* CTA ÚNICO */}
            <div className="mt-6">
              <Link
                to="/residencias"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-6 py-3 font-bold shadow-xl hover:shadow-2xl transition hover:scale-[1.01] active:scale-[0.98]"
              >
                Ver residencias
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-white">
            <p className="font-extrabold text-lg">Contacto</p>

            <div className="mt-4 space-y-3 text-white/90">
              <div className="flex items-start gap-3">
                <IconPin />
                <p className="leading-relaxed">
                  Santiago, Chile
                  <span className="block text-white/70 text-sm">Visitas con coordinación previa</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <IconPhone />
                <a className="hover:underline" href="tel:+56912345678">
                  +56 9 1234 5678
                </a>
              </div>

              <div className="flex items-center gap-3">
                <IconMail />
                <a className="hover:underline" href="mailto:contacto@almadulce.cl">
                  contacto@almadulce.cl
                </a>
              </div>
            </div>

            {/* Redes */}
            <div className="mt-6">
              <p className="text-white/80 text-sm font-semibold uppercase tracking-wide">
                Síguenos
              </p>

              <div className="mt-3 flex items-center gap-3">
                <SocialButton label="Instagram" />
                <SocialButton label="Facebook" />
                <SocialButton label="WhatsApp" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-white/85 text-sm">
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

      <style>{`
        @keyframes footerBlob {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, -25px) scale(1.08); }
        }
        @keyframes footerBlob2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-35px, 25px) scale(1.1); }
        }
      `}</style>
    </footer>
  );
}

function SocialButton({ label }) {
  return (
    <button
      type="button"
      className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
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
