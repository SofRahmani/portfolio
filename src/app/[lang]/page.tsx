import { Locale } from "../../../i18n.config";
import Separator from './components/sections/Separator'
import HeroSection from "./components/sections/hero_section/HeroSection";

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <main className=" mx-auto mt-6 flex max-w-7xl flex-col items-center justify-center gap-8 ">
      <HeroSection lang={params.lang} />
      <Separator />
    </main>
  );
}

