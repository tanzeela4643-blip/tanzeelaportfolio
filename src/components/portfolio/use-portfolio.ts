import { useEffect, useState } from "react";

export function usePortfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("tanzeela-theme");
    const initial = stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("tanzeela-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = "true";
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    sections.forEach((section) => sectionObserver.observe(section));
    reveals.forEach((item) => revealObserver.observe(item));
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { theme, setTheme, activeSection, showTop };
}