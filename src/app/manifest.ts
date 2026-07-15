import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manika Goel — Portfolio",
    short_name: "Manika Goel",
    description:
      "Portfolio of Manika Goel, Full Stack & ML Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#05080a",
    theme_color: "#12e8a0",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
