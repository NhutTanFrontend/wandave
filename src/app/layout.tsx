import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import AboveHeader from "@/components/homepage/AboveHeader";
import ContactIcon from "@/components/ContactIcon/page";

const inter = Inter({
  subsets: ['vietnamese'], weight: [
    '100', '300', '400', '500', '600', '700', '800', '900'
  ]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="#"></link>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AboveHeader />
        <Header />
        {children}
        <Footer />
        <ContactIcon />
      </body>
    </html>
  );
}
