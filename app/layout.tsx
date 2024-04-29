import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Poiret_One } from "next/font/google";

const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Caro Adamska",
  description: "Caro Adamska Stylist and Make-Up Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poiretOne.className}>
        <Header />
        <div className="flex flex-wrap justify-center pt-8 pb-12 md:pb-24 max-w-7xl mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
