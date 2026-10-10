import { createFileRoute } from "@tanstack/react-router";
import studio from "@/assets/studio.jpg";
import { CTA, PageHeader } from "@/components/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Studio Ingrid Silva" },
      { name: "description", content: "Conheça a história e a proposta do Studio Ingrid Silva: cuidado nos detalhes e atendimento personalizado em São Paulo." },
      { property: "og:title", content: "Sobre o Studio Ingrid Silva" },
      { property: "og:description", content: "Dedicação à beleza, aos detalhes e a uma experiência acolhedora." },
    ],
  }),
  component: Sobre,
});

const values = [
  ["Cuidado nos detalhes", "Do desenho à finalização, cada etapa recebe atenção."],
  ["Atendimento personalizado", "Ouvimos você para criar um resultado que combine com o seu estilo."],
  ["Olhar para as tendências", "Buscamos referências atuais sem perder a elegância atemporal."],
  ["Experiência acolhedora", "Um momento de pausa e autocuidado, em um ambiente tranquilo."],
];

function Sobre() {
  return (
    <>
      <PageHeader eyebrow="Sobre o Studio" title={<>Beleza feita <em className="text-accent">com dedicação</em></>} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <img src={studio} alt="Ambiente e materiais do studio" width={1280} height={960} className="aspect-[4/3] w-full object-cover" />
        <div className="space-y-5 text-muted-foreground">
          <p>O Studio Ingrid Silva nasceu do desejo de oferecer um atendimento de beleza que vai além da técnica: um espaço onde cada pessoa se sinta acolhida, ouvida e valorizada.</p>
          <p>Nossa especialidade é a extensão de cílios e os cuidados com sobrancelhas. Trabalhamos com dedicação para realçar a expressão de cada cliente, respeitando sua individualidade e seu jeito de ser.</p>
          <p>Mais do que transformar o visual, queremos que você saia daqui se sentindo bem consigo mesma.</p>
        </div>
      </section>
      <section className="mx-auto mt-24 grid max-w-6xl gap-px bg-border px-5 sm:grid-cols-2">
        {values.map(([t, d]) => (
          <div key={t} className="bg-background p-10">
            <span className="gold-rule" />
            <h3 className="mt-5 text-2xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <div className="mt-20 text-center"><CTA>Agende sua experiência agora</CTA></div>
    </>
  );
}
