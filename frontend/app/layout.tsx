
import "./_lib/fonts-loader";
import "./globals.css";

export { metadata } from "./_config/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
