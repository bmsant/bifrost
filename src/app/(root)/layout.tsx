import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-stone-100 text-stone-900">
        <header className="bg-stone-800 text-white p-4">
        <nav className="flex flex-row gap-8 justify-end mr-16">
        <Link href="/signin">Sign-in</Link>
        <Link href="/signup">Sign-up</Link>
        </nav>
        </header>
        <div className="flex flex-1">
          <aside className="w-1/5 bg-stone-200 p-4">
            Left Sidebar
          </aside>
          <section className="flex-1 p-4">{children}</section>
          <aside className="w-1/5 bg-stone-200 p-4">
            Right Sidebar
          </aside>
        </div>
        <footer className="bg-stone-800 text-white p-4">
          Footer
        </footer>
      </body>
    </html>
  );
}