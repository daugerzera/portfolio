'use client';
import Image from "next/image";
import ap_icon from "@/public/icons/ap.svg";
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '../../i18n/routing';
import brazil_logo from "@/public/icons/brazil.svg";
import usa_logo from "@/public/icons/usa.svg";

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();   
  const currentLocale = useLocale();

  return (
    <header
      key={currentLocale} // Força a recriação do componente ao trocar idioma
      className="container max-w-5xl mx-auto border-b-[1px] border-[rgba(255,255,255,0.2)] py-3 px-2 lg:px-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Image src={ap_icon.src} width={24} height={24} alt={"Alexander Peccin"} className="w-5.5 h-5.5 sm:w-8 h-8 " />
        <nav className="flex space-x-2.5 sm:space-x-5">
          <a href="#about" className="text-gray-300 hover:text-purple-500 text-sm">{t('about')}</a>
          <a href="#skills" className="text-gray-300 hover:text-purple-500 text-sm">Skills</a>
          <a href="#portfolio" className="text-gray-300 hover:text-purple-500 text-sm">{t('projects')}</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-500 text-sm">{t('contact')}</a>
          <div className="flex gap-2">
            <Link href={pathname} locale="en">
              <Image
                src={usa_logo.src}
                alt={"Translate to English"}
                width={24}
                height={24}
                className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${
                  currentLocale !== 'en' ? 'opacity-50 hover:opacity-80' : ''
                }`}
              />
            </Link>
            <Link href={pathname} locale="pt">
              <Image
                src={brazil_logo.src}
                alt={"Traduzir para o Português"}
                width={24}
                height={24}
                className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${
                  currentLocale !== 'pt' ? 'opacity-50 hover:opacity-80' : ''
                }`}
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
