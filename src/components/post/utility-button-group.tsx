"use client";

import { css } from "#/styled-system/css";
import { useRouter } from "next/navigation";
import { BiSolidArrowToTop, BiCommentDetail, BiLinkAlt } from "react-icons/bi";
import { TbArrowBackUp } from "react-icons/tb";
import { IconType } from "react-icons";
import { Toast } from "./toast";
import { useToast } from "@/hooks/use-toast";

type ButtonConfig = {
  icon: IconType;
  label: string;
  onClick: () => void;
};

export const UtilityButtonGroup = () => {
  const router = useRouter();
  const { isVisible, message, showToast } = useToast();

  const handleBack = () => {
    router.back();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("✓ 링크가 복사되었습니다.");
  };

  const handleScrollToComments = () => {
    const giscusElement = document.querySelector(".giscus");
    if (giscusElement) {
      giscusElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttons: ButtonConfig[] = [
    {
      icon: TbArrowBackUp,
      label: "뒤로가기",
      onClick: handleBack,
    },
    {
      icon: BiSolidArrowToTop,
      label: "맨 위로",
      onClick: handleScrollToTop,
    },
    {
      icon: BiCommentDetail,
      label: "댓글로 이동",
      onClick: handleScrollToComments,
    },
    {
      icon: BiLinkAlt,
      label: "링크 복사",
      onClick: handleCopyLink,
    },
  ];

  return (
    <>
      <div className={buttonGroupStyle}>
        {buttons.map(({ icon: Icon, label, onClick }, index) => (
          <button
            key={label}
            onClick={onClick}
            className={buttonStyle}
            aria-label={label}
            style={{
              animation: `fadeIn 0.4s ease-out ${index * 0.08}s forwards`,
              opacity: 0,
            }}
          >
            <Icon className={iconStyle} />
          </button>
        ))}
      </div>

      <Toast message={message} isVisible={isVisible} />
    </>
  );
};

const buttonGroupStyle = css({
  display: "flex",
  gap: "4px",
  mt: "16px",
});

const buttonStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  backgroundColor: "prose.button.background",
  transition: "all 0.2s ease-in-out",

  _hover: {
    backgroundColor: "background.sns",
    cursor: "pointer",

    "& svg": {
      color: "prose.toc.active",
    },
  },
});

const iconStyle = css({
  width: "18px",
  height: "18px",
  color: "prose.toc.inactive",
});
