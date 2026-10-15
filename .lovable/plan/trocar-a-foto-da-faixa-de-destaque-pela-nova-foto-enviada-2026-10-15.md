# Trocar a foto da faixa de destaque pela nova foto enviada

A foto que você enviou (Ingrid aplicando a extensão, com a luminária meia-lua sobre a cliente) entra no lugar da imagem grande que abre a seção "Serviços em destaque". A faixa fica mais alta, para mostrar bem o rosto da cliente e as mãos da Ingrid, e o nome "Studio Ingrid Silva" continua escrito sobre a foto.

## O que muda

- A nova foto é publicada como arquivo do site (fora do código, servida pela CDN) e passa a ser a imagem do topo da seção "Serviços em destaque", na página Início.
- A faixa sobe de altura: hoje ocupa cerca de metade da tela; passa a ocupar cerca de 70% no computador e um pouco menos no celular, com o recorte ajustado para que rosto e mãos não sejam cortados.
- O texto "Studio Ingrid Silva" e o sombreado por baixo permanecem exatamente como estão.
- A descrição da imagem (usada por leitores de tela e pelo Google) é reescrita para a cena real da foto.
- A foto anterior continua no primeiro quadro de "Transformações" — nada é apagado.

## Como será conferido

- Abertura da página no computador e no celular, com a foto carregada e o nome legível sobre ela.
- Ajuste fino do recorte (o ponto da foto que fica no centro da faixa) até rosto e mãos aparecerem inteiros.
- Confirmação de que o site continuou compilando sem erros.

## Detalhes técnicos

- Publicação: `lovable-assets create --file /mnt/user-uploads/4.jpeg --filename atendimento-02.jpg > src/assets/atendimento-02.jpg.asset.json`.
- `src/routes/index.tsx`: novo import `atendimento02` do ponteiro `.asset.json`; na faixa da seção "Serviços em destaque" (hoje `src={cilios.url}`, linhas 60-66) troca-se `src` para `atendimento02.url` e o `alt` para a cena real; `width`/`height` passam a 960/1280.
- Altura da faixa: `h-[48vh] max-h-[560px] min-h-[300px] md:h-[56vh]` passa a `h-[62vh] max-h-[760px] min-h-[360px] md:h-[70vh]`, com `object-cover` e foco vertical (`object-[center_35%]`) ajustado após conferência no navegador.
- Gradiente `from-primary/80 via-primary/25` e a legenda com `caption-shadow` ficam intactos.
- Verificação: `/tmp/observability/build-errors.log` e Playwright em 1280x900 e 390x844.
