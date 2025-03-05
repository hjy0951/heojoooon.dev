import { css } from "#/styled-system/css";
import Link, { LinkProps } from "next/link";

interface NavButtonProps extends LinkProps {
  text: string;
}

export const NavButton = ({ text, ...props }: NavButtonProps) => {
  const capitalizedText = capitalize(text);
  return (
    <Link {...props} className={linkStyle}>
      <p className={linkTextStyle}>{capitalizedText}</p>
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

const linkTextStyle = css({
  boxSizing: "border-box",
  border: "2px solid black",
  borderRadius: "12px",
  padding: "4px 12px",
  background: "#fdfdfd",
  color: "black",
  fontWeight: 600,
  transform: "translateY(-0.2em)",
  transition: "transform 0.1s ease",

  _hover: {
    transform: "translateY(-0.33em)",
  },

  _active: {
    transform: "translateY(0)",
  },
});
