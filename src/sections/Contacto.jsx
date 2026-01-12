import { useMemo, useState, useEffect } from "react";

const BRAND_GRADIENT = "from-[#8C5095] via-[#6D5399] to-[#4897C3]";

export default function Contacto() {
  const [isVisible, setIsVisible] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [touched, setTouched] = useState({
    nombre: false,
    telefono: false,
    email: false,
    mensaje: false,
  });

  const [status, setStatus] = useState({
    loading: false,
    ok: false,
    error: "",
  });

  useEffect(() => setIsVisible(true), []);

  const errors = useMemo(() => {
    const e = {};

    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio.";
    if (!form.telefono.trim()) e.telefono = "El teléfono es obligatorio.";

    if (!form.email.trim()) {
      e.email = "El correo es obligatorio.";
    } else {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(form.email.trim());
      if (!emailOk) e.email = "Ingresa un correo válido (ej: nombre@dominio.com).";
    }

    if (!form.mensaje.trim()) e.mensaje = "El mensaje es obligatorio.";
    else if (form.mensaje.trim().length < 10)
      e.mensaje = "Cuéntanos un poquito más (mínimo 10 caracteres).";

    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const onChange = (key) => (e) => {
    setStatus({ loading: false, ok: false, error: "" });
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onBlur = (key) => () => setTouched((prev) => ({ ...prev, [key]: true }));

  const markAllTouched = () =>
    setTouched({ nombre: true, telefono: true, email: true, mensaje: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    markAllTouched();

    if (!isValid) return;

    try {
      setStatus({ loading: true, ok: false, error: "" });

      // ✅ Aquí conectas tu backend / email service si quieres (EmailJS, Formspree, etc.)
      console.log("CONTACTO SUBMIT:", form);

      await new Promise((r) => setTimeout(r, 450)); // demo UX

      setStatus({ loading: false, ok: true, error: "" });
      setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
      setTouched({ nombre: false, telefono: false, email: false, mensaje: false });
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        error: "Hubo un problema al enviar. Intenta nuevamente.",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="contacto-heading">
      {/* Fondos sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-25 bg-gradient-to-br from-slate-100 to-transparent" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-slate-100 to-transparent" />
        <div className="absolute inset-0 [background:radial-gradient(900px_420px_at_12%_10%,rgba(72,151,195,.14),transparent_60%),radial-gradient(900px_460px_at_92%_20%,rgba(140,80,149,.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Header */}
        <div
          className={[
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-slate-200/70 px-4 py-2 shadow-sm">
            <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />
            <p className="text-sm font-semibold tracking-wide text-slate-700">Contacto</p>
          </div>

          <h2
            id="contacto-heading"
            className="mt-6 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Hablemos
            <span className="block mt-2">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${BRAND_GRADIENT}`}>
                Agenda una visita o solicita información
              </span>
            </span>
          </h2>

          <div className={`mt-5 h-1.5 w-44 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />

          <p className="mt-6 text-slate-700 text-lg leading-relaxed max-w-2xl">
            Completa el formulario y te contactaremos a la brevedad. Los campos con{" "}
            <span className="font-semibold text-slate-900">*</span> son obligatorios.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200/70 bg-white/85 backdrop-blur shadow-xl overflow-hidden">
              {/* top line */}
              <div className={`h-[3px] w-full bg-gradient-to-r ${BRAND_GRADIENT}`} />

              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Nombre"
                    required
                    value={form.nombre}
                    onChange={onChange("nombre")}
                    onBlur={onBlur("nombre")}
                    placeholder="Tu nombre y apellido"
                    error={touched.nombre ? errors.nombre : ""}
                    autoComplete="name"
                  />

                  <Field
                    label="Teléfono"
                    required
                    value={form.telefono}
                    onChange={onChange("telefono")}
                    onBlur={onBlur("telefono")}
                    placeholder="+56 9 1234 5678"
                    error={touched.telefono ? errors.telefono : ""}
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="mt-5">
                  <Field
                    label="Correo"
                    required
                    value={form.email}
                    onChange={onChange("email")}
                    onBlur={onBlur("email")}
                    placeholder="nombre@dominio.com"
                    error={touched.email ? errors.email : ""}
                    inputMode="email"
                    autoComplete="email"
                  />
                </div>

                <div className="mt-5">
                  <Field
                    label="Mensaje"
                    required
                    textarea
                    rows={6}
                    value={form.mensaje}
                    onChange={onChange("mensaje")}
                    onBlur={onBlur("mensaje")}
                    placeholder="Cuéntanos qué necesitas (visita, cupos, servicios, etc.)"
                    error={touched.mensaje ? errors.mensaje : ""}
                  />
                </div>

                {/* Status */}
                {status.error ? (
                  <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-700 text-sm">
                    {status.error}
                  </div>
                ) : null}

                {status.ok ? (
                  <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700 text-sm">
                    ¡Mensaje enviado! Te responderemos pronto 💛
                  </div>
                ) : null}

                <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500">
                    Al enviar, aceptas que te contactemos por teléfono o correo.
                  </p>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className={[
                      "group relative inline-flex items-center justify-center rounded-2xl px-7 py-3.5 font-bold",
                      "text-white shadow-lg hover:shadow-xl transition active:scale-[0.99]",
                      "disabled:opacity-60 disabled:cursor-not-allowed",
                      "bg-gradient-to-r",
                      BRAND_GRADIENT,
                    ].join(" ")}
                  >
                    <span className="relative z-10">
                      {status.loading ? "Enviando..." : "Enviar mensaje"}
                    </span>
                    <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200/70 bg-slate-50/70 backdrop-blur shadow-lg p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-slate-900">Datos de contacto</h3>
              <div className={`mt-3 h-1 w-20 rounded-full bg-gradient-to-r ${BRAND_GRADIENT}`} />

              <div className="mt-6 space-y-4 text-slate-700">
                <InfoRow title="Ubicación" value="Santiago, Chile (visitas con coordinación previa)" />
                <InfoRow title="Teléfono" value="+56 9 1234 5678" />
                <InfoRow title="Correo" value="contacto@almadulce.cl" />
                <InfoRow title="Horario" value="Lun a Sáb — 09:00 a 19:00" />
              </div>

              <div className="mt-7 rounded-2xl bg-white border border-slate-200/70 p-4">
                <p className="text-sm text-slate-600">
                  Tip: si quieres agendar visita, cuéntanos en el mensaje el día/horario que te acomoda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- UI helpers ---------- */

function Field({
  label,
  required,
  textarea,
  error,
  className = "",
  ...props
}) {
  const base =
    "w-full rounded-2xl border bg-white/90 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition";
  const border = error
    ? "border-rose-300 focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
    : "border-slate-200/80 focus:border-slate-300 focus:ring-4 focus:ring-slate-100";

  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-slate-800 mb-2">
        {label} {required ? <span className="text-rose-500">*</span> : null}
      </label>

      {textarea ? (
        <textarea className={[base, border].join(" ")} {...props} />
      ) : (
        <input className={[base, border].join(" ")} {...props} />
      )}

      {error ? (
        <p className="mt-2 text-sm text-rose-600 font-medium">{error}</p>
      ) : null}
    </div>
  );
}

function InfoRow({ title, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {title}
      </span>
      <span className="text-slate-800 font-semibold mt-1">{value}</span>
    </div>
  );
}
