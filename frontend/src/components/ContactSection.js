import Reveal from "@/components/Reveal";
import {
    MapPin,
    Phone,
    Clock,
    Navigation,
    MessageCircle,
} from "lucide-react";
import {
    ADDRESS,
    MAPS_DIR_URL,
    MAPS_EMBED_URL,
    PHONE_DISPLAY,
    PHONE_TEL,
    WHATSAPP_URL,
} from "@/content";

export default function ContactSection() {
    return (
        <section
            id="contato"
            data-testid="contact-section"
            className="relative bg-ink-900 py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal className="mb-16 max-w-2xl">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="h-px w-12 bg-gold/60" />
                        <span className="eyebrow">Contato &amp; Localização</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-50">
                        Estamos prontos para receber{" "}
                        <em className="text-gold-gradient">você.</em>
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <div className="space-y-5">
                        <Reveal>
                            <div
                                data-testid="contact-address-card"
                                className="group flex items-start gap-5 border border-white/8 bg-ink-800/60 p-7 transition-all duration-500 hover:border-gold/35"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold-light">
                                    <MapPin size={20} strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="eyebrow text-[10px]">
                                        Endereço
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                                        {ADDRESS}
                                    </p>
                                    <a
                                        href={MAPS_DIR_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="contact-maps-link"
                                        className="mt-3 inline-flex items-center gap-2 text-sm text-gold-light hover:text-gold-bright transition-colors"
                                    >
                                        <Navigation size={13} />
                                        Traçar rotas no Google Maps
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <a
                                href={PHONE_TEL}
                                data-testid="contact-phone-link"
                                className="group flex items-start gap-5 border border-white/8 bg-ink-800/60 p-7 transition-all duration-500 hover:border-gold/35"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold-light transition-all duration-500 group-hover:bg-gold/10">
                                    <Phone size={20} strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="eyebrow text-[10px]">
                                        Telefone
                                    </p>
                                    <p className="mt-2 font-mono text-lg text-slate-100">
                                        {PHONE_DISPLAY}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Ligue ou envie mensagem pelo WhatsApp
                                    </p>
                                </div>
                            </a>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div
                                data-testid="contact-hours-card"
                                className="flex items-start gap-5 border border-white/8 bg-ink-800/60 p-7 transition-all duration-500 hover:border-gold/35"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold-light">
                                    <Clock size={20} strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="eyebrow text-[10px]">
                                        Horário de funcionamento
                                    </p>
                                    <p className="mt-2 text-sm text-slate-200">
                                        Abre segunda-feira às{" "}
                                        <strong className="text-gold-light">
                                            09:00
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-whatsapp-button"
                                className="gold-btn flex w-full items-center justify-center gap-3 rounded-full px-8 py-5 text-sm font-semibold tracking-wide"
                            >
                                <MessageCircle size={17} />
                                Agendar pelo WhatsApp — {PHONE_DISPLAY}
                            </a>
                        </Reveal>
                    </div>

                    <Reveal delay={0.15} y={40} className="h-full">
                        <div className="h-full min-h-[420px] overflow-hidden border border-gold/20">
                            <iframe
                                title="Mapa — IF Enfermagem, Maracanaú, CE"
                                src={MAPS_EMBED_URL}
                                data-testid="contact-map-iframe"
                                className="map-dark h-full min-h-[420px] w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
