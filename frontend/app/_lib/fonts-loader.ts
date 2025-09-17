import { Ubuntu, Ubuntu_Sans, Ubuntu_Sans_Mono } from "next/font/google";

const sans = Ubuntu_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
});

const serif = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
});

const mono = Ubuntu_Sans_Mono({
  weight: ["400"],
  subsets: ["cyrillic", "latin"],
});

export default function loaded() {
  return { sans, serif, mono };
}
