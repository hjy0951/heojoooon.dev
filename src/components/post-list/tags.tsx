import { css, cva } from "#/styled-system/css";
import { convertTagName, TagType } from "@/lib/utils";
import Link from "next/link";

interface TagsProps {
  tagList: { tagName: string; count: number }[];
  selectedTag?: string;
  totalCount: number;
}

export const Tags = ({ tagList, selectedTag, totalCount }: TagsProps) => {
  const currentTag = selectedTag || "all";
  const allpostsTag = {
    tagName: "all",
    count: totalCount,
  };
  tagList.unshift(allpostsTag);

  return (
    <nav className={containerStyle}>
      {tagList.map(({ tagName, count }) => (
        <Link
          key={tagName}
          href={`/${tagName === "all" ? "" : `tag/${tagName}`}`}
          className={tagReceipe({
            variant: currentTag === tagName ? "selected" : "unselected",
          })}
        >
          <p className={tagNameStyle}>{convertTagName(tagName as TagType)}</p>
          <span className={postCountStyle}>({count})</span>
        </Link>
      ))}
    </nav>
  );
};

const containerStyle = css({
  margin: "auto",
  padding: "24px",
  maxWidth: "600px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  fontSize: "18px",
  fontWeight: "400",
});

const tagReceipe = cva({
  base: {
    p: "6px",
    display: "flex",
    gap: "2px",
    borderRadius: "8px",

    _hover: {
      "& p": { textDecoration: "underline", textUnderlineOffset: "4px" },
    },
  },
  variants: {
    variant: {
      unselected: { fontWeight: 400 },
      selected: { fontWeight: 700, backgroundColor: "#303030", color: "white" },
    },
  },
});

const tagNameStyle = css({ lineHeight: 1.2 });

const postCountStyle = css({ fontSize: "12px" });
