import Image from "next/image";
import aspas_icon from "@/public/aspas.svg";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="container max-w-5xl mx-auto flex flex-col mt-[1rem] px-[1rem] lg:px-0 md:pt-[1rem] mb-[2rem] gap-3">
      <div className="flex justify-between">
        <h2 className="text-[1.2rem] md:text-[1.5rem] font-oleo-script">
          {t('goodToHaveYou')}
        </h2>
        <Image src={aspas_icon} width={50} height={50} alt={""} className="w-6 md:w-8 lg:w-10" />
      </div>
      <div className="flex flex-col md:flex-row pr-[1.5rem] md:pr-[2.5rem] lg:pr-[4.5rem] gap-[1rem] md:gap-[3.5rem]">
        <div className="flex-1 flex flex-col gap-[1rem]">
          <p className="text-[0.875rem]">
            {t('p1')}
          </p>
          <p className="text-[0.875rem]">
            {t('p2')}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-[1rem]">
          <p className="text-[0.875rem]">
            {t('p3')}
          </p>
          <p className="text-[0.875rem]">
            {t('p4')}
          </p>
        </div>
      </div>
    </section>
  );
}
