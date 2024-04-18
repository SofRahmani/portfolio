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
  ariaLabelLang: string;
  ariaLabelTheme: string;
}

export default function SettingsNav({ content, lang, lightLabel, darkLabel, ariaLabelLang, ariaLabelTheme }: SettingNavProps) {
  return (
    <div className=" flex flex-row items-center justify-end gap-2 ">
      <ModeToggle lightLabel={lightLabel} darkLabel={darkLabel} ariaLabel={ariaLabelTheme} />
      <ToggleLaguage content={content} lang={lang} ariaLabel={ariaLabelLang} />
    </div>
  );
}
