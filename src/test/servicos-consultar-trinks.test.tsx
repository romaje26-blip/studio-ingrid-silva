import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TRINKS } from "@/components/site";
import { brows, lashes } from "@/lib/services";
import { Route } from "@/routes/servicos";

const Servicos = Route.options.component as unknown as () => React.ReactElement;
const TOTAL = lashes.length + brows.length;

describe("botões Consultar disponibilidade", () => {
  it("apontam para a página do studio na Trinks", () => {
    render(<Servicos />);
    const buttons = screen.getAllByText("Consultar disponibilidade");
    expect(buttons).toHaveLength(TOTAL);
    for (const button of buttons) {
      expect(button.closest("a")?.getAttribute("href")).toBe("https://www.trinks.com/studioingridsilva");
    }
  });

  it("abrem em nova aba", () => {
    render(<Servicos />);
    for (const button of screen.getAllByText("Consultar disponibilidade")) {
      const link = button.closest("a");
      expect(link?.getAttribute("target")).toBe("_blank");
      expect(link?.getAttribute("rel")).toContain("noopener");
    }
  });

  it("mantêm o botão de WhatsApp da página no WhatsApp", () => {
    render(<Servicos />);
    const whatsapp = screen.getByText("Agende agora pelo WhatsApp").closest("a");
    expect(whatsapp?.getAttribute("href")).toContain("wa.me/5511948190515");
  });

  it("usam o mesmo endereço dos botões da Início e do cabeçalho", () => {
    render(<Servicos />);
    for (const button of screen.getAllByText("Consultar disponibilidade")) {
      expect(button.closest("a")?.getAttribute("href")).toBe(TRINKS);
    }
  });
});
