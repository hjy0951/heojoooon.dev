"use client";

import { css } from "#/styled-system/css";
import { useColorMode } from "@/hooks/use-color-mode";
import { useEffect, useRef } from "react";

export const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";
    scriptElem.setAttribute("data-repo", "hjy0951/heojoooon.dev");
    scriptElem.setAttribute("data-repo-id", "R_kgDONt2W8w");
    scriptElem.setAttribute("data-category", "Comments");
    scriptElem.setAttribute("data-category-id", "DIC_kwDONt2W884CnGbV");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute(
      "data-theme",
      colorMode === "light" ? "noborder_light" : "noborder_dark"
    );
    scriptElem.setAttribute("data-lang", "ko");
    ref.current.appendChild(scriptElem);
  }, [colorMode]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: colorMode === "light" ? "noborder_light" : "noborder_dark",
          },
        },
      },
      "https://giscus.app"
    );
  }, [colorMode]);

  return <section className={containerStyle} ref={ref} />;
};

const containerStyle = css({
  mt: "60px",
  mx: "20px",
});
