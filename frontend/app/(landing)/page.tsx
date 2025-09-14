"use client";

import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

const links = [
  {
    name: "вики",
    href: "https://wiki.fary.lanvalird.ru",
  },
  {
    name: "автор",
    href: "https://lanvalird.ru",
  },
  {
    name: "telegram канал",
    href: "https://t.me/farysd_minecraft",
  },
  {
    name: "сообщество vk",
    href: "https://vk.com/farysd",
  },
];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Image
        className="relative z-[-1] object-center object-cover"
        src="/background.jpg"
        alt="FarySD logo"
        fill
      />

      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center ">
        <Image
          className="border-none rounded-lg aspect-square h-32 w-32"
          src="/logo.png"
          alt="FarySD logo"
          width={156}
          height={156}
          priority
        />
        <div
          className="max-w-[450px] px-4 py-2 rounded-md text-center"
          style={{
            backgroundColor: "rgba(255 255 250 / 0.10)",
            color: "#fffcfb",
            fontWeight: 200,
          }}
        >
          <code>
            mc.fary.lanvalird.ru<span className="opacity-60">:20709</span>
          </code>
        </div>
      </main>

      <footer
        className="row-start-3 flex gap-3 flex-wrap items-center justify-center text-center"
        style={{
          fontWeight: 500,
        }}
      >
        {links.map(({ name, href }, index) => (
          <Button key={index} variant={"link"} asChild>
            <a href={href} target="_blank">
              {name}
            </a>
          </Button>
        ))}
      </footer>
    </div>
  );
}
