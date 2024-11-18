import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { languages } from './language';

export const routing = defineRouting({
  locales: languages,
  defaultLocale: 'en',
  localeDetection: false
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);