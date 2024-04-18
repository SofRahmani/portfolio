'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    height: 0
  },
  visible: () => ({
    opacity: 1,
    height: 100,
    transition: {
      duration: 0.6
    }
  })
};

export default function Separator() {

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
    <motion.div
      className=" h-28 w-1 rounded-full bg-violet-700 "
      ref={ref}
      variants={fadeInAnimationVariants}
      initial="hidden"
      animate={control}
    />
  );
}
