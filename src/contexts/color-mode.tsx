"use client";

import { createContext, ReactNode, useState } from "react";
import { script } from "@/scripts/mode";

export const COLOR_MODES = ["light", "dark"] as const;
export type ColorModeType = (typeof COLOR_MODES)[number];

const COLOR_MODE_KEY = "color-mode" as const;

interface ColorModeContextProps {
  colorMode: ColorModeType;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<
  ColorModeContextProps | undefined
>(undefined);

interface ColorModeProviderProps {
  children: ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [colorMode, setColorMode] = useState<ColorModeType>(() => {
    if (typeof window === "undefined") return "light";

    const savedMode = localStorage.getItem(COLOR_MODE_KEY);
    if (savedMode === "dark" || savedMode === "light") {
      return savedMode;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleColorMode = () => {
    const next = colorMode === "light" ? "dark" : "light";
    setColorMode(next);
    localStorage.setItem(COLOR_MODE_KEY, next);
    document.documentElement.setAttribute("data-color-mode", next);
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: script,
        }}
      />
      {children}
    </ColorModeContext.Provider>
  );
};
