import boats2 from "../../../../assets/boats2.png"
import srJose from "../../../../assets/sr-jose.jpeg"

export function Manufacturing() {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${boats2})` }}
        className="min-h-[14.62rem] bg-cover bg-center items-center px-40 py-24"
      >
        <h2 className="text-4xl max-w-[55.38rem]">Fabricação de embarcações de pequeno, médio e grande porte</h2>
      </section>

      <section className="bg-intermediate-green flex flex-col pt-20 px-40">
        <div className="flex flex-row gap-11 items-center mb-11">
          <div className="col-span-7 space-y-11">
            <p className="text-xl text-justify font-normal">
              A pesca apresenta-se como uma atividade que agrega os intelectuais  quilombolas de Alcântara a partir dos
              saberes e fazeres cotidianos, que  incluem a feitura e o reparo de instrumentos, a coleta de mariscos, a
              comercialização do pescado e a fabricação de embarcações. O  quilombo São João de Cortes, aponta a pesca
              como atividade principal,  comercializando o pescado para os municípios de Bequimão,  Guimarães e a sede
              de Alcântara.
            </p>

            <p className="text-xl text-justify">
              A feitura das embarcações constitui-se um fazer de resistência peculiar  do quilombo São João de Cortes.
              O quilombola José, 85 anos, detém  o saber tradicional sobre a fabricação de embarcações de pequeno,  médio
              e grande porte. A comercialização das embarcações é realizada  sob encomenda prévia dos compradores, que em
              sua maioria, são de  municípios vizinhos a Alcântara. A madeira utilizada na feitura das  embarcações é retirada
              no próprio território de São João de Cortes,  cuidadosamente escolhida e coletada por seu José, que ensinou seus
              filhos o saber tradicional da escolha do material e da feitura das  embarcações.  O tempo de construção das
              embarcações varia de  acordo com o tamanho e as características de cada uma, sendo  necessário, em média,
              15 dias para a feitura de embarcações de  pequeno porte e 90 dias para o término das embarcações de grande
              porte.
            </p>
          </div>

          <div>
            <img
              src={srJose}
              alt=""
              className="border-8 border-white shadow-lg  min-w-[28.18rem] h-[28.62rem]"
            />
            <p className="font-normal italic text-xl text-right"> Sr  José,  85  anos,  confeccionando embarcações,  quilombo São João de Cortes.</p>
            <p className="font-normal text-[10px] text-right">Foto: Davi Pereira Júnior</p>

          </div>
        </div>

        <div className="space-y-2 flex flex-col mb-11">
          <span className="italic font-light text-4xl block">
            “Aprendi com João Ribeiro, meu mestre. Eu já fiz muitos barcos, já até  perdi a conta. Ensinei meus filhos a arte de fazer, mas eu continuo  trabalhando sozinho!”
          </span>
          <span className="text-lg font-medium text-left">
            - José, 85 anos, quilombo São João de Cortes.
          </span>
        </div>
      </section>
    </div>
  );
}