import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CTA, TRINKS } from "@/components/site";

describe("botão Consultar datas e Valores", () => {
  it("aponta para a página da Trinks", () => {
    render(<CTA href={TRINKS}>Consultar datas e Valores</CTA>);
    expect(screen.getByText("Consultar datas e Valores").closest("a")?.getAttribute("href")).toBe(
      "https://www.trinks.com/studioingridsilva",
    );
  });
});
