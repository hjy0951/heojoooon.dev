import { css } from "#/styled-system/css";
import Link from "next/link";
import { ReactNode } from "react";

type SNSButtonProps = {
  icon: ReactNode;
  url: string;
};

const SNSLink = ({ icon, url }: SNSButtonProps) => {
  return (
    <Link href={url} target="_blank">
      <div className={iconWrapperStyle}>{icon}</div>
    </Link>
  );
};

export default SNSLink;

const iconWrapperStyle = css({
  width: "36px",
  height: "36px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50",
  _hover: { bg: "gray.300" },
});
