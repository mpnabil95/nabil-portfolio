'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Progressive enhancement: content remains visible without JavaScript. */
export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches) return;
        const animation = entry.target.animate(
          [
            { opacity: 0.35, transform: 'translateY(24px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'none' },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });

    const frame = requestAnimationFrame(() => {
      document.querySelectorAll(
        '.section-label, .about-grid, .section-heading, .toolkit-item, .project-card, .timeline article, .education-grid > div, .case-content > section, .contact-grid, .next-project'
      ).forEach((element) => observer.observe(element));
    });

    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    preference.addEventListener('change', stop);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener('change', stop);
    };
  }, [pathname]);

  return null;
}
