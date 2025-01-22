import type { Metadata } from "next";
import "./globals.css";
import { Inria_Sans } from 'next/font/google'
import "@radix-ui/themes/styles.css";

const font = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Prodigy",
  description: "Platform Tryout dan Latihan Soal SNBT Terbaik di Indonesia! Jadi #AnakProdigy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
