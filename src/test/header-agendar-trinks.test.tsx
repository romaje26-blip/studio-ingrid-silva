import {
  Outlet,
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Header, TRINKS } from "@/components/site";

// The header lives in __root, so it needs a router to render. A minimal tree with
// the four nav paths is enough — no loaders run, nothing is fetched.
const root = createRootRoute({ component: () => (<><Header /><Outlet /></>) });
const at = (path: string) => createRoute({ getParentRoute: () => root, path, component: () => null });
const routeTree = root.addChildren([at("/"), at("/servicos"), at("/sobre"), at("/contato")]);

async function renderHeader() {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  await router.load();
  render(<RouterProvider router={router} />);
  return screen.getByRole("link", { name: "Agendar" });
}

describe("botão Agendar do cabeçalho", () => {
  it("abre a página da Trinks", async () => {
    const button = await renderHeader();
    expect(button).toHaveAttribute("href", "https://www.trinks.com/studioingridsilva");
  });

  it("usa o mesmo endereço do botão Consultar datas e Valores", async () => {
    const button = await renderHeader();
    expect(button.getAttribute("href")).toBe(TRINKS);
  });
});
