import { useEffect } from "react";

interface Props {
  target: HTMLDivElement | null;
  onIntersect: IntersectionObserverCallback;
  threshold?: number;
}

export const useObserver = ({ target, onIntersect, threshold }: Props) => {
  const observer = new IntersectionObserver(onIntersect, {
    threshold,
  });

  useEffect(() => {
    return () => {
      observer && observer.disconnect();
    };
  });

  target && observer.observe(target);
};
