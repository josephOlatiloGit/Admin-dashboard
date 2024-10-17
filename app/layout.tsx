import type { Metadata } from "next";
import "./globals.css";
import { Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "GidiSquare App",
  description: "GidiSquare admin app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <main className="h-screen flex flex-col justify-center items-center">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
