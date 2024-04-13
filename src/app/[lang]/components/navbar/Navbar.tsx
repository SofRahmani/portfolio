import { getDictionary } from "@/lib/dictionary";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SettingsNav from "./Settings/SettingsNav";

export default async function NavBar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <>
      <nav className="hidden flex-col gap-6 font-sans text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="flex items-center gap-1 text-lg font-semibold md:mr-16 md:text-base">
          {/* <Image src={Logo} alt="Acme Inc" width={45} height={45} /> */}
          <span className="">PVTtoolkit</span>
        </div>
        <Link href={"#home"} className="text-muted-foreground hover:text-foreground">
          <Button variant={"link"}>{navigation.home}</Button>
        </Link>
        <Link href={"#about"} className="w-fit text-muted-foreground hover:text-foreground">
          <Button variant={"link"}>{navigation.about}</Button>
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="shrink-0 md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 font-sans text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              {/* <Image src={Logo} alt="Acme Inc" width={50} height={50} /> */}
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href={"#home"} className="text-muted-foreground hover:text-foreground">
              <Button variant={"link"}>{navigation.home}</Button>
            </Link>
            <Link href={"#about"} className="text-muted-foreground hover:text-foreground">
              <Button variant={"link"}>{navigation.about}</Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <SettingsNav content={navigation.lang} lang={lang} />
        </div>
      </div>
    </>
  );
}
