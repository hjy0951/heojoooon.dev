import { useEffect, useRef, useState } from "react";

export const useGetActiveHeading = () => {
  const headingQuery = "h1, h2, h3";
  const observer = useRef<IntersectionObserver>(null);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  useEffect(() => {
    const opitions = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 1.0,
    };

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== "") {
          setActiveHeadingId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(onIntersect, opitions);

    const elements = document.querySelectorAll(headingQuery);
    elements.forEach((elem) => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, [headingQuery]);

  return `#${activeHeadingId}`;
};
