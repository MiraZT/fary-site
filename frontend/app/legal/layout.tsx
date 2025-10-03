export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-6 py-4">
      <div className="flex flex-col px-6 py-4 gap-6 bg-sidebar rounded-xl">
        {children}
      </div>
    </main>
  );
}
