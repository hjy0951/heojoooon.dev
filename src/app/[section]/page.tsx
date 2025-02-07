import { SectionPage } from "@/components/page";
import { getSections } from "@/lib/apiv2";
import { use } from "react";

type SectionParams = {
  params: Promise<{
    section: string;
  }>;
};

export const generateStaticParams = () => {
  const params = getSections().map((section) => ({
    section,
  }));

  return params;
};

const SectionWithTag = (props: SectionParams) => {
  const { section } = use(props.params);

  return <SectionPage section={section} />;
};

export default SectionWithTag;
