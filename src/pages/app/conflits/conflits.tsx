import bigBall from "./../../../assets/big-ball.png";
import mediumBall from "./../../../assets/medium-ball.png";
import QRCodeIcon from "./../../../assets/qrcode.png";
import smallBall from "./../../../assets/small-ball.png";


export function Conflicts() {
  return (
    <div className="max-w-full shadow-lg  overflow-hidden">

      <div className="px-32 md:py-12 bg-[#F5F5DC]">
        <h1 className="text-4xl md:text-4xl font-normal text-[#28130A]">
          Sobre o conflito entre o CLA e os quilombolas de  <br />Alcântara - MA
        </h1>
        <p className="mt-2 text-md md:text-2xl font-light text-[#28130A] ">
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
          Em 1991, por meio de Decreto Presidencial nº 72.571, de 18 de abril
            de 1986, a área foi estendida com o acréscimo de 10 mil hectares,
              totalizando 62 mil hectares destinados ao Programa Espacial em 
              Alcântara, reduzindo o módulo rural do município de 35 hectares
               para 15 hectares. Segundo o  Ministério da Aeronáutica, o 
               município de Alcântara fora escolhido para implantação do 
               CLA por  reunir as condições favoráveis para o desenvolvimento
                do projeto espacial brasileiro, na medida  em que apresenta 
                uma localização privilegiada em relação à linha do Equador
                 seguida de um  vazio demográfico necessário para garantir 
                 a segurança e amenizar os impactos causados pelo  
                 desenvolvimento do projeto espacial. 
          </p>

          <img
            src={smallBall}
            alt="Bolas decorativas"
            className=""
          />
        </div>


        <p className="text-justify mt-4 text-sm md:text-lg">
          PARÁGRAFO ADD sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD
          sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO
          DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD
          sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO
          DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD sobre o CONTRAPONTO DO CLÃ PARÁGRAFO ADD
          sobre o CO
        </p>
      </div>

      {/* Seção inferior (Rodapé - Verde Escuro) */}
      <div className="bg-[#222F1B] text-white px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Texto de acesso */}
        <p className="text-justify text-sm md:text-base mb-4 md:mb-0">
          Confira área desapropriada para implantação do Centro de Lançamento de Alcântara - CLA clicando
          <a href="#" className="font-semibold underline ml-1">aqui</a>
        </p>

        {/* QR Code com texto acima */}
        <div className="flex flex-col items-center">
          <p className="text-xs md:text-sm text-[#F5F5DCB2] italic mb-2">QR Code mais fotos</p>
          <img src={QRCodeIcon} alt="QR Code mais informações" className="w-20 md:w-24 h-20 md:h-24" />
        </div>

        <img 
          src={bigBall} 
          alt="Bolas decorativas"
          className="absolute top-72 right-0 "
        />
      </div>
    </div>
  );
}

export default Conflicts;
