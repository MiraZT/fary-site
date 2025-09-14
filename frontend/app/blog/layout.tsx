import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex flex-row flex-nowrap justify-center items-center text-center p-4 m-1 mb-12 rounded-xl bg-[var(--background-card)] ring-1 ring-[var(--foreground)]">
        <Link href="/blog">Фейри 🧡</Link>
      </header>
      {children}
    </>
  );
}
