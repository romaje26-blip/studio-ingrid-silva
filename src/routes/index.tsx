import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import noiva from "@/assets/noiva.jpg";
import cilios from "@/assets/cilios.jpg.asset.json";
import fioAFio from "@/assets/fio-a-fio.jpg";
import volumeMegaLuxo from "@/assets/volume-mega-luxo.jpg";
import volumeEgipcio from "@/assets/volume-egipcio.jpg";
import ingridAtendimento from "@/assets/ingrid-atendimento.jpg.asset.json";
import { CTA, LinkCTA } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Ingrid Silva — Extensão de Cílios e Sobrancelhas em São Paulo" },
      { name: "description", content: "Extensão de cílios e Brow Lamination em São Paulo/SP, com atendimento personalizado e acolhedor. Agende pelo WhatsApp." },
      { property: "og:title", content: "Studio Ingrid Silva — Cílios e Sobrancelhas" },
      { property: "og:description", content: "Beleza personalizada para realçar o seu olhar. São Paulo/SP." },
    ],
  }),
  component: Index,
});

const highlights = [
  { name: "Extensão Fio a Fio", text: "Naturalidade e definição para a rotina." },
  { name: "Volume Russo", text: "Densidade macia para um olhar marcante." },
  { name: "Brow Lamination", text: "Sobrancelhas alinhadas e com aspecto mais cheio." },
];

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">Cílios & Sobrancelhas · São Paulo</p>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
            O seu olhar, <em className="text-accent">com a sua essência.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            No Studio Ingrid Silva, cada atendimento é pensado para realçar a sua beleza, com cuidado nos detalhes e respeito ao seu estilo.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTA>Agende agora pelo WhatsApp</CTA>
            <LinkCTA to="/servicos">Conheça nossos serviços</LinkCTA>
          </div>
        </div>
        <img src={hero} alt="Olhar com extensão de cílios de efeito natural" width={1280} height={1600} className="aspect-[4/5] w-full object-cover" />
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="gold-rule mx-auto" />
          <h2 className="mt-6 text-4xl md:text-5xl">Um espaço dedicado ao seu momento</h2>
          <p className="mt-6 text-muted-foreground">
            Somos um studio especializado em extensão de cílios e cuidados com sobrancelhas. Aqui, você é ouvida com atenção para encontrarmos juntas o estilo que combina com a sua personalidade e a sua rotina.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="relative">
          <img
            src={cilios.url}
            alt="Profissional do Studio Ingrid Silva em sessão de extensão de cílios, segurando pinças douradas"
            width={1376}
            height={768}
            loading="lazy"
            className="h-[48vh] max-h-[560px] min-h-[300px] w-full object-cover object-[center_28%] md:h-[56vh]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/25 to-transparent" />
          <div className="absolute bottom-5 left-4 flex items-center gap-3 md:bottom-9 md:left-10 md:gap-4">
            <span className="gold-rule" />
            <p className="caption-shadow font-display text-2xl leading-none text-primary-foreground md:text-4xl">
              Studio <span className="italic">Ingrid Silva</span>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-6xl px-5">
          <div className="text-center">
            <p className="eyebrow">Mais procurados</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Serviços em destaque</h2>
          </div>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.name} className="bg-background p-10">
                <h3 className="text-2xl">{h.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><LinkCTA to="/servicos">Ver todos os serviços</LinkCTA></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <img src={studio} alt="Detalhes do atendimento no studio" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div>
          <p className="eyebrow">Nosso Estilo</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Beleza personalizada, sem excessos</h2>
          <p className="mt-6 text-muted-foreground">
            Acreditamos que cada olhar é único. Por isso, o desenho, a curvatura e o volume são escolhidos a partir de uma conversa sobre o que você deseja e do que valoriza os seus traços.
          </p>
          <p className="mt-4 text-muted-foreground">
            Acompanhamos as tendências com um olhar atento à elegância e ao conforto, para que você se sinta bem consigo mesma todos os dias.
          </p>
          <div className="mt-8"><LinkCTA to="/sobre">Conheça nosso estilo</LinkCTA></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">Transformações</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Descubra sua próxima transformação</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Resultados reais de clientes, compartilhados com autorização.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="aspect-square overflow-hidden">
            <img
              src={cilios.url}
              alt="Sessão de extensão de cílios em andamento no Studio Ingrid Silva"
              width={768}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <figure className="relative aspect-square overflow-hidden">
            <img
              src={fioAFio}
              alt="Olhar com extensão de cílios Fio a Fio, efeito natural"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent px-3 pb-3 pt-8 font-display text-lg text-primary-foreground">
              Extensão Fio a Fio
            </figcaption>
          </figure>
          <figure className="relative aspect-square overflow-hidden">
            <img
              src={volumeMegaLuxo}
              alt="Olhar com extensão de cílios Volume Mega Luxo, efeito denso e marcante"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent px-3 pb-3 pt-8 font-display text-lg text-primary-foreground">
              Volume Mega Luxo
            </figcaption>
          </figure>
          <figure className="relative aspect-square overflow-hidden">
            <img
              src={volumeEgipcio}
              alt="Olhar de modelo morena com extensão de cílios Volume Egípcio, efeito híbrido texturizado"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent px-3 pb-3 pt-8 font-display text-lg text-primary-foreground">
              Volume Egípcio / Híbrido
            </figcaption>
          </figure>
        </div>
        <div className="mt-10 text-center"><CTA href="https://instagram.com/studioingridsilvaoficial" variant="outline">Veja mais no Instagram</CTA></div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow">Depoimentos das Clientes</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Quem já viveu a experiência</h2>
          <p className="mt-6 text-muted-foreground">Em breve, compartilharemos aqui avaliações reais de nossas clientes.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div className="md:order-2">
          <img src={noiva} alt="Noiva com cílios e maquiagem delicados" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Noivas & Ocasiões especiais</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Para o dia em que cada detalhe importa</h2>
          <p className="mt-6 text-muted-foreground">
            Preparamos experiências pensadas para noivas e momentos especiais, com planejamento antecipado para que o seu olhar esteja do jeito que você sonhou.
          </p>
          <div className="mt-8"><CTA>Consulte nossos pacotes para noivas</CTA></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="eyebrow">Agenda</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Como marcar o seu horário</h2>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            ["Escolha o serviço", "Conheça as opções e veja qual combina com você."],
            ["Fale com o Studio", "Envie uma mensagem pelo WhatsApp com o serviço desejado."],
            ["Confirme o horário", "Combinamos juntas o melhor dia e horário disponível."],
          ].map(([t, d], i) => (
            <li key={t} className="border-t border-accent pt-6">
              <span className="font-display text-4xl text-accent">0{i + 1}</span>
              <h3 className="mt-2 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 py-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <figure className="relative overflow-hidden">
            <img
              src={ingridAtendimento.url}
              alt="Ingrid Silva aplicando extensão de cílios em cliente no studio"
              width={960}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <figcaption className="absolute bottom-4 left-4 flex items-center gap-3 bg-background/85 px-4 py-2">
              <span className="gold-rule" />
              <span className="font-display text-lg leading-none">Ingrid Silva</span>
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">Nossa Equipe</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Ingrid Silva</h2>
            <p className="mt-6 text-muted-foreground">
              Há 6 anos atuando com excelência na área de Cílios e Sobrancelhas, Ingrid conduz cada atendimento com técnica, escuta e cuidado nos detalhes — para que o resultado valorize o seu olhar do seu jeito.
            </p>
            <h3 className="mt-10 text-2xl">Certificações e Diferenciais Técnicos</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Certificado curso UNIA TE e avançado",
                "Tendências avançadas",
              ].map((c) => (
                <li key={c} className="flex items-start gap-3 border-t border-accent pt-4 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10"><CTA>Agende com a Ingrid</CTA></div>
          </div>
        </div>
      </section>


      <section className="mx-auto mt-24 max-w-3xl px-5 text-center">
        <h2 className="text-4xl md:text-6xl">Quero transformar <em className="text-accent">meu visual</em></h2>
        <p className="mt-6 text-muted-foreground">Estamos prontas para receber você com carinho e atenção.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CTA>Agende sua experiência agora</CTA>
          <LinkCTA to="/contato">Fale com o Studio</LinkCTA>
        </div>
      </section>
    </>
  );
}
