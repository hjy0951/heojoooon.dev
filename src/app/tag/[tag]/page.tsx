import { MainPage } from "@/components/page";
import { getAllTags } from "@/lib/api";
import { Metadata } from "next";
import { convertTagName, TagType } from "@/lib/utils";
import { blogTitle } from "@/constants";

export const dynamicParams = false;

type TagParams = {
  params: Promise<{
    section: string;
    tag: TagType;
  }>;
};

export const generateMetadata = async ({
  params,
}: TagParams): Promise<Metadata> => {
  const { tag } = await params;
  const convertedTag = convertTagName(tag);
  const title = `#${convertedTag} | ${blogTitle}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    title,
    keywords: [convertedTag],
    alternates: {
      canonical: `${baseUrl}/tag/${tag}`,
    },
    openGraph: {
      title,
      type: "website",
      url: `${baseUrl}/tag/${tag}`,
    },
    twitter: {
      card: "summary",
      title,
    },
  };
};

export const generateStaticParams = () => {
  const tagInfo = getAllTags();
  const params = tagInfo.map(({ tagName }) => ({ tag: tagName }));

  return params;
};

const TagedMainPage = async (props: TagParams) => {
  const { tag } = await props.params;
  return <MainPage selectedTag={tag} />;
};

export default TagedMainPage;
