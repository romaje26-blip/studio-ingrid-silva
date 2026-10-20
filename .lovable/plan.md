# Feed do Instagram no site (Behold)

## Onde
Página Início, logo após a seção "Transformações": nova seção "Siga no Instagram" com título, @studioingridsilvaoficial e a grade de posts que se atualiza sozinha. O botão "Veja mais no Instagram" passa para baixo do feed (sai de Transformações para não duplicar).

## O que você precisa fazer (uma vez)
1. Entrar em behold.so e criar conta.
2. Conectar o Instagram @studioingridsilvaoficial (precisa ser conta Profissional/Criador — é só trocar no app do Instagram, grátis).
3. Criar um feed "Widget", escolher grade e copiar o **Feed ID** (código curto que o Behold mostra).
4. Me enviar esse Feed ID.

Enquanto o código não chegar, a seção mostra um aviso discreto com o link para o perfil, sem quebrar a página.

## Visual
Mesmo estilo do site: fundo off-white, título em Cormorant, filete dourado, grade de 3 colunas no celular e 6 no computador, sem bordas arredondadas.

## Detalhes técnicos
- Novo componente `src/components/instagram-feed.tsx`: carrega o script `https://w.behold.so/widget.js` (type module) só no navegador via `useEffect`, renderiza `<behold-widget feed-id="...">` dentro de `<ClientOnly>`.
- Feed ID guardado como constante `BEHOLD_FEED_ID` em `site.tsx` (é público, não é segredo); vazio = mostra o fallback com link.
- Inserir a seção em `src/routes/index.tsx` após Transformações; mover o CTA do Instagram.
- Conferir com Playwright em 1280 e 390.
