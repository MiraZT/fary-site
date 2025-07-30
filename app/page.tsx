"use client";

import Image from "next/image";

const links = [
  {
    name: "cайт автора",
    href: "https://lanvalird.ru",
  },
  {
    name: "telegram проекта",
    href: "https://t.me/farysd_minecraft",
  },
  {
    name: "vk проекта",
    href: "https://vk.com/farysd",
  },
];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Image
        className="relative z-[-1]"
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
          className="px-4 py-2 rounded-lg"
          style={{
            backgroundColor: "rgba(255 255 250 / 0.10)",
            color: "#fffcfb",
            fontWeight: 200,
          }}
        >
          <span>Мир алых грёз, белых надежд и ярких мечт</span>
        </div>
      </main>

      <footer
        className="row-start-3 flex gap-3 flex-wrap items-center justify-center"
        style={{
          fontWeight: 500,
        }}
      >
        {links.map(({ name, href }, index) => (
          <a
            className="opacity-40 hover:opacity-100 p-4"
            href={href}
            key={index}
            target="_blank"
          >
            {name}
          </a>
        ))}
      </footer>
    </div>
  );
}
