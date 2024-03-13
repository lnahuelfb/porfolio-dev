export interface Tech {
  name: string
  class: string
  icon: Record<string, any>
}

export interface Techs {
  NEXT: Tech
  TAILWIND: Tech
  HTML: Tech
  CSS: Tech
  REACT: Tech
  MONGO: Tech
  NODE: Tech
  EXPRESS: Tech
  ASTRO: Tech
  TYPESCRIPT: Tech
}

export interface Projects {
  title: string,
  description: string,
  link: {
    project?: string,
    github: string
  },
  image: string,
  tags: Tech[]
}

export interface Experience {
  date: string,
  title: string,
  description: string
}