import { createElement, useEffect } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { CTA, INSTAGRAM } from "./site";
import cilios from "@/assets/cilios.jpg.asset.json";
import fioAFio from "@/assets/fio-a-fio.jpg";
import volumeMegaLuxo from "@/assets/volume-mega-luxo.jpg";
import volumeEgipcio from "@/assets/volume-egipcio.jpg";
import studio from "@/assets/studio.jpg";
import noiva from "@/assets/noiva.jpg";

/**
 * Feed ID gerado no behold.so (público). Vazio = mostra a grade de fotos
 * manuais abaixo; quando o código for preenchido, o feed automático assume.
 */
export const BEHOLD_FEED_ID = "";

/** Amostra do trabalho do studio, exibida enquanto o feed automático não está ligado. */
const samplePhotos = [
  { src: fioAFio, alt: "Olhar com extensão de cílios Fio a Fio, efeito natural" },
  { src: volumeMegaLuxo, alt: "Olhar com extensão de cílios Volume Mega Luxo, efeito denso e marcante" },
  { src: cilios.url, alt: "Sessão de extensão de cílios em andamento no Studio Ingrid Silva" },
  { src: volumeEgipcio, alt: "Olhar de modelo morena com extensão de cílios Volume Egípcio, efeito híbrido texturizado" },
  { src: studio, alt: "Detalhes do atendimento no Studio Ingrid Silva" },
  { src: noiva, alt: "Noiva com cílios e maquiagem delicados" },
];

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
          <div className="grid grid-cols-3 gap-px bg-border md:grid-cols-6">
            {samplePhotos.map((p) => (
              <a
                key={p.src}
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o perfil do Studio no Instagram"
                className="block aspect-square overflow-hidden"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="mt-10 text-center"><CTA href={INSTAGRAM} variant="outline">Veja mais no Instagram</CTA></div>
    </section>
  );
}
