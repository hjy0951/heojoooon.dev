import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { pretendard } from "@/styles/font";

export const metadata: Metadata = {
  title: "3 Stars Developer",
  description: "프론트엔드 개발자 허준영입니다.",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.className} font-pretendard`}>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
