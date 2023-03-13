import { useCallback, useEffect } from "react";

interface Props {
  target: HTMLDivElement | null;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
  threshold?: number;
}

export const useObserver = ({ target, hasNextPage, fetchNextPage, threshold }: Props) => {
  const onIntersect: IntersectionObserverCallback = useCallback(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        hasNextPage && fetchNextPage();
      }
    },
    [target]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold,
    });
    target && observer.observe(target);
    return () => {
      observer && observer.disconnect();
    };
  }, [target, onIntersect, threshold]);
};
