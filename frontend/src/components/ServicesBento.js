import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "@/content";

function ServiceCard({ service, big }) {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`service-card-${service.id}`}
            className={`group relative block overflow-hidden rounded-2xl border border-white/8 bg-ink-800 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_45px_rgba(197,160,89,0.12)] h-full ${
                big ? "min-h-[420px] lg:min-h-[520px]" : "min-h-[280px]"
            }`}
        >
            <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10" />
            <span className="absolute right-6 top-6 font-mono text-xs tracking-[0.25em] text-gold/80">
                {service.number}
            </span>
            <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold-light opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-0 translate-y-1 bg-ink-950/50 backdrop-blur-sm">
                <ArrowUpRight size={15} />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <h3
                    className={`font-serif text-slate-50 ${
                        big ? "text-3xl lg:text-4xl" : "text-2xl"
                    }`}
                >
                    {service.title}
                </h3>
                <p
                    className={`mt-3 max-w-md font-light leading-relaxed text-slate-300 ${
                        big ? "text-base" : "text-sm"
                    }`}
                >
                    {service.desc}
                </p>
            </div>
        </a>
    );
}

export default function ServicesBento() {
    const [first, second, third, fourth, fifth, sixth] = SERVICES;
    return (
        <section
            id="servicos"
            data-testid="services-section"
            className="relative bg-ink-950 py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                    <Reveal className="lg:col-span-7">
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-12 bg-gold/60" />
                            <span className="eyebrow">Especialidades</span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-50">
                            Cuidado, estratégia e formação{" "}
                            <em className="text-gold-gradient">em um só lugar.</em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15} className="lg:col-span-5">
                        <p className="text-base font-light leading-relaxed text-slate-400">
                            Serviços especializados e humanizados, com foco em
                            qualidade e excelência — do atendimento direto ao
                            paciente à formação de quem faz a saúde acontecer.
                        </p>
                    </Reveal>
                </div>

                <div
                    data-testid="services-bento-grid"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5"
                >
                    <Reveal className="md:col-span-2 lg:col-span-7" y={40}>
                        <ServiceCard service={first} big />
                    </Reveal>
                    <Reveal
                        delay={0.1}
                        className="lg:col-span-5"
                        y={40}
                    >
                        <ServiceCard service={second} />
                    </Reveal>
                    <Reveal delay={0.05} className="lg:col-span-5" y={40}>
                        <ServiceCard service={third} />
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-7" y={40}>
                        <ServiceCard service={fourth} />
                    </Reveal>
                    <Reveal className="lg:col-span-6" y={40}>
                        <ServiceCard service={fifth} />
                    </Reveal>
                    <Reveal
                        delay={0.08}
                        className="md:col-span-2 lg:col-span-6"
                        y={40}
                    >
                        <ServiceCard service={sixth} />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
