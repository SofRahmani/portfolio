"use client";
import { ToggleLaguageProps } from "@/types/ToggleLanguageType";
import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { i18n } from "../../../../../../i18n.config";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../ui/dropdown-menu";

export function ToggleLaguage({ content, lang }: ToggleLaguageProps) {
  const [language, setLanguage] = useState(`${lang}`);

  const pathname = usePathname();
  const redirectedPathname = (locale: string) => {
    if (!pathname) return `/`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"sm"}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit font-sans" align="end">
        <DropdownMenuLabel>{content}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          {i18n.locales.map(locale => {
            return (
              <Link key={locale} href={redirectedPathname(locale)}>
                <DropdownMenuRadioItem value={locale}>{locale === "fr" ? "Français" : "English"}</DropdownMenuRadioItem>
              </Link>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
