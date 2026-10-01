import { useEffect } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function IntroOverlay({ onComplete }) {
    useEffect(() => {
        const t = setTimeout(onComplete, 1900);
        return () => clearTimeout(t);
    }, [onComplete]);

    return (
        <motion.div
            data-testid="intro-overlay"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="relative h-28 w-28">
                <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 112 112"
                    fill="none"
                    aria-hidden="true"
                >
                    <motion.rect
                        x="10"
                        y="10"
                        width="92"
                        height="92"
                        stroke="#DFBA73"
                        strokeWidth="2.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.15 }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                        className="font-serif text-4xl font-semibold tracking-widest text-gold-light"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
                    >
                        IF<span className="text-gold">.</span>
                    </motion.span>
                </div>
            </div>

            <motion.p
                className="mt-9 font-mono text-[11px] uppercase text-slate-200"
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ duration: 1, delay: 1, ease: EASE }}
            >
                Dr. Ismael Frota
            </motion.p>

            <motion.div
                className="mt-5 h-px bg-gold/60"
                initial={{ width: 0 }}
                animate={{ width: 190 }}
                transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
            />

            <motion.p
                className="mt-5 font-mono text-[9px] uppercase tracking-[0.35em] text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.3 }}
            >
                Atendimento &amp; Consultoria em Enfermagem
            </motion.p>
        </motion.div>
    );
}
