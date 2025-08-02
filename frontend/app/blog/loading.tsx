export default function BlogLoading() {
  return (
    <main className="mx-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <section className="animate-pulse flex flex-col justify-center items-center text-center p-4 m-1 mb-16 rounded-xl bg-[var(--background-card)] ring-1 ring-[var(--foreground)]">
        <h1 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
          Загрузка
        </h1>
        <p>Да-да, контент загружается</p>
      </section>
    </main>
  );
}
