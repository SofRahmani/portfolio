import Letter from "../../public/projects/letter.png";
import Docs from "../../public/projects/docs.png";
import Resume from "../../public/projects/resume.png";

export const SIDES_PROJECTS = [
  {
    name: "Letter or Number",
    slug: "letter-or-number",
    descriptionFR: "Une application simple permettant aux malvoyants de différencier les caractères les plus difficiles à distinguer.",
    descriptionEN: "A simple application allowing visually impaired individuals to differentiate the most difficult-to-distinguish characters.",
    skills: ["Next JS", "React", "TypeScript", "Tailwind CSS"],
    url: "https://www.letter-or-number.com/fr",
    image: Letter
  },
  {
    name: "My Docs",
    slug: "my-docs",
    descriptionFR: "Une documentation technique personnelle accessible à tous les développeurs web autodidactes ou simplement curieux.",
    descriptionEN: "A personal technical documentation accessible to all self-taught or simply curious web developers.",
    skills: ["Next JS", "React", "TypeScript", "Tailwind CSS", "Nextra", "MDX"],
    url: "https://docs.sofiane-rahmani.com/docs/home",
    image: Docs
  },
  {
    name: "My resume",
    slug: "my-resume",
    descriptionFR: "Un curriculum vitae sous forme de site, car être développeur, c'est avant tout rendre les choses simples bien plus amusantes.",
    descriptionEN: "A curriculum vitae in the form of a website, because being a developer is primarily about making things simple much more fun.",
    skills: ["Next JS", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://resume.sofiane-rahmani.com/",
    image: Resume
  }
];
