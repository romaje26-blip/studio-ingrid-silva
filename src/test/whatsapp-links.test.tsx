import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { externalClick, PHONE, WHATSAPP } from "@/components/site";
import { WhatsAppFallback } from "@/components/whatsapp-fallback";

// A click event shaped like the one React hands an anchor's onClick handler.
function clickOn(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  const preventDefault = vi.fn();
  return { event: { currentTarget: anchor, preventDefault } as never, preventDefault };
}

describe("WhatsApp booking buttons", () => {
  it("points at the studio's WhatsApp number", () => {
    expect(WHATSAPP).toContain("wa.me/5511948190515");
  });

  it("opens the chat in a new tab when the browser allows it", () => {
    const opened = { opener: {} };
    const openSpy = vi.spyOn(window, "open").mockReturnValue(opened as unknown as Window);
    const locationSpy = vi.spyOn(window, "location", "get").mockReturnValue({
      href: "http://localhost/",
    } as Location);

    const { event, preventDefault } = clickOn(WHATSAPP);
    externalClick(event);

    expect(preventDefault).toHaveBeenCalledOnce();
    expect(openSpy).toHaveBeenCalledWith(WHATSAPP, "_blank");
    expect(opened.opener).toBeNull();
    expect(locationSpy).not.toHaveBeenCalled();

    openSpy.mockRestore();
    locationSpy.mockRestore();
  });

  it("still opens the chat in the same tab when the new tab is blocked", () => {
    const openSpy = vi.spyOn(window, "open").mockReturnValue(null);
    const fakeLocation = { href: "http://localhost/" };
    const locationGetter = vi.spyOn(window, "location", "get").mockReturnValue(fakeLocation as Location);

    const { event, preventDefault } = clickOn(WHATSAPP);
    externalClick(event);

    expect(preventDefault).toHaveBeenCalledOnce();
    expect(fakeLocation.href).toBe(WHATSAPP);

    openSpy.mockRestore();
    locationGetter.mockRestore();
  });

  it("offers the number and a ready message when embedded and the new tab is blocked", () => {
    const openSpy = vi.spyOn(window, "open").mockReturnValue(null);
    const topDescriptor = Object.getOwnPropertyDescriptor(window, "top");
    Object.defineProperty(window, "top", { value: {}, configurable: true, writable: true });

    try {
      render(<WhatsAppFallback />);
      expect(screen.queryByText(PHONE)).toBeNull();

      const { event } = clickOn(WHATSAPP);
      externalClick(event);

      expect(screen.getByText(PHONE)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /copiar mensagem/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /tentar abrir/i })).toHaveAttribute("href", WHATSAPP);
    } finally {
      if (topDescriptor) Object.defineProperty(window, "top", topDescriptor);
      openSpy.mockRestore();
    }
  });

  it("leaves mailto links to the browser", () => {
    const openSpy = vi.spyOn(window, "open").mockReturnValue(null);
    const { event, preventDefault } = clickOn("mailto:ingrid@example.com");
    externalClick(event);

    expect(preventDefault).not.toHaveBeenCalled();
    expect(openSpy).not.toHaveBeenCalled();

    openSpy.mockRestore();
  });
});
