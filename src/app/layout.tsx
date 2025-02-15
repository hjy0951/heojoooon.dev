import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "별 세 개짜리 개발자",
  description: "프론트엔드 개발자 허준영입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
