export const WHATSAPP_URL =
    "https://wa.me/5585988885910?text=Ol%C3%A1%2C%20Dr.%20Ismael%20Frota!%20Gostaria%20de%20agendar%20um%20atendimento%20ou%20consultoria.";

export const PHONE_DISPLAY = "(85) 98888-5910";
export const PHONE_TEL = "tel:+5585988885910";

export const ADDRESS =
    "EDIF 2 — Av. Yolanda Pontes Vidal Queiroz, 57 — SL 218 — Timbó, Maracanaú — CE, 61936-000";

export const MAPS_DIR_URL =
    "https://www.google.com/maps/dir/?api=1&destination=IF+Enfermagem,+Av.+Yolanda+Pontes+Vidal+Queiroz,+57+-+Timb%C3%B3,+Maracana%C3%BA+-+CE,+61936-000";

export const MAPS_EMBED_URL =
    "https://www.google.com/maps?q=Av.+Yolanda+Pontes+Vidal+Queiroz,+57+-+Timb%C3%B3,+Maracana%C3%BA+-+CE,+61936-000&output=embed";

export const GOOGLE_REVIEWS_URL =
    "https://www.google.com/search?q=IF+Enfermagem+Maracana%C3%BA+avalia%C3%A7%C3%B5es";

export const INSTAGRAM_URL = "https://www.instagram.com/";

export const IMAGES = {
    heroDoctor:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1600&auto=format&fit=crop",
    caringHands:
        "https://images.unsplash.com/photo-1749065311606-fa115df115af?q=80&w=1600&auto=format&fit=crop",
    nurseSteth:
        "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=1600&auto=format&fit=crop",
    nurseElderly:
        "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?q=80&w=1600&auto=format&fit=crop",
    seminar:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop",
    medProfessionals:
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1600&auto=format&fit=crop",
    consultation:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1600&auto=format&fit=crop",
    conference:
        "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?q=80&w=1600&auto=format&fit=crop",
};

export const SERVICES = [
    {
        id: "atendimentos-enfermagem",
        number: "01",
        title: "Atendimentos de Enfermagem",
        desc: "Cuidado especializado e humanizado, conduzido com rigor clínico e atenção a cada detalhe do paciente.",
        image: IMAGES.nurseSteth,
    },
    {
        id: "consultoria-saude",
        number: "02",
        title: "Consultoria em Saúde",
        desc: "Orientação estratégica para serviços de saúde e enfermagem que buscam qualidade e excelência.",
        image: IMAGES.consultation,
    },
    {
        id: "cursos-capacitacao",
        number: "03",
        title: "Cursos e Capacitação",
        desc: "Formação voltada para a área da saúde, com conteúdo prático, atualizado e certificador.",
        image: IMAGES.seminar,
    },
    {
        id: "palestras-eventos",
        number: "04",
        title: "Palestras e Eventos",
        desc: "Palestrante com conteúdo técnico e inspirador para eventos, equipes e instituições.",
        image: IMAGES.medProfessionals,
    },
    {
        id: "capacitacao-profissional",
        number: "05",
        title: "Capacitação Profissional",
        desc: "Desenvolvimento continuado de profissionais da saúde e estudantes.",
        image: IMAGES.conference,
    },
    {
        id: "atendimento-domiciliar",
        number: "06",
        title: "Atendimento Domiciliar",
        desc: "Home care personalizado, com acolhimento e atenção integral ao paciente.",
        image: IMAGES.nurseElderly,
    },
];

const waCourse = (title) =>
    `https://wa.me/5585988885910?text=${encodeURIComponent(
        `Olá! Tenho interesse no curso "${title}" e gostaria de me inscrever.`,
    )}`;

export const COURSES = [
    {
        id: "praticas-injetaveis",
        number: "01",
        title: "Práticas Injetáveis",
        desc: "Curso destinado a desenvolver competências e habilidades relacionadas a procedimentos injetáveis. Neste curso você desenvolverá suas habilidades para rotinas injetáveis com mais segurança e muita destreza técnica.",
        image: "https://images.unsplash.com/photo-1542884841-9f546e727bca?q=80&w=1200&auto=format&fit=crop",
        whatsapp: waCourse("Práticas Injetáveis"),
    },
    {
        id: "ventilacao-mecanica",
        number: "02",
        title: "Ventilação Mecânica da Teoria a Prática",
        desc: "Um curso planejado para ajudar acadêmicos e profissionais da saúde descomplicando o entendimento e o manejo prático para aqueles que apresentam atribuição no manejo da ventilação mecânica.",
        image: "https://images.unsplash.com/photo-1676281050264-178eff38874a?q=80&w=1200&auto=format&fit=crop",
        whatsapp: waCourse("Ventilação Mecânica da Teoria a Prática"),
    },
    {
        id: "interpretacao-ecg",
        number: "03",
        title: "Interpretação de ECG para Enfermagem do Básico ao Avançado",
        desc: "Curso destinado a desenvolver competências relacionadas a execução e interpretação do exame ECG. Neste curso você desenvolverá seu raciocínio clínico avançado na interpretação do exame e suas habilidades procedurais na aplicação da técnica do exame ECG.",
        image: "https://images.unsplash.com/photo-1622115585848-1d5b6e8af4e4?q=80&w=1200&auto=format&fit=crop",
        whatsapp: waCourse(
            "Interpretação de ECG para Enfermagem do Básico ao Avançado",
        ),
    },
    {
        id: "interpretacao-laboratorial",
        number: "04",
        title: "Interpretação de Exames Laboratoriais",
        desc: "Curso destinado a desenvolver competências relacionadas a execução e interpretação de exames laborais. Neste curso você desenvolverá seu raciocínio clínico avançado na interpretação de exames laborais.",
        image: "https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?q=80&w=1200&auto=format&fit=crop",
        whatsapp: waCourse("Interpretação de Exames Laboratoriais"),
    },
];

export const ESSENCE = {
    missao:
        "Promover a qualificação de profissionais e estudantes da saúde para o desenvolvimento de uma assistência e gerenciamento, proporcionando a melhoria no atendimento ao paciente.",
    visao: "Ser reconhecida em território estadual como uma empresa de serviços educacionais e de consultoria em saúde.",
    valores: [
        "Ética",
        "Humanização no atendimento",
        "Valorização das pessoas",
        "Satisfação em atender bem",
        "Responsabilidade social",
    ],
};

export const REVIEWS = [
    {
        id: "ismael-frota",
        author: "Ismael Frota",
        quote: "Atendimento com excelência em tudo que faz.",
    },
    {
        id: "maria-taissa",
        author: "Maria Taíssa",
        quote: "Minha experiência foi simplesmente incrível!",
    },
];

export const MARQUEE_ITEMS = [
    "Cuidado Humanizado",
    "Consultoria Estratégica em Saúde",
    "Rigor Técnico",
    "Capacitação Continuada",
    "Atendimento Domiciliar",
    "Maracanaú & Região",
];
