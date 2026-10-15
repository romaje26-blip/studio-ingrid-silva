# Depoimentos com blocos de exemplo

## Objetivo
Trocar a frase "Em breve, compartilharemos aqui avaliações reais de nossas clientes." da seção **Depoimentos das Clientes** (página Início) por blocos de depoimento/avaliação provisórios, criados por mim e claramente marcados como exemplos, para a Ingrid trocar pelos reais depois.

## O que muda
Arquivo único: `src/routes/index.tsx` (seção dos depoimentos, mantendo o título e a eyebrow atuais).

1. Criar um array de 3 depoimentos de exemplo, cada um com:
   - texto curto (2–3 linhas, tom acolhedor, elogiando resultado e atendimento);
   - nome de cliente fictício em formato iniciais (ex.: "Mariana S.", "Juliana R.", "Camila T.");
   - serviço referenciado (Fio a Fio, Volume Russo, Brow Lamination);
   - nota de 5 estrelas (visual: estrelas douradas com o dourado `accent`).
2. Renderizar os blocos em grade de 3 colunas no computador e 1 coluna no celular, no estilo do site (fundo, bordas e tipografia já usados — sem cores novas fora dos tokens).
3. Abaixo da grade, uma linha discreta em `text-muted-foreground`: "Depoimentos de exemplo — substituir por avaliações reais das clientes." (mantém a regra de só publicar depoimentos reais; a linha sai quando os reais entrarem).

## O que não muda
- Título, eyebrow e fundo `bg-muted` da seção permanecem.
- Nenhuma outra seção ou página é alterada.

## Verificação
- Conferir a seção no computador (1280) e no celular (390) via Playwright.
- Confirmar build sem erros em `/tmp/observability/build-errors.log`.
