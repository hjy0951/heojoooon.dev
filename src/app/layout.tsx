import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "프론트엔드 개발자 허준영입니다.",
  description: "별 세개짜리 개발자",
  icons: {
    icon: "/favicon.ico",
  },
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
