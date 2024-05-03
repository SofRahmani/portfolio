"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  skills: string[];
  image: StaticImageData;
  url: string;
}

export default function ProjectCard({ name, description, skills, image, url }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className=" group mb-3 last:mb-0 sm:mb-8 "
    >
      <article className=" relative max-w-2xl overflow-hidden rounded-md border border-white/5 bg-gray-200 transition hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 max-sm:flex max-sm:flex-col  sm:h-80 sm:pr-8 md:group-even:pl-8 ">
        <div className=" flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-6 md:group-even:ml-72">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className=" mt-2 leading-relaxed ">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {skills.map((skill, index) => (
              <li
                className="rounded-full bg-primary/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white "
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <Link href={url} target="_blank">
          <Image
            className=" absolute -right-40 top-14 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 md:block "
            src={image}
            alt={`${name}'s image`}
            quality={95}
          />
        </Link>
      </article>
    </motion.div>
  );
}
