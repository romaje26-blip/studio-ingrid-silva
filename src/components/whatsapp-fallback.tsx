import { useEffect, useState } from "react";

type Fallback = { href: string; phone: string; message: string } | null;

let listener: ((value: NonNullable<Fallback>) => void) | null = null;

/** Asks the mounted <WhatsAppFallback /> panel to appear (used by externalClick). */
export function requestWhatsAppFallback(value: NonNullable<Fallback>) {
  listener?.(value);
}

/**
 * Shown when a booking click cannot open WhatsApp — an embedded preview blocks
 * new tabs and WhatsApp itself refuses to render inside a frame. Gives the
 * visitor the number and a ready-to-send message instead of a dead click.
 */
export function WhatsAppFallback() {
  const [state, setState] = useState<Fallback>(null);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    listener = (value) => {
      setState(value);
      setCopied("");
    };
    return () => {
      listener = null;
    };
  }, []);

  if (!state) return null;

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(label);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Falar com o Studio Ingrid Silva"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-md border border-border bg-background p-6 shadow-2xl md:inset-x-auto md:right-6 md:w-[22rem]"
    >
      <p className="eyebrow">Studio Ingrid Silva</p>
      <h2 className="mt-3 font-display text-2xl leading-tight">O WhatsApp não abriu aqui</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Seu navegador bloqueou a nova aba. Copie o número e a mensagem e envie pelo WhatsApp.
      </p>
      <div className="mt-5 flex items-baseline justify-between gap-3 border-t border-border pt-4">
        <span className="font-display text-xl">{state.phone}</span>
        <button
          type="button"
          onClick={() => copy(state.phone, "número")}
          className="text-[0.65rem] uppercase tracking-[0.2em] text-accent hover:opacity-70"
        >
          {copied === "número" ? "Copiado!" : "Copiar número"}
        </button>
      </div>
      <button
        type="button"
        onClick={() => copy(state.message, "mensagem")}
        className="mt-3 w-full bg-primary px-4 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent"
      >
        {copied === "mensagem" ? "Mensagem copiada!" : "Copiar mensagem pronta"}
      </button>
      <a
        href={state.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block w-full border border-primary px-4 py-3 text-center text-[0.65rem] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Tentar abrir de novo
      </a>
      <button
        type="button"
        onClick={() => setState(null)}
        className="mt-3 block w-full text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
      >
        Fechar
      </button>
    </div>
  );
}
