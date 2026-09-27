import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { COURSES } from "@/content";

export default function CoursesSection() {
    return (
        <section
            id="cursos"
            data-testid="courses-section"
            className="relative overflow-hidden border-t hairline bg-ink-950 py-24 lg:py-32"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 top-16 select-none font-serif italic text-[14rem] leading-none text-white/[0.02]"
            >
                Cursos
            </span>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                    <Reveal className="lg:col-span-7">
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-12 bg-gold/60" />
                            <span className="eyebrow">Nossos Cursos</span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-50">
                            Formação de ponta a ponta{" "}
                            <em className="text-gold-gradient">
                                para quem faz a saúde.
                            </em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15} className="lg:col-span-5">
                        <p className="text-base font-light leading-relaxed text-slate-400">
                            Para se inscrever, toque em “Tenho Interesse” — sua
                            mensagem chega pronta no nosso WhatsApp.
                        </p>
                    </Reveal>
                </div>

                <div data-testid="courses-list">
                    {COURSES.map((course, i) => (
                        <Reveal key={course.id} delay={i * 0.06} y={26}>
                            <a
                                href={course.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`course-interest-button-${course.id}`}
                                className="group grid grid-cols-1 items-center gap-6 border-t hairline py-9 transition-colors duration-500 hover:bg-gold/[0.03] md:grid-cols-12 lg:py-10"
                            >
                                <span className="hidden font-mono text-sm tracking-[0.2em] text-gold/70 md:col-span-1 md:block">
                                    {course.number}
                                </span>

                                <div className="relative overflow-hidden border border-white/10 md:col-span-3">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        loading="lazy"
                                        className="h-36 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-28"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                                </div>

                                <div className="md:col-span-5">
                                    <h3 className="font-serif text-2xl leading-snug text-slate-100 transition-colors duration-500 group-hover:text-gold-light lg:text-[1.7rem]">
                                        {course.title}
                                    </h3>
                                    <p className="mt-2.5 text-sm font-light leading-relaxed text-slate-400">
                                        {course.desc}
                                    </p>
                                </div>

                                <div className="md:col-span-3 md:text-right">
                                    <span className="ghost-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                                        Tenho Interesse
                                        <ArrowUpRight size={15} />
                                    </span>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                    <div className="border-t hairline" />
                </div>
            </div>
        </section>
    );
}
