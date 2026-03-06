import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coordination Layer | Trust-Backed Reputation for Stacks",
  description:
    "A reputation-backed coordination infrastructure for the Stacks ecosystem. Work becomes the proof of credibility.",
  keywords: [
    "Stacks",
    "Bitcoin",
    "Web3",
    "Reputation",
    "Coordination",
    "Grants",
  ],
  authors: [{ name: "BlockBoard" }],
  openGraph: {
    title: "Coordination Layer | Stacks Ecosystem",
    description:
      "Trust-backed reputation for Stacks builders and contributors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
