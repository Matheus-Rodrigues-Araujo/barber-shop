import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";


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
      <body className={`${lato.className}`}>
        {children}
      </body>
    </html>
  );
}
