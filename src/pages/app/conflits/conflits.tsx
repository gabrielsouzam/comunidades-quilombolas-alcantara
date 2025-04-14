import bigBall from "./../../../assets/big-ball.png";
import mediumBall from "./../../../assets/medium-ball.png";
import smallBall from "./../../../assets/small-ball.png";
import PastaBege from "./../../../assets/pastaBege.png";
import MapaGeral from "./../../../assets/mapageral.png";
import EspacoLancamento from "./../../../assets/espacoLancamento1.jpeg";
import EspacoLancamentoTodo from "./../../../assets/substituta.png";


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
            Em 1980, o governo federal desapropriou para fins de utilidade pública
            o equivalente a 52.711 hectares no município de Alcântara para a implantação da Base de Lançamento
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
        <div className="text-left text-lg z-10 flex items-center mb-6 ml-10 md:ml-20">
          <span>
            Confira área desapropriada para implantação do Centro <br />de
            Lançamento de Alcântara - CLA clicando{" "}
            <a
              href={MapaGeral}
              className="font-semibold no-underline inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              aqui
              <img src={PastaBege} alt="Ícone de Pasta" className="w-5 h-5 ml-2" />
            </a>
          </span>
        </div>
        <div className="w-full flex justify-start ml-10 md:ml-24">
          <div className="w-full flex  items-center gap-40 mt-14">
            <div className="max-w-[35%] justify-center">
              <img
                src={EspacoLancamento}
                alt="Centro de Lançamento de Alcântara – MA"
                className="object-cover rounded-lg opacity-90 border-4 border-[#AB9679] w-full"
              />
              <p className="text-left text-sm mt-1 italic" style={{ color: "#CEB490CC" }}>
                Centro de Lançamento de Alcântara – MA
              </p>
              <p className="text-left text-xs" style={{ color: "#CEB490CC" }}>
                Foto: Elitiel Guedes
              </p>
            </div>

            <div className="max-w-[40%] justify-center">
              <img
                src={EspacoLancamentoTodo}
                alt="Parte da área litorânea ocupada pelo Centro de Lançamento de Alcântara - CLA"
                className="object-cover rounded-lg opacity-90 border-4 border-[#AB9679] w-full"
              />
              <p className="text-left text-sm mt-1 italic" style={{ color: "#CEB490CC" }}>
              Parte da área litorânea ocupada pelo Centro de Lançamento de Alcântara - CLA
              </p>
              <p className="text-left text-xs" style={{ color: "#CEB490CC" }}>
                Foto: Elitiel Guedes
              </p>
            </div>
          </div>

        </div>
        {/* Bola permanece intocada! */}
      </div>
    </div>
  );
}

export default Conflicts;
