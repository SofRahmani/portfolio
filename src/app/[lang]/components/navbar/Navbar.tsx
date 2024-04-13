import { getDictionary } from "@/lib/dictionary";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Locale } from "../../../../../i18n.config";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Skeleton } from "../ui/skeleton";
import LogoNav from "./LogoNav";
import SettingsNav from "./Settings/SettingsNav";

export default async function NavBar({ lang }: { lang: Locale }) {
  const { navigation, components } = await getDictionary(lang);

  return (
    <>
      <nav className="hidden flex-col gap-6 font-sans text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="flex items-center gap-1 text-lg font-semibold md:mr-16 md:text-base">
          <Suspense fallback={<Skeleton className="size-12 rounded-full" />}>
            <LogoNav />
          </Suspense>
          <h1 className=" select-none font-mono ">{navigation.title}</h1>
        </div>
        <Link href={"#home"} className="text-muted-foreground outline-none hover:text-foreground">
          <Button variant={"link"} className=" text-black dark:text-white ">
            {navigation.home}
          </Button>
        </Link>
        <Link
          href={"#skills"}
          className="w-fit text-muted-foreground outline-none hover:text-foreground"
        >
          <Button variant={"link"} className=" text-black dark:text-white ">
            {navigation.skills}
          </Button>
        </Link>
        <Link
          href={"#projects"}
          className="w-fit text-muted-foreground outline-none hover:text-foreground"
        >
          <Button variant={"link"} className=" text-black dark:text-white ">
            {navigation.projects}
          </Button>
        </Link>
        <Link
          href={"#contact"}
          className="w-fit text-muted-foreground outline-none hover:text-foreground"
        >
          <Button variant={"link"} className=" text-black dark:text-white ">
            {navigation.contact}
          </Button>
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="shrink-0 md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">{navigation.sheet}</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 font-sans text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <LogoNav />
              <span className="sr-only">{navigation.title}</span>
            </Link>
            <Link
              href={"#home"}
              className="text-muted-foreground outline-none hover:text-foreground"
            >
              <Button variant={"link"} className=" text-black dark:text-white ">
                {navigation.home}
              </Button>
            </Link>
            <Link
              href={"#skills"}
              className="text-muted-foreground outline-none hover:text-foreground"
            >
              <Button variant={"link"} className=" text-black dark:text-white ">
                {navigation.skills}
              </Button>
            </Link>
            <Link
              href={"#projects"}
              className="text-muted-foreground outline-none hover:text-foreground"
            >
              <Button variant={"link"} className=" text-black dark:text-white ">
                {navigation.projects}
              </Button>
            </Link>
            <Link
              href={"#contact"}
              className="text-muted-foreground outline-none hover:text-foreground"
            >
              <Button variant={"link"} className=" text-black dark:text-white ">
                {navigation.contact}
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <SettingsNav
            content={navigation.lang}
            lang={lang}
            lightLabel={components.toggleDarkMode.light}
            darkLabel={components.toggleDarkMode.dark}
            systemLabel={components.toggleDarkMode.system}
          />
        </div>
      </div>
    </>
  );
}
