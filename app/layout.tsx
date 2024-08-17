import type { Metadata } from "next";
import { Playfair_Display_SC, Lato } from "next/font/google";
import "./globals.css";

const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-playfair",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Barber Shop",
  description:
    "Barber shop, the place where you'll get a new cut and become a new person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairSC.className} ${lato.className}`}>
        {children}
      </body>
    </html>
  );
}
