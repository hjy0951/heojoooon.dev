import { css, cx } from "#/styled-system/css";
import { SourceIcon } from "@/components/icons";

interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  const match = alt.match(/link::(https?:\/\/[^\s]+)/);

  return (
    <>
      <img src={src} alt={alt} className={imageStyle} />
      {alt !== "" && match ? (
        <a className={cx(textStyle, linkStyle)} href={match[1]} target="_blank">
          <SourceIcon width={14} height={14} color="#868686" />
          <span>출처</span>
        </a>
      ) : (
        <span className={cx(textStyle, descriptionStyle)}>{alt}</span>
      )}
    </>
  );
};

const imageStyle = css({
  maxWidth: "100%",
  height: "auto",
  my: "8px 0",
  mx: "auto",
  border: "1px solid rgba(0,0,0,0.24)",
  borderRadius: "12px",
});

const textStyle = css({
  px: "16px",
  color: "prose.caption",
  fontSize: "14px",
});

const linkStyle = css({
  display: "flex",
  gap: "4px",
  alignItems: "center",
  justifyContent: "center",
  textUnderlineOffset: "4px",

  _hover: {
    textDecoration: "underline",
  },
});

const descriptionStyle = css({
  textAlign: "center",
  display: "block",
  width: "full",
});
