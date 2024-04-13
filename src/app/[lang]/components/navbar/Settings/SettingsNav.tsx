import { ToggleLaguageProps } from "@/types/ToggleLanguageType";
import { ToggleLaguage } from "./LanguageSelector";
import { ModeToggle } from "./ToggleDarkMode";

export default function SettingsNav({ content, lang }: ToggleLaguageProps) {
  return (
    <div className=" flex flex-row items-center justify-center gap-2 ">
      <ModeToggle />
      <ToggleLaguage content={content} lang={lang} />
    </div>
  );
}
