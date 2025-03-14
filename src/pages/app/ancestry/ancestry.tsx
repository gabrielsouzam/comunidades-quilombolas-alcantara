import ancestryHeroBackground from "./../../../assets/ancestralidade-hero.png"
import ancestryBigSun from "./../../../assets/ancestralidade-big-sun.svg"
import ancestrySmallSun from "./../../../assets/ancestralidade-small-sun.svg"
import acesctryFirstImage from "./../../../assets/ancestralidade-image-1.png"
import acesctrySecondImage from "./../../../assets/ancestralidade-image-2.png"
import acesctryThirdImage from "./../../../assets/ancestralidade-image-3.png"
import qrCode from "./../../../assets/ancrestralidade-qrcode.png"

import pasteIcon from "./../../../assets/paste-icon.svg"

export function Ancestry() {
  return (
    <div className="flex flex-col w-full h-full text-base-white ">
      <div
        className="bg-cover bg-center bg-no-repeat h-[74rem]"
        style={{ backgroundImage: `url(${ancestryHeroBackground})` }}
      >
        <div
          className="absolute inset-0 top-72 z-10 h-[74rem] w-full"
          style={{
            background: `linear-gradient(180deg, rgba(124, 168, 110, 0) 40.3%, rgba(82, 110, 72, 0.6) 51.67%,
    rgba(64, 86, 56, 0.801996) 58.52%, rgba(58, 79, 52, 0.870488) 65.77%, rgba(55, 74, 48, 0.891802) 71.01%, 
    rgba(54, 72, 47, 0.9) 73.02%, #31412B 80.6%)`,
          }}
        ></div>

        <div className="mt-24 flex px-32 justify-between relative z-20 mb-16">
          <div className="w-[35rem] space-y-5">

            <div className="w-[30rem] space-y-5">
              <h2 className="text-4xl font-normal">
                Ancestralidade, saberes e o fazeres tradicionais dos intelectuais quilombolas de Alcântara - MA
              </h2>

              <h3 className="text-lg font-light ">história não escrita da resistência cotidiana em suas diferentes fronteiras</h3>
            </div>


            <p className="text-justify font-light">
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


        <div className="relative z-20 space-y-8 px-32">
          <h2 className="font-normal text-4xl">Áreas de roça</h2>

          <p className="text-lg text-justify">
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

          <div className="flex flex-col gap-2 items-end ">
            <span className="italic font-light text-4xl text-left">"O mato é novo, mas a terra é velha!"</span>
            <span className="text-lg font-medium text-left">- Aniceto Araújo Pereira, Quilombo Oitiua</span>
          </div>

        </div>

        
      </div>

      <div className="bg-dark-green flex flex-col pt-10 pr-40 relative top-54">
          <div className="flex justify-between pl-8 mb-11">
            <div>
              <img src={ancestryBigSun} alt="" />
              <img src={ancestrySmallSun} alt="" className="absolute top-[13.5rem] left-[-4.75rem]" />

            </div>

            <div className="flex fle-col">
              <div className="flex flex-col gap-11 items-end">
                <h2 className="text-4xl">Pesca e coleta de mariscos</h2>

                <div className="space-y-2 flex flex-col items-end">
                  <span className="italic font-light text-4xl text-left block">“A pesca é a feira onde se busca o sustento!"</span>
                  <span className="text-lg font-medium text-left">- Maria José Lima, 50 anos, Quilombo Mamuna.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-10 mb-80">

            <div className="col-span-3 flex flex-col items-center gap-40 justify-center">

              <img
                src={acesctryFirstImage}
                alt=""
                className="border-8 border-white shadow-lg -rotate-10 w-[16.25rem] h-[11.125rem]"
              />
              <img
                src={acesctrySecondImage}
                alt=""
                className="border-8 border-white shadow-lg rotate-6 w-[14rem] h-[12.5rem]"
              />
              <img
                src={acesctryThirdImage}
                alt=""
                className="border-8 border-white shadow-lg -rotate-6 w-[14.75rem] h-[10.75rem]"
              />

              <div className="flex items-center flex-col gap-3">
                <span className="italic font-light text-xl text-base-white/70">Qr code com mais fotos</span>
                <img
                  src={qrCode}
                  alt=""
                />
              </div>
            </div>

            <div className="col-span-7 space-y-11">
              <p className="text-xl text-justify font-normal">
                A pesca e a coleta de mariscos apresentam-se como principal atividade  econômica das famílias
                quilombolas que habitam as áreas do litoral de  Alcântara. Os instrumentos de pesca, o modo
                de confeccioná-los e a  utilização, varia de acordo com o tipo de pesca. A comercialização do
                pescado abastece a sede de Alcântara, os municípios de Guimarães e  São Luís e as agrovilas
                que, em razão dos deslocamentos e  impossibilidade de acesso ao mar e aos igarapés como ocorria
                anteriormente, passaram a comprar o pescado.
              </p>

              <p className="text-xl text-justify">
                O controle sobre os recursos é essencial para garantir a segurança  alimentar dos demais quilombos
                e assegurar a reprodução dos peixes  e mariscos. A prática da pesca encontra-se articulada à
                ancestralidade,  ao uso dos igarapés, do mar, das especificidades de cada quilombo e  do seu
                território. A feitura das redes e demais instrumentos de uso da  pesca em alguns quilombos são
                reproduzidos exclusivamente por  mulheres. Sururu, siri, camarão, caranguejo, ostras são, em
                muitos  quilombos, coletados pelas mulheres, a exemplo de Samucangaua,  Brito, Mocajubal e São João de Cortes.
              </p>

              <p className="text-xl text-justify font-normal">
                O deslocamento compulsório dos quilombolas para as agrovilas
                impactou, sobremaneira, os recursos naturais referentes à pesca
                e a  coleta de mariscos. As famílias, que anteriormente,
                utilizavam um fazer  epistemológico específico quanto ao uso dos
                instrumentos de pesca,  foram obrigadas a realizarem uma série
                de adaptações necessárias à  garantia de sua sobrevivência. A
                saída para uso de igarapés nos  quilombos localizados mais
                próximos das agrovilas, a utilização de  instrumentos de pesca
                e saberes diferentes daqueles usados  anteriormente, fez com
                que, ocorresse um rareamento dos peixes, camarões, siris,
                sururu e ostras. Tal impacto ambiental só fora controlado
                minimamente, em  razão dos saberes tradicionais dos
                quilombolas que adaptaram seus artefatos de pesca e suas
                estratégias de uso comum no intuito de garantir a reprodução
                das espécies e consequentemente,  sua própria reprodução social.
              </p>

              <div className="space-y-2 flex flex-col items-end">
                <span className="italic font-light text-4xl text-right block">
                  “As fuzacas trouxeram muitos problemas, escassez de peixe. É preciso  ter consciência ecológica!”
                </span>
                <span className="text-lg font-medium text-left">
                  - Juliana Ferreira Pereira, 62 anos, quilombo São João de Cortes.
                </span>
              </div>

              <p className="text-xl text-justify font-normal">
                O impacto ambiental segue sendo controlado cotidianamente,
                em razão  dos saberes tradicionais dos quilombolas que adaptaram
                seus artefatos  de pesca e suas estratégias de uso comum no
                intuito de garantir a  reprodução das espécies e consequentemente,
                sua própria reprodução  social. A “consciência ecológica” se
                concretiza na limitação definida  simbolicamente por cada
                quilombola no que se refere à quantidade de  peixe, camarão,
                siri e outros mariscos retirados dos igarapés e do mar.
                O controle sobre os recursos tem sido essencial para garantir a
                segurança alimentar dos quilombos e assegurar a reprodução dos
                peixes e mariscos.
              </p>

              <div className="space-y-2 flex flex-col items-end">
                <span className="italic font-light text-4xl text-right block">
                  “Nossos recursos naturais estão pouco. A tendência do nosso povo é  crescer e quanto mais a gente cresce, fica mais difícil!”
                </span>
                <span className="text-lg font-medium text-left">
                  - Eleotério dos Santos Gonçalves Ferreira, 64 anos, quilombo Terra  Mole.
                </span>
              </div>

              <div className=" flex justify-end gap-2 items-center">
                <span className="text-2xl text-left text-base-white/70">
                  Para saber mais, acesse clicando <a href="" className="font-semibold">aqui</a>
                </span>

                <img src={pasteIcon} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>



        </div>
    </div>
  );
}