import { createFileRoute, Link } from "@tanstack/react-router";
import { CTA, EMAIL, externalClick, INSTAGRAM, PageHeader, WHATSAPP } from "@/components/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Agendamento — Studio Ingrid Silva" },
      { name: "description", content: "Agende seu horário pelo WhatsApp (11) 94819-0515, e-mail ou Instagram @studioingridsilvaoficial." },
      { property: "og:title", content: "Fale com o Studio Ingrid Silva" },
      { property: "og:description", content: "WhatsApp, e-mail e Instagram para agendar o seu atendimento." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const items = [
    ["WhatsApp", "(11) 94819-0515", WHATSAPP],
    ["E-mail", EMAIL, `mailto:${EMAIL}`],
    ["Instagram", "@studioingridsilvaoficial", INSTAGRAM],
  ];
  return (
    <>
      <PageHeader eyebrow="Contato" title={<>Fale com <em className="text-accent">o Studio</em></>} intro="Para solicitar um horário, envie uma mensagem pelo WhatsApp informando o serviço desejado. Responderemos com as opções disponíveis." />
      <section className="mx-auto grid max-w-5xl gap-px bg-border px-5 md:grid-cols-3">
        {items.map(([label, value, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" onClick={externalClick} className="group bg-background p-10 text-center transition-colors hover:bg-muted">
            <p className="eyebrow">{label}</p>
            <p className="mt-4 break-words font-display text-2xl group-hover:text-accent">{value}</p>
          </a>
        ))}
      </section>
      <section className="mx-auto mt-20 max-w-2xl px-5 text-center">
        <h2 className="text-3xl md:text-4xl">Ainda escolhendo?</h2>
        <p className="mt-4 text-muted-foreground">
          Conheça os <Link to="/servicos" className="text-accent underline underline-offset-4">nossos serviços</Link> ou pergunte sobre os pacotes para noivas e ocasiões especiais.
        </p>
        <div className="mt-8"><CTA>Agende agora pelo WhatsApp</CTA></div>
      </section>
    </>
  );
}
