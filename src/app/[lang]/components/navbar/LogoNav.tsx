"use client";
import { useStoreTheme } from "@/store/theme.store";
import Image from "next/image";
import LogoBlack from "../../../../../public/logo-black.svg";
import LogoWhite from "../../../../../public/logo-white.svg";

export default function LogoNav() {
  const { theme } = useStoreTheme();

  return (
    <Image
      src={theme === "light" ? LogoBlack : LogoWhite}
      alt="Sofiane Rahmani's logo"
      width={60}
      height={60}
    />
  );
}
