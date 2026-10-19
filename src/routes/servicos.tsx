import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHeader, TRINKS } from "@/components/site";
import { brows, lashes, type Service } from "@/lib/services";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Studio Ingrid Silva" },
      { name: "description", content: "Extensão de cílios fio a fio, volumes, manutenção, remoção segura e Brow Lamination em São Paulo/SP." },
      { property: "og:title", content: "Serviços — Studio Ingrid Silva" },
      { property: "og:description", content: "Conheça as técnicas de cílios e sobrancelhas do Studio Ingrid Silva." },
    ],
  }),
  component: Servicos,
});

function List({ items, start }: { items: Service[]; start: number }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((s, i) => (
        <article key={s.name} className="grid gap-4 py-10 md:grid-cols-[5rem_1fr_auto] md:items-center">
          <span className="font-display text-3xl text-accent">{String(start + i).padStart(2, "0")}</span>
          <div>
            <h3 className="text-3xl">{s.name}</h3>
            <p className="mt-2 text-muted-foreground">{s.description}</p>
            <p className="mt-2 text-sm italic text-foreground">{s.effect}</p>
          </div>
          <CTA href={TRINKS} variant="outline">Consultar disponibilidade</CTA>
        </article>
      ))}
    </div>
  );
}

function Servicos() {
  return (
    <>
      <PageHeader eyebrow="Serviços" title={<>Encontre o estilo <em className="text-accent">que é seu</em></>} intro="Cada resultado é único e depende das características dos seus fios naturais. Na conversa inicial, indicamos a opção mais adequada para você." />
      <section className="mx-auto max-w-5xl px-5">
        <h2 className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">Cílios</h2>
        <List items={lashes} start={1} />
        <h2 className="mb-6 mt-20 text-sm uppercase tracking-[0.3em] text-muted-foreground">Sobrancelhas</h2>
        <List items={brows} start={10} />
        <div className="mt-20 text-center"><CTA>Agende agora pelo WhatsApp</CTA></div>
      </section>
    </>
  );
}
