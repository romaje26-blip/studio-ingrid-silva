# Monograma no cabeçalho do site

## O que vai mudar

O cabeçalho (a barra fixa no topo, que hoje traz só o nome escrito "Studio Ingrid Silva") passa a mostrar o símbolo **IS** do monograma ao lado do nome escrito, em **marrom escuro** — a cor principal do site.

No computador: símbolo IS + "Studio Ingrid Silva" no lado esquerdo, menu e botão "Agendar" como estão hoje.
No celular: símbolo IS menor, ao lado do nome escrito, sem apertar o botão "Agendar" e sem quebrar a linha de menu centralizada abaixo.

O rodapé continua igual (monograma creme sobre o marrom).

## Como será feito

1. **Gerar o símbolo isolado na cor certa.** O monograma que está no site hoje é creme, feito para o rodapé escuro — sobre o fundo claro do cabeçalho ele ficaria invisível. Será criada uma nova imagem: só o símbolo IS (sem o nome escrito nem a linha "Lash Designer"), em marrom escuro, com fundo transparente, a partir do arquivo IS_monograma.pdf em alta resolução.
2. **Publicar a imagem** no armazenamento de mídia do projeto (mesmo sistema usado pelas fotos atuais), gerando o ponteiro `src/assets/monograma-is-escuro.png.asset.json`.
3. **Ajustar o cabeçalho** em `src/components/site.tsx`: o nome escrito ganha o símbolo à esquerda, com tamanho responsivo (pequeno no celular, um pouco maior no computador) e alinhado verticalmente com o texto. A altura total da barra do topo permanece a mesma, para nada se mover ao rolar a página.
4. **Conferir nos dois tamanhos de tela**: abrir o site e fotografar o cabeçalho em 1280 px (computador) e 390 px (celular), verificando se o símbolo aparece nítido, se o nome continua legível, se o botão "Agendar" não foi empurrado e se a linha de menu do celular continua centralizada.
5. **Registrar no roadmap** do projeto.

## Detalhes técnicos

- **Cores usadas**: marrom escuro `oklch(0.33 0.015 55)` (token `--primary`) para o símbolo; nada é hardcoded em classe de cor.
- **Recorte do símbolo**: o PDF é renderizado em 600 dpi (página 2, arte branca sobre preto, que serve de máscara perfeita). A faixa de linhas vazias que separa o símbolo IS do nome "INGRID SILVA" é detectada automaticamente e usada como corte, excluindo também o texto "FASHION BOUTIQUE" que existe escondido no PDF.
- **Nova imagem**: PNG com canal alfa (fundo transparente), tintada na cor do tema; nome do ponteiro `monograma-is-escuro.png.asset.json`. Se o PDF deixar de estar acessível, o mesmo resultado sai recolorindo o canal alfa do asset creme já publicado.
- **Acessibilidade**: a imagem do cabeçalho entra como decoração (`alt=""`), porque o nome escrito já está logo ao lado e não deve ser lido duas vezes por leitores de tela.
- **Arquivos tocados**: `src/components/site.tsx` (função `Header`), um novo ponteiro em `src/assets/`, `roadmap.md`.
- **Verificação**: `build-errors.log` sem erros, teste visual do cabeçalho nos dois formatos, e o monograma do rodapé continua funcionando.
