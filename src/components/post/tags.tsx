import { css, cva } from "#/styled-system/css";
import { covertTagName, TagType } from "@/lib/utils";
import Link from "next/link";

type TagsProps = {
  section: string;
  tagList: { tagName: string; count: number }[];
  selectedTag?: string;
};

export const Tags = ({ section, tagList, selectedTag }: TagsProps) => {
  const currentTag = selectedTag || "all";
  const allpostsTag = {
    tagName: "all",
    count: tagList.reduce((acc, cur) => acc + cur.count, 0),
  };
  tagList.unshift(allpostsTag);

  return (
    <nav className={containerStyle}>
      {tagList.map(({ tagName, count }) => (
        <Link
          key={tagName}
          href={`/${section}${tagName === "all" ? "" : `/${tagName}`}`}
          className={tagReceipe({
            variant: currentTag === tagName ? "selected" : "unselected",
          })}
        >
          <p className={tagNameStyle}>{covertTagName(tagName as TagType)}</p>
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
      selected: { fontWeight: 700, backgroundColor: "#C8ECFF" },
    },
  },
});

const tagNameStyle = css({ lineHeight: 1.2 });

const postCountStyle = css({ fontSize: "12px" });
