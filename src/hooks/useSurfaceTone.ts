"use client";

import { useEffect, useState } from "react";

import type { SlabTone } from "@/types";

/**
 * Reports the tone of the surface currently sitting under the fixed chrome.
 *
 * Kept separate from useScrollSpy on purpose: the active *stage* and the
 * surface behind the rail are different questions. Interstitial bands (the
 * stats ledger, the footer) change tone without being a nav stage, and the
 * chrome still has to stay legible over them.
 */
export function useSurfaceTone(offset = 80): SlabTone {
  const [tone, setTone] = useState<SlabTone>("ink");

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const surfaces = document.querySelectorAll<HTMLElement>("[data-tone]");

      let current: SlabTone = "ink";
      for (const surface of surfaces) {
        const rect = surface.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          current = (surface.dataset.tone as SlabTone) ?? "ink";
        }
      }

      setTone((prev) => (prev === current ? prev : current));
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [offset]);

  return tone;
}
