"use client";

import { createContext, useLayoutEffect, useState } from "react";

export const COLOR_MODES = ["light", "dark"] as const;
export type ColorModeType = (typeof COLOR_MODES)[number];

interface ColorModeContextProps {
  colorMode: ColorModeType;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<
  ColorModeContextProps | undefined
>(undefined);

interface ColorModeProviderProps {
  children: React.ReactNode;
  initialMode?: ColorModeType;
}

export const ColorModeProvider = ({
  children,
  initialMode,
}: ColorModeProviderProps) => {
  const [colorMode, setColorMode] = useState<ColorModeType>(
    initialMode || "light"
  );

  const toggleColorMode = () => {
    const next = colorMode === "light" ? "dark" : "light";
    setColorMode(next);
    document.cookie = `color-mode=${next};`;
    document.documentElement.setAttribute("data-color-mode", next);
  };

  useLayoutEffect(() => {
    if (initialMode) {
      document.documentElement.setAttribute("data-color-mode", initialMode);
      return;
    }

    const match = document.cookie.match(/(?:^|;\s*)color-mode=([^;]*)/);
    const mode = (match?.[1] === "dark" ? "dark" : "light") as ColorModeType;
    setColorMode(mode);
    document.documentElement.setAttribute("data-color-mode", mode);
  }, [initialMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
