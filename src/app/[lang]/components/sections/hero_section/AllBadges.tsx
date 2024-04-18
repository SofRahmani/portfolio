"use client";
import { CONTACT_LINKS } from "@/data/Contact_Links";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BadgeLink from "./badgeLink";
import { useEffect } from 'react'

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  })
};

export default function AllBadges() {

  const control = useAnimation();
  const [ ref, inView ] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }

  }, [control, inView])

  return (
    <div className=" flex flex-row flex-wrap gap-3 ">
      {CONTACT_LINKS.map((link, index) => (
        <motion.div
          key={index}
          ref={ref}
          variants={fadeInAnimationVariants}
          initial="hidden"
          animate={control}
          custom={index}
        >
          <BadgeLink Icon={link.icon} url={link.url} name={link.name} />
        </motion.div>
      ))}
    </div>
  );
}
