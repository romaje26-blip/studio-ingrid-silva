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

// The header sits in __root, so it needs a router to render. A minimal tree with
// the four nav paths is enough — no loaders run, nothing is fetched.
const root = createRootRoute({ component: () => (<><Header /><Outlet /></>) });
const at = (path: string) => createRoute({ getParentRoute: () => root, path, component: () => null });
const routeTree = root.addChildren([at("/"), at("/servicos"), at("/sobre"), at("/contato")]);

describe("botão Agendar do cabeçalho", () => {
  it("abre a página da Trinks", () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByRole("link", { name: "Agendar" })).toHaveAttribute(
      "href",
      "https://www.trinks.com/studioingridsilva",
    );
  });

  it("usa o mesmo endereço do botão Consultar datas e Valores", () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByRole("link", { name: "Agendar" }).getAttribute("href")).toBe(TRINKS);
  });
});
