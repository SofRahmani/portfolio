import type { Metadata } from "next";
import { Locale, i18n } from "../../../i18n.config";
import { inter, roboto_mono } from "../../style/fonts";
import "../../style/globals.css";
import NavBar from "./components/navbar/Navbar";
import { ThemeProvider } from "./providers";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  metadataBase: new URL("https://sofiane-rahmani.com/"),
  title: "Sofiane Rahmani - Portfolio",
  description:
    "Je suis Sofiane Rahmani, un développeur web frontend autodidacte passionné par la création d'expériences utilisateur exceptionnelles. Spécialisé dans React et Next.js, je m'efforce de combiner design et fonctionnalité pour développer des applications web dynamiques et performantes.",
  keywords: [
    "Sofiane Rahmani",
    "Développeur Web",
    "Frontend",
    "React",
    "Next.js",
    "Portfolio",
    "Tailwind"
  ],

  icons: {
    icon: "/favicon.ico"
  },

  openGraph: {
    type: "website",
    url: "https://sofiane-rahmani.com",
    title: "Developpeur Web Frontend",
    siteName: "Sofiane Rahmani - Portfolio",
    description:
      "Transformez vos idées en réalités numériques impressionnantes – je suis Sofiane Rahmani, votre développeur frontend spécialisé en création d'applications web modernes et performantes.",
    images: [
      {
        url: "https://sofiane-rahmani.com/card.jpg",
        secureUrl: "https://www.sofiane-rahmani.com/card.jpg",
        width: 1200,
        height: 630,
        alt: "Sofiane Rahmani - Portfolio's card image",
      },
    ],
  },
};


export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className=" !scroll-smooth selection:text-[#6d28d9] dark:selection:text-[#c084fc] " suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <header className=" sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 ">
            <NavBar lang={params.lang} />
          </header>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
