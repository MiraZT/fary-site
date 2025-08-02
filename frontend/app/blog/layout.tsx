"use client";

import { Suspense } from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex flex-row flex-nowrap justify-center items-center text-center p-4 m-1 mb-12 rounded-xl bg-[var(--background-card)] ring-1 ring-[var(--foreground)]">
        Фейри 🧡
      </header>
      {children}
    </>
  );
}
