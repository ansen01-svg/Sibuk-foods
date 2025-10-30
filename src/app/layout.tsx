import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Knewave, Roboto, Staatliches } from "next/font/google";
import "./globals.css";

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-staatliches",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const knewave = Knewave({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-knewave",
});

export const metadata: Metadata = {
  title: "Sibuk",
  description: "Sibuk - Foods and bevarages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${staatliches.variable} ${knewave.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
