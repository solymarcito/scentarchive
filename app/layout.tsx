import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Courier_Prime } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jost",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: "ScentArchive — your scent has always existed",
  description:
    "An AI-powered identity-archive perfume brand. Every person owns a unique scent identity file reflecting their memories, personality, and life narrative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${courier.variable}`}
    >
      <body className="font-jost antialiased">
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
