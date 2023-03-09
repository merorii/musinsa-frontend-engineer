import { useEffect } from "react";

interface Props {
  root?: null;
  target: HTMLDivElement | null;
  onIntersect: IntersectionObserverCallback;
  threshold?: number;
  rootMargin?: string;
}

export const useObserver = ({ target, onIntersect, threshold = 1.0 }: Props) => {
  useEffect(() => {
    if (!target) {
      return;
    }
    const observer = new IntersectionObserver(onIntersect, {
      threshold,
    });
    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [target, onIntersect, threshold]);
};
