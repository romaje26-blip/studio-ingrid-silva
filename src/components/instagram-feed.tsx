import { createElement, useEffect } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { CTA, INSTAGRAM } from "./site";

/** Feed ID gerado no behold.so (público). Vazio = mostra só o link do perfil. */
export const BEHOLD_FEED_ID = "";

function BeholdWidget({ feedId }: { feedId: string }) {
  useEffect(() => {
    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) return;
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.appendChild(s);
  }, []);
  return createElement("behold-widget", { "feed-id": feedId });
}

export function InstagramFeed() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div className="text-center">
        <span className="gold-rule mx-auto" />
        <p className="eyebrow mt-6">Siga no Instagram</p>
        <h2 className="mt-4 text-4xl md:text-5xl">@studioingridsilvaoficial</h2>
      </div>
      <div className="mt-12">
        {BEHOLD_FEED_ID ? (
          <ClientOnly fallback={<div className="min-h-48" />}>
            <BeholdWidget feedId={BEHOLD_FEED_ID} />
          </ClientOnly>
        ) : (
          <p className="text-center text-sm text-muted-foreground">Acompanhe nossos trabalhos mais recentes direto no perfil do studio.</p>
        )}
      </div>
      <div className="mt-10 text-center"><CTA href={INSTAGRAM} variant="outline">Veja mais no Instagram</CTA></div>
    </section>
  );
}
