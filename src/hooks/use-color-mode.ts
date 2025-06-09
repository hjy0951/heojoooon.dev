import { useLayoutEffect, useState } from "react";

export const COLOR_MODES = ["light", "dark"] as const;
export type ColorModeType = (typeof COLOR_MODES)[number];

export const useColorMode = () => {
  const [colorMode, setColorMode] = useState<ColorModeType>("light");

  const toggleColorMode = () => {
    const nextMode = colorMode === "dark" ? "light" : "dark";
    document.cookie = `color-mode=${nextMode}`;
    setColorMode(nextMode);
  };

  useLayoutEffect(() => {
    const currentMode = getColorModeFromCookie() || "light";
    setColorMode(currentMode as ColorModeType);
    const root = document.documentElement;
    root.setAttribute("data-color-mode", colorMode);
  }, [colorMode]);

  return { colorMode, toggleColorMode };
};

function getColorModeFromCookie(): string | undefined {
  const match = document.cookie.match(/(?:^|;\s*)color-mode=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}
