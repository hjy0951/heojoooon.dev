import { css } from "#/styled-system/css";
import { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface CustomLinkProps extends PropsWithChildren<LinkProps> {
  currentWindow?: boolean;
}

export const CustomLink = ({
  children,
  href,
  currentWindow,
  ...props
}: CustomLinkProps) => {
  return (
    <a
      {...props}
      target={currentWindow ? "" : "_blank"}
      href={href.toString() || ""}
      className={linkStyle}
    >
      {children}
    </a>
  );
};

const linkStyle = css({
  overflowWrap: "break-word",
  fontWeight: 600,
  color: "#ff6a00",
  position: "relative",
  transition: "all 0.3s ease",

  _hover: {
    "&::after": {
      transform: "scaleX(1)", // 호버 시 밑줄이 나타나는 효과
      transformOrigin: "bottom left",
    },
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-1px",
    left: 0,
    width: "100%",
    height: "2px",
    opacity: "90%",
    backgroundColor: "#ff6a00",
    transform: "scaleX(0)", // 기본 상태에서 밑줄이 보이지 않도록 설정
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease",
  },
});
