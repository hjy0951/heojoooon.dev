"use client";

import { css, cva, cx } from "#/styled-system/css";
import { useGetActiveHeading } from "@/hooks/use-get-active-heading";
import { suite } from "@/styles/font";
import Link from "next/link";

interface Props {
  data: {
    text: string;
    link: string;
    indentCount: number;
  }[];
}

export const TOC = ({ data }: Props) => {
  const activeHeadingId = useGetActiveHeading();
  console.log(activeHeadingId);

  if (data.length === 0) return null;

  return (
    <aside className={layoutStyle}>
      <div className={wrapperStyle}>
        <p className={cx(suite.className, titleStyle)}>On this page</p>
        <ul className={cx(suite.className, contentListStyle)}>
          {data.map((item) => {
            return (
              <li
                key={item.link}
                className={contentRecipe({
                  variant:
                    activeHeadingId === item.link ? "active" : "inactive",
                })}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
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

const titleStyle = css({ fontWeight: 700, fontSize: "20px", color: "#404040" });

const contentListStyle = css({
  fontSize: "13px",
  color: "#606060",
});

const contentRecipe = cva({
  base: {
    mt: "4px",

    _hover: { textDecoration: "underline", textUnderlineOffset: "4px" },
  },
  variants: {
    variant: {
      inactive: {},
      active: { color: "#DE645B", fontWeight: 700, fontSize: "14px" },
    },
  },
});
