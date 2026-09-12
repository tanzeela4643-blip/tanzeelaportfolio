import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanzeela Nawaz | Data Science Student & AI Developer" },
      { name: "description", content: "Portfolio of Tanzeela Nawaz, a BS Data Science student specializing in Python, Data Science, AI/ML, web development and intelligent applications." },
      { property: "og:title", content: "Tanzeela Nawaz | Data Science Student & AI Developer" },
      { property: "og:description", content: "Explore Tanzeela Nawaz’s portfolio of Data Science, AI/ML, Python and web development projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
