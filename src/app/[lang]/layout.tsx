import type { Metadata } from "next";
import { inter, roboto_mono } from "../style/fonts";
import { ThemeProvider } from "./providers";
import "../style/globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}