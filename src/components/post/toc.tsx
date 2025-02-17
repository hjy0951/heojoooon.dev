"use client";

import { css, cx } from "#/styled-system/css";
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
  if (data.length === 0) return null;

  return (
    <aside className={layoutStyle}>
      <div className={wrapperStyle}>
        <p className={cx(suite.className, titleStyle)}>On this page</p>
        <ul className={cx(suite.className, contentListStyle)}>
          {data.map((item) => {
            return (
              <li key={item.link} className={contentStyle}>
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

const contentStyle = css({
  mt: "4px",

  _hover: { textDecoration: "underline", textUnderlineOffset: "4px" },
});
