import Navbar from "./components/layout/Navbar.jsx";
import AboutSumary from "./sections/AboutSummary.jsx";
import Hero from "./sections/Hero.jsx";
import LifeSummary from "./sections/LifeSummary.jsx";
import Contacto from "./sections/Contacto.jsx";
import Footer from "./components/layout/Footer.jsx";

import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSumary />
      <LifeSummary />
      <Contacto />
      <Footer />

      <WhatsAppFloating />
    </div>
  );
}

function WhatsAppFloating() {
  const phone = "56911112222"; // número falso
  const message = encodeURIComponent(
    "Hola 😊 Me gustaría recibir información sobre Alma Dulce."
  );

  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className={[
        "fixed bottom-5 right-5 z-[9999]",
        "group inline-flex items-center justify-center",
        "h-14 w-14 rounded-full",
        "bg-[#25D366] hover:bg-[#1EBE5D]",
        "ring-1 ring-black/5",
        "shadow-[0_18px_40px_-20px_rgba(15,23,42,0.6)]",
        "hover:shadow-[0_24px_55px_-26px_rgba(15,23,42,0.7)]",
        "transition-all duration-300 active:scale-[0.98]",
      ].join(" ")}
    >
      {/* halo */}
      <span className="pointer-events-none absolute -inset-4 rounded-full bg-[#25D366]/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <FaWhatsapp className="relative text-white text-[28px]" aria-hidden="true" />
    </a>
  );
}
