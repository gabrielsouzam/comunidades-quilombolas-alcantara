import bgSection3 from "../../../../assets/bg-section3.png"
import bolsaDePano from "../../../../assets/bolsa-de-pano.png"
import bolsasDePalha from "../../../../assets/bolsas-de-palha.png"
import centroDeProducao from "../../../../assets/centro-de-producao.png"
import potes from "../../../../assets/potes.jpeg"
import coletaColetiva from "../../../../assets/coleta-coletiva.jpeg"
import centroDeArtesanato from "../../../../assets/centro-de-artesanato.png"
import multirao from "../../../../assets/multirao.png"
import machado from "../../../../assets/machado.jpg"
import centroCiencias from "../../../../assets/centro-ciencias.jpeg"
import ceramica from "../../../../assets/ceramica.jpeg"


export function Centers() {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${bgSection3})` }}
        className="min-h-[18.62rem] bg-cover bg-center items-center text-end px-40 py-24"
      >
        <h2 className="text-4xl">Centro de Ciências e Saberes e Centros de Artesanato</h2>
      </section>

      <section className="bg-base-green flex flex-col pt-20 px-40">
        <div className="flex flex-row gap-11 items-center   mb-11">
          <div>
            <div className="max-w-[25.62rem]">
              <img
                src={centroCiencias}
                alt=""
                className="border-8 border-white shadow-lg  min-w-[23.68rem] h-[31rem]"
              />

              <p className="font-normal italic text-xl"> Centro de Ciências e Saberes de Canelatiua</p>
              <p className="font-normal text-[10px] mb-13">Foto: Gyordanna Silva</p>
            </div>
            <div className="max-w-[25.62rem]">
              <img
                src={ceramica}
                alt=""
                className="border-8 border-white shadow-lg  min-w-[22.12rem] h-[9.06rem]"
              />
              <p className="font-normal italic text-xl"> Centro de Produção e Comercialização de Cerâmica de Itamatatiua</p>
              <p className="font-normal text-[10px] mt-1">Foto: Gyordanna Silva</p>
            </div>
          </div>

          <div>
            <p className="font-bold text-2xl text-right mb-11">Centro de Ciências e Saberes Mãe Anica</p>

            <p className="font-normal text-xl text-right mb-11">
              O Centro de Ciências e Saberes figura como espaço de fazeres de  resistência que agrega elementos da
              memória coletiva. Construído no  quilombo Canelatiua, com o objetivo de promover ações de valorização
              dos saberes tradicionais dos quilombolas, funciona como um “museu vivo”, constituindo-se um espaço de
              formação não formal, que reforça  experiências e memórias.
            </p>

            <p className="font-light italic text-4xl text-right pl-35 leading-11">
              “Ana Luzia Serejo, mais conhecida como Mãe Anica, matriarca da  família Serejo, casada com Apolinário Serejo,
              ficou viúva bem jovem,  mãe de 7 filhos, criou os filhos sozinha após a morte do marido. O  Centro de Saberes
              leva o nome dela por ser uma mulher forte da época  e aí a gente resolveu colocar esse nome. Era parteira,
              pegava crianças.  O pai de Domingos, doutor dos Ossos era filho dela, Luís Gonzaga  Serejo”.
            </p>

            <p className="text-2xl font-semibold text-right mt-1">- Dorinete Serejo, quilombo Canelatiua</p>
          </div>
        </div>

        <div className="flex flex-row gap-11 items-center mb-11">
          <div>
            <p className="font-bold text-2xl text-justify mb-11">Centro de Produção e Comercialização de Cerâmica de  Itamatatiua</p>

            <p className="font-normal text-xl text-justify mb-11">
              A produção da cerâmica em Itamatatiua é feita artesanalmente pelas  mulheres quilombolas, que dividem seu tempo,
              entre as atividades na  roça e na fabricação das peças de cerâmica. A construção do Centro  de Produção é resultado
              da mobilização das mulheres quilombolas  ceramistas, por meio da Associação de Mulheres de Itamatatiua e
              dinamizou a feitura e venda das peças. Os quilombolas também  desenvolvem práticas artesanais de fabricação de
              telhas e tijolos nas  olarias, com produção destinada à construção civil e, às vezes, auxiliam  as ceramistas
              no processo de retirada e transporte da argila.
            </p>

            <p className="font-normal text-xl text-justify mb-11">
              O processo de feitura da cerâmica envolve várias etapas que se inicia  com a definição do local de retirada do
              barro (argila), o transporte,  armazenamento, coleta de outros materiais como o taquipé e o  charmote
              (cascas de árvores que são misturadas à argila e aumentam  a resistência das peças que são submetidas ao calor
              dos fornos), a  retirada da lenha usada nos fornos,  etapas de feitura e comercialização  das peças. A coleta se
              faz de forma coletiva e os saberes tradicionais  sobre a escolha do barreiro (local de onde se tira o barro),
              o período  definido no calendário para retirada e armazenamento, a qualidade da  argila, e o domínio das técnicas
              nas fases de manuseio do barro e dos  fornos, são cuidadosamente partilhados pelas mulheres mais  experientes.
            </p>

            <p className="font-normal text-xl text-justify mb-11">
              As louças de cerâmica não são destinadas apenas ao uso como  utensílios domésticos, sendo também utilizadas como
              itens decorativos  nos diversos espaços sociais do cotidiano dos quilombolas. São  comercializadas para quilombos
              vizinhos, distribuídas para a sede de  Alcântara, para outros municípios e países, a exemplo de Inglaterra,
              Espanha, França, Portugal, Estados Unidos e África do Sul. A cerâmica  das mulheres quilombolas de Itamatatiua
              são dotadas de saberes  tradicionais, ancorados na ancestralidade, no reforço da identidade  coletiva e nas
              práticas de resistência no território.
            </p>
          </div>

          <div>
            <div className="max-w-[25.62rem]">
              <img
                src={centroDeProducao}
                alt=""
                className="shadow-lg  min-w-[23.75rem] h-[16.12rem]"
              />

              <p className="font-normal italic text-xl text-right"> Centro de Produção e  Comercialização de Cerâmica - Quilombo Itamatatiua</p>
              <p className="font-normal text-[10px] mb-13 text-right">Foto:  Davi Pereira Júnior</p>
            </div>
            <div className="max-w-[25.62rem]">
              <img
                src={potes}
                alt=""
                className="border-8 border-white shadow-lg  min-w-[23.75rem] h-[28.43rem]"
              />
              <p className="font-normal italic text-xl text-right">Cerâmicas para comercialização - Quilombo Itamatatiua </p>
              <p className="font-normal text-[10px] text-right mt-1">Foto: Gyordanna Silva</p>
            </div>
          </div>
        </div>


        <div className="flex flex-row gap-11 items-center mb-11">
          <div className="flex flex-col gap-9">
            <div className="max-w-[25.62rem]">
              <img
                src={centroDeArtesanato}
                alt=""
                className="shadow-lg  min-w-[23.75rem] h-[12rem]"
              />
              <p className="font-normal italic text-xl">Centro de Artesanato do  Quilombo Santa Maria </p>
              <p className="font-normal text-[10px] mt-1">Foto: Gyordanna Silva</p>
            </div>
            <div className="max-w-[25.62rem]">
              <img
                src={bolsaDePano}
                alt=""
                className="shadow-lg  min-w-[23.75rem] h-[12rem]"
              />

              <p className="font-normal italic text-xl">Centro de Artesanato de Santa Maria</p>
              <p className="font-normal text-[10px] mb-13">Foto: Gyordanna Silva</p>
            </div>
            <div className="max-w-[25.62rem]">
              <img
                src={bolsasDePalha}
                alt=""
                className="border-8 border-s-amber-100 hadow-lg  min-w-[23.75rem] h-[12rem]"
              />
              <p className="font-normal text-[10px] mb-13">Foto: Gyordanna Silva</p>
            </div>
          </div>

          <div>
            <p className="font-bold text-2xl text-justify mb-11">Centro de Artesanato do Quilombo Santa Maria</p>

            <p className="font-normal text-xl text-justify mb-11">
              O Centro de Artesanato do Quilombo Santa Maria fundado há 17 anos  agrega as mulheres quilombolas através da
              tecelagem. O saber  tradicional de tecer e fiar com a palha de buriti e a fibra do tucum,  ensinado pelas mulheres
              mais experientes, revela-se como uma prática  cotidiana de resistência no território.
            </p>

            <p className="font-normal text-xl text-justify mb-11">
              As mulheres quilombolas realizam coletivamente a coleta das palhas  nas palmeiras de tucum e buriti. A retirada
              das palhas é feita  observando-se as condições de preservação das palmeiras. Após tirar  “o olho do tucum e do
              buriti”, expressão que se refere às palhas mais  novas das palmeiras, as palhas são colocadas para secar, seguindo
              posteriormente a fase de  preparação da fibra para a feitura de bolsas, sacolas, carteiras, jogos americanos,
              redes e outros  artefatos confeccionados e comercializados no Centro de Artesanato, na sede de Alcântara e  por
              meio de encomendas previamente acertadas com as tecelãs. As peças encomendadas  previamente são divididas entre
              as mulheres para que haja participação coletiva na feitura e na  divisão do valor das vendas. As fibras são
              utilizadas na cor “natural” ou passam por um processo  de tingimento com pigmentos extraídos de plantas.
            </p>

            <p className="font-normal text-xl text-justify mb-11">
              As mulheres quilombolas relatam, que apesar das práticas de controle dos recursos naturais,  ocorre nos últimos
              anos, uma escassez das palhas para a fabricação das fibras, o que estaria  sendo ocasionada, dentre outros fatores,
              pela “presença de macacos  que se alimentam do olho do tucum e do buriti e deixam as palhas  mastigadas”, como
              relata dona Maria (quilombola de Santa Maria, uma  das tecelãs mais experientes do Centro). Cerca de 17 mulheres
              quilombolas trabalham cotidianamente nos teares do Centro de  Artesanato e conciliam sua prática de tecer com
              outras atividades como  a pesca e a produção agrícola.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-11 items-top mb-11">
          <div>
            <p className="font-bold text-2xl text-justify mb-11">“Cada lugar tem seu uso”: outros fazeres de resistência no  território étnico.</p>

            <p className="font-normal text-xl text-justify mb-11">
              Os intelectuais quilombolas de Alcântara construíram um vasto  repertório de fazeres de resistência. As narrativas
              dos intelectuais  quilombolas em suas diferentes fronteiras apontam para uma gama de  saberes tradicionais que,
              ora apresentam semelhanças no fazer entre  os quilombos, ora apresenta singularidades que evidenciam as
              territorialidades específicas.
            </p>

            <p className="font-normal text-xl text-justify mb-11">
              As particularidades dos fazeres de resistência se assemelham no uso  comum e coletivo dos recursos naturais, a
              exemplo, da coleta de juçara  (Quilombos Canelatiua, Bom Viver e Mamuna), da coleta e quebra do  coco babaçu
              (Quilombos Canelatiua e Itamatatiua), da coleta da fibra  do buriti para a feitura de bolsas e outros artefatos
              (Quilombo Santa  Maria), na produção de artefatos de pesca pelas quilombolas  (Quilombo Oitiua), na pesca em alto
              mar (Quilombo Ponta d’Areia e  Mamuna), no mutirão para capina, plantio, colheita na roça e feitura da  farinha
              na casa de forno.  Os intelectuais quilombolas revelam em seu cotidiano, saberes e fazeres de resistência
              múltiplos, que ancorados na ancestralidade, reforçam  a luta pela permanência no território étnico.
            </p>

            <p className="font-light italic text-4xl">
              “Que lute, que lute e não saia. Canelatiua tem quase 200 anos, que vivem a seu modo e enquanto  eu puder lutar”!
            </p>

            <p className="text-2xl font-semibold mt-1">- Inaldo Faustino Diniz, 57 anos, agrovila Espera</p>
          </div>
          <div className="flex flex-col gap-9">
            <div className="max-w-[25.62rem]">
              <img
                src={multirao}
                alt=""
                className="shadow-lg  min-w-[23.75rem] h-[16.12rem]"
              />

              <p className="font-normal italic text-xl text-right"> Mutirão para quebra de coco  babaçu - Quilombo Canelatiua</p>
              <p className="font-normal text-[10px] text-right">Foto: Gyordanna Silva</p>
            </div>
            <div className="max-w-[25.62rem]">
              <img
                src={machado}
                alt=""
                className="border-8 border-white shadow-lg  min-w-[23.75rem] h-[8.81rem]"
              />
              <p className="font-normal italic text-xl text-right">Machado para quebra de coco  babaçu - Quilombo Canelatiua </p>
              <p className="font-normal text-[10px] text-right mt-1">Foto: Gyordanna Silva</p>
            </div>
            <div className="max-w-[25.62rem]">
              <img
                src={coletaColetiva}
                alt=""
                className="border-8 border-white shadow-lg  min-w-[23.75rem] h-[15.43rem]"
              />
              <p className="font-normal italic text-xl text-right">Coleta coletiva de juçara - Quilombo Canelatiua </p>
              <p className="font-normal text-[10px] text-right mt-1">Foto: Dorinete Serejo</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}   