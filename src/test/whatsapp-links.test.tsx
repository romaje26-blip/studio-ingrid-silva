import { describe, expect, it, vi } from "vitest";

import { externalClick, WHATSAPP } from "@/components/site";

// A click event shaped like the one React hands an anchor's onClick handler.
function clickOn(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  const preventDefault = vi.fn();
  return { event: { currentTarget: anchor, preventDefault } as never, preventDefault, anchor };
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

  it("leaves mailto links to the browser", () => {
    const openSpy = vi.spyOn(window, "open").mockReturnValue(null);
    const { event, preventDefault } = clickOn("mailto:ingrid@example.com");
    externalClick(event);

    expect(preventDefault).not.toHaveBeenCalled();
    expect(openSpy).not.toHaveBeenCalled();

    openSpy.mockRestore();
  });
});
