import { css, cva } from "#/styled-system/css";
import Link, { LinkProps } from "next/link";

interface NavButtonProps extends LinkProps {
  text: string;
  selected: boolean;
}

export const NavButton = ({ text, selected, ...props }: NavButtonProps) => {
  const capitalizedText = capitalize(text);
  return (
    <Link {...props} className={linkStyle}>
      <p className={linkTextRecipe({ selected })}>{capitalizedText}</p>
    </Link>
  );
};

const capitalize = (str: string) => {
  if (!str) return ""; // 빈 문자열 처리
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const linkStyle = css({
  background: "black",
  borderRadius: "12px",
});

const linkTextRecipe = cva({
  base: {
    boxSizing: "border-box",
    border: "2px solid black",
    borderRadius: "12px",
    padding: "4px 12px",
    backgroundColor: "background.primary",
    color: "prose.normal",
    fontWeight: 600,
    transition: "transform 0.1s ease",
  },

  variants: {
    selected: {
      true: { transform: "translateY(-2px)" },
      false: {
        transform: "translateY(-4px)",

        _active: {
          transform: "translateY(-2px)",
        },

        _hover: {
          transform: "translateY(-6px)",
        },
      },
    },
  },
});
