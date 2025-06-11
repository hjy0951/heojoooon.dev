"use client";

import { css, cva, cx } from "#/styled-system/css";
import { useGetActiveHeading } from "@/hooks/use-get-active-heading";
import { suite } from "@/styles/font";
import Link from "next/link";

export interface HeadingInfo {
  text: string;
  link: string;
  indentCount: number;
}

interface Props {
  data: HeadingInfo[];
}

export const TOC = ({ data }: Props) => {
  const activeHeadingId = useGetActiveHeading();
  const validIndents = ["0", "1", "2"] as const;

  return (
    <aside className={layoutStyle}>
      <div className={wrapperStyle}>
        {data.length > 0 && (
          <>
            <p className={cx(suite.className, titleStyle)}>On this page</p>
            <ul className={cx(suite.className, contentListStyle)}>
              {data.map((item, index) => {
                return (
                  <li
                    key={item.link}
                    className={cx(
                      contentRecipe({
                        variant:
                          activeHeadingId === item.link ? "active" : "inactive",
                      }),
                      liAnimation
                    )}
                    style={{
                      animationDelay: `${index * (2 + item.indentCount) * 0.02}s`,
                    }}
                  >
                    <Link
                      href={item.link}
                      className={indentRecipe({
                        count: validIndents[item.indentCount],
                      })}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
};

const layoutStyle = css({
  display: "none",

  md: { display: "block" },
});

const wrapperStyle = css({
  position: "sticky",
  bottom: 0,
  top: "160px",
  ml: "12px",
  width: "260px",
});

const titleStyle = css({
  fontWeight: 700,
  fontSize: "20px",
  color: "prose.toc.title",
});

const contentListStyle = css({
  fontSize: "13px",
  color: "prose.toc.inactive",
});

const contentRecipe = cva({
  base: {
    mt: "4px",

    _hover: {
      textDecoration: "underline",
      textUnderlineOffset: "4px",
    },
  },
  variants: {
    variant: {
      inactive: {},
      active: { color: "prose.toc.active", fontWeight: 700, fontSize: "14px" },
    },
  },
});

const indentRecipe = cva({
  base: {},
  variants: {
    count: {
      "0": {},
      "1": { ml: "16px" },
      "2": { ml: "32px" },
    },
  },
});

const liAnimation = css({
  animation: "slideInFromRight 0.1s ease-out forwards",
  opacity: 0,
});
