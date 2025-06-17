import { css } from "#/styled-system/css";
import Link from "next/link";
import { ReactNode } from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";

const iconStyle = css({
  fill: "background.reverse",
});

const SNSs = [
  {
    name: "GitHub",
    icon: <RiGithubFill className={iconStyle} size={28} />,
    url: "https://github.com/hjy0951",
  },
  {
    name: "LinkedIn",
    icon: <RiLinkedinBoxFill className={iconStyle} size={28} />,
    url: "https://www.linkedin.com/in/%EC%A4%80%EC%98%81-%ED%97%88-159288250/",
  },
  {
    name: "Instagram",
    icon: <RiInstagramLine className={iconStyle} size={28} />,
    url: "https://www.instagram.com/heojoooon/",
  },
  {
    name: "Email",
    icon: <MdOutlineEmail className={iconStyle} size={28} />,
    url: "mailto:hjy0951@gmail.com",
  },
];

export const SNSLinkGroup = () => {
  return (
    <div className={linkGroupStyle}>
      {SNSs.map((sns, index) => (
        <SNSLink key={index} {...sns} />
      ))}
    </div>
  );
};

const linkGroupStyle = css({
  display: "flex",
  gap: "4px",
  justifyContent: "center",
});

interface SNSButtonProps {
  name: string;
  icon: ReactNode;
  url: string;
}

const SNSLink = ({ name, icon, url }: SNSButtonProps) => {
  return (
    <Link href={url} target="_blank">
      <div className={iconWrapperStyle}>
        {icon}
        <span className={tooltipStyle}>{name}</span>
      </div>
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
  position: "relative",

  _hover: {
    bg: "background.sns",
    "& span": {
      animation: "slideUp 0.1s ease-out forwards",
    },
  },
});

const tooltipStyle = css({
  position: "absolute",
  top: "-4px",
  fontSize: "12px",
  color: "background.primary",
  whiteSpace: "nowrap",
  opacity: 0,
  pointerEvents: "none",
  zIndex: 1,
  backgroundColor: "background.reverse",
  borderRadius: "4px",
  padding: "2px 8px",

  boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
  _dark: {
    boxShadow: "4px 4px 8px rgba(255, 255, 255, 0.10)",
  },
});
