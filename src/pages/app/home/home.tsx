import { useState } from "react";
import { Card } from "./components/card"
import { ImageMap } from "./components/imageMap"
import { quilombos } from "./data/quilombos";
import homeBgImage from "./../../../assets/img.svg"
import elipseImage from "./../../../assets/ellipse2.svg"
import elipse1 from "./../../../assets/ellipse1.svg"
import elipse3 from "./../../../assets/ellipse3.svg"
import elipse4 from "./../../../assets/ellipse4.svg"
import elipse5 from "./../../../assets/ellipse5.png"

export function Home() {

  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null);

  const selectedMarker = quilombos.find(marker => marker.id === selectedMarkerId);


  return (
    <div>

      <section
        className="relative w-full h-[859px] bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBgImage})` }}
      >

        <img src={elipse3} alt="elipse 3" />
        <img
          src={elipse1}
          alt="elipse 1"
          className="absolute top-10 left-50"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-end p-16 pr-32 text-right w-full">
          <div className="max-w-[886px]">
            <h2 className="text-[64px] font-light text-terracota-red leading-tight">
              "Ovo não briga com pedra, mas lambuza!"
            </h2>
            <p className="italic mt-2 text-[32px] text-[#28130A] font-light leading-snug">
              Insurreição de saberes e a "Epistemologia da Resistência" dos intelectuais quilombolas de Alcântara – MA.
            </p>
          </div>
        </div>

        <img
          src={elipseImage}
          alt="elipse 2"
          className="absolute bottom-0 right-0"
        />
      </section>

      <section className="bg-[#F5F5DC]">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-end p-16 pr-32 text-right">
            <h2 className="text-[40px] font-normal text-[#B36320]">
              “Ovo não briga com pedra, mas lambuza!”
            </h2>
            <p className="mt-8 text-xl text-[#B36320] text-justify font-normal">
              A expressão falada pelos intelectuais quilombolas de  diferentes quilombos do território étnico de Alcântara – MA
              evidencia a força da resistência e a  luta pela manutenção do território étnico frente ao conflito de mais de 40
              anos instaurado a partir  da implantação do Centro de Lançamento de Alcântara – CLA, na década de 1980. Ancorados
              na ancestralidade, no reforço dos elementos identitários, nas práticas coletivas de uso comum  dos recursos
              naturais, nos saberes e fazeres de resistência cotidianos, os intelectuais  quilombolas de Alcântara ressignificaram
              conceitos elaborados a partir da lógica colonial e  produziram uma “epistemologia outra” nas diferentes fronteiras do
              território étnico. Compreende-se o conceito de epistemologia enquanto a noção sobre as condições que definem os vários
              saberes como válidos, não se detendo ao saber dito científico como única ideia de “conhecimento  seguro” e aos critérios
              adotados pela academia ao reproduzir relações hierárquicas de poder. Há  de ter-se o devido respeito pelas diferentes
              formas de compreensão do mundo social,  observando que uma releitura crítica dos fundamentos epistemológicos ocidentais
              auxilia na  desconstrução de uma política de interpretação única e dos processos impositivos derivados do  discurso
              ocidental.
            </p>

            <p className="mt-8 text-xl text-[#B36320] text-justify font-normal">
              A Epistemologia Ocidental não reconhece como válidos outras formas de saberes socialmente  construídos. Os saberes
              são colocados numa escala de hierarquização que os inferioriza, sem  que se analisem as condições e as mobilizações
              que constituíram suas produções. Conceitos  cunhados pela Epistemologia Ocidental, a exemplo de quilombo,
              identidade e território, foram  ressignificados coletivamente, deslocando-se as categorias de entendimento para
              uma  significação singular que criou as condições de possibilidade para a elaboração de uma episteme  alternativa,
              a “Epistemologia da Resistência”.
            </p>
          </div>
          <img src={elipse4} alt="elipse 4" />
        </div>
      </section>

      <section className="bg-[#415D38] relative overflow-hidden">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center p-16 pr-32 text-left">
            <h2 className="text-[40px] font-normal text-[#CCAC85]">Nosso Propósito</h2>
            <p className="mt-2 italic text-justify text-xl text-[#CCAC85] font-normal">
              A construção dessa plataforma interativa, permite o acesso às análises de dados referentes a saberes e
              fazeres de resistência dos intelectuais quilombolas de Alcântara – MA, elaborados durante a feitura da
              tese de doutorado intitulada <span className="font-semibold"> “A gente não é só a casa”: PRODUÇÃO INTELECTUAL E CONFLITOS: INTELECTUAIS
                QUILOMBOLAS DE ALCÂNTARA – MA E A “EPISTEMOLOGIA DA RESISTÊNCIA” </span>, produzida no âmbito do Programa de
              Pós-graduação em História – PPGHIST, da Universidade Estadual do Maranhão – UEMA, tendo como Área de
              concentração: História, Ensino e Narrativas e Linha de Pesquisa: Memória e Saberes Escolares.
            </p>

            <p className="mt-4 italic text-justify text-xl text-[#CCAC85] font-normal">
              Objetiva-se que os usuários da plataforma possam consultar informações sobre o território  étnico, os saberes e
              fazeres de resistência vivenciados pelos intelectuais quilombolas no  cotidiano de seus quilombos e das práticas
              mobilizatórias em suas diferentes fronteiras nos  diversos espaços sociais ocupados, por meio do acesso ao mapa
              interativo, fotografias,  trechos  de entrevistas, publicações de livros e outros materiais sugeridos nos links e
              QrCodes, que  tratam da história social e da “Epistemologia da Resistência” elaborada pelos intelectuais
              quilombolas do Território Étnico de Alcântara – MA.
            </p>
          </div>

          <img
            src={elipse5}
            alt="elipse com foto"
            className="w-[500px] h-[500px]"
          />
        </div>
      </section>

      <section className="bg-[#222F1B] p-16">
        <h2 className="text-[#CCAC85] text-[40px] font-normal">Conheça nosso mapa interativo</h2>
        <p className="text-[#CCAC85] text-xl font-normal mt-2">
          Navegue pelo mapa e descubra um pouco sobre as comunidades quilombolas de Alcântara
        </p>
        <div className="flex flex-row mt-8 gap-[30px]">
          <ImageMap markersData={quilombos} onSelectMarker={setSelectedMarkerId} />

          <Card
            title={selectedMarker ? selectedMarker.title : "Escolha um ponto no mapa"}
            description={selectedMarker ? selectedMarker.description : "Clique em um marcador para ver os detalhes."}
            tag={selectedMarker ? selectedMarker.tag : []}
          />
        </div>
      </section>

    </div>
  )
}