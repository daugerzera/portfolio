import { getRequestConfig } from 'next-intl/server';
import { languages } from './constants/language';
import { notFound } from 'next/navigation';

const locales = languages;

export default getRequestConfig(async ({ locale }) => {

  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});