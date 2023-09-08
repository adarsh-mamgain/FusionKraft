import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FusionKraft",
  description:
    "FusionKraft is an progressive web app showcasing functions used on a website like authentication, ReactJS hooks like useEffect, useState, useRef, lazy loading, async loading, loading pages, skeleton ui.",
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
