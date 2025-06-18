import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/layout";
import SimpleHeader from "@/components/layout/simple-header";
import { css } from "#/styled-system/css";
import { ColorModeProvider } from "@/contexts/color-mode";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "HEOJOOON.",
  description: "프론트엔드 개발자 허준영입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
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
