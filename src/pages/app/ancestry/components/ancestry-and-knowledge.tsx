import ancestryHeroBackground from "../../../../assets/ancestralidade-hero.png"

export function AncestryAndKnowledge() {
  return (
    <section
      className="bg-cover bg-center relative"
      style={{ backgroundImage: `url(${ancestryHeroBackground})` }}
    >
      <div
        className="absolute inset-0 z-10 h-full"
        style={{
          background: `linear-gradient(180deg, rgba(124, 168, 110, 0) 40.3%, rgba(82, 110, 72, 0.6) 51.67%,
        rgba(64, 86, 56, 0.801996) 58.52%, rgba(58, 79, 52, 0.870488) 65.77%, rgba(55, 74, 48, 0.891802) 71.01%, 
        rgba(54, 72, 47, 0.9) 73.02%, #31412B 80.6%)`,
        }}
      ></div>

      <div className="mt-24 flex px-40 justify-between relative z-20 mb-16">
        <div className="w-[35rem] space-y-5">

          <div className="w-[30rem] space-y-5">
            <h2 className="text-4xl font-normal">
              Ancestralidade, saberes e fazeres tradicionais dos intelectuais quilombolas de Alcântara - MA
            </h2>

            <h3 className="text-lg font-light ">história não escrita da resistência cotidiana em suas diferentes fronteiras</h3>
          </div>


          <p className="text-justify font-normal text-xl">
            A articulação dos saberes tradicionais com a ancestralidade, os fazeres cotidianos,
            o uso comum  coletivo dos recursos naturais, a rede de solidariedade e interdependência
            entre os quilombos  de Alcântara, a reprodução social e cultural dos quilombolas,
            são atos de resistência no território  étnico. As formas de resistência não devem ser
            vistas apenas a partir da ótica de movimentos  amplos. A observação das atividades
            cotidianas dos intelectuais quilombolas, se constituem  formas de luta e resistência
            em ações coletivas que asseguram a permanência no território,  reforçando as relações de
            coexistência e solidariedade entre os quilombos.
          </p>

        </div>

        <div className="flex flex-col gap-2 self-end">
          <span className="italic font-light text-4xl">"A gente não é só a casa!"</span>
          <span className="text-lg font-medium text-right"> - Maria de Graça Amorim, 64 anos</span>
          <span className="text-lg font-medium text-right">quilombo Prainha</span>
        </div>
      </div>


      <div className="relative z-20 space-y-8 px-40">
        <h2 className="font-normal text-4xl">Áreas de roça</h2>

        <p className="text-xl text-justify">
          A produção agrícola dos quilombos de Alcântara é uma atividade  pautada na relação com a
          ancestralidade e pelas regras de uso comum  dos recursos naturais. As áreas de roça não
          são cercadas e os  intervalos de descanso do solo para recuperar sua capacidade  produtiva
          são observados pelos quilombolas. As capoeiras que são as  áreas utilizadas anteriormente
          e que estão em descanso, necessitam,  a partir da observação dos quilombolas, de um intervalo
          de tempo  estimado entre 7 e 10 anos para completar o ciclo de regeneração do  solo. Com a
          implantação do CLA, as áreas de roça foram  consideravelmente reduzidas, afetando diretamente
          não apenas as famílias deslocadas compulsoriamente para as agrovilas, mas as unidades familiares
          do demais  quilombos.
        </p>

        <div className=" flex flex-col gap-2 pr-28 ">
          <span className="italic font-light text-4xl">"Tem uma área que é comum, uso comum, vai usando de acordo com o que precisa, ninguém  briga, discute por causa de terra não!"</span>
          <span className="text-lg font-medium">- Sebastiana Alves Costa, 38 anos, quilombola da agrovila Só Assim.</span>
        </div>

        <p className="text-xl text-justify">
          Com a implantação do Centro de Lançamento de Alcântara, as áreas  de roça foram reduzidas, afetando diretamente
          as famílias, contribuindo  para a permanência da insegurança alimentar nos quilombos. O  estabelecimento de
          lotes fixos tornou-se um entrave para as famílias,  afetando as práticas agrícolas de plantio da mandioca,
          arroz, milho e a  fabricação de farinha. A insegurança alimentar passou a fazer parte do  cotidiano das
          famílias que também ficaram sem acesso ao mar e aos  igarapés, em razão do deslocamento compulsório
          para as agrovilas.
        </p>

        <div className="flex flex-col gap-2 items-end pb-24">
          <span className="italic font-light text-4xl text-left">"O mato é novo, mas a terra é velha!"</span>
          <span className="text-xl font-medium text-left">- Aniceto Araújo Pereira, Quilombo Oitiua</span>
        </div>

      </div>
    </section>
  );
}