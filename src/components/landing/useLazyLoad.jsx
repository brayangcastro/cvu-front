import { useState, useEffect } from 'react';

const useLazyLoad = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta cuando ya es visible
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // El porcentaje de visibilidad para activar la carga
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

export default useLazyLoad;
