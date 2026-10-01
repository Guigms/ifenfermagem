import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, MapPin, ArrowDown } from "lucide-react";
import { IMAGES, WHATSAPP_URL } from "@/content";

const LINES = ["A nobreza do cuidar", "com rigor científico", "e sofisticação."];

const EASE = [0.16, 1, 0.3, 1];

export default function Hero({ onNavigate, start = true }) {
    const play = start;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
    const glowY = useTransform(scrollYProgress, [0, 1], [0, 60]);

    return (
        <section
            id="inicio"
            ref={ref}
            data-testid="hero-section"
            className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-[72px]"
        >
            {/* ambient glows */}
            <motion.div
                style={{ y: glowY }}
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                <div className="absolute -top-40 left-[-10%] h-[560px] w-[560px] rounded-full bg-gold/10 blur-[140px]" />
                <div className="absolute bottom-[-20%] right-[30%] h-[420px] w-[420px] rounded-full bg-[#1B2A4A]/50 blur-[130px]" />
            </motion.div>

            {/* watermark */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-8 select-none font-serif italic text-[22rem] leading-none text-white/[0.02]"
            >
                IF
            </span>

            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-12 lg:gap-8 lg:px-10">
                {/* left — type */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={
                            play
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 18 }
                        }
                        transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <span className="h-px w-12 bg-gold/60" />
                        <span className="eyebrow">
                            Atendimento &amp; Consultoria em Enfermagem
                        </span>
                    </motion.div>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.2rem] font-medium tracking-tight leading-[1.06] text-slate-50">
                        {LINES.map((line, i) => (
                            <span
                                key={i}
                                className="block overflow-hidden pb-2"
                            >
                                <motion.span
                                    className="block"
                                    initial={{ y: "115%" }}
                                    animate={play ? { y: 0 } : { y: "115%" }}
                                    transition={{
                                        duration: 1.15,
                                        delay: 0.2 + i * 0.16,
                                        ease: EASE,
                                    }}
                                >
                                    {i === 2 ? (
                                        <>
                                            e{" "}
                                            <em className="text-gold-gradient not-italic font-semibold">
                                                sofisticação.
                                            </em>
                                        </>
                                    ) : (
                                        line
                                    )}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            play
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 1, delay: 0.75, ease: EASE }}
                        className="mt-7 max-w-xl text-base sm:text-lg font-light leading-relaxed text-slate-300"
                    >
                        O IF Enfermagem é uma consultoria especializada na área
                        da saúde — atendimento humanizado, rigor clínico e
                        capacitação de profissionais e estudantes, à altura de
                        quem espera excelência.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            play
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 1, delay: 0.9, ease: EASE }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-whatsapp-button"
                            className="gold-btn rounded-full px-8 py-4 text-sm font-semibold tracking-wide"
                        >
                            Agendar Consulta Exclusiva
                        </a>
                        <a
                            href="#servicos"
                            data-testid="hero-services-button"
                            onClick={(e) => {
                                e.preventDefault();
                                onNavigate("#servicos");
                            }}
                            className="ghost-btn rounded-full px-8 py-4 text-sm font-semibold tracking-wide"
                        >
                            Conhecer Especialidades
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={play ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1.1, delay: 1.1 }}
                        className="mt-12 flex flex-wrap items-center gap-3"
                    >
                        <div
                            data-testid="hero-rating-badge"
                            className="flex items-center gap-2.5 rounded-full border border-amber-500/25 bg-ink-800/70 px-5 py-2.5 backdrop-blur-sm"
                        >
                            <span className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={13}
                                        className="fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </span>
                            <span className="text-xs text-slate-300">
                                <strong className="text-slate-100">5.0</strong>{" "}
                                · 7 avaliações no Google
                            </span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-800/70 px-5 py-2.5 text-xs text-slate-300 backdrop-blur-sm">
                            <MapPin size={13} className="text-gold" />
                            Maracanaú — Ceará
                        </div>
                    </motion.div>
                </div>

                {/* right — portrait */}
                <div className="lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 24 }}
                        animate={
                            play
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.96, y: 24 }
                        }
                        transition={{ duration: 1.3, delay: 0.55, ease: EASE }}
                        className="relative mx-auto max-w-md lg:max-w-none"
                    >
                        <div className="absolute -inset-4 rounded-t-[140px] border border-gold/20" />
                        <div className="relative overflow-hidden rounded-t-[140px] border-b-2 border-gold/40">
                            <motion.img
                                style={{ y: imgY }}
                                src={IMAGES.heroDoctor}
                                alt="Dr. Ismael Frota — atendimento e consultoria em enfermagem"
                                className="h-[420px] sm:h-[520px] w-full scale-110 object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/20" />
                            <div className="absolute inset-x-0 bottom-0 p-7">
                                <p className="font-serif text-2xl italic text-slate-100">
                                    Dr. Ismael Frota
                                </p>
                                <p className="eyebrow mt-1.5">
                                    Atendimento &amp; Consultoria
                                </p>
                            </div>
                        </div>
                        {/* corner accents */}
                        <span className="absolute -left-1.5 top-24 h-10 w-px bg-gold/50" />
                        <span className="absolute -right-1.5 top-24 h-10 w-px bg-gold/50" />
                    </motion.div>
                </div>
            </div>

            {/* scroll cue */}
            <motion.a
                href="#servicos"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate("#servicos");
                }}
                initial={{ opacity: 0 }}
                animate={play ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold/70 hover:text-gold transition-colors lg:flex"
                aria-label="Rolar para serviços"
            >
                <span className="eyebrow text-[10px]">Explore</span>
                <motion.span
                    animate={{ y: [0, 7, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                >
                    <ArrowDown size={16} />
                </motion.span>
            </motion.a>
        </section>
    );
}
