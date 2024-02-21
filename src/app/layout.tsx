import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header";

export const metadata: Metadata = {
  title: "Netzet",
  description: "Parenting community",
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
