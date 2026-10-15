import { Link } from "@tanstack/react-router";
import type { MouseEvent, ReactNode } from "react";

export const WHATSAPP = "https://wa.me/5511948190515?text=" + encodeURIComponent("Olá! Gostaria de agendar um horário no Studio Ingrid Silva.");
export const INSTAGRAM = "https://instagram.com/studioingridsilvaoficial";
export const EMAIL = "Ingridsilva12189@yahoo.com";

/**
 * Opens WhatsApp/Instagram in a new tab. When the browser blocks that tab — a
 * sandboxed preview, an embedded frame or strict popup settings — the current
 * tab navigates instead, so the chat always opens.
 */
export function externalClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.href;
  if (!href || href.startsWith("mailto:")) return;
  e.preventDefault();
  try {
    const opened = window.open(href, "_blank");
    if (opened) {
      opened.opener = null;
      return;
    }
  } catch {
    // the embedding frame refused the new tab
  }
  window.location.href = href;
}

export function ExtLink({ href, className, children, ariaLabel }: { href: string; className?: string; children: ReactNode; ariaLabel?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={externalClick} aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}

export function CTA({ href = WHATSAPP, children, variant = "solid" }: { href?: string; children: ReactNode; variant?: "solid" | "outline" }) {
  const base = "inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.22em] transition-colors duration-300";
  const v = variant === "solid"
    ? "bg-primary text-primary-foreground hover:bg-accent"
    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return <a href={href} target="_blank" rel="noopener noreferrer" onClick={externalClick} className={`${base} ${v}`}>{children}</a>;
}

export function LinkCTA({ to, children }: { to: "/servicos" | "/sobre" | "/contato"; children: ReactNode }) {
  return (
    <Link to={to} className="inline-flex items-center justify-center border border-primary px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
      {children}
    </Link>
  );
}

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="font-display text-xl leading-none sm:text-2xl">
          Studio <span className="italic text-accent">Ingrid Silva</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={externalClick} className="bg-primary px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground hover:bg-accent">
          Agendar
        </a>
      </div>
      <nav className="flex justify-center gap-6 border-t border-border py-2 md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground" activeProps={{ className: "text-foreground" }}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Studio <span className="italic">Ingrid Silva</span></p>
          <p className="mt-3 text-sm opacity-75">Extensão de cílios e cuidados com sobrancelhas · São Paulo/SP</p>
        </div>
        <div className="space-y-2 text-sm opacity-90">
          <p><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={externalClick} className="hover:opacity-70">WhatsApp (11) 94819-0515</a></p>
          <p><a href={`mailto:${EMAIL}`} className="hover:opacity-70">{EMAIL}</a></p>
          <p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" onClick={externalClick} className="hover:opacity-70">@studioingridsilvaoficial</a></p>
        </div>
        <div className="space-y-2 text-sm opacity-90">
          <p><Link to="/servicos" className="hover:opacity-70">Serviços</Link></p>
          <p><Link to="/sobre" className="hover:opacity-70">Sobre o Studio</Link></p>
          <p><Link to="/privacidade" className="hover:opacity-70">Política de Privacidade</Link></p>
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} Studio Ingrid Silva</p>
    </footer>
  );
}

export function WhatsFloat() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={externalClick} aria-label="Agende pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs uppercase tracking-[0.18em] text-accent-foreground shadow-lg transition-transform hover:scale-105">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3Z"/></svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-12 pt-20 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-5xl leading-tight md:text-6xl">{title}</h1>
      {intro && <p className="mx-auto mt-6 max-w-xl text-muted-foreground">{intro}</p>}
    </section>
  );
}
