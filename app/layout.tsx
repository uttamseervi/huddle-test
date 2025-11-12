import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HuddleProvider } from "./providers/HuddleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huddle01 Meeting",
  description: "Video conferencing powered by Huddle01",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HuddleProvider>{children}</HuddleProvider>
      </body>
    </html>
  );
}