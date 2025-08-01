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
      <Suspense fallback={<div>LOADING</div>}>{children}</Suspense>
    </>
  );
}

function Loading() {
  return (
    <main className="mx-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <section className="flex flex-col justify-center items-center text-center p-4 m-1 mb-16 rounded-xl bg-[var(--background-card)] ring-1 ring-[var(--foreground)]">
        <h1 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
          Загрузка
        </h1>
        <p>Да-да, контент загружается</p>
      </section>
    </main>
  );
}
