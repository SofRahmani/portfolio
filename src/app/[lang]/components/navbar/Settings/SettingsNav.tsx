import { ToggleLaguageProps } from "@/types/ToggleLanguageType";
import { ToggleLaguage } from "./LanguageSelector";
import { ModeToggle } from "./ToggleDarkMode";
import { Locale } from '../../../../../../i18n.config'; 

export interface SettingNavProps {
  content: string;
  lang: Locale;
  lightLabel: string;
  darkLabel: string;
  systemLabel: string;
}

export default function SettingsNav({ content, lang, lightLabel, darkLabel, systemLabel }: SettingNavProps) {
  return (
    <div className=" flex flex-row items-center justify-end gap-2 ">
      <ModeToggle lightLabel={lightLabel} darkLabel={darkLabel} systemLabel={systemLabel} />
      <ToggleLaguage content={content} lang={lang} />
    </div>
  );
}
