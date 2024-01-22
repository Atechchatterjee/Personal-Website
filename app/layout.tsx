import type { Metadata } from "next";
import "./globals.css";
import { ibm_plex_mono } from "./font";

export const metadata: Metadata = {
  title: "Anish Chatterjee",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className}>{children}</body>
    </html>
  );
}
