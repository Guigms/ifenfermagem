import { MARQUEE_ITEMS } from "@/content";

function Row({ ariaHidden }) {
    return (
        <div
            aria-hidden={ariaHidden || undefined}
            className="flex shrink-0 items-center"
        >
            {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="flex items-center">
                    <span
                        className={`whitespace-nowrap px-8 ${
                            i % 2 === 0
                                ? "font-serif italic text-2xl sm:text-3xl text-slate-400"
                                : "font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-gold/70"
                        }`}
                    >
                        {item}
                    </span>
                    <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
                </span>
            ))}
        </div>
    );
}

export default function EditorialMarquee() {
    return (
        <div
            data-testid="editorial-marquee"
            className="relative overflow-hidden border-y hairline bg-ink-900/60 py-7"
        >
            <div className="flex w-max animate-marquee">
                <Row />
                <Row ariaHidden />
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        </div>
    );
}
