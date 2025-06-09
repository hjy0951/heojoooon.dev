import { ColorModeContext } from "@/contexts/color-mode";
import { useContext } from "react";

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return context;
};
