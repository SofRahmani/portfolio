import Docs from "../../public/projects/docs.png";
import Letter from "../../public/projects/letter.png";
import QrCode from "../../public/projects/qrcode.png";
import Todos from "../../public/projects/todos.png";

export const SIDES_PROJECTS = [
  {
    name: "Letter or Number",
    slug: "letter-or-number",
    descriptionFR:
      "Une application simple permettant aux malvoyants de différencier les caractères les plus difficiles à distinguer.",
    descriptionEN:
      "A simple application allowing visually impaired individuals to differentiate the most difficult-to-distinguish characters.",
    skills: ["Next JS", "React", "TypeScript", "Tailwind CSS"],
    url: "https://www.letter-or-number.com/fr",
    image: Letter
  },

  {
    name: "QR Code Generator",
    slug: "qrcode-generator",
    descriptionFR:
      "Une application permettant de générer des QR codes personnalisable à partir de texte ou d'un lien.",
    descriptionEN: "A application allowing to generate customizable QR codes from text or a link.",
    skills: ["Next JS", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    url: "https://qrcode.sofiane-rahmani.com/",
    image: QrCode
  },
  {
    name: "Todos",
    slug: "todos",
    descriptionFR:
      "Une application de gestion de tâches simple et minimaliste, parce que parfois, il suffit de peu pour être efficace.",
    descriptionEN:
      "A simple and minimalist task management application, because sometimes, less is more.",
    skills: ["Next JS", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Auth JS"],
    url: "https://github.com/SofRahmani/todos",
    image: Todos
  },
  {
    name: "My Docs",
    slug: "my-docs",
    descriptionFR:
      "Une documentation technique personnelle accessible à tous les développeurs web autodidactes ou simplement curieux.",
    descriptionEN:
      "A personal technical documentation accessible to all self-taught or simply curious web developers.",
    skills: ["Next JS", "React", "TypeScript", "Tailwind CSS", "Nextra", "MDX"],
    url: "https://docs.sofiane-rahmani.com/docs/home",
    image: Docs
  }
];
