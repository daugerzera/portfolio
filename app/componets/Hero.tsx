import Image from "next/image";
import alex_photo from "@/public/foto_alex.png";
import github_icon from "@/public/icons/github_white.svg";
import linkedin_icon from "@/public/icons/linkedin_white.svg";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section id="home" className="container mx-auto max-w-5xl flex justify-between mt-[1rem] md:mt-[3rem] md:gap-5 px-[1rem] sm:px-[3rem]">
      <div>
        <h3 className="text-[1.2rem] md:text-[1.5rem] font-oleo-script">
        {t('hello')} <span className="text-[#A855F7]">{t('name')}</span>
        </h3>
        <h2 className="text-[2.75rem] md:text-[3.2rem] lg:text-[4rem] font-bold text-white mt-[0.5rem] whitespace-pre-line leading-none">
        {t('role1')} {'\n'} {t('role2')}
        </h2>
        <div className="flex mt-6 gap-[1rem] items-center">
          <button className="bg-purple-500 text-white px-6 py-2 font-semibold hover:bg-purple-600">
            <a href="#contact">{t('contact')}</a>
          </button>
          <div className="flex space-x-[1rem]">
            <a href="https://github.com/daugerzera" target="_blank" rel="noopener noreferrer">
              <Image src={github_icon.src} width={10} height={10} alt="GitHub" className="w-[1.5rem] h-[1.5rem]" />
            </a>
            <a href="https://www.linkedin.com/in/alexander-peccin-616192106/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedin_icon.src} width={40} height={40} alt="LinkedIn" className="w-[1.5rem] h-[1.5rem]" />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-17" >
        <Image
          src={alex_photo}
          alt={"Alex photo"}
          width={250}
          height={250}
          className="rounded-full" />
      </div>
    </section>
  );
}
