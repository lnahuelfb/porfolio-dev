import NextJS from "components/icons/Next.astro";
import TailwindIcon from "components/icons/Tailwind.astro";
import HTML from "components/icons/Html.astro";
import CSS from "components/icons/Css.astro";
import React from "components/icons/React.astro";
import Mongo from "components/icons/Mongo.astro";
import Node from "components/icons/Node.astro";
import Express from "components/icons/Express.astro";
import AstroIcon from "components/icons/AstroIcon.astro";

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black/20 text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#73bcf6]/20 text-[#73bcf6]",
    icon: TailwindIcon,
  },
  HTML: {
    name: "HTML",
    class: "bg-orange-500/20 text-orange-500",
    icon: HTML,
  },
  CSS: {
    name: "CSS",
    class: "bg-blue-500/20 text-blue-500",
    icon: CSS,
  },
  REACT: {
    name: "React.JS",
    class: "bg-[#00d8ff]/20 text-[#00d8ff]",
    icon: React,
  },
  MONGO: {
    name: "MongoDB",
    class: "bg-[#00ed64]/20 text-[#00ed64]",
    icon: Mongo,
  },
  NODE: {
    name: "Node.JS",
    class: "bg-[#529f43]/20 text-[#529f43]",
    icon: Node,
  },
  EXPRESS: {
    name: "Express.js",
    class: "bg-white/20 text-white",
    icon: Express,
  },
  ASTRO: {
    name: 'Astro',
    class: 'bg-[#ff5d01]/20 text-[#ff5d01]',
    icon: AstroIcon,
  }
};

export const PROJECTS = [
  {
    title: "Variocolorida",
    description:
      "Colaboré estrechamente con la diseñadora para comprender sus necesidades y traducirlas en una experiencia de usuario intuitiva y visualmente atractiva.",
    link: {
      project: "https://variocolorida.vercel.app",
      github: "https://github.com/lnahuelfb/variocolorida"
    },
    image: "/projects/variocolorida.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT, TAGS.NEXT, TAGS.MONGO],
  },
  {
    title: "Porfolio",
    description:
      "Este porfolio fue desarrollado con las siguientes tecnologías",
    link: {
      project: "https://to-do-list-nahuelfb.vercel.app/",
      github: "https://github.com/lnahuelfb/porfolio-dev"
    },
    image: "/projects/porfolio.webp",
    tags: [
      TAGS.HTML,
      TAGS.TAILWIND,
      TAGS.REACT,
      TAGS.ASTRO
    ],
  },
  {
    title: "Rick and Morty",
    description:
      "Una aplicación donde se puede ver la información de los personajes de Rick and Morty, incluye una barra de busqueda para buscar determinados personajes.",
    link: {
      project: "https://rick-and-morty-app-lnahuelfb.vercel.app/",
      github: "https://github.com/lnahuelfb/rick-and-morty",
    },
    image: "/projects/rickandmorty.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
  },
];

export const EXPERIENCE = [
  {
    date: "2023 - Actualidad",
    title: "Desarrollador web Freelance",
    description:
      "Como desarrollador web freelance tengo experiencia en tecnologías como React, Next.js y MongoDB. Especializado en la creación de aplicaciones web modernas y dinámicas. Comprometido con la calidad y la usabilidad, colaborando estrechamente con clientes para convertir sus visiones en realidad.",
  },
];