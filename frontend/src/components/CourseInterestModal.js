import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function CourseInterestModal({ course, onClose }) {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [sending, setSending] = useState(false);

    const openWhatsApp = () => {
        if (course) {
            window.open(course.whatsapp, "_blank", "noopener,noreferrer");
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !contact.trim()) {
            toast.error("Preencha seu nome e um contato para retorno.");
            return;
        }
        setSending(true);
        try {
            await axios.post(`${API}/course-interest`, {
                name: name.trim(),
                contact: contact.trim(),
                course: course.title,
            });
            toast.success(
                "Interesse registrado! Nossa equipe será notificada por e-mail.",
            );
            openWhatsApp();
            onClose();
        } catch {
            toast.error(
                "Não conseguimos registrar agora. Fale direto pelo WhatsApp.",
            );
            openWhatsApp();
        } finally {
            setSending(false);
        }
    };

    return (
        <Dialog
            open={!!course}
            onOpenChange={(o) => {
                if (!o) onClose();
            }}
        >
            <DialogContent
                data-testid="course-interest-modal"
                className="max-w-md border-gold/25 bg-ink-900 p-8 text-slate-100"
            >
                <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-medium text-slate-50">
                        {course ? course.title : ""}
                    </DialogTitle>
                    <DialogDescription className="text-sm font-light leading-relaxed text-slate-400">
                        Deixe seu nome e um contato — nossa equipe recebe um
                        aviso por e-mail e responde em seguida.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="interest-name"
                            className="eyebrow text-[10px]"
                        >
                            Nome completo
                        </label>
                        <input
                            id="interest-name"
                            data-testid="course-interest-name-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu nome"
                            className="mt-2 w-full rounded-md border border-white/10 bg-ink-800 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold/50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="interest-contact"
                            className="eyebrow text-[10px]"
                        >
                            WhatsApp ou e-mail
                        </label>
                        <input
                            id="interest-contact"
                            data-testid="course-interest-contact-input"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="(85) 9 9999-9999 ou voce@email.com"
                            className="mt-2 w-full rounded-md border border-white/10 bg-ink-800 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold/50 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        data-testid="course-interest-submit-button"
                        disabled={sending}
                        className="gold-btn w-full rounded-full px-6 py-3.5 text-sm font-semibold disabled:opacity-60"
                    >
                        {sending ? "Enviando..." : "Confirmar interesse"}
                    </button>
                    <a
                        href={course ? course.whatsapp : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="course-interest-whatsapp-link"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 text-xs text-slate-400 transition-colors hover:text-gold-light"
                    >
                        <MessageCircle size={13} />
                        Prefere só falar no WhatsApp? Toque aqui
                    </a>
                </form>
            </DialogContent>
        </Dialog>
    );
}
