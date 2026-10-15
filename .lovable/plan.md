# Foto na seção "Serviços em destaque"

A foto enviada (retrato da profissional com as pinças douradas e o patch branco sob o olho) entra como **faixa larga no alto da seção "Serviços em destaque"**, na página Início, com a legenda **"Studio Ingrid Silva"** sobre a imagem. Antes de ir para o site, a foto será aprimorada por IA para aguentar o tamanho grande sem ficar embaçada.

## Passos

1. **Aprimorar a foto.** Partir da imagem enviada e gerar uma versão em alta definição, com mais nitidez e riqueza de detalhes no cabelo, na pele, no tecido branco e no metal dourado das pinças — mantendo a mesma pessoa, a mesma pose e a mesma cena. Também será criada uma versão em formato horizontal (faixa larga), com a profissional centralizada e o fundo neutro prolongado para os lados, para preencher a faixa sem cortar o rosto.

2. **Publicar a imagem.** A versão aprimorada vira um arquivo de imagem do site (armazenado no CDN, sem deixar o arquivo pesado dentro do projeto), pronta para ser usada nas páginas.

3. **Montar a faixa na home.** No topo da seção "Serviços em destaque" (aquela que hoje começa com "Mais procurados" e os três cartões), entra a foto em faixa larga, de borda a borda, com altura generosa no celular e um pouco menor no computador. Sobre ela:
   - a legenda **"Studio Ingrid Silva"** em fonte serifada, com o sobrenome em itálico e um filete dourado ao lado, no canto inferior esquerdo;
   - um leve escurecimento atrás do texto para garantir leitura em qualquer parte da foto.

4. **Preservar o resto da seção.** O título "Serviços em destaque", os três cartões (Fio a Fio, Volume Russo, Brow Lamination) e o botão "Ver todos os serviços" continuam exatamente como estão, apenas abaixo da nova faixa.

5. **Conferir.** Verificar que a página carrega sem erro, que a foto aparece nítida e sem cortes estranhos no rosto, e que a legenda está legível tanto no celular quanto no computador.

## Resultado

A seção "Serviços em destaque" da página Início passa a abrir com a sua foto em faixa larga, identificada com o nome do studio, e os serviços logo abaixo.

## Detalhes técnicos

- Edição da imagem com `imagegen--edit_image` a partir de `user-uploads://Cilios.jpg` (236×354 px, retrato): uma passada de aprimoramento de detalhes e uma versão re-enquadrada em faixa larga (1600×900), conferida com visão por IA antes de usar.
- Publicação com `lovable-assets create` gerando `src/assets/cilios.jpg.asset.json`; o binário não fica no repositório e o import usa `asset.url`.
- Em `src/routes/index.tsx`, dentro da seção `Serviços em destaque`, um `<img>` de largura total com `object-cover` e altura em `clamp`/classes responsivas, sobreposto por um gradiente sutil e a legenda em `font-display` com a classe `gold-rule`.
- Sem alteração em `src/lib/services.ts`, nos demais trechos da home ou em outras rotas; sem mudança de textos e preços já definidos.
