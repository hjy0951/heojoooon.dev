import { css } from "#/styled-system/css";
import { HTMLAttributes, PropsWithChildren } from "react";

type BlockQuoteProps = {} & HTMLAttributes<HTMLElement>;

export const BlockQuote = ({
  children,
  ...props
}: PropsWithChildren<BlockQuoteProps>) => {
  return (
    <blockquote className={blockquoteStyle} {...props}>
      {children}
    </blockquote>
  );
};

const blockquoteStyle = css({
  mb: "12px",
  padding: "4px 8px",
  backgroundColor: "#1C212B",
  opacity: "90%",
  borderLeft: "6px solid #194D7C",
  borderRadius: "4px",
  color: "#fdfdfd",
});
