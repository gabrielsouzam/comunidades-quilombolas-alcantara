import bigBall from "./../../../assets/big-ball.png";
import mediumBall from "./../../../assets/medium-ball.png";
import smallBall from "./../../../assets/small-ball.png";
import PastaIcon from "./../../../assets/paste-icon.svg";
import MapaGeral from "./../../../assets/mapageral.png";
import BaseA from "./../../../assets/baseA.jpg";
import EspacoLancamento from "./../../../assets/espacoLancamento1.jpeg";


export function Conflicts() {
  return (
    <div className="max-w-full shadow-lg overflow-hidden">
      <div className="px-32 md:py-12 bg-[#F5F5DC]">
        <h1 className="text-4xl md:text-4xl font-normal text-[#28130A]">
          Sobre o conflito entre o CLA e os quilombolas de <br />Alcântara - MA
        </h1>
        <p className="mt-2 text-md md:text-2xl font-light text-[#28130A]">
          Desapropriação da área para implantação do Centro de Lançamento de Alcântara
        </p>

        <div className="flex items-center gap-15">
          <p className="mt-4 text-justify text-[#28130A] text-sm md:text-base">
            Em 1980, o governo federal por meio do decreto 7.820, desapropriou por fins de utilidade pública
            e equivalente a 52.711 hectares no município de Alcântara para a implantação da Base de Lançamento
            de Foguetes. Ainda na mesma época, a área desapropriada foi incorporada ao patrimônio da União e
            posteriormente destinada ao então Ministério da Aeronáutica para a implementação do projeto estratégico e
            de segurança nacional representado pelo Ministério da Aeronáutica, para instalação e funcionamento do Centro
            de Lançamento de Alcântara - CLA.
          </p>

          <img
            src={mediumBall}
            alt="Bolas decorativas"
            className="relative left-22"
          />
        </div>
      </div>

      <div className="bg-[#1E2D1AE5] text-[#CCAC85] px-32 md:py-12">
        <div className="flex items-center gap-8">
          <p className="text-justify text-sm md:text-lg">
            Segundo o Ministério da Aeronáutica, o município de Alcântara fora escolhido para
            implantação do CLA por reunir as condições favoráveis para o desenvolvimento do projeto
            espacial brasileiro, na medida em que apresenta uma localização privilegiada em relação à
            linha do Equador, seguida de um vazio demográfico necessário para garantir
            a segurança e amenizar os impactos causados pelo desenvolvimento do projeto espacial.
          </p>

          <img src={smallBall} alt="Bolas decorativas" className="" />
          <img
            src={bigBall}
            alt="Bolas decorativas"
            className="absolute top-80 right-0"
          />
        </div>

        <p className="text-justify mt-4 text-sm md:text-lg">
          A implantação do Centro de Lançamento de Alcântara se deu sem que fossem realizados
          estudos prévios sobre as peculiaridades da questão agrária e identificação das famílias
          que ocupavam tradicionalmente os territórios. A ação de deslocamento compulsório das famílias
          da área pretendida pelo CLA se efetivou sem que houvesse consulta prévia aos quilombolas e
          impactou de forma direta mais de 2.000 famílias que ocupavam os territórios.
        </p>
      </div>

      {/* Rodapé final com link e imagem */}
      <div className="bg-[#222F1B] text-[#CCAC85] px-6 md:px-12 py-8 relative">
        <div className="text-left text-lg z-10 flex items-center mb-6 ml-10 md:ml-24">
          <span>
            Confira área desapropriada para implantação do Centro <br />de
            Lançamento de Alcântara - CLA clicando
            <a
              href= {MapaGeral}
              className="font-semibold no-underline inline mt-7 ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              aqui
            </a>
          </span>

          <img src={PastaIcon} alt="Ícone de Pasta" className="w-5 h-5 ml-4" />
        </div>


        <div className="w-full flex justify-start ml-10 md:ml-24">
          <img
            src={MapaGeral}
            alt="Mapa Geral"
            className="w-full max-w-[540px] rounded-md shadow-md"
          />

          <div className="relative -top-22 w-1/3 left-20">
            <div className=" flex flex-col space-y-24 items-end mt-0 ">
              <div className="w-3/4">
                <img
                  src={EspacoLancamento}
                  alt="Escola desativada, quilombo Mamuna"
                  className="h-[258px] w-[380px] object-cover rounded-lg opacity-90 border-4"
                  style={{ borderColor: "#AB9679" }}
                />
                <p className="text-right text-sm mt-1 italic" style={{ color: "#CEB490CC" }}>Centro de Lançamento  de Alcântara – MA</p>
                <p className="text-right text-xs" style={{ color: "#CEB490CC" }}>Foto: Elitiel Guedes</p>
              </div>

              <div className="w-3/4">
                <img
                  src={BaseA}
                  alt="Escola desativada, quilombo Mamuna"
                  className="h-[258px] w-[380px] object-cover rounded-lg opacity-90 border-4"
                  style={{ borderColor: "#AB9679" }}
                />
                <p className="text-right text-sm mt-1 italic" style={{ color: "#CEB490CC" }}>II Seminário Alcântara: a  Base Espacial e os Impasses  Sociais</p>
                <p className="text-right text-xs" style={{ color: "#CEB490CC" }}>Foto: Contraf Brasil</p>
              </div>
            </div>
          </div>

        </div>
        {/* Bola permanece intocada! */}
      </div>
    </div>
  );
}

export default Conflicts;
