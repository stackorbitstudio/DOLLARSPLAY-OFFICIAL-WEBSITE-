
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DollarsPlay | Play. Complete. Earn.",
  description:
    "Discover games, complete tasks and explore rewards with DollarsPlay."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
