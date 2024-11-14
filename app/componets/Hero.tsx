import Image from "next/image";
import alex_photo from "@/public/foto_alex.png";
import github_icon from "@/public/icons/github_white.svg";
import linkedin_icon from "@/public/icons/linkedin_white.svg";

export default function Hero() {
  return (
    <section id="home" className="bg-neutral-700 shadow-md p-6 container max-w-5xl sm:rounded-lg m-3 flex justify-between">
      <div>
        <h2 className="text-[1.20rem] md:text-2xl font-semibold">Olá, eu sou o Alexander Peccin</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-purple-500 mt-2 whitespace-pre-line">Desenvolvedor {'\n'} Full Stack</h3>
        <button className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600">
          <a href="#contact">Contate-me</a>
        </button>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/daugerzera" target="_blank" rel="noopener noreferrer">
            <Image src={github_icon.src} width={10} height={10} alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/alexander-peccin-616192106/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedin_icon.src} width={40} height={40} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="hidden md:block mr-10" >
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
