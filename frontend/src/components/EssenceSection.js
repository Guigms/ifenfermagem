import Reveal from "@/components/Reveal";
import { Target, Eye, Gem } from "lucide-react";
import { ESSENCE } from "@/content";

export default function EssenceSection() {
    return (
        <section
            id="essencia"
            data-testid="essence-section"
            className="relative overflow-hidden border-t hairline bg-ink-900 py-24 lg:py-32"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 bottom-0 select-none font-serif italic text-[15rem] leading-none text-white/[0.02]"
            >
                Essência
            </span>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal className="mb-16 max-w-2xl">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="h-px w-12 bg-gold/60" />
                        <span className="eyebrow">Nossa Essência</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-50">
                        Os princípios que guiam{" "}
                        <em className="text-gold-gradient">
                            cada atendimento.
                        </em>
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    <Reveal>
                        <div
                            data-testid="essence-card-missao"
                            className="h-full border border-white/8 bg-ink-800/60 p-9 transition-all duration-500 hover:border-gold/35 hover:shadow-[0_0_35px_rgba(197,160,89,0.08)]"
                        >
                            <span className="flex h-12 w-12 items-center justify-center border border-gold/30 text-gold-light">
                                <Target size={20} strokeWidth={1.5} />
                            </span>
                            <h3 className="mt-7 font-serif text-2xl text-slate-100">
                                Missão
                            </h3>
                            <p className="mt-4 text-sm font-light leading-relaxed text-slate-300">
                                {ESSENCE.missao}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <div
                            data-testid="essence-card-visao"
                            className="h-full border border-white/8 bg-ink-800/60 p-9 transition-all duration-500 hover:border-gold/35 hover:shadow-[0_0_35px_rgba(197,160,89,0.08)]"
                        >
                            <span className="flex h-12 w-12 items-center justify-center border border-gold/30 text-gold-light">
                                <Eye size={20} strokeWidth={1.5} />
                            </span>
                            <h3 className="mt-7 font-serif text-2xl text-slate-100">
                                Visão
                            </h3>
                            <p className="mt-4 text-sm font-light leading-relaxed text-slate-300">
                                {ESSENCE.visao}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div
                            data-testid="essence-card-valores"
                            className="h-full border border-white/8 bg-ink-800/60 p-9 transition-all duration-500 hover:border-gold/35 hover:shadow-[0_0_35px_rgba(197,160,89,0.08)]"
                        >
                            <span className="flex h-12 w-12 items-center justify-center border border-gold/30 text-gold-light">
                                <Gem size={20} strokeWidth={1.5} />
                            </span>
                            <h3 className="mt-7 font-serif text-2xl text-slate-100">
                                Valores
                            </h3>
                            <div className="mt-5 flex flex-wrap gap-2.5">
                                {ESSENCE.valores.map((v) => (
                                    <span
                                        key={v}
                                        className="rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs text-gold-light"
                                    >
                                        {v}
                                      </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
