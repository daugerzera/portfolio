import createMiddleware from 'next-intl/middleware';
import { languages } from './constants/language';

export default createMiddleware({
    locales: languages,
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|pt)/:path*']
};