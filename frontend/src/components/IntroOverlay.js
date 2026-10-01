import { useEffect } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function IntroOverlay({ onComplete }) {
    useEffect(() => {
        const t = setTimeout(onComplete, 2300);
        return () => clearTimeout(t);
    }, [onComplete]);

    return (
        <motion.div
            data-testid="intro-overlay"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
            <motion.div
                className="mb-8 h-px bg-gold/50"
                initial={{ width: 0 }}
                animate={{ width: 240 }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            />

            <motion.div
                className="relative overflow-hidden border border-gold/25 px-8 py-6 md:px-12 md:py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                {/* corner brackets */}
                <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-gold" />
                <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-gold" />
                <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-gold" />
                <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-gold" />

                <motion.img
                    src="/logo.png"
                    alt="IF Enfermagem — Dr. Ismael Frota"
                    className="relative h-16 w-auto md:h-20"
                    initial={{ opacity: 0, scale: 1.06, filter: "blur(16px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
                />

                {/* gold light sweep */}
                <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-gold/25 to-transparent"
                    initial={{ x: "-160%" }}
                    animate={{ x: "420%" }}
                    transition={{ duration: 1, delay: 1.05, ease: "easeInOut" }}
                />
            </motion.div>

            <motion.div
                className="mt-8 h-px bg-gold/50"
                initial={{ width: 0 }}
                animate={{ width: 240 }}
                transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
            />
        </motion.div>
    );
}
