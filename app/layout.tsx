"use client";
import "./globals.css";
import { Inter } from "next/font/google";

import "atropos/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aguidom",
  description: "registrate al evento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
