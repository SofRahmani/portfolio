'use client'
import Link from "next/link";
import { Button } from "../../ui/button";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
  }
};

export default function ResumeButton({ content }: { content: string}) {
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
      ref={ref}
      variants={fadeInAnimationVariants}
      initial="hidden"
      animate={control}
    >
      <Link href={"https://resume.sofiane-rahmani.com"} target="_blank">
        <Button variant={"outline"}>{content}</Button>
      </Link>
    </motion.div>
  );
}
