import { useEffect, useRef, useState } from 'react';

const defaultOptions = { threshold: 0.16 };

export function useInView(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { ...defaultOptions, ...options });
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}
