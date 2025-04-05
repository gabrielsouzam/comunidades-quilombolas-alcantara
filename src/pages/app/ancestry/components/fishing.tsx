import boats from "../../../../assets/boats.png"
import redeDePesca from "../../../../assets/rede-de-pesca.png"

export function Fishing() {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${boats})` }}
        className="max-h-[18.62rem] bg-cover bg-center items-center text-end px-40 py-46"
      >
        <h2 className="text-4xl">Pesca e coleta de mariscos</h2>
      </section>

      <section className="bg-dark-green flex flex-col pt-20 px-40">

        <div className="flex flex-col gap-11 items-end mb-10">
          <div className="space-y-2 flex flex-col items-end">
            <span className="italic font-light text-4xl text-left block">“A pesca é a feira onde se busca o sustento!"</span>
            <span className="text-lg font-medium text-left">- Maria José Lima, 50 anos, Quilombo Mamuna.</span>
          </div>
        </div>

        <div className="flex flex-row gap-11 items-center mb-11">
          <div>
            <img
              src={redeDePesca}
              alt=""
              className="shadow-lg  min-w-[23.75rem] h-[23.43rem]"
            />
            <p className="font-normal italic text-xl"> Redes de pesca (malhão) - Quilombo Canelatiua</p>
            <p className="font-normal text-[10px]">Foto: Davi Pereira Júnior</p>

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
          </div>
        </div>

        <div className="space-y-2 flex flex-col items-end mb-11">
          <span className="italic font-light text-4xl text-right block">
            “As fuzacas trouxeram muitos problemas, escassez de peixe. É preciso  ter consciência ecológica!”
          </span>
          <span className="text-lg font-medium text-left">
            - Juliana Ferreira Pereira, 62 anos, quilombo São João de Cortes.
          </span>
        </div>

        <p className="text-xl text-justify font-normal mb-11">
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

        <div className="space-y-2 flex flex-col items-end mb-11">
          <span className="italic font-light text-4xl text-right block">
            “Nossos recursos naturais estão pouco. A tendência do nosso povo é  crescer e quanto mais a gente cresce, fica mais difícil!”
          </span>
          <span className="text-lg font-medium text-left">
            - Eleotério dos Santos Gonçalves Ferreira, 64 anos, quilombo Terra  Mole.
          </span>
        </div>

        <p className="text-xl text-justify font-normal mb-11">
          O deslocamento compulsório dos quilombolas para as agrovilas  impactou, sobremaneira, os recursos naturais
          referentes à pesca e a  coleta de mariscos. As famílias, que anteriormente, utilizavam um fazer  epistemológico
          específico quanto ao uso dos instrumentos de pesca,  foram obrigadas a realizarem uma série de adaptações
          necessárias à  garantia de sua sobrevivência. A saída para uso de igarapés nos  quilombos localizados mais
          próximos das agrovilas, a utilização de  instrumentos de pesca e saberes diferentes daqueles usados  anteriormente,
          fez com que, ocorresse um rareamento dos peixes, camarões, siris, sururu e ostras. Tal impacto ambiental só fora
          controlado minimamente, em  razão dos saberes tradicionais dos quilombolas que adaptaram seus artefatos de pesca
          e suas  estratégias de uso comum no intuito de garantir a reprodução das espécies e consequentemente,  sua própria
          reprodução social.
        </p>
      </section>
    </div>
  );
}