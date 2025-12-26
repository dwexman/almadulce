import { Link } from "react-router-dom";
import TextRotator from "../components/TextRotator.jsx";
import flyer from "../assets/almadulceflyer.png";

export default function Hero() {
    const FEATURES = [
        "Cuidados personales 24/7",
        "Personal certificado",
        "Programas de terapia ocupacional",
        "Actividades físicas y cognitivas",
        "Actividades recreativas",
        "Servicio de alimentación y nutrición",
        "Servicio doméstico",
        "Calefacción central",
        "Talleres recreativos",
        "Controles de signos vitales diarios",
        "Atención kinésica",
        "Estacionamientos de visitas",
        "Áreas verdes",
    ];

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">
            {/* Fondo mejorado con gradiente más suave */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-500 to-purple-700" />
            
            {/* Overlay sutil para mejor contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
            
            {/* Efecto de partículas/ruido sutil */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
            
            {/* Blobs mejorados con animaciones más suaves */}
            <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/10 blur-3xl animate-[blob_15s_ease-in-out_infinite]" />
            <div className="absolute -bottom-48 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-purple-400/15 to-pink-400/10 blur-3xl animate-[blob2_18s_ease-in-out_infinite]" />
            <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-white/5 to-white/10 blur-3xl animate-[blob3_12s_ease-in-out_infinite]" />
            
            {/* Líneas decorativas sútiles */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Contenido principal */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
                <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Columna izquierda - Contenido */}
                    <div className="text-white">
                        {/* Badge moderno */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-[fadeUp_700ms_ease-out_both]">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <p className="text-sm font-medium tracking-wider uppercase">
                                Residencia para el adulto mayor
                            </p>
                        </div>

                        {/* Título principal con mejor jerarquía */}
                        <div className="relative">
                            {/* Efecto de glow más suave */}
                            <div className="absolute -inset-x-8 -inset-y-8 bg-gradient-to-r from-sky-400/30 via-purple-400/20 to-transparent rounded-3xl blur-3xl animate-pulse-slow" />
                            
                            <h1 className="relative text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight animate-[fadeUp_700ms_100ms_ease-out_both]">
                                <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                                    Alma Dulce
                                </span>
                                <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/80 mt-4">
                                    Donde cada día cuenta
                                </span>
                            </h1>
                        </div>

                        {/* Subtítulo mejorado */}
                        <p className="mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-white/95 max-w-2xl leading-relaxed animate-[fadeUp_700ms_200ms_ease-out_both]">
                            Un <span className="font-bold text-white">hogar cálido</span> con 
                            <span className="font-bold text-white"> atención profesional</span> y 
                            <span className="font-bold text-white"> acompañamiento personalizado</span>
                        </p>

                        {/* Descripción */}
                        <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed animate-[fadeUp_700ms_300ms_ease-out_both]">
                            Brindamos un ambiente seguro, cómodo y lleno de cariño para que 
                            nuestros residentes disfruten de su vida con dignidad y felicidad.
                        </p>

                        {/* Botones CTA mejorados */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-[fadeUp_700ms_400ms_ease-out_both]">
                            <Link
                                to="/quienes-somos"
                                className="group relative inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-8 py-4 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="relative z-10">Conócenos</span>
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-gray-100 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>

                            <Link
                                to="/residencias"
                                className="group relative inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 px-8 py-4 font-bold hover:bg-white/20 transition-all duration-300 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="relative z-10">Ver residencias</span>
                                <span className="ml-3 text-lg">→</span>
                            </Link>
                        </div>

                        {/* Rotador con mejor diseño */}
                        <div className="mt-12 animate-[fadeUp_700ms_500ms_ease-out_both]">
                            <TextRotator
                                items={FEATURES}
                                intervalMs={3500}
                                title={
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                        <span className="text-lg font-semibold text-white/90">
                                            Servicios y comodidades
                                        </span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                    </div>
                                }
                                className="text-lg text-white/90"
                            />
                        </div>

                        {/* Indicador scroll sutil */}
                        <div className="mt-16 animate-bounce-slow opacity-60">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-sm font-medium">Explora más</span>
                                <div className="h-8 w-px bg-gradient-to-b from-white to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha - Imagen mejorada */}
                    <div className="relative lg:justify-self-end animate-[fadeIn_800ms_300ms_ease-out_both]">
                        {/* Efectos decorativos alrededor de la imagen */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 to-purple-400/20 rounded-3xl blur-2xl animate-pulse-slow" />
                        <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />
                        <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />
                        
                        {/* Contenedor de la imagen */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 via-transparent to-purple-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                            
                            <div className="relative rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-2 sm:p-4 overflow-hidden">
                                {/* Brillo en borde */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                                
                                <img
                                    src={flyer}
                                    alt="Alma Dulce - Un hogar cálido para el adulto mayor"
                                    className="w-full max-w-[600px] rounded-2xl object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
                                    loading="eager"
                                />
                                
                                {/* Overlay sutil en hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            </div>
                        </div>

                        {/* Texto descriptivo debajo de la imagen */}
                        <div className="mt-8 text-center">
                            <p className="text-white/80 text-lg italic">
                                "Un espacio diseñado con amor y profesionalismo"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animaciones CSS mejoradas */}
            <style>{`
                @keyframes fadeUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px) scale(0.98); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0) scale(1); 
                    }
                }
                
                @keyframes fadeIn {
                    from { 
                        opacity: 0; 
                        transform: translateX(20px) scale(0.95); 
                        filter: blur(4px);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0) scale(1); 
                        filter: blur(0);
                    }
                }
                
                @keyframes blob {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1) rotate(0deg); 
                    }
                    33% { 
                        transform: translate(40px, -30px) scale(1.1) rotate(120deg); 
                    }
                    66% { 
                        transform: translate(-20px, 40px) scale(0.9) rotate(240deg); 
                    }
                }
                
                @keyframes blob2 {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1) rotate(0deg); 
                    }
                    33% { 
                        transform: translate(-50px, 30px) scale(1.15) rotate(-120deg); 
                    }
                    66% { 
                        transform: translate(30px, -40px) scale(0.85) rotate(-240deg); 
                    }
                }
                
                @keyframes blob3 {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1); 
                    }
                    50% { 
                        transform: translate(20px, -20px) scale(1.05); 
                    }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                
                /* Mejoras de rendimiento */
                * {
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                
                /* Optimización para móviles */
                @media (max-width: 768px) {
                    .text-8xl { font-size: 3.5rem; }
                    .text-7xl { font-size: 3rem; }
                    .text-6xl { font-size: 2.5rem; }
                }
            `}</style>
        </section>
    );
}