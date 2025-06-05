import { css, cva, cx } from "#/styled-system/css";
import { PropsWithChildren } from "react";
import { CheckBoxIcon, LightBulbIcon, WarningIcon } from "../icons";
import { pretendard } from "@/styles/font";

type IconType = "warn" | "check" | "light";

interface CallOutProps {
  type?: IconType;
}

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
    <div
      className={cx(backgroundReceipe({ variant: typeString }), containerStyle)}
    >
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

const backgroundReceipe = cva({
  base: {
    opacity: "90%",
  },
  variants: {
    variant: {
      undefined: { backgroundColor: "callout.undefined" },
      warn: { backgroundColor: "callout.warn" },
      check: { backgroundColor: "callout.check" },
      light: { backgroundColor: "callout.light" },
    },
  },
});

const textStyle = css({
  fontSize: "16px",
  lineHeight: 1.6,
  color: "prose.normal",
});
