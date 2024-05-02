"use client";
import { useEffect, useState } from "react";
import {
  AuthIcon,
  MDXIcon,
  NextIcon,
  PostgresIcon,
  ReactIcon,
  SCSSIcon,
  TailwindIcon,
  TypescriptIcon,
  HTMLIcon,
  CSSIcon,
  JSIcon
} from "../../icons/icons";

export interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  const [Icon, setIcon] = useState<JSX.Element>("" as unknown as JSX.Element);

  useEffect(() => {
    switch (name) {
      case "React":
        setIcon(<ReactIcon className=" mr-2 size-6 " />);
        break;
      case "Next JS":
        setIcon(<NextIcon className=" mr-2 size-5 " />);
        break;
      case "TypeScript":
        setIcon(<TypescriptIcon className=" mr-2 size-5 " />);
        break;
      case "Tailwind CSS":
        setIcon(<TailwindIcon className=" mr-2 size-6 " />);
        break;
      case "SCSS":
        setIcon(<SCSSIcon className=" mr-2 size-6 " />);
        break;
      case "PostgreSQL":
        setIcon(<PostgresIcon className=" mr-2 size-7 " />);
        break;
      case "Next Auth":
        setIcon(<AuthIcon className=" mr-2 size-5 " />);
        break;
      case "HTML":
        setIcon(<HTMLIcon className=" mr-2 size-6 " />);
        break;
      case "CSS":
        setIcon(<CSSIcon className=" mr-2 size-7 " />);
        break;
      case "JavaScript":
        setIcon(<JSIcon className=" mr-2 size-5 " />);
        break;

      default:
        break;
    }
  }, [name]);

  return (
    <div className=" flex select-none items-center justify-center rounded-lg border px-2 py-1 md:px-3 md:py-2 md:hover:scale-105 md:hover:border-violet-950 md:hover:text-violet-950 md:dark:hover:border-violet-400 md:dark:hover:text-violet-400 ">
      {Icon}
      {name}
    </div>
  );
}
