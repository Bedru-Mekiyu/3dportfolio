import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered fade-in animations
 * @param {string} selector - CSS selector for elements to animate
 * @param {object} options - Intersection Observer options
 * @returns {Array} - Array of observed elements
 */
export const useScrollAnimation = (selector, options = {}) => {
  const [elements, setElements] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    // Get all matching elements
    const allElements = document.querySelectorAll(selector);
    setElements(Array.from(allElements));

    // Create intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          if (options.once !== false) {
            observerRef.current?.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -10% 0px',
      ...options
    });

    // Observe all elements
    allElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [selector, options.threshold, options.rootMargin, options.once]);

  return elements;
};

/**
 * Hook for single element scroll animations
 * @param {object} options - Intersection Observer options
 * @returns {Array} - [ref, isVisible]
 */
export const useElementVisibility = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        element.classList.add('visible');
        if (options.once !== false) {
          observer.unobserve(element);
        }
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -10% 0px',
      ...options
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
};

export default useScrollAnimation;
