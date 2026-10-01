import { Component, useState } from "react";
import { useEffect, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { MessageCircle } from "lucide-react";
import { Toaster } from "sonner";
import "@/App.css";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import ServicesBento from "@/components/ServicesBento";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import EssenceSection from "@/components/EssenceSection";
import TestimonialsGoogle from "@/components/TestimonialsGoogle";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import { WHATSAPP_URL } from "@/content";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-ink-950 text-slate-300">
                    Algo deu errado. Recarregue a página.
                </div>
            );
        }
        return this.props.children;
    }
}

function LandingPage() {
    const lenisRef = useRef(null);
    const [introDone, setIntroDone] = useState(() => {
        try {
            return sessionStorage.getItem("if_intro_seen") === "1";
        } catch {
            return false;
        }
    });

    useEffect(() => {
        const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
        lenisRef.current = lenis;
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        const lenis = lenisRef.current;
        if (lenis) {
            if (introDone) lenis.start();
            else lenis.stop();
        }
        document.body.style.overflow = introDone ? "" : "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [introDone]);

    const handleIntroDone = useCallback(() => {
        try {
            sessionStorage.setItem("if_intro_seen", "1");
        } catch {}
        setIntroDone(true);
    }, []);

    const scrollTo = useCallback((hash) => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(hash, { offset: -70, duration: 1.4 });
        } else {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div className="relative min-h-screen bg-ink-950 text-slate-50 antialiased">
            <AnimatePresence>
                {!introDone && (
                    <IntroOverlay key="intro" onComplete={handleIntroDone} />
                )}
            </AnimatePresence>
            <div className="grain-overlay" aria-hidden="true" />
            <Header onNavigate={scrollTo} />
            <main>
                <Hero onNavigate={scrollTo} start={introDone} />
                <EditorialMarquee />
                <ServicesBento />
                <CoursesSection />
                <AboutSection />
                <TeamSection />
                <EssenceSection />
                <TestimonialsGoogle />
                <ContactSection />
            </main>
            <Footer onNavigate={scrollTo} />

            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="floating-whatsapp-button"
                aria-label="Conversar pelo WhatsApp"
                className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink-950 shadow-[0_0_30px_rgba(197,160,89,0.45)] transition-transform duration-500 hover:scale-110"
            >
                <span className="absolute inset-0 rounded-full border border-gold animate-pulse-ring" />
                <MessageCircle size={22} />
            </a>

            <Toaster position="top-center" theme="dark" />
        </div>
    );
}

export default function App() {
    return (
        <ErrorBoundary>
            <LandingPage />
        </ErrorBoundary>
    );
}
