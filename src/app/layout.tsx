import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { AdminShell } from "@/components/layout/admin-shell";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Technitest Admin",
  description: "Technitest administration panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
