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
      <p className={cx(nameStyle, pretendard.className)}>{name}</p>
      {children}
    </section>
  );
};

const containerStyle = css({});

const nameStyle = css({
  mb: "16px",
  fontSize: "18px",
  fontWeight: 400,
  textDecoration: "underline",
  textDecorationThickness: "1px",
  textUnderlineOffset: "6px",
});
