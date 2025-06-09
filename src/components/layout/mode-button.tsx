"use client";

import { motion } from "motion/react";
import { RiMoonFill, RiQuestionMark, RiSunFill } from "react-icons/ri";
import { css, cva, cx } from "#/styled-system/css";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useColorMode } from "@/hooks/use-color-mode";

export const ModeButton = () => {
  const isMounted = useIsMounted();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClickButton = () => {
    toggleColorMode();
  };

  if (!isMounted)
    return (
      <div className={layoutStyle}>
        <RiQuestionMark size={20} />
      </div>
    );

  return (
    <motion.button
      className={cx(layoutStyle, buttonRecipe({ theme: colorMode }))}
      type="button"
      onClick={handleClickButton}
      whileTap={{ scale: 0.95, rotate: 25 }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        rotate: 360,
      }}
    >
      {colorMode === "dark" ? (
        <RiMoonFill size={22} color="#FFE400" />
      ) : (
        <RiSunFill size={22} color="#FF0000" />
      )}
    </motion.button>
  );
};

const layoutStyle = css({
  rounded: "100px",
  padding: "8px",
  border: "2px solid #fdfdfd",
});

const buttonRecipe = cva({
  variants: {
    theme: {
      light: {
        backgroundColor: "sky.200",
        _hover: {
          backgroundColor: "gray.300",
        },
      },
      dark: {
        backgroundColor: "gray.600",
        _hover: {
          backgroundColor: "blue.900",
        },
      },
    },
  },
});
