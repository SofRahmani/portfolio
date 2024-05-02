"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: -30
  },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  })
};

export default function Separator() {
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
    <div className=" flex h-28 w-full items-center justify-center overflow-hidden ">
      <motion.div
        className=" h-full w-1 rounded-full bg-violet-700 "
        ref={ref}
        animate={control}
        initial="hidden"
        variants={fadeInAnimationVariants}
      />
    </div>
  );
}
