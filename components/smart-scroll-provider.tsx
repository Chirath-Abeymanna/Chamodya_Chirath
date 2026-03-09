"use client";

import { useSmartScroll } from "@/hooks/use-smart-scroll";
import type { ReactNode } from "react";

export function SmartScrollProvider({ children }: { children: ReactNode }) {
  useSmartScroll();
  return <>{children}</>;
}
