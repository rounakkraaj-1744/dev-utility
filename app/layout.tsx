import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utility Toolkit | All-in-one developer tools",
  description: "A minimal, offline-first collection of essential tools for everyday development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0c] text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
