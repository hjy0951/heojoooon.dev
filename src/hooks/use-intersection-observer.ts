import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * IntersectionObserver를 사용을 위한 훅
 * @param options IntersectionObserver 옵션
 * @returns [ref, isIntersecting] - 요소에 연결할 ref와 교차 상태
 */
export const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: options.root ?? null,
        rootMargin: options.rootMargin ?? "0px",
        threshold: options.threshold ?? 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.root, options.rootMargin, options.threshold]);

  return [ref, isIntersecting] as const;
};
