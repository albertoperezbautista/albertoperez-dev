import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    hash: "#projects",
  },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Snowlake Theme",
    description:
      "A theme for Snowlake, a social media platform for creating and sharing content.",
    tags: ["React", "NextJs", "MongoDb", "Tailwind"],
    imageUrl: "/image1.png",
    link: "https://twitter.com/",
  },

  {
    title: "Pokedex",
    description: "A simple Pokedex app built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    imageUrl: "/image2.png",
    link: "google.com",
  },
  {
    title: "Pokedex",
    description: "A simple Pokedex app built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    imageUrl: "/image3.png",
    link: "google.com",
  },
  {
    title: "Pokedex",
    description: "A simple Pokedex app built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    imageUrl: "/image4.png",
    link: "google.com",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
];
