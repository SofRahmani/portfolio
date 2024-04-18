"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: () => ({
    opacity: 1,
    y: 0,
    scale: [1, 1.2, 1.2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
  })
};

export function GradientL() {
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
    <motion.div
      className=" absolute left-20 z-20 size-60 rounded-full bg-purple-400 blur-[8rem] dark:bg-purple-800 "
      ref={ref}
      variants={fadeInAnimationVariants}
      initial="hidden"
      animate={control}
    />
  );
}

export function GradientR() {
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
    <motion.div
      className=" absolute right-20 top-40 z-20 size-60 rounded-full bg-indigo-300 blur-[8rem] dark:bg-indigo-800 "
      ref={ref}
      variants={fadeInAnimationVariants}
      initial="hidden"
      animate={control}
    />
  );
}
