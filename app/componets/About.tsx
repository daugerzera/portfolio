import Image from "next/image";
import aspas_icon from "@/public/aspas.png";

export default function About() {
  return (
    <section id="about" className="bg-neutral-700 shadow-md p-6 container max-w-5xl sm:rounded-lg m-3 flex flex-col gap-2">
      <div className="flex gap-2 md:gap-8 lg:gap-12">
        <div className="flex">
          <div className="border-l-2 border-white mr-4"></div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.20rem] md:text-2xl font-semibold">Sobre Mim</h2>
            <p className="text-justify leading-relaxed">{`Que bom ver você por aqui! Me chamo Alexander Peccin, apaixonado por música, natureza e tecnologia! 
           Com foco em Full Stack (tenho a necessidade de saber como tudo funciona), carrego a experiência de mais de 10 anos em TI, sendo 5 anos dedicados na programação. Recentemente tenho aprimorado minhas habilidades em Frontend, 
           estudando frameworks modernos como React e NextJS. Apesar de no momento estar focado no Frontend tenho muito conhecimento em Backend e uma ótima comunicação, o que me permite cooperar em diversas áreas com projetos e clientes. 
           Meu atual objetivo é integrar uma equipe de desenvolvimento onde possa aplicar minhas competências técnicas e, mais do que tudo, aprender trocando experiências com a equipe.
           Estou sempre buscando aprender, evoluindo e contribuindo com projetos que desafiem minha capacidade.`
           }
            </p>
          </div>
        </div>
        <div className="-mt-3 -mr-3">
          <Image src={aspas_icon} width={400} height={400} alt={""} />
        </div>
      </div>
    </section>
  );
}
