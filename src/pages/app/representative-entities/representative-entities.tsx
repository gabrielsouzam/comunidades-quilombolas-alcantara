import PastaIcon from "./../../../assets/pasta.png"
import BarcosImage from "./../../../assets/barcosSimples2.jpg";

export function RepresentativeEntities() {
  return (
    <div className="flex flex-col w-full h-full text-base-white ">
      <div
        className="bg-cover bg-center bg-no-repeat h-[60.75rem] px-28"
        style={{ backgroundImage: `url(${BarcosImage})` }}
      >
        <div
          className="absolute inset-0 top-[-4rem] z-10 h-[190rem] w-full pointer-events-none"
          style={{
            background: `linear-gradient(
      180deg,
      rgba(207, 169, 125, 0.1) 10.68%,
      rgba(207, 169, 125, 0.3) 19.58%,
      rgba(207, 169, 125, 0.6) 26.6%,
      rgba(207, 169, 125, 0.7) 30.35%,
      rgba(107, 152, 82, 0.971698) 36.43%,
      #5F964D 36.44%,
      #35532B 47.67%,
      #2C4523 57.03%,
      #2C4524 62.64%,
      #20321A 75.75%,
      #20331A 75.76%,
      #1E2F19 85.11%
    )`
          }}
        ></div>

        <div className="relative z-20">
          <h1 className="text-terracota-red font-normal text-4xl mb-16 mt-20">
            Entidades representativas dos quilombolas do território  étnico de Alcântara
          </h1>

          <p className="text-base-brown text-xl text-justify mb-11">
            Frente as situações de conflito com o Centro de Lançamento de  Alcântara,
            os movimentos articulados em redes expressaram suas  formas organizativas,
            fortalecendo o sentido coletivo dos agentes  sociais por meio de organizações
            locais estruturadas, a exemplo do  Sindicato dos Trabalhadores e Trabalhadoras
            Rurais de Alcântara - STTR, que fundado nos anos 1960, congregou a representação
            de  vários trabalhadores rurais, funcionando como órgão de apoio a e
            desenvolvendo ações reivindicatórias, posicionando-se como um  condutor
            das demandas dos agentes sociais afetados pelo CLA,  realizando intensas negociações
            e intervenções no plano jurídico. Em  2006, deu-se a fundação do Sindicato dos
            Trabalhadores e  Trabalhadoras na Agricultura Familiar de Alcântara (SINTRAF),
            entidade sindical que agregou demandas e fortaleceu a luta pelo  território.
          </p>

          <div className="grid grid-cols-10 gap-8 mb-10">

            <div className="col-span-5 space-y-11">
              <p className="text-base-brown text-xl text-justify">
                Dentre as ações reivindicatórias, estão as mobilizações dos quilombolas
                por meio da realização de seminários, encontros periódicos, reuniões e
                audiências públicas, favorecendo o contato e apropriação por parte dos
                quilombolas dos elementos jurídicos que fortaleceram suas lutas. Em 1992,
                deu-se a construção do movimento organizado a partir das mobilizações em
                Alcântara, denominado Movimento das Mulheres Trabalhadoras Rurais - MOMTRA
                para discutir as questões relativas a gênero e fortalecer a luta pela
                garantia do território.
              </p>
              <p className="text-base-brown text-xl text-justify">
                Dentre as ações reivindicatórias, estão as mobilizações dos quilombolas
                por meio da realização de seminários, encontros periódicos, reuniões e
                audiências públicas, favorecendo o contato e apropriação por parte dos
                quilombolas dos elementos jurídicos que fortaleceram suas lutas. Em 1992,
                deu-se a construção do movimento organizado a partir das mobilizações em
                Alcântara, denominado Movimento das Mulheres Trabalhadoras Rurais - MOMTRA
                para discutir as questões relativas a gênero e fortalecer a luta pela
                garantia do território.
              </p>
            </div>

            <div className="col-span-1" />

            <div className="col-span-4 flex flex-col gap-3 self-end text-base-brown">
              <span className="italic font-light text-4xl text-right">
                “A gente tem que construir uma consciência que pra gente construir, tem que tá reunidos!”
              </span>
              <span className="text-lg font-medium text-right">
                - Sebastiana Alves Costa, 38 anos,
              </span>
              <span className="text-lg font-medium text-right">
                agrovila Só Assim
              </span>
            </div>
          </div>
          <div className="col-span-5 space-y-8">
            <p className="text-white text-xl text-justify">
              No período compreendido entre 11 e 14 de maio de 1999, os  quilombolas de Alcântara por iniciativa do STTR
              realizaram o  Seminário Alcântara: A Base Espacial e os Impasses Sociais. Esse  seminário fomentou discussões
              acerca das formas de mobilização  dos quilombolas no que se referia à terceira fase do processo de  implantação
              do CLA e sobre os deslocamentos compulsórios das 312  famílias para as agrovilas. A partir das observações
              realizadas no  Seminário de 99, o conflito com o CLA passou a ser analisado pelos
              quilombolas como um problema que extrapolava a questão agrária e  se estendia à questão étnica.
            </p>
            <p className="text-white text-xl text-justify ">
              Nesse contexto, agregando o componente étnico, se originou o  Movimento dos Atingidos pela Base Espacial – MABE,
              fundado em  julho de 2001 e que congrega representações de
              pelo menos 139  comunidades, localizadas nos 62 mil hectares da área desapropriada  para instalação do CLA.
            </p>
          </div>
          <div
            className="flex flex-col px-10 py-10 mt-10 justify-between h-[407px]"
            style={{
              backgroundColor: "#222F1B",
              color: "#CCAC85",
              borderRadius: "30px",
            }}
          >
            <h2 className="text-2xl font-bold text-center w-full mb-4">
              Explicação Componente Étnico
            </h2>
            <div className="flex-grow flex">
              <p className="text-lg">Descrição...</p>
            </div>
          </div>
          <div className="col-span-5 space-y-8 mt-8"
          style={{
            color: "#F5F5DC",
            borderRadius: "30px",
          }}
          >
            <p className="text-white text-xl text-justify">
              O STTR de Alcântara após a criação do MABE continua reforçando a  pauta de reivindicação dos quilombolas,
              contribuindo de modo ativo  nas ações de afirmação étnica. Tanto o MABE quanto o STTR  possuem suas especificidades
              em relação às demandas que surgem  frente às situações de conflito, mas atuam em parceria na luta pela  garantia
              dos direitos territoriais dos quilombolas de Alcântara. O  processo de luta permanente do MABE propiciou o
              fortalecimento do  movimento de defesa do território étnico, o amadurecimento das
              estratégias de atuação e a intensificação do uso dos saberes tradicionais cotidianos como formas  de resistência.
            </p>
            <p className="text-white text-xl text-justify ">
              Nos dias 24 e 25 de novembro de 2017, as entidades representativas realizaram o II Seminário  Alcântara: a Base
              Espacial e os Impasses Sociais e intensificaram a luta pela manutenção do  território étnico, criando em 2019,
              outra entidade representativa intitulada Associação do  Território Étnico Quilombola de Alcântara – ATEQUILA.
              O processo de criação deu-se após a  realização de oficinas de consulta realizadas nos quilombos do território
              étnico de Alcântara,  reunindo cerca de 600 quilombolas que discutiram sobre o processo de mobilização política
              e autonomia da associação, reivindicação dos direitos sobre o território étnico, identidade e  domínio político
              acerca dos saberes tradicionais e da luta em defesa da titulação definitiva do  território étnico de Alcântara – MA.
            </p>
          </div>
          <div className="text-right mb-6 mt-8"
          style={{
            color: "#F5F5DC",
            borderRadius: "30px",
          }}
          >
            <p className="italic text-2xl font-light">
              “Eu não sei ler, mas não é por isso, que eu não vou me defender!”
            </p>
            <p className="text-lg font-semibold mt-2">
              - Catarina Josefa Ribeiro, 63 anos, quilombo Samucangaua
            </p>
          </div>
          <div
          style={{
            color: "#F5F5DC", // Define a cor do texto como Bege
            borderRadius: "30px",
          }}
          >
          <p className="text-lg text-justify leading-relaxed">
            Nos dias 24 e 25 de novembro de 2017, as entidades representativas realizaram o II Seminário
            Alcântara: a Base Espacial e os Impasses Sociais e intensificaram a luta pela manutenção do
            território étnico, criando em 2019, outra entidade representativa intitulada Associação do
            Território Étnico Quilombola de Alcântara – ATEQUILA. O processo de criação deu-se após a
            realização de oficinas de consulta realizadas nos quilombos do território étnico de Alcântara,
            reunindo cerca de 600 quilombolas que discutiram sobre o processo de mobilização política e
            autonomia da associação, reivindicação dos direitos sobre o território étnico, identidade e
            domínio político acerca dos saberes
            tradicionais e da luta em defesa da titulação definitiva do  território étnico de Alcântara – MA.
          </p>
          <p className="text-lg text-justify leading-relaxed mt-6">
            As entidades representativas STTR, MOMTRA, MABE e ATEQUILA seguem atuando de modo  articulado,
            partilhando as experiências vivenciadas ao longo dos mais de 40 anos de conflito,  mostrando como
            o campo dos saberes e fazeres quilombolas se articula
            intimamente com as  ações no campo político e reforçam cotidianamente a luta pela titulação do território étnico.          </p>
        </div>
        <div className="mt-6 text-white text-lg relative z-10 flex items-center justify-items-start pr-6">
          <span>Para saber mais, acesse clicando</span>
          <a href="#" className="font-semibold no-underline ml-1">aqui</a>
          <img src={PastaIcon} alt="Ícone de Pasta" className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepresentativeEntities;