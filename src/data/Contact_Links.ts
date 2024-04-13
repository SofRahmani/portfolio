import { LucideIcon } from 'lucide-react'
import { Github, Gitlab, Linkedin } from 'lucide-react' 

export const CONTACT_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sofiane-rahmani-9840a21a8/",
    icon: Linkedin
  },
  {
    name: "GitHub",
    url: "https://github.com/SofRahmani",
    icon: Github
  },
  {
    name: "Gitlab",
    url: "https://gitlab.com/SofianeR",
    icon: Gitlab
  }
]

export interface ContactLinkType {
  name: string;
  url: string;
  icon: LucideIcon;
  index: number;
} 