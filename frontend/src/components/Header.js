import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/content";

const LINKS = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
];

export default function Header({ onNavigate }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (e, href) => {
        e.preventDefault();
        setOpen(false);
        onNavigate(href);
    };

    return (
        <header
            data-testid="nav-header"
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#070B14]/85 backdrop-blur-xl border-b border-amber-500/15"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
                <a
                    href="#inicio"
                    data-testid="nav-logo-link"
                    onClick={(e) => go(e, "#inicio")}
                    className="flex items-center"
                    aria-label="IF Enfermagem — início"
                >
                    <img
                        src="/logo.png"
                        alt="IF Enfermagem — Dr. Ismael Frota"
                        className="h-10 md:h-12 w-auto"
                    />
                </a>

                <nav className="hidden lg:flex items-center gap-9">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            onClick={(e) => go(e, l.href)}
                            className="group relative text-[13px] font-medium tracking-wide text-slate-300 hover:text-gold-light transition-colors"
                        >
                            {l.label}
                            <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-light transition-all duration-500 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href={PHONE_TEL}
                        data-testid="header-phone-link"
                        className="hidden xl:flex items-center gap-2 text-[13px] font-mono text-slate-300 hover:text-gold-light transition-colors"
                    >
                        <Phone size={14} className="text-gold" />
                        {PHONE_DISPLAY}
                    </a>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="header-agendar-button"
                        className="gold-btn hidden md:inline-flex rounded-full px-6 py-2.5 text-[13px] font-semibold tracking-wide"
                    >
                        Agendar Consulta
                    </a>
                    <button
                        data-testid="nav-mobile-menu-button"
                        onClick={() => setOpen(!open)}
                        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border hairline text-gold-light"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden overflow-hidden bg-[#070B14]/95 backdrop-blur-xl border-b border-amber-500/15"
                    >
                        <nav className="flex flex-col gap-1 px-6 py-6">
                            {LINKS.map((l, i) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                                    onClick={(e) => go(e, l.href)}
                                    className="font-serif text-2xl text-slate-100 py-2 border-b border-white/5"
                                    style={{ fontStyle: "italic" }}
                                >
                                    <span className="font-mono text-xs text-gold mr-3">
                                        0{i + 1}
                                    </span>
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="nav-mobile-agendar-button"
                                className="gold-btn mt-5 rounded-full px-6 py-3 text-center text-sm font-semibold"
                            >
                                Agendar Consulta
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
