import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";

export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const suite = localFont({
  src: [
    {
      path: "../assets/fonts/Suite/SUITE-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Suite/SUITE-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Suite/SUITE-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Suite/SUITE-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Suite/SUITE-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Suite/SUITE-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Suite/SUITE-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Suite/SUITE-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--font-suite",
  display: "swap",
});

export const yeongdeokSea = localFont({
  src: [
    {
      path: "../assets/fonts/YeongdeokSea/YeongdeokSea.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yeongdeokSea",
  display: "swap",
});
