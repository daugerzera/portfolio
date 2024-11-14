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
            <p className="text-justify leading-relaxed">{`Olá, sou o Gabriel, um jovem de 23 anos apaixonado pela música, animais e pela leitura. 
           Com foco em Frontend e uma jornada de 2 anos cursando Engenharia de Software e aprimorando minhas habilidades em HTML, CSS e JavaScript,
           além de frameworks modernos como React, busco integrar uma equipe de desenvolvimento onde possa aplicar minhas competências técnicas.
           Meu objetivo é criar interfaces intuitivas e experiências de usuário envolventes, alavancando boas práticas de design para desenvolver soluções eficientes e acessíveis.
           Estou sempre buscando aprender, evoluir e contribuir para projetos que desafiem minha capacidade. 
           Apesar de no momento estar focado no Frontend eu pretendo me tornar um desenvolvedor Full Stack.`}
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
