"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Guards browser-only rendering so SSR and the first client paint agree.
 * Returns false on the server and during hydration, true afterwards.
 */
export function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
