"use client";
import { SKILLS_ITEMS } from "@/data/Skills_Items";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SkillBadge from "./SkillBadge";

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};

export default function Skills() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className=" flex flex-wrap items-center justify-center gap-4 md:w-3/4 ">
      {SKILLS_ITEMS.map((item, index) => (
        <motion.div
          key={index}
          ref={ref}
          variants={fadeInAnimationVariants}
          initial="hidden"
          animate={control}
          custom={index}
        >
          <SkillBadge name={item.name} />
        </motion.div>
      ))}
    </div>
  );
}
