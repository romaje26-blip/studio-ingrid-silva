# Botão "Consultar datas e Valores" → Trinks

Na abertura da página Início ("O seu olhar, com a sua essência"), o botão "Consultar datas e Valores" passa a abrir https://www.trinks.com/studioingridsilva em nova aba, em vez do WhatsApp.

- Mesmo visual (marrom, mesmo tamanho).
- Os demais botões "Agendar" e o botão flutuante continuam no WhatsApp.

## Detalhes técnicos
- `src/components/site.tsx`: adicionar constante `TRINKS` e permitir `href` opcional no `CTA` (padrão continua WhatsApp).
- `src/routes/index.tsx` linha 75: `<CTA href={TRINKS}>`.
- Teste curto confirmando que esse botão aponta para o link da Trinks.
