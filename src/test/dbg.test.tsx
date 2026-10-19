import { Outlet, RouterProvider, createMemoryHistory, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/site";

const root = createRootRoute({ component: () => (<><Header /><Outlet /></>) });
const at = (path: string) => createRoute({ getParentRoute: () => root, path, component: () => null });
const routeTree = root.addChildren([at("/"), at("/servicos")]);

describe("dbg", () => {
  it("renders", async () => {
    const router = createRouter({ routeTree, history: createMemoryHistory({ initialEntries: ["/"] }) });
    await router.load();
    render(<RouterProvider router={router} />);
    await waitFor(() => expect(screen.queryByText("Agendar")).toBeInTheDocument());
    console.log("BODY:", document.body.innerHTML.slice(0, 400));
    expect(true).toBe(true);
  });
});
