import { css } from "#/styled-system/css";
import { PropsWithChildren } from "react";

interface SectionProps {
  title: string;
}

export const Section = ({
  title,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className={containerStyle}>
      {/* header */}
      <div>
        <div className={dividerStyle} />
        <span className={titleStyle}>{title}</span>
      </div>

      {children}
    </section>
  );
};

const containerStyle = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const dividerStyle = css({
  width: "80px",
  height: "4px",
  backgroundColor: "background.badge",
});

const titleStyle = css({
  fontSize: 24,
  fontWeight: 700,
  color: "background.badge",
});
