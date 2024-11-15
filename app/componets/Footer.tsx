import Image from "next/image";
import phone_icon from "@/public/icons/phone.svg";
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
    <div className="flex items-center gap-2">
      <Image src={icon} width={25} height={25} alt={alt} />
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.875rem] hover:underline cursor-pointer"
        >
          {text}
        </a>
      ) : (
        <h3 className="text-[0.875rem]">{text}</h3>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#121212] py-10 ">
      <div className="container max-w-5xl mx-auto flex flex-col px-[1rem] lg:px-0">
        <h2 className="text-[1.2rem] md:text-[1.5rem] font-oleo-script mb-5">
          Informações de contato
        </h2>
        <div className="flex justify-between lg:items-center">
          <div className="flex flex-col lg:flex-row gap-10">
            <ContactLine icon={phone_icon.src} text={"+55 (41) 99171-2115"} alt={"Phone Number"} link={"https://wa.me/5541991712115"} />
            <ContactLine icon={mail_icon.src} text={"alexanderpeccin@gmail.com"} alt={"E-mail"} />
            <ContactLine icon={maps_icon.src} text={"Florianópolis - SC - Brasil"} alt={"Address"} />
          </div>
          <div className="flex space-x-4 items-end">
            <a href="https://github.com/daugerzera" target="_blank" rel="noopener noreferrer">
              <Image src={github_icon.src} width={40} height={40} alt="GitHub" className="w-[1.5rem] h-[1.5rem]" />
            </a>
            <a href="https://www.linkedin.com/in/alexander-peccin-616192106/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedin_icon.src} width={40} height={40} alt="LinkedIn" className="w-[1.5rem] h-[1.5rem]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
