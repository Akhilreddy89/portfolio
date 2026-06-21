
import { useEffect, useState } from 'react';

export function useScrollSpy(ids, options = { rootMargin: '-45% 0px -50% 0px' }) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(',')]);

  return activeId;
}

export function useScrollPast(threshold = 60) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setPast(window.scrollY > threshold);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return past;
}
