import { Button } from "@/shared/components/ui/button";

const links = [
  {
    name: "Основные правила",
    href: "/legal/terms",
  },
  {
    name: "Правила сообщества",
    href: "/legal/community",
  },
  {
    name: "Правила игры",
    href: "/legal/game",
  },
  
  {
    name: "Чёрный словарь",
    href: "/legal/black-dictionary",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-6 py-4">
      <nav className="flex gap-3 flex-wrap items-start justify-center text-center">
        {links.map(({ name, href }, index) => (
          <Button key={index} variant={"link"} asChild>
            <a href={href}>
              {name}
            </a>
          </Button>
        ))}
        </nav>

      <section className="flex flex-col px-6 py-4 gap-6 bg-sidebar rounded-xl">
        {children}
      </section>
    </main>
  );
}
