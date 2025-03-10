import QRCodeIcon from "/src/assets/qrcode.png"; 
import BolasCanto from "/src/assets/bolasCanto.png"; 


export function Conflicts() {
  return (
    <div className="max-w-full shadow-lg rounded-lg overflow-hidden">
      
      <div className="p-6 md:p-12 bg-[#F5F5DC]">
        <h1 className="text-xl md:text-2xl font-normal text-[#28130A]">
          Sobre o conflito entre o CLA e os quilombolas de Alcântara - MA
        </h1>
        <p className="mt-2 text-md md:text-lg italic text-[#28130A] ">
          Desapropriação da área para implantação do Centro de Lançamento de Alcântara
        </p>
        <p className="mt-4 text-justify text-[#28130A] text-sm md:text-base pr-50 ">
          Em 1980, o governo federal por meio do decreto 7.820, desapropriou por fins de utilidade pública
          e equivalente a 52.711 hectares no município de Alcântara para a implantação da Base de Lançamento
          de Foguetes. Ainda na mesma época, a área desapropriada foi incorporada ao patrimônio da União e
          posteriormente destinada ao então Ministério da Aeronáutica para a implementação do projeto estratégico e
          de segurança nacional representado pelo Ministério da Aeronáutica, para instalação e funcionamento do Centro
          de Lançamento de Alcântara - CLA.
        </p>
      </div>

      <div className="bg-[#1E2D1AE5] text-[#CCAC85] p-6 md:p-12">
        <p className="text-justify text-sm md:text-base pr-50">
          Em 1991, por meio do Decreto Presidencial nº 72.517, de 18 de abril de 1968, a área foi exigida
          com o intuito de realizar o monitoramento de lançamentos e pesquisas tecnológicas. Segundo o
          Ministério da Aeronáutica, o modelo do núcleo urbano no município de Alcântara seria a melhor
          alternativa para a construção do Centro de Lançamento, pois permitiria a criação de um espaço
          operacional adequado para atividades aeroespaciais, além da implementação de projetos de
          desenvolvimento tecnológico.
        </p>

        <p className="text-justify mt-4 text-sm md:text-base">
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
          src={BolasCanto} 
          alt="Bolas decorativas"
          className="absolute bottom-30 right-0 w-[180px] md:w-[220px] "
        />
      </div>
    </div>
  );
}

export default Conflicts;
