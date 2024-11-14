import Image from "next/image";
import whatsapp_icon from "@/public/icons/whatsapp.svg";
import mail_icon from "@/public/icons/mail.svg";
import maps_icon from "@/public/icons/maps.svg";
import github_icon from "@/public/icons/github_white.svg";
import linkedin_icon from "@/public/icons/linkedin_white.svg";

type ContactLineType = {
  icon: string;
  text: string;
  alt: string;
  link?: string;
}

const ContactLine: React.FC<ContactLineType> = ({ icon, text, alt, link }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-purple-500 w-11 h-11 flex items-center justify-center">
        <Image src={icon} width={25} height={25} alt={alt} />
      </div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[1.25rem] font-semibold text-white hover:underline cursor-pointer"
        >
          {text}
        </a>
      ) : (
        <h3 className="text-[1.25rem] font-semibold">{text}</h3>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-700 shadow-md py-4 container max-w-5xl px-4 sm:rounded-lg m-3 md:mb-8 md:p-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Contato</h2>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <ContactLine icon={whatsapp_icon.src} text={"+55 (41) 99171-2115"} alt={"Phone Number"} link={"https://wa.me/5541991712115"} />
          <ContactLine icon={mail_icon.src} text={"alexanderpeccin@gmail.com"} alt={"E-mail"} />
          <ContactLine icon={maps_icon.src} text={"Florianópolis - SC - Brasil"} alt={"Address"} />
        </div>
        <div className="flex space-x-4 mt-4 items-end">
          <a href="https://github.com/daugerzera" target="_blank" rel="noopener noreferrer">
            <Image src={github_icon.src} width={40} height={40} alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/alexander-peccin-616192106/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedin_icon.src} width={40} height={40} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
