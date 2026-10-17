"use client";

import { useEffect } from "react";

/** Motion stays outside React's render loop and follows device preferences live. */
export default function Motion({ revision }: { revision: string }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const root = document.documentElement;
    let dispose = () => {};

    function configure() {
      dispose();
      if (preference.matches) return;

      const reveals = document.querySelectorAll<HTMLElement>(
        ".toolbar, .project, .about > *, .contact > *, .discipline-strip, .archive, .section-heading, .innovation-card, .possibilities > :not(.possibility-halo)",
      );
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add("revealed");
            observer.unobserve(target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
      reveals.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${(index % 2) * 65}ms`);
        observer.observe(element);
      });

      const hero = document.querySelector<HTMLElement>(".hero");
      const images = [...document.querySelectorAll<HTMLElement>(".project-image")];
      const scenes = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle("is-visible", isIntersecting);
        });
      }, { threshold: 0.01 });
      images.forEach((image) => scenes.observe(image));
      function syncVisibility() {
        images.forEach((image) => {
          image.style.setProperty("--scene-play", document.hidden ? "paused" : "running");
        });
      }
      document.addEventListener("visibilitychange", syncVisibility);
      syncVisibility();
      const magnets = [...document.querySelectorAll<HTMLElement>(".hero-cta, .contact-circle, nav a, .filters button")];
      let frame = 0;
      let pointerX = window.innerWidth / 2;
      let pointerY = window.innerHeight / 2;
      let pointerActive = false;
      let activeMagnet: HTMLElement | null = null;

      function paint() {
        frame = 0;
        const height = window.innerHeight;
        if (hero) {
          const bounds = hero.getBoundingClientRect();
          hero.style.setProperty("--parallax", `${Math.max(-70, Math.min(70, -bounds.top * 0.13))}px`);
          if (finePointer.matches && pointerActive) {
            const x = (pointerX - bounds.left) / bounds.width - 0.5;
            const y = (pointerY - bounds.top) / bounds.height - 0.5;
            const inside = pointerX >= bounds.left && pointerX <= bounds.right && pointerY >= bounds.top && pointerY <= bounds.bottom;
            hero.style.setProperty("--orb-x", `${inside ? -y * 20 : 0}deg`);
            hero.style.setProperty("--orb-y", `${inside ? x * 24 : 0}deg`);
          }
        }
        images.forEach((image) => {
          const bounds = image.getBoundingClientRect();
          if (bounds.bottom > 0 && bounds.top < height) {
            const offset = (height / 2 - bounds.top - bounds.height / 2) * 0.055;
            image.style.setProperty("--image-shift", `${Math.max(-18, Math.min(18, offset))}px`);
          }
        });
        if (finePointer.matches && pointerActive) {
          root.style.setProperty("--cursor-x", `${pointerX}px`);
          root.style.setProperty("--cursor-y", `${pointerY}px`);
          root.classList.add("pointer-lit");
          const next = magnets.find((element) => {
            const bounds = element.getBoundingClientRect();
            return pointerX >= bounds.left - 14 && pointerX <= bounds.right + 14 && pointerY >= bounds.top - 14 && pointerY <= bounds.bottom + 14;
          }) ?? null;
          if (activeMagnet !== next) activeMagnet?.style.removeProperty("translate");
          activeMagnet = next;
          if (next) {
            const bounds = next.getBoundingClientRect();
            next.style.translate = `${(pointerX - bounds.left - bounds.width / 2) * 0.16}px ${(pointerY - bounds.top - bounds.height / 2) * 0.2}px`;
          }
        }
      }
      function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
      function move(event: PointerEvent) {
        if (event.pointerType === "touch") return;
        pointerActive = true;
        pointerX = event.clientX;
        pointerY = event.clientY;
        schedule();
      }
      function leave() {
        pointerActive = false;
        root.classList.remove("pointer-lit");
        activeMagnet?.style.removeProperty("translate");
        activeMagnet = null;
        hero?.style.setProperty("--orb-x", "0deg");
        hero?.style.setProperty("--orb-y", "0deg");
      }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
      window.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerleave", leave);
      window.addEventListener("blur", leave);
      schedule();
      dispose = () => {
        scenes.disconnect();
        document.removeEventListener("visibilitychange", syncVisibility);
        images.forEach((image) => {
          image.classList.remove("is-visible");
          image.style.removeProperty("--scene-play");
        });
        observer.disconnect();
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        window.removeEventListener("pointermove", move);
        document.removeEventListener("pointerleave", leave);
        window.removeEventListener("blur", leave);
        leave();
        hero?.style.removeProperty("--parallax");
        images.forEach((image) => image.style.removeProperty("--image-shift"));
        reveals.forEach((element) => element.classList.remove("reveal", "revealed"));
      };
    }
    configure();
    preference.addEventListener("change", configure);
    finePointer.addEventListener("change", configure);
    return () => {
      dispose();
      preference.removeEventListener("change", configure);
      finePointer.removeEventListener("change", configure);
    };
  }, [revision]);

  return <div className="cursor-light" aria-hidden="true" />;
}

