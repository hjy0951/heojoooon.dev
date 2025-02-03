import { css, cva, cx } from "#/styled-system/css";
import { PropsWithChildren } from "react";
import { CheckBoxIcon, LightBulbIcon, WarningIcon } from "../icons";
import { pretendard } from "@/styles/font";

type IconType = "warn" | "check" | "light";

type CallOutProps = {
  type?: IconType;
};

const CallOutIcon = ({ type }: { type: IconType }) => {
  if (type === "check") return <CheckBoxIcon />;
  else if (type === "light") return <LightBulbIcon />;
  else if (type === "warn") return <WarningIcon />;
  return null;
};
export const CallOut = ({
  type,
  children,
}: PropsWithChildren<CallOutProps>) => {
  const typeString = type || "undefined";

  return (
    <div className={cx(colorReceipe({ variant: typeString }), containerStyle)}>
      <div className={css({ opacity: 1 })}>
        {type && <CallOutIcon type={type} />}
      </div>

      <div className={cx("callout-body", pretendard.className, textStyle)}>
        {children}
      </div>
    </div>
  );
};

const containerStyle = css({
  mb: "16px",
  p: "16px 20px",
  w: "100%",
  display: "flex",
  gap: "16px",
  alignItems: "center",
  borderRadius: "8px",
});

const colorReceipe = cva({
  base: {
    opacity: "90%",
  },
  variants: {
    variant: {
      undefined: { backgroundColor: "#9F9F9F" },
      warn: { backgroundColor: "#FFC0B1" },
      check: { backgroundColor: "#9BDAB9" },
      light: { backgroundColor: "#FFF0BE" },
    },
  },
});

const textStyle = css({
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: 1.4,
  color: "#030303",
});
