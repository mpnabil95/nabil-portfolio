"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancement:
 * - scroll reveal is enabled only after JavaScript is ready;
 * - pointer glow and project-card tilt are desktop enhancements;
 * - reduced-motion preferences disable non-essential motion.
 */
export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const updateScrollProgress = () => {
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      root.style.setProperty("--scroll-progress", `${Math.min(100, Math.max(0, progress))}%`);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    let observer: IntersectionObserver | undefined;

    if (reducedMotion.matches) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      root.classList.remove("motion-ready");
    } else if ("IntersectionObserver" in window) {
      root.classList.add("motion-ready");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
      );

      revealTargets.forEach((element) => observer?.observe(element));
    } else {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
    }

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        root.classList.remove("motion-ready");
        revealTargets.forEach((element) => element.classList.add("is-visible"));
        observer?.disconnect();
      }
    };

    reducedMotion.addEventListener("change", onMotionPreferenceChange);

    let pointerFrame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reducedMotion.matches) return;
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const tiltCards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    );
    const tiltCleanups: (() => void)[] = [];

    if (!reducedMotion.matches && window.matchMedia("(pointer: fine)").matches) {
      tiltCards.forEach((card) => {
        const onTiltMove = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty("--tilt-x", `${(x - 0.5) * 3.2}deg`);
          card.style.setProperty("--tilt-y", `${(0.5 - y) * 3.2}deg`);
        };

        const onTiltLeave = () => {
          card.style.setProperty("--tilt-x", "0deg");
          card.style.setProperty("--tilt-y", "0deg");
        };

        card.addEventListener("pointermove", onTiltMove);
        card.addEventListener("pointerleave", onTiltLeave);
        tiltCleanups.push(() => {
          card.removeEventListener("pointermove", onTiltMove);
          card.removeEventListener("pointerleave", onTiltLeave);
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      window.removeEventListener("pointermove", onPointerMove);
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);
      observer?.disconnect();
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      tiltCleanups.forEach((cleanup) => cleanup());
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return <div id="scroll-progress" aria-hidden="true" />;
}
