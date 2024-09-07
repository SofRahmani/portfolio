import Docs from "../../public/projects/docs.png";
import Letter from "../../public/projects/letter.png";
import QrCode from "../../public/projects/qrcode.png";
import PackPlotter from "../../public/projects/packplotter.png";

export const SIDES_PROJECTS = [
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
    name: "PackPlotter",
    slug: "pack-plotter",
    descriptionFR:
      "Déménager devient plus facile avec PackPlotter, une application permettant de gérer vos cartons et leur contenu de façon simple, rapide et sécurisé.",
    descriptionEN: "Moving becomes easier with PackPlotter, an app that allows you to manage your boxes and their contents in a simple, quick, and secure way.",
    skills: ["Next JS", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Auth JS"],
    url: "https://www.packplotter.app",
    image: PackPlotter
  },
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
