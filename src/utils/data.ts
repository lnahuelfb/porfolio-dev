import type { Techs, Projects, Experience } from "./interfaces";

const TAGS: Techs = {
  NEXT: {
    name: "Next.js",
    style: "bg-black/20 text-white",
    icon: 'NextJS',
  },
  TAILWIND: {
    name: "Tailwind CSS",
    style: "bg-[#73bcf6]/20 text-[#73bcf6]",
    icon: 'Tailwind',
  },
  HTML: {
    name: "HTML",
    style: "bg-orange-500/20 text-orange-500",
    icon: 'HTML',
  },
  CSS: {
    name: "CSS",
    style: "bg-blue-500/20 text-blue-500",
    icon: 'CSS',
  },
  REACT: {
    name: "React.JS",
    style: "bg-[#00d8ff]/20 text-[#00d8ff]",
    icon: 'React',
  },
  MONGO: {
    name: "MongoDB",
    style: "bg-[#00ed64]/20 text-[#00ed64]",
    icon: 'Mongo',
  },
  NODE: {
    name: "Node.JS",
    style: "bg-[#529f43]/20 text-[#529f43]",
    icon: 'Node',
  },
  EXPRESS: {
    name: "Express.js",
    style: "bg-white/20 text-white",
    icon: 'Express',
  },
  ASTRO: {
    name: 'Astro',
    style: 'bg-[#ff5d01]/20 text-[#ff5d01]',
    icon: 'Astro',
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    style: 'bg-[#007acc]/5 text-[#007acc]',
    icon: 'Typescript'
  }
}

export const PROJECTS: Projects[] = [
  {
    title: "Variocolorida",
    description:
      "Colaboré estrechamente con la diseñadora para comprender sus necesidades y traducirlas en una experiencia de usuario intuitiva y visualmente atractiva.",
    link: {
      project: "https://variocolorida.vercel.app",
      github: "https://github.com/lnahuelfb/variocolorida"
    },
    image: "/projects/variocolorida.webp",
    tags: [
      TAGS.HTML,
      TAGS.CSS,
      TAGS.REACT,
      TAGS.NEXT,
      TAGS.MONGO
    ],
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
    title: 'App de envío de emails',
    description: 'App para enviar los mails del porfolio a mi casilla de correos.',
    link: {
      project: 'https://mailer-lgen.onrender.com/send-email',
      github: 'https://github.com/lnahuelfb/mailer'
    },
    image: '/projects/mails.webp',
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.NODE,
      TAGS.EXPRESS
    ]
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
    tags: [
      TAGS.HTML,
      TAGS.CSS,
      TAGS.REACT
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    date: "2023 - Actualidad",
    title: "Desarrollador web Freelance",
    description:
      "Como desarrollador web freelance tengo experiencia en tecnologías como React, Next.js y MongoDB. Especializado en la creación de aplicaciones web modernas y dinámicas. Comprometido con la calidad y la usabilidad, colaborando estrechamente con clientes para convertir sus visiones en realidad.",
  },
];