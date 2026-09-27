import Reveal from "@/components/Reveal";
import { Star, BadgeCheck, Quote } from "lucide-react";
import { REVIEWS, GOOGLE_REVIEWS_URL } from "@/content";

function GoogleG() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
            />
            <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
            />
            <path
                fill="#FBBC05"
                d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
            />
            <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
            />
        </svg>
    );
}

export default function TestimonialsGoogle() {
    return (
        <section
            id="depoimentos"
            data-testid="google-reviews-section"
            className="relative bg-ink-950 py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
                    <Reveal>
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-12 bg-gold/60" />
                            <span className="eyebrow">Reputação</span>
                        </div>
                        <div className="flex flex-wrap items-end gap-x-8 gap-y-5">
                            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-slate-50">
                                <span className="text-gold-gradient">5.0</span>
                            </h2>
                            <div className="pb-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={17}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <p className="mt-2 text-sm text-slate-400">
                                    7 avaliações no Google
                                </p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-ink-800/70 px-6 py-3">
                            <GoogleG />
                            <span className="text-sm text-slate-300">
                                Avaliações verificadas no Google
                            </span>
                        </div>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {REVIEWS.map((r, i) => (
                        <Reveal key={r.id} delay={0.1 + i * 0.12}>
                            <figure
                                data-testid={`review-card-${r.id}`}
                                className="group relative h-full border border-white/8 bg-ink-800/60 p-9 transition-all duration-500 hover:border-gold/35 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)]"
                            >
                                <Quote
                                    size={40}
                                    className="text-gold/20 transition-colors duration-500 group-hover:text-gold/40"
                                    fill="currentColor"
                                />
                                <blockquote className="mt-5 font-serif text-2xl lg:text-[1.7rem] italic leading-snug text-slate-100">
                                    “{r.quote}”
                                </blockquote>
                                <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-white/5 pt-6">
                                    <span className="font-mono text-sm tracking-wide text-slate-200">
                                        {r.author}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                                        <BadgeCheck
                                            size={14}
                                            className="text-emerald-400"
                                        />
                                        Avaliação verificada
                                    </span>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2} className="mt-10 text-center">
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="google-reviews-see-all-link"
                        className="group inline-flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-gold-light"
                    >
                        Ver todos os comentários do Google
                        <span className="h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-14 group-hover:bg-gold-light" />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
