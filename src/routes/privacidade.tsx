import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, PageHeader } from "@/components/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Studio Ingrid Silva" },
      { name: "description", content: "Como o Studio Ingrid Silva trata as informações recebidas pelos canais de contato." },
      { property: "og:title", content: "Política de Privacidade — Studio Ingrid Silva" },
      { property: "og:description", content: "Informações sobre dados pessoais e direitos das pessoas titulares." },
    ],
  }),
  component: Privacidade,
});

const sections = [
  ["Informações que podemos receber", "Ao entrar em contato pelo WhatsApp, e-mail ou Instagram, você pode nos enviar dados como nome, telefone, e-mail e informações sobre o serviço de interesse."],
  ["Para que usamos essas informações", "Utilizamos esses dados para responder às suas mensagens, organizar agendamentos e prestar o atendimento solicitado."],
  ["Como tratamos os dados", "Os dados são usados apenas para as finalidades descritas acima. As práticas específicas de armazenamento e compartilhamento serão detalhadas após validação pelo Studio."],
  ["Seus direitos", "Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar acesso, correção ou exclusão dos seus dados pessoais, além de informações sobre o seu uso."],
  ["Contato", `Para dúvidas ou solicitações sobre seus dados, escreva para ${EMAIL}.`],
];

function Privacidade() {
  return (
    <>
      <PageHeader eyebrow="Documento" title="Política de Privacidade" intro="Texto em versão preliminar, sujeito à validação do Studio antes da publicação." />
      <section className="mx-auto max-w-2xl space-y-10 px-5">
        {sections.map(([t, d]) => (
          <div key={t}>
            <h2 className="text-2xl">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
