import { createElement, useEffect } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { CTA, INSTAGRAM } from "./site";
import insta01 from "@/assets/insta-01.jpg.asset.json";
import insta02 from "@/assets/insta-02.jpg.asset.json";
import insta03 from "@/assets/insta-03.jpg.asset.json";

const posts = [
  { src: insta01.url, alt: "Ingrid Silva, Artista Destaque no Symposium Porto Lash", pos: "object-[center_40%]" },
  { src: insta02.url, alt: "Ingrid Silva em atendimento de sobrancelha no studio", pos: "object-center" },
  { src: insta03.url, alt: "Ingrid Silva com o Certificado de Reconhecimento CNPB", pos: "object-top" },
];

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
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {posts.map((p) => (
              <a
                key={p.src}
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.alt} — ver no Instagram`}
                className="group relative block aspect-square overflow-hidden"
              >
                <img src={p.src} alt={p.alt} loading="lazy" className={`h-full w-full object-cover ${p.pos} transition-transform duration-500 group-hover:scale-105`} />
                <span className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors group-hover:bg-primary/40">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-primary-foreground opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={1.6} aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" className="fill-primary-foreground" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="mt-10 text-center"><CTA href={INSTAGRAM} variant="outline">Veja mais no Instagram</CTA></div>
    </section>
  );
}
