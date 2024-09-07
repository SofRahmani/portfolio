import { getDictionary } from "@/lib/dictionary";
import { title } from "@/style/site";
import { Reveal } from "@/utils/Reveal";
import { Locale } from "../../../../../../i18n.config";
import { TestimonialsInfiniteScroll } from "./TestimonialsInfiniteScroll";

export default async function TestimonialsSection({ lang }: { lang: Locale }) {
  const { pages } = await getDictionary(lang);

  return (
    <section
      id="testimonials"
      className=" relative z-40 flex size-full scroll-mt-0.5 flex-col items-center justify-center gap-6 p-8 font-sans md:scroll-mt-96 "
    >
      <Reveal width="w-fit">
        <h2 className={` ${title({ size: "md", color: "violet" })} `}>
          {pages.testimonials.title}
        </h2>
      </Reveal>
      <TestimonialsInfiniteScroll noTestimonials={pages.testimonials.noTestimonials} />
    </section>
  );
}
