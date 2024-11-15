import Image from "next/image";
import aspas_icon from "@/public/aspas.svg";

export default function About() {
  return (
    <section id="about" className="container max-w-5xl mx-auto flex flex-col mt-[1rem] px-[1rem] lg:px-0 md:pt-[1rem] mb-[2rem] gap-3">
      <div className="flex justify-between">
        <h2 className="text-[1.2rem] md:text-[1.5rem] font-oleo-script">
          Que bom ter você por aqui
        </h2>
        <Image src={aspas_icon} width={50} height={50} alt={""} className="w-6 md:w-8 lg:w-10" />
      </div>
      <div className="flex flex-col md:flex-row pr-[1.5rem] md:pr-[2.5rem] lg:pr-[4.5rem] gap-[1rem] md:gap-[4rem]">
        <div className="flex flex-col gap-[1rem]">
          <p className="text-[0.875rem]">
            {`Sou Alexander Peccin, apaixonado por música, natureza e tecnologia. 
              Com mais de 10 anos de experiência em TI, sendo 5 dedicados à programação, 
              trabalho como Full Stack porque gosto de entender o funcionamento 
              completo das soluções que desenvolvo.`}
          </p>
          <p className="text-[0.875rem]">
            {`Atualmente, foco no Frontend, onde me especializo em frameworks como React e NextJS,
              mas também trago uma bagagem sólida em Backend e habilidades de comunicação 
              para colaborar em diferentes áreas dos projetos.`}
          </p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-[0.875rem]">
            {`Meu objetivo é fazer parte de uma equipe onde possa não só aplicar minhas competências técnicas, 
              mas também aprender com o time e contribuir para desafios que me motivem a evoluir.`}
          </p>
          <p className="text-[0.875rem]">
            {`Acredito que o aprendizado constante e o trabalho em equipe são essenciais para o
              desenvolvimento de soluções impactantes, e estou sempre em busca de novos 
              conhecimentos e oportunidades de crescimento.`}
          </p>
        </div>
      </div>
    </section>
  );
}
