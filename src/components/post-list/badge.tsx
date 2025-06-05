import { css } from "#/styled-system/css";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return <p className={badgeStyle}>{children}</p>;
};

const badgeStyle = css({
  p: "4px 8px",
  bgColor: "background.badge",
  color: "prose.reverse",
  rounded: "8px",
  fontWeight: 600,
  fontSize: "12px",
});
