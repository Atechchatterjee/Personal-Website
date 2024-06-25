import type { Metadata } from "next";
import "./globals.css";
import { ibm_plex_sans, inter, space_grotesque } from "./font";

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
      <link rel="icon" href="/logo-dark.jpg" sizes="any" />
      <body className={space_grotesque.className}>{children}</body>
    </html>
  );
}
