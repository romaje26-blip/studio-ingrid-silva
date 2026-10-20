# Fotos do Instagram na seção "Siga no Instagram"

## O que muda
Logo abaixo do título "@studioingridsilvaoficial", entra uma grade com as 3 fotos enviadas, no estilo de posts do Instagram:
1. Artista Destaque — Symposium Porto Lash
2. Ingrid em atendimento de sobrancelha
3. Ingrid com o Certificado CNPB

- Fotos em formato quadrado (como no feed), recorte centrado no rosto.
- Ao passar o mouse, a foto escurece levemente e aparece o ícone do Instagram.
- Clicar em qualquer foto abre o perfil @studioingridsilvaoficial em nova aba.
- Grade de 3 colunas no computador e no celular; botão "Veja mais no Instagram" continua embaixo.
- A frase provisória ("Acompanhe nossos trabalhos...") sai. Se depois você enviar o código do Behold, o feed automático pode substituir essas fotos.

## Detalhes técnicos
- Subir as 3 imagens com lovable-assets (`insta-01/02/03.jpg.asset.json`).
- Em `src/components/instagram-feed.tsx`: array de posts com url + alt; quando `BEHOLD_FEED_ID` vazio, renderizar grade de `<a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">` com `aspect-square object-cover`, overlay `bg-primary/40` no hover com ícone.
- Conferir com Playwright em 1280 e 390.
