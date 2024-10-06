import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Solve X",
  description: "Enrich your Programming Skills with Artifical Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#1d2021]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
