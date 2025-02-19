import { css, cx } from "#/styled-system/css";
import { pretendard } from "@/styles/font";
import Link from "next/link";
import { PropsWithChildren } from "react";

type PartitionProps = { name: string };

export const Partition = ({
  children,
  name,
}: PropsWithChildren<PartitionProps>) => {
  return (
    <section className={containerStyle}>
      <Link href={`/${name}`} className={cx(nameStyle, pretendard.className)}>
        {name}
      </Link>

      {children}
    </section>
  );
};

const containerStyle = css({
  display: "flex",
  flexDir: "column",
});

const nameStyle = css({
  pb: "20px",
  fontSize: "18px",
  fontWeight: 400,
  textDecoration: "underline",
  textDecorationThickness: "1px",
  textUnderlineOffset: "6px",
});
