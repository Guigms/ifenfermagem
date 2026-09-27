import Reveal from "@/components/Reveal";
import { TEAM } from "@/content";

export default function TeamSection() {
    return (
        <section
            id="equipe"
            data-testid="team-section"
            className="relative overflow-hidden border-t hairline bg-ink-950 py-24 lg:py-32"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 bottom-0 select-none font-serif italic text-[14rem] leading-none text-white/[0.02]"
            >
                Equipe
            </span>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                    <Reveal className="lg:col-span-7">
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-12 bg-gold/60" />
                            <span className="eyebrow">Nossa Equipe</span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.12] text-slate-50">
                            Uma equipe dedicada, capacitada e apaixonada{" "}
                            <em className="text-gold-gradient">
                                pelo cuidado com a saúde.
                            </em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15} className="lg:col-span-5">
                        <p className="text-base font-light leading-relaxed text-slate-400">
                            Trabalhamos juntos para oferecer excelência e
                            humanização em todos os atendimentos.
                        </p>
                    </Reveal>
                </div>

                <div
                    data-testid="team-grid"
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {TEAM.map((member, i) => (
                        <Reveal key={member.id} delay={i * 0.08} y={40}>
                            <div
                                data-testid={`team-card-${member.id}`}
                                className="group relative h-full overflow-hidden border border-white/8 bg-ink-800 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)]"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.role}
                                        loading="lazy"
                                        className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
                                    <span className="absolute left-4 top-4 h-8 w-8 border-l border-t border-gold/50" />
                                    <span className="absolute right-4 bottom-24 h-8 w-8 border-r border-b border-gold/50" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif text-xl leading-snug text-slate-100 transition-colors duration-500 group-hover:text-gold-light">
                                        {member.role}
                                    </h3>
                                    <p className="mt-2 text-sm font-light leading-relaxed text-slate-400">
                                        {member.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
