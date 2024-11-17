import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import "./globals.css";
import apple_icon from "@/public/icons/apple-touch-icon.png";
import fav_icon from "@/public/icons/favicon-32x32.png";

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Alexander Peccin",
  description: "Full Stack Developer",
  icons: {
    icon: fav_icon.src,
    apple: apple_icon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
