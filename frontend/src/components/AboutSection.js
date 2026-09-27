import Reveal from "@/components/Reveal";
import { HeartHandshake, GraduationCap, Stethoscope } from "lucide-react";
import { IMAGES } from "@/content";

const PILLARS = [
    {
        icon: Stethoscope,
        title: "Excelência clínica",
        desc: "Atendimento conduzido com rigor técnico e precisão em cada procedimento.",
    },
    {
        icon: HeartHandshake,
        title: "Cuidado humanizado",
        desc: "Cada paciente é acolhido com escuta, empatia e respeito individual.",
    },
    {
        icon: GraduationCap,
        title: "Formação continuada",
        desc: "Cursos e capacitação que elevam o padrão de profissionais e estudantes.",
    },
];

export default function AboutSection() {
    return (
        <section
            id="sobre"
            data-testid="about-doctor-section"
            className="relative overflow-hidden bg-ink-900 py-24 lg:py-32"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-serif italic text-[18rem] leading-none text-white/[0.02]"
            >
                Cuidar
            </span>

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
                {/* image side */}
                <Reveal className="lg:col-span-5" y={40}>
                    <div className="relative">
                        <div className="absolute -inset-4 border border-gold/15" />
                        <div className="relative overflow-hidden">
                            <img
                                src={IMAGES.caringHands}
                                alt="Enfermeira segurando a mão de um paciente com cuidado"
                                loading="lazy"
                                className="h-[420px] lg:h-[540px] w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                        </div>
                        <div className="absolute -bottom-6 left-6 right-6 border border-gold/25 bg-ink-900/95 p-6 backdrop-blur-md sm:left-10 sm:right-auto sm:max-w-xs">
                            <p className="font-serif text-lg italic leading-snug text-slate-100">
                                “Atendimento com excelência em tudo que faz.”
                            </p>
                            <p className="eyebrow mt-3 text-[10px]">
                                Dr. Ismael Frota
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* text side */}
                <div className="lg:col-span-7 lg:pl-8">
                    <Reveal>
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-12 bg-gold/60" />
                            <span className="eyebrow">Sobre o IF Enfermagem</span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.12] text-slate-50">
                            Uma consultoria especializada na área da saúde,{" "}
                            <em className="text-gold-gradient">
                                com excelência em tudo o que faz.
                            </em>
                        </h2>
                        <p className="mt-7 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-slate-300">
                            O IF Enfermagem, encabeçado pelo Dr. Ismael Frota,
                            reúne atendimentos de enfermagem, consultoria em
                            serviços de saúde e enfermagem, cursos voltados para
                            a área da saúde, capacitação de profissionais e
                            estudantes, além de palestras — sempre unindo
                            técnica, ética e um olhar profundamente humano.
                        </p>
                    </Reveal>

                    <div className="mt-12 space-y-7">
                        {PILLARS.map((p, i) => (
                            <Reveal key={p.title} delay={0.1 + i * 0.1}>
                                <div className="group flex items-start gap-5 border-b border-white/5 pb-7">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold-light transition-all duration-500 group-hover:bg-gold/10">
                                        <p.icon size={20} strokeWidth={1.5} />
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-xl text-slate-100">
                                            {p.title}
                                        </h3>
                                        <p className="mt-1.5 text-sm font-light leading-relaxed text-slate-400">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
