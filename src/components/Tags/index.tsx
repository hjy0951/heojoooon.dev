import { css, cva } from "#/styled-system/css";
import { covertTagName, TagType } from "@/lib/utils";
import Link from "next/link";

type TagsProps = {
  tagList: Array<{ tag: TagType; count: number }>;
  selectedTag?: TagType;
};

const Tags = ({ tagList, selectedTag }: TagsProps) => {
  const currentTag = selectedTag || "all";
  return (
    <nav className={containerStyle}>
      {tagList.map(({ tag, count }) => (
        <Link
          key={tag}
          href={tag === "all" ? "/" : `/tag/${tag}`}
          className={tagReceipe({
            variant: currentTag === tag ? "selected" : "unselected",
          })}
        >
          <p className={tagNameStyle}>{covertTagName(tag)}</p>
          <span className={postCountStyle}>({count})</span>
        </Link>
      ))}
    </nav>
  );
};

export default Tags;

const containerStyle = css({
  margin: "auto",
  padding: "32px",
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
    _hover: {
      "& p": { textDecoration: "underline", textUnderlineOffset: "4px" },
    },
  },
  variants: {
    variant: {
      unselected: { fontWeight: 400 },
      selected: { fontWeight: 700 },
    },
  },
});

const tagNameStyle = css({ lineHeight: 1.2 });

const postCountStyle = css({ fontSize: "12px" });
