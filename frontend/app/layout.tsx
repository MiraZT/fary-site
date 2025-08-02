import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s • FarySD",
    default: "Официальный сайт FarySD",
  },
  description:
    "FarySD — место, где творчество раскрывается по-новому. Помни, что лучше — вместе!",
  creator: "Valentin (lanvalird) Bird",
  keywords: [
    "FarySD",
    "FSD",
    "Фейри",
    "ФСД",
    "ФейриСД",
    "ФэриЭсДи",
    "Магия",
    "Magic",
    "Ролеплей",
    "RolePlay",
    "RP",
    "Психология",
    "Official site",
    "Официальный сайт",
    "MiraZT",
    "lanvalird",
    "Valentin Bird",
    "Сервер Minecraft",
    "Сервер Майнкрафт",
  ],
  openGraph: {
    type: "website",
    title: "Официальный сайт FarySD",
    description:
      "FarySD — место, где творчество раскрывается по-новому. Помни, что лучше — вместе!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
