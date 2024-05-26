import type { Metadata } from "next";
import "./globals.css";
import { ibm_plex_mono, inter } from "./font";

export const metadata: Metadata = {
  title: "Anish Chattopadhyay",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
