import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clipflow — Ecossistema de clipadores",
  description: "Landing page para criadores e clipadores de conteúdo curto.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
