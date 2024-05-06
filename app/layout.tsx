import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thence Assessment Project",
  description: "This is an assessment project for Thence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${inter.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
