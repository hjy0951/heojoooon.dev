import { css, cx } from "#/styled-system/css";
import { pretendard } from "@/styles/font";
import { PropsWithChildren } from "react";

type PartitionProps = { name: string };

export const Partition = ({
  children,
  name,
}: PropsWithChildren<PartitionProps>) => {
  return (
    <section className={containerStyle}>
      <div className={cx(nameStyle, pretendard.className)}>
        <p className={linkTextStyle}>{name}</p>
      </div>

      {children}
    </section>
  );
};

const containerStyle = css({
  display: "flex",
  flexDir: "column",
});

const nameStyle = css({
  mb: "20px",
  fontSize: "18px",
  fontWeight: 400,
  borderBottom: "3px solid #303030",
});

const linkTextStyle = css({
  width: "92px",
  fontWeight: "500",
  textAlign: "center",
  color: "white",
  backgroundColor: "#303030",
  borderRadius: "8px 8px 0 0",
});
