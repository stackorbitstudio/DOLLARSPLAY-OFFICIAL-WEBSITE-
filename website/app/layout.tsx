
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DollarsPlay | Play More. Achieve More.",
  description:
    "Explore games, tasks, referrals and rewards with DollarsPlay.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
