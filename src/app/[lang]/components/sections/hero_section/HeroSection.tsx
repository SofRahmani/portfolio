import { getDictionary } from "@/lib/dictionary";
import { subtitle, title } from "@/style/site";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../../../../i18n.config";
import ProfilPic from "../../../../../../public/sofiane.jpg";
import { Button } from "../../ui/button";
import AllBadges from "./AllBadges";
import { GradientL, GradientR } from "./Gradients";

export default async function HeroSection({ lang }: { lang: Locale }) {
  const { pages } = await getDictionary(lang);

  return (
    <section
      id="home"
      className=" relative z-40 flex size-full flex-col items-center justify-center p-8 font-sans md:mt-20 "
    >
      <GradientL />
      <GradientR />
      <div className=" flex flex-col items-center justify-center gap-10 md:flex-row ">
        <Image
          src={ProfilPic}
          height={250}
          width={250}
          alt="Sofiane Rahmani's photo"
          className=" z-40 rounded-full border-2 border-violet-700 shadow-indigo-700 drop-shadow-md"
        />
        <div className=" z-40 flex flex-col md:w-2/4 ">
          <h2 className={` ${title({ color: "violet", size: "lg" })} select-none `}>{pages.home.title}</h2>
          <h3 className={` ${subtitle()} font-mono `}>{pages.home.subtitle}</h3>
          <p className=" mt-4 text-justify ">{pages.home.content}</p>
          <div className=" mt-6 flex flex-row flex-wrap items-center justify-between gap-4 ">
            <AllBadges />
            <Link href={"https://resume.sofiane-rahmani.com"} target="_blank">
              <Button variant={"outline"}>{pages.home.resume}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
