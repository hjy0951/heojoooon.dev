import { cva, RecipeVariantProps } from "#/styled-system/css";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type CustomLinkProps = LinkProps &
  LinkTypeVariants & { currentWindow?: boolean; color?: string };

export const CustomLink = ({
  children,
  href,
  currentWindow,
  color,
  ...props
}: PropsWithChildren<CustomLinkProps>) => {
  return (
    <Link
      {...props}
      target={currentWindow ? "" : "_blank"}
      href={href.toString() || ""}
      className={linkRecipe({ color })}
    >
      {children}
    </Link>
  );
};

export type LinkTypeVariants = RecipeVariantProps<typeof linkRecipe>;

const linkRecipe = cva({
  base: {
    overflowWrap: "break-word",
    fontWeight: 600,
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
      transform: "scaleX(0)", // 기본 상태에서 밑줄이 보이지 않도록 설정
      transformOrigin: "bottom right",
      transition: "transform 0.3s ease",
    },
  },
  variants: {
    color: {
      primary: {
        color: "prose.customLink.primary",
        "&::after": {
          backgroundColor: "background.customLink.primary",
        },
      },
      secondary: {
        color: "prose.customLink.secondary",
        "&::after": {
          backgroundColor: "prose.customLink.secondary",
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
