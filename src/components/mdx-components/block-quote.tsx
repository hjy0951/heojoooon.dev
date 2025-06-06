import { css } from "#/styled-system/css";
import { HTMLAttributes, PropsWithChildren } from "react";

export const BlockQuote = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
  return (
    <blockquote className={blockquoteStyle} {...props}>
      {children}
    </blockquote>
  );
};

const blockquoteStyle = css({
  mb: "12px",
  padding: "4px 8px",
  color: "prose.reverse",
  backgroundColor: "background.blockquote",
  opacity: "90%",
  borderLeft: "6px solid",
  borderColor: "border.blockquote",
  borderRadius: "4px",
});
