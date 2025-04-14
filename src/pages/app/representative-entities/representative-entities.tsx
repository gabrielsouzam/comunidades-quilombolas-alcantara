import SetaIcon from "./../../../assets/seta.png"
import BaseA from "./../../../assets/baseA.jpg";
import BarcosImage from "./../../../assets/barcosSimples2.jpg";
import { CustomLink } from "../components/custom-link";

export function RepresentativeEntities() {
  return (
    <div className="flex flex-col w-full h-full text-base-white ">
      <div
        className="bg-cover bg-center bg-no-repeat h-[60.75rem] px-28"
        style={{ backgroundImage: `url(${BarcosImage})` }}
      >
        <div
          className="absolute inset-0 top-[-4rem] z-10 h-[202rem] w-full pointer-events-none"
          style={{
            background: `linear-gradient(
      180deg,
      rgba(207, 169, 125, 0.1) 8%,
      rgba(207, 169, 125, 0.3) 18%,
      rgba(207, 169, 125, 0.6) 24%,
      rgba(207, 169, 125, 0.7) 28%,
      rgba(107, 152, 82, 0.971698) 34%,
      #5F964D 34.5%,
      #35532B 46%,
      #2C4523 55%,
      #2C4524 61%,
      #20321A 74%,
      #20331A 75%,
      #1E2F19 84%
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
                No período compreendido entre 11 e 14 de maio de 1999, os  quilombolas de Alcântara
                por iniciativa do STTR realizaram o  Seminário Alcântara: A Base Espacial e os Impasses
                Sociais. Esse  seminário fomentou discussões acerca das formas de mobilização  dos quilombolas
                no que se referia à terceira fase do processo de  implantação do CLA e sobre os deslocamentos
                compulsórios das 312  famílias para as agrovilas. A partir das observações realizadas no  Seminário
                de 99, o conflito com o CLA passou a ser analisado pelos
                quilombolas como um problema que extrapolava a questão agrária e  se estendia à questão étnica.
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

            <p className="text-white text-xl text-justify ">
              Nesse contexto, agregando o componente étnico, se originou o  Movimento dos Atingidos pela Base Espacial – MABE,
              fundado em  julho de 2001 e que congrega representações de
              pelo menos 139  comunidades, localizadas nos 62 mil hectares da área desapropriada  para instalação do CLA.
            </p>
          </div>
          <div
            className="flex flex-col px-10 py-10 mt-10 h-[620px]"
            style={{
              backgroundColor: "#222F1B",
              color: "#F5F5DC",
              borderRadius: "30px",
            }}
          >
            <div className=" flex">
              <p className="italic font-light text-3xl text-justify mt-4">
                “E por ocasião da implantação do Centro de Lançamento de Alcântara
                até então, não se  conhecia, ou se conhecia não tinha o menor controle político e social
                sobre a palavra quilombola,  praticamente visível em cima dele, desde o final do século XVIII
                quando quilombo era  condicionado a uma coisa relacionada à escravidão até na década de 1980.
                O componente  étnico ele veio à tona a partir do momento em que as próprias comunidades foram se dando
                conta das pesquisas que foram feitas, dos estudos que foram feitos, não é que os pesquisadores
                foram impondo ainda que de forma sutil esse componente para a luta, o que houve foi que essas
                pesquisas realizadas em Alcântara quase na sua totalidade, elas colaboraram no sentido de  evidenciar
                esses fatores, esses fatores sempre estiveram no estado de latência, mas sempre  estiveram em Alcântara”.
              </p>
            </div>
            <span className="italic text-lg font-medium block mt-16">
              -Danilo Serejo, quilombo Canelatiua
            </span>
          </div>
          <div className="mt-14 text-base-white flex gap-10">
            <div className="flex-1">
              <p className="text-white text-xl text-justify">
                O STTR de Alcântara após a criação do MABE continua reforçando a  pauta de reivindicação dos quilombolas,
                contribuindo de modo ativo  nas ações de afirmação étnica. Tanto o MABE quanto o STTR  possuem suas especificidades
                em relação às demandas que surgem  frente às situações de conflito, mas atuam em parceria na luta pela  garantia
                dos direitos territoriais dos quilombolas de Alcântara. O  processo de luta permanente do MABE propiciou o
                fortalecimento do  movimento de defesa do território étnico, o amadurecimento das
                estratégias de atuação e a intensificação do uso dos saberes tradicionais cotidianos como formas  de resistência.
              </p>
              <p className="text-white text-xl text-justify mt-6">
                Nos dias 24 e 25 de novembro de 2017, as entidades representativas realizaram o II Seminário  Alcântara: a Base
                Espacial e os Impasses Sociais e intensificaram a luta pela manutenção do  território étnico, criando em 2019,
                outra entidade representativa intitulada Associação do  Território Étnico Quilombola de Alcântara – ATEQUILA.
                O processo de criação deu-se após a  realização de oficinas de consulta realizadas nos quilombos do território
                étnico de Alcântara,  reunindo cerca de 600 quilombolas que discutiram sobre o processo de mobilização política
                e autonomia da associação, reivindicação dos direitos sobre o território étnico, identidade e  domínio político
                acerca dos saberes tradicionais e da luta em defesa da titulação definitiva do  território étnico de Alcântara – MA.
              </p>
            </div>
            <div className="flex-1 flex items-end flex-col space-y-8">
              <div>
                <img
                  src={BaseA}
                  alt="Seminário Alcântara: a Base Espacial e os Impasses Sociais"
                  className=" object-cover rounded-lg opacity-90 border-4"
                  style={{ borderColor: "#AB9679" }}
                />
                <p className="text-right text-sm mt-1 italic" style={{ color: "#CEB490CC" }}>II Seminário Alcântara: a  Base Espacial e os Impasses  Sociais</p>
                <p className="text-right text-xs" style={{ color: "#CEB490CC" }}>Foto: Contraf Brasil</p>
              </div>


              <CustomLink
                title="Carta do II Seminario Alcantara a Base Espacial e os Impasses Sociais"
                link="/Carta-do-II-Seminrio-Alcantara-a-Base-Espacial-e-os-Impasses-Sociais.pdf"
              />
              <CustomLink
                title="Quilombolas Atingidos Base Espacial"
                link="/10-Quilombolas-Atingidos-Base-Espacial.pdf"
              />
            </div>

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
              color: "#F5F5DC",
              borderRadius: "30px",
            }}
          >
            <p className="text-lg text-justify leading-relaxed">
              As entidades representativas STTR, MOMTRA, MABE e ATEQUILA seguem atuando de modo  articulado,
              partilhando as experiências vivenciadas ao longo dos mais de 40 anos de conflito,  mostrando como
              o campo dos saberes e fazeres quilombolas se articula
              intimamente com as  ações no campo político e reforçam cotidianamente a luta pela titulação do território étnico.
            </p>
            <p className="text-lg text-justify leading-relaxed mt-6">
              A violação dos direitos dos quilombolas de Alcântara no decorrer do processo de
              implantação da  Base espacial foi apresentada por meio de denúncia pela Comissão
              Interamericana de Direitos  Humanos (CIDH), no ano 2001 e nos dias 26 e 27 de abril de 2023
              , o Tribunal Internacional  intitulado Corte Interamericana de Direitos Humanos (CIDH) realizou
              sessão, no Chile, para apreciação   do caso Quilombolas de Alcântara vs. Brasil. Os intelectuais
              quilombolas de Alcântara atuaram  de forma direta como peticionários, com depoimentos e com a feitura
              de perícia apresentada à  Corte IDH, elaborada pelo antropólogo quilombola do território de Itamatatiua,
              Davi Pereira Júnior. O  Estado brasileiro reconheceu publicamente na
              ocasião, a violação de direitos dos quilombolas  no processo de implantação do CLA.</p>
          </div>
          <div className="mt-8 text-white text-lg relative z-10 flex flex-col items-start pr-6 space-y-2">
            <span>Para saber mais, acesse: </span>

            <a
              href="/01-direitos_resistencia_e_mobilizacoes%20(1).pdf"
              className="font-medium no-underline flex items-center mt-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SetaIcon} alt="Ícone de Seta" className="w-4 h-4 mr-2" />
              Livro Direitos resistência e mobilizações
            </a>

            <a
              href="public\06-lutas_em_memoria.pdf"
              className="font-medium no-underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SetaIcon} alt="Ícone de Seta" className="w-4 h-4 mr-2" />
              Livro Lutas em memória
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepresentativeEntities;