import Agrovila from "./../../../assets/agrovilaCajueira.png";
import Maruda from "./../../../assets/agrovilaMaruda.png";
import Peru from "./../../../assets/agrovilaPeru.png";
import SoAssim from "./../../../assets/agrovilaSoAssim.png";
import PastaIcon from "./../../../assets/pasta.png";
import VilarejoImage from "./../../../assets/vilarejo.png";
import EscolaImage from "./../../../assets/escola.png";
import Entidades2Image from "./../../../assets/entidadesR2.png";
import Entidades from "./../../../assets/entidadesR.png";

export function ForcedDisplacementsPermanent() {
  return (
    <div className="font-['Open_Sans']">
      <div
        className="relative bg-cover bg-center px-30 pt-24 z-20 pb-6"
        style={{ backgroundImage: `url(${VilarejoImage})` }}
      >
        <div
          className="absolute inset-0 top-10 z-10 w-full h-full"
          style={{
            background: `linear-gradient(180deg,
              rgba(207, 169, 125, 0) 4.48%,
              rgba(205, 142, 56, 0.3) 9.43%,
              rgba(187, 105, 24, 0.3) 13.32%,
              rgba(182, 95, 14, 0.5) 18.97%,
              rgba(179, 88, 5, 0.5) 25.53%,
              rgba(179, 88, 5, 0.5) 25.87%,
              #9B3A00 37.2%,
              #742300 49.28%,
              #571901 90.35%)`,
          }}
        ></div>

        <div className=" text-white z-20">
          <h1 className="text-[28px] font-normal">
            Deslocamentos compulsórios permanentes
          </h1>
        </div>

        <div
          className=" flex justify-between flex-col gap-11 text-xl text-white text-justify z-20 relative"
          style={{
            color: "#F5F5DC",
          }}
        >
          <div className="w-full pr-1 mt-7">
            <p className="mb-6">
              O deslocamento compulsório dos quilombolas para as agrovilas em
              1986 continua, ao longo dos anos, reproduzindo práticas de
              violência cotidianas, seja em razão das memórias relatadas pelos
              quilombolas, seja em razão das dificuldades de sobrevivência e
              reprodução social das famílias.
            </p>
            <p className="mb-6">
              A violência praticada pelos atos de Estado no que se refere aos
              deslocamentos compulsórios é evidenciada desde a forma como se deu
              a abordagem do Centro de Lançamento de Alcântara - CLA às famílias
              no período anterior à retirada dos quilombolas de seus quilombos,
              sem prévia consulta, e durante todo processo que configurou a
              mudança das famílias. A construção das agrovilas e as imposições
              acerca da utilização das casas, permitem compreender a violência
              simbólica e a eficácia dos mecanismos de coerção e controle sobre
              as famílias.
            </p>
          </div>

          <div className="flex items-start gap-28 justify-evenly">
            <div className="w-4/5 flex flex-col gap-20">
              <p className="">
                As agrovilas foram projetadas para reproduzir os brasões da
                Aeronáutica e a disposição das casas seguiram o formato de cada
                brasão. O cotidiano das famílias nas casas era “vigiado”, não se
                admitindo alterações, de qualquer natureza, na estrutura física
                das casas, a exemplo de utilização de artefatos fixados nas
                paredes, mudança de cor na pintura, construção de fogão de barro
                e feitura de banheiros de palha.
              </p>
              <p className="">
                A data e o “tempo para fazer a mudança” para que os móveis e
                demais objetos pertencentes aos realocados fossem retirados de
                suas casas, foram definidos a partir de um planejamento do CLA,
                sem o consentimento das famílias. A estruturação das agrovilas e
                a disposição das casas não considerou as relações familiares e
                de vizinhança consolidadas nas comunidades.
              </p>
              <blockquote className="italic text-3xl font-light text-justify text-[#F5F5DC] leading-relaxed pr-120 mb-14">
                “Você já viu uma criança mamar e a mãe não querer dar o peito?
                Foi o que eles fizeram com a gente!”
              </blockquote>
            </div>

            <div className="flex-1 flex flex-col items-end">
              <div className="w-[290px]">
                <p className="text-lg font-semibold text-[#F5F5DC] text-center mb-12">
                  Confira outras imagens do território étnico
                </p>
                <img
                  src={Entidades}
                  alt="Litoral"
                  className="h-[150px] w-full object-cover rounded-lg opacity-90 border-4"
                  style={{ borderColor: "#AB9679" }}
                />
                <p
                  className="text-left text-xs mt-4"
                  style={{ color: "white" }}
                >
                  Foto: Elitiel Guedes
                </p>
              </div>

              <div className="w-[290px] mt-20">
                <img
                  src={Entidades2Image}
                  alt="Parte Território"
                  className="h-[150px] w-full object-cover rounded-lg opacity-90 border-4"
                  style={{ borderColor: "#AB9679" }}
                />
                <p
                  className="text-left text-xs mt-4"
                  style={{ color: "white" }}
                >
                  Foto: Davi Pereira Júnior
                </p>
              </div>
            </div>
          </div>

          <div className="w-full text-justify text-white z-20">
            <blockquote className="italic text-3xl font-light text-justify text-[#F5F5DC] leading-relaxed mt-6 mb-8 pr-10">
              “A temporada ruim foi quando viemos pra cá e perdemos tudo, nossa
              terra. Muito sofrimento, a falta de tudo o que ficou lá, muito
              sofrimento! Só tinha as casas e a areia e pra comer manga, tinha
              que ir lá no Pepital Velho, vinha com o pescoço doendo. Nessa
              época, foi um grande sofrimento!”
            </blockquote>

            <p className="mt-4 text-lg font-medium text-justify text-[#F5F5DC] ">
              — Leandra de Jesus Silveira, 83 anos, quilombola realocada de
              Pepital Velho para a agrovila Pepital.
            </p>

            <div className="flex items-start gap-10">
              <div className=" text-white text-justify z-20 w-2/3">
                <p className="mb-4">
                  <p className="mb-4 mt-6">
                    A partir do deslocamento para as agrovilas, os quilombolas
                    foram criaram novos critérios para ampararem as novas
                    famílias que se formaram em razão das restrições alavancadas
                    principalmente, pelo tamanho dos lotes que foram reduzidos
                    de 45ha para 15ha, impossibilitando a reprodução social das
                    famílias. A relação de interdependência existente entre os
                    quilombos se mantém presente na reconfiguração das práticas
                    de solidariedade para a acomodação de novas famílias nas
                    agrovilas.
                  </p>
                </p>
                <blockquote className="italic text-3xl font-light text-justify text-[#F5F5DC] leading-relaxed mt-8 mb-8 pr-2">
                  “Toda ação tem uma reação, são novos impactos sociais. Mais de
                  quinze casas construídas posteriormente, famílias que os
                  filhos se casaram e formaram famílias. Para fazer casas novas,
                  tem que reunir com a comunidade. Lá, eu peço o lugar da casa,
                  daí tem que definir o lugar da casa e o tamanho do lote”.
                </blockquote>

                <p className="mt-2 text-lg font-normal text-justify text-[#F5F5DC]">
                  - Sebastiana Alves Costa, 38 anos, quilombola da agrovila Só
                  Assim
                </p>
                <p className="mb-4 mt-6 text-xl">
                  A política de deslocamento das comunidades quilombolas pelo
                  CLA concretiza-se em caráter permanente, tanto pela violência
                  psicológica imputada aos quilombolas, quanto pela
                  descontinuidade de políticas públicas que, desarticuladas
                  pelos poderes públicos, nas esferas estadual e municipal,
                  promovem um deslocamento permanente dos quilombolas, que pelo
                  não acesso à educação, ao atendimento público de saúde, à
                  escassez de água potável, às péssimas condições das estradas,
                  meios de transportes e a não instalação da rede de energia
                  elétrica, são forçados a saírem compulsoriamente de seus
                  territórios.
                </p>
                <blockquote className="italic text-3xl font-light text-left text-[#F5F5DC] leading-relaxed mt-6">
                  “Tudo o que muda, murcha! Eles [CLA] deixam a pessoa sem
                  escolha!”
                </blockquote>

                <p className="mt-4 text-lg font-medium text-left text-[#F5F5DC]">
                  — Carlos Adelman, 44 anos, quilombo Pacurí
                </p>

                <p className="mb-4 mt-4 text-xl">
                  A descontinuidade das políticas públicas modifica as práticas
                  de resistência dos quilombolas no território, a exemplo do que
                  ocorreu com o quilombo Baracatatiua, que possui atualmente
                  apenas duas famílias. A escola, que anteriormente, funcionava
                  na modalidade de ensino multiseriado, fora desestruturada,
                  obrigando os pais a deslocarem seus filhos pequenos para
                  outros quilombos. O transporte escolar apresenta condições
                  precárias e, por vezes, tem o serviço interrompido, em razão
                  da falta de manutenção dos veículos e das condições críticas
                  das estradas vicinais de acesso aos quilombos vizinhos. As
                  crianças que precisam fazer o deslocamento diário para os
                  quilombos onde funcionam as escolas polo relatam não se
                  sentirem devidamente acolhidas em razão do caráter de
                  pertencimento, uma vez que as relações sociais não foram
                  estreitadas como ocorre em seus quilombos de origem,
                  demonstram cansaço excessivo pelo tempo de deslocamento que se
                  inicia ainda na madrugada e o não acesso à merenda escolar por
                  interrupções constantes do poder público municipal no repasse
                  dos alimentos, o que ocasiona dificuldades permanentes de
                  aprendizagem.
                </p>
                <p className="mb-4 text-xl">
                  As descontinuidades de políticas públicas vinculadas à questão
                  da saúde, constatam-se na desativação de postos de saúde, o
                  que ocasiona o não acesso às consultas e procedimentos de
                  rotina na maioria dos quilombos. Os serviços são agregados em
                  postos de saúde que funcionam como polos e os quilombolas
                  precisam fazer o deslocamento constante de seus quilombos para
                  acessarem consultas, vacinas e outros procedimentos que em
                  geral, são encaminhados pelos quilombolas agentes de saúde.
                  Apesar dos instrumentos de coerção, desmobilização e
                  deslocamento compulsório de caráter permanente imputados pelo
                  CLA, respaldado por uma política estadual e municipal de
                  descontinuidade de políticas públicas, os quilombolas
                  continuam reforçando suas práticas de resistência cotidiana e
                  frente à ameaça de novos deslocamentos, reafirmam os laços de
                  solidariedade e se posicionam contrários a qualquer ação do
                  CLA que promova novas alterações no território étnico.
                </p>
                <blockquote className="italic text-3xl font-light text-left text-[#F5F5DC] leading-relaxed mt-6">
                  “É como uma planta, se tirar daqui, vai mudar muita coisa!”
                </blockquote>

                <p className="mt-4 text-lg font-medium text-left text-[#F5F5DC]">
                  — Damião Amorim Lopes, 70 anos, quilombo Mocajubal
                </p>

                <div className="text-left mt-6 text-white text-lg relative z-10 flex items-center">
                  <span>Para saber mais, acesse clicando</span>
                  <a
                    href={EscolaImage}
                    className="font-semibold no-underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aqui
                  </a>
                  <img
                    src={PastaIcon}
                    alt="Ícone de Pasta"
                    className="w-5 h-5 ml-2"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end gap-32">
                <div>
                  <img
                    src={Agrovila}
                    alt="Agrovila Cajueiro"
                    className="h-[200px] w-[350px] object-cover rounded-lg opacity-90 border-4"
                    style={{ borderColor: "#AB9679" }}
                  />
                  <p
                    className="text-left text-sm mt-1 italic"
                    style={{ color: "#CEB490CC" }}
                  >
                    Agrovila Cajueiro
                  </p>
                  <p
                    className="text-left text-xs"
                    style={{ color: "#CEB490CC" }}
                  >
                    Foto: Elitiel Guedes
                  </p>
                </div>

                {/* Agrovila Marudá */}
                <div>
                  <img
                    src={Maruda}
                    alt="Agrovila Marudá"
                    className="h-[200px] w-[350px]  object-cover rounded-lg opacity-90 border-4"
                    style={{ borderColor: "#AB9679" }}
                  />
                  <p
                    className="text-left text-sm mt-1 italic"
                    style={{ color: "#CEB490CC" }}
                  >
                    Agrovila Marudá
                  </p>
                  <p
                    className="text-left text-xs"
                    style={{ color: "#CEB490CC" }}
                  >
                    Foto: Elitiel Guedes
                  </p>
                </div>

                {/* Agrovila Só Assim */}
                <div>
                  <img
                    src={SoAssim}
                    alt="Agrovila Só Assim"
                    className="h-[200px] w-[350px]  object-cover rounded-lg opacity-90 border-4"
                    style={{ borderColor: "#AB9679" }}
                  />
                  <p
                    className="text-left text-sm mt-1 italic"
                    style={{ color: "#CEB490CC" }}
                  >
                    Agrovila Só Assim
                  </p>
                  <p
                    className="text-left text-xs"
                    style={{ color: "#CEB490CC" }}
                  >
                    Foto: Elitiel Guedes
                  </p>
                </div>

                {/* Agrovila Peru */}
                <div>
                  <img
                    src={Peru}
                    alt="Agrovila Peru"
                    className="h-[200px] w-[350px]  object-cover rounded-lg opacity-90 border-4"
                    style={{ borderColor: "#AB9679" }}
                  />
                  <p
                    className="text-left text-sm mt-1 italic"
                    style={{ color: "#CEB490CC" }}
                  >
                    Agrovila Peru
                  </p>
                  <p
                    className="text-left text-xs"
                    style={{ color: "#CEB490CC" }}
                  >
                    Foto: Elitiel Guedes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForcedDisplacementsPermanent;
