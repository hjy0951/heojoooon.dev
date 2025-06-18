import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/layout";
import SimpleHeader from "@/components/layout/simple-header";
import { css } from "#/styled-system/css";
import { ColorModeProvider } from "@/contexts/color-mode";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Heojooon.",
  description: "프론트엔드 개발자 허준영입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="sfiS5iTK-_TgFD5FAd6NuXV0PPlXuv5mWnGVwVfyUqQ"
        />
        <meta
          name="naver-site-verification"
          content="f4cf5c0bb4e66279ab248083a23701f77d1d6b99"
        />
      </head>

      <body className={bodyStyle}>
        <ColorModeProvider>
          <SimpleHeader />
          {children}
          <Footer />
        </ColorModeProvider>
      </body>
    </html>
  );
}

const bodyStyle = css({ backgroundColor: "background.primary" });
