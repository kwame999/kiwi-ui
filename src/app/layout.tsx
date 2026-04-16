import type { Metadata } from "next";
import NavigationBar from "@/components/site/NavigationBar";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Kiwi UI",
  description: "Open-source React component library with micro-interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={cn("font-sans", geist.variable)}>
      <body className="flex h-dvh flex-col overflow-hidden antialiased">
        <NavigationBar></NavigationBar>
        <main className="min-h-0 flex-1">{children}</main>
      </body>
    </html>
  );
}
