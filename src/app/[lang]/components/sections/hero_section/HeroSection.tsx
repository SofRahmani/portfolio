import { getDictionary } from "@/lib/dictionary";
import { subtitle, title } from "@/style/site";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { Locale } from "../../../../../../i18n.config";
import ProfilPic from "../../../../../../public/sofiane.jpg";
import AllBadges from "./AllBadges";
import { GradientL, GradientR } from "./Gradients";
import ResumeButton from "./ResumeButton";

export default async function HeroSection({ lang }: { lang: Locale }) {
  const { pages } = await getDictionary(lang);

  return (
    <section
      id="home"
      className=" relative z-40 flex size-full scroll-mt-[100rem] flex-col items-center justify-center p-8 font-sans md:mt-20 "
    >
      <GradientL />
      <GradientR />
      <div className=" flex flex-col items-center justify-center gap-10 md:flex-row ">
        <Image
          src={ProfilPic}
          height={250}
          width={250}
          quality={100}
          alt="Sofiane Rahmani's photo"
          className=" z-40 rounded-full border-2 border-violet-700 shadow-indigo-700 drop-shadow-md"
        />
        <div className=" z-40 flex flex-col max-sm:items-center md:w-2/4 ">
          <Reveal width="w-fit">
            <h2
              className={` ${title({ color: "violet", size: "lg" })} select-none text-center md:text-justify `}
            >
              {pages.home.title}
            </h2>
          </Reveal>
          <Reveal width="w-fit">
            <h3 className={` ${subtitle()} text-center font-mono md:text-justify `}>
              {pages.home.subtitle}
            </h3>
          </Reveal>
          <Reveal width="w-fit">
            <q className=" mt-4 text-center md:text-justify ">{pages.home.content}</q>
          </Reveal>
          <div className=" mt-6 flex flex-row flex-wrap items-center justify-center gap-4 md:justify-between ">
            <AllBadges />
            <ResumeButton content={pages.home.resume} />
          </div>
        </div>
      </div>
    </section>
  );
}
