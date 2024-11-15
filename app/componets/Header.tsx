import Image from "next/image";
import ap_icon from "@/public/icons/ap.svg";

export default function Header() {
  return (
    <header className="container max-w-5xl mx-auto border-b-[1px] border-[rgba(255,255,255,0.2)] py-4 px-2 lg:px-0">
      <div className="container mx-auto flex items-center justify-between">
        <Image src={ap_icon.src} width={50} height={50} alt={"Alexander Peccin"} className="w-8 h-8" />
        <nav className="flex space-x-5">
          <a href="#home" className="text-gray-300 hover:text-purple-500 text-sm">Home</a>
          <a href="#about" className="text-gray-300 hover:text-purple-500 text-sm">Sobre</a>
          <a href="#skills" className="text-gray-300 hover:text-purple-500 text-sm">Skills</a>
          <a href="#portfolio" className="text-gray-300 hover:text-purple-500 text-sm">Portfólio</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-500 text-sm">Contato</a>
        </nav>
      </div>
    </header>
  );
}
