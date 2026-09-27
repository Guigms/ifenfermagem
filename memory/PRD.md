# PRD — IF Enfermagem (Dr. Ismael Frota)

## Problema original
Desenvolver a página da empresa "IF Enfermagem", consultoria especializada na área da saúde em Maracanaú, Ceará, com as informações do perfil Google (endereço, telefone, horário, avaliações, depoimentos, serviços) e a logo fornecida. O site deve ser elegante e sofisticado — o cliente pediu "o melhor site de todos".

## Arquitetura
- Frontend: React (CRA) + Tailwind + Framer Motion + Lenis (smooth scroll) — landing page de página única.
- Backend: FastAPI template mantido intacto (health check /api/) — sem necessidade de dados dinâmicos.
- Assets: logo oficial (public/logo.png), favicon SVG (monograma IF dourado), fotos Unsplash tratadas.

## Direção de arte
"Quiet Luxury Clinical" — obsidiana (#050811/#070B14) + dourado champagne (#C5A059/#DFBA73), serifada Cormorant Garamond para títulos, Plus Jakarta Sans corpo, JetBrains Mono para overlines. Grain overlay, glows ambiente, hairlines douradas.

## Requisitos essenciais (estáticos, do perfil Google)
- Nome: IF Enfermagem — Dr. Ismael Frota; avaliação 5.0 (7 avaliações)
- Endereço: EDIF 2 - Av. Yolanda Pontes Vidal Queiroz, 57 - SL 218 - Timbó, Maracanaú - CE, 61936-000
- Telefone/WhatsApp: (85) 98888-5910
- Horário: abre segunda às 09:00
- Serviços (6): Atendimentos de Enfermagem, Consultoria em Saúde, Cursos e Capacitação, Palestras e Eventos, Capacitação Profissional, Atendimento Domiciliar
- Depoimentos reais: Ismael Frota e Maria Taíssa
- CTAs: WhatsApp (wa.me/5585988885910), ligar, rotas no Maps

## Implementado (27/09/2026)
1. Header fixo glass com logo oficial, nav âncoras, telefone e CTA; menu mobile animado
2. Hero cinético com reveal linha a linha mascarado, parallax na foto, badges 5.0★/localização
3. Marquee editorial lento (serif/mono + losangos dourados)
4. Bento grid com 6 serviços (fotos, hover glow, numeração mono)
5. Seção Sobre (split editorial + quote do Dr. Ismael + 3 pilares)
6. Depoimentos Google (5.0, 7 avaliações, cards verificados, link "ver todos")
7. Contato: endereço + rotas, telefone clicável, horário, mapa embed dark, CTA WhatsApp
8. Footer com watermark IF gigante, links, Instagram, voltar ao topo; botão flutuante WhatsApp
9. Lenis smooth scroll + reveals Framer Motion em todas as seções

## Verificado
- curl backend /api/ OK; frontend 200; logo/favicon 200
- Screenshots desktop 1440 (hero + serviços) e mobile 390 (hero + menu) sem overflow-x

## Backlog / Próximos
- P0: Link real do Instagram (hoje aponta para instagram.com genérico — aguardando @handle do cliente)
- P1: Formulário de agendamento que abre WhatsApp com serviço pré-selecionado
- P1: Fotos reais da clínica/equipe substituindo fotos de banco
- P2: Blog/novidades para clientes; depoimentos extras conforme chegarem no Google
