import { Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/content";

const LINKS = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Cursos", href: "#cursos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
];

export default function Footer({ onNavigate }) {
    const year = new Date().getFullYear();
    return (
        <footer className="relative overflow-hidden border-t hairline bg-ink-950">
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 left-1/2 -translate-x-1/2 select-none font-serif italic text-[20rem] leading-none text-white/[0.02]"
            >
                IF
            </span>

            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="flex flex-col items-center gap-10 text-center">
                    <img
                        src="/logo.png"
                        alt="IF Enfermagem — Dr. Ismael Frota"
                        className="h-14 w-auto"
                        data-testid="footer-logo"
                    />

                    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                        {LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                data-testid={`footer-link-${l.label.toLowerCase()}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate(l.href);
                                }}
                                className="text-[13px] tracking-wide text-slate-400 transition-colors hover:text-gold-light"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-instagram-link"
                            aria-label="Instagram do IF Enfermagem"
                            className="flex h-11 w-11 items-center justify-center rounded-full border hairline text-gold-light transition-all duration-500 hover:border-gold/60 hover:bg-gold/10"
                        >
                            <Instagram size={17} />
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-whatsapp-link"
                            aria-label="WhatsApp do IF Enfermagem"
                            className="flex h-11 w-11 items-center justify-center rounded-full border hairline text-gold-light transition-all duration-500 hover:border-gold/60 hover:bg-gold/10"
                        >
                            <MessageCircle size={17} />
                        </a>
                        <button
                            data-testid="footer-scroll-top-button"
                            onClick={() => onNavigate("#inicio")}
                            aria-label="Voltar ao topo"
                            className="flex h-11 w-11 items-center justify-center rounded-full border hairline text-gold-light transition-all duration-500 hover:border-gold/60 hover:bg-gold/10"
                        >
                            <ArrowUp size={17} />
                        </button>
                    </div>

                    <div className="border-t border-white/5 pt-8 text-center">
                        <p className="text-xs text-slate-500">
                            © {year} IF Enfermagem — Dr. Ismael Frota. Todos os
                            direitos reservados.
                        </p>
                        <p className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-slate-600">
                            Maracanaú · Ceará · Brasil
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
