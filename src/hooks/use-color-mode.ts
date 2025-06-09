// import { useLayoutEffect, useState } from "react";

import { ColorModeContext } from "@/contexts/color-mode";
import { useContext } from "react";

// export const COLOR_MODES = ["light", "dark"] as const;
// export type ColorModeType = (typeof COLOR_MODES)[number];

// export const useColorMode = () => {
//   const [colorMode, setColorMode] = useState<ColorModeType>("light");

//   const toggleColorMode = () => {
//     const nextMode = colorMode === "dark" ? "light" : "dark";
//     if (typeof document !== "undefined") {
//       document.cookie = `color-mode=${nextMode}`;
//     }
//     setColorMode(nextMode);
//   };

//   useLayoutEffect(() => {
//     const currentMode = getColorModeFromCookie() || "light";
//     setColorMode(currentMode as ColorModeType);
//   }, []);

//   useLayoutEffect(() => {
//     if (typeof document !== "undefined") {
//       document.documentElement.setAttribute("data-color-mode", colorMode);
//     }
//   }, [colorMode]);

//   return { colorMode, toggleColorMode };
// };

// function getColorModeFromCookie(): string | undefined {
//   if (typeof document === "undefined") return undefined;
//   const match = document.cookie.match(/(?:^|;\s*)color-mode=([^;]*)/);
//   return match ? decodeURIComponent(match[1]) : undefined;
// }

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return context;
};
