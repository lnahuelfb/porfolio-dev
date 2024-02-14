import NextJS from "../icons/Next.astro";
import Tailwind from "../icons/Tailwind.astro";
import HTML from "../icons/Html.astro";
import CSS from "../icons/Css.astro";
import React from "../icons/React.astro";
import Mongo from "../icons/Mongo.astro";
import Node from "../icons/Node.astro";
import Express from "../icons/Express.astro";

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black/20 text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#73bcf6]/20, text-[#73bcf6]",
    icon: Tailwind,
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
};

const PROJECTS = [
  {
    title: "Variocolorida",
    description:
      "Colaboré estrechamente con la diseñadora para comprender sus necesidades y traducirlas en una experiencia de usuario intuitiva y visualmente atractiva.",
    link: "variocolorida.vercel.app",
    github: "https://github.com/lnahuelfb/variocolorida",
    image: "/projects/variocolorida.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT, TAGS.NEXT, TAGS.MONGO],
  },
  {
    title: "Rick and Morty",
    description:
      "Una aplicación donde se puede ver la información de los personajes de Rick and Morty, incluye una barra de busqueda para buscar determinados personajes.",
    link: "https://rick-and-morty-app-lnahuelfb.vercel.app/",
    github: "https://github.com/lnahuelfb/rick-and-morty",
    image: "/projects/rickandmorty.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
  },
  {
    title: "ToDo List",
    description:
      "Una aplicación donde se puede crear, editar y eliminar tareas.",
    link: "https://to-do-list-nahuelfb.vercel.app/",
    github: "https://github.com/lnahuelfb/toDoList-fullstack-backend",
    image: "/projects/todo.webp",
    tags: [
      TAGS.HTML,
      TAGS.CSS,
      TAGS.REACT,
      TAGS.NODE,
      TAGS.MONGO,
      TAGS.EXPRESS,
    ],
  },
  {
    title: "PokeRandom",
    description:
      "Una aplicación donde al tocar un boton te devuelve un pokemon al azar.",
    link: "https://poke-random-react.vercel.app/",
    github: "https://github.com/lnahuelfb/PokeRandom-React",
    image: "/projects/pokerandom.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT],
  },
];

export { PROJECTS };