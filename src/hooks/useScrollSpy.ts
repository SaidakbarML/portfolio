"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section currently occupies the top of the viewport.
 *
 * Deliberately not IntersectionObserver-based: sections here are taller than
 * the viewport and several intersect at once, so "is visible" is ambiguous.
 * This picks the last section whose top has passed the offset line, which is
 * unambiguous and matches what the reader is actually looking at.
 */
export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;

      let current = ids[0] ?? "";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= offset) current = id;
      }

      // Pin the last section once the page is scrolled to the bottom, so short
      // trailing sections can still become active.
      const scrollBottom = window.scrollY + window.innerHeight;
      if (scrollBottom >= document.documentElement.scrollHeight - 2) {
        current = ids[ids.length - 1] ?? current;
      }

      setActiveId((prev) => (prev === current ? prev : current));
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
  }, [ids, offset]);

  return activeId;
}
