import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import "../globals.css";
import apple_icon from "@/public/icons/apple-touch-icon.png";
import fav_icon from "@/public/icons/favicon-32x32.png";
import NotFound from "./not-found";

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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    NotFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} className={workSans.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
