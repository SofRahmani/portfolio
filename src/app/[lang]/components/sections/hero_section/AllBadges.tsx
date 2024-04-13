"use client";
import { CONTACT_LINKS } from "@/data/Contact_Links";
import { delay, motion } from "framer-motion";
import BadgeLink from "./badgeLink";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  })
};

export default function AllBadges() {
  return (
    <div className=" flex flex-row flex-wrap gap-3 ">
      {CONTACT_LINKS.map((link, index) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{
            once: true
          }}
          custom={index}
        >
          <BadgeLink Icon={link.icon} url={link.url} name={link.name} />
        </motion.div>
      ))}
    </div>
  );
}
