import {useEffect} from 'react';

export function useSetProductOpen(
  setProductOpen: (productOpen: boolean) => void,
  productRef: React.RefObject<HTMLDivElement> | undefined,
) {
  useEffect(() => {
    if (!productRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setProductOpen(!entry.isIntersecting);
      },
      {threshold: 0.1},
    );

    observer.observe(productRef.current);

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, [productRef, setProductOpen]);
}
