import { MainPage } from "@/components/page";
import { blogDescription, blogTitle } from "@/constants";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const title = blogTitle;
  const description = blogDescription;

  return {
    title,
    description,
    keywords: [
      "blog",
      "frontend",
      "javascript",
      "typescript",
      "react",
      "nextjs",
    ],
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: baseUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
};

const MainWithTag = () => {
  return <MainPage />;
};

export default MainWithTag;
