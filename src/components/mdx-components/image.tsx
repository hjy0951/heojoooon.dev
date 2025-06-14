import { css, cx } from "#/styled-system/css";
import { SourceIcon } from "@/components/icons";
import Image, { ImageProps } from "next/image";

export const MDXImage = ({ src, alt, ...rest }: ImageProps) => {
  const match = alt.match(/link::(https?:\/\/[^\s]+)/);
  const isUnoptimized =
    typeof src === "string" ? /\.(svg|gif)$/i.test(src) : false;

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className={imageStyle}
        unoptimized={isUnoptimized}
        {...rest}
      />
      {alt !== "" && match ? (
        <a
          className={cx(textStyle, linkStyle)}
          href={match[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
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
