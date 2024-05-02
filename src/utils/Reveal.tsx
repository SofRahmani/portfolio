"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer'

export interface RevealProps {
  children: JSX.Element;
  width: "w-fit" | "w-full" | "md:w-2/3";
}

export function Reveal({ children, width = "w-fit" }: RevealProps) {
  const mainControl = useAnimation();
  const sideControl = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      mainControl.start("visible");
      sideControl.start("visible");
    } else {
      mainControl.start("hidden");
      sideControl.start("hidden");
    }
  }, [mainControl, inView, sideControl]);

  return (
    <div ref={ref} className={` ${width} relative overflow-hidden `}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.30 }}
        className=" flex flex-col items-start justify-center "
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={sideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className=" absolute inset-x-0 inset-y-1 z-20 bg-violet-600 "
      />
    </div>
  );
}
