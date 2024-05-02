import { getDictionary } from "@/lib/dictionary";
import { title } from "@/style/site";
import { Locale } from "../../../../../../i18n.config";
import { Reveal } from '@/utils/Reveal';

export default async function AboutSection({ lang }: { lang: Locale }) {
  const { pages } = await getDictionary(lang);

  return (
    <section
      id="about"
      className=" relative z-40 flex size-full scroll-mt-0.5 flex-col items-center justify-center gap-6 p-8 font-sans md:scroll-mt-96 "
    >
      <Reveal width='w-fit'>
        <h2 className={` ${title({ size: "md", color: "violet" })} text-center `}>{pages.about.title}</h2>
      </Reveal>
      <Reveal width='md:w-2/3' >
        <p className=" w-full text-center  ">{pages.about.content}</p>
      </Reveal>
    </section>
  );
}
