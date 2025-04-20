import PastaIcon from "./../../../assets/pasta.png";
import DisplacementsImage from "./../../../assets/barcoTeste.png";
import MapaImage from "./../../../assets/mapa2.png";

export function ForcedDisplacementsAgrovilas() {
  return (
    <div className="font-['Open_Sans']">
      <div
        className="relative bg-cover bg-center bg-no-repeat px-6 md:px-16 lg:px-28 py-24"
        style={{
          backgroundImage: `url(${DisplacementsImage})`,
        }}
      >
        <div className="max-w-3xl text-white">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Deslocamento compulsório das comunidades quilombolas para as agrovilas
          </h1>
          <p className="mt-3 text-lg italic">
            história não escrita da resistência cotidiana em suas diferentes fronteiras
          </p>
        </div>

        <div className="mt-6 text-white text-justify text-base md:text-lg leading-relaxed z-20 max-w-full">
          <p className="mb-4">
            Nos anos de 1986 e 1987, ocorreram os deslocamentos de 312 famílias de 23
            quilombos para sete agrovilas que reproduziram os nomes dos quilombos de onde foram
            retirados compulsoriamente, respectivamente Peru, Pepital, Cajueiro, Ponta Seca,
            Só Assim, Marudá e Espera. As agrovilas são conjuntos habitacionais construídos pelo
            CLA sem planejamento para atender a reprodução física e social das famílias.
            O plano de deslocamento compulsório não levou em consideração as especificidades dos quilombos,
            aplicando-se critérios idênticos de realocação para famílias que desenvolviam
            atividades diferenciadas de pesca em igarapés, pesca em mar aberto, produção agrícola em
            roças com práticas de cultivo individuais e coletivas e uso comum dos recursos naturais.
          </p>
          <p>
            A divisão em agrovilas promoveu a alteração de práticas dos saberes e fazeres dos quilombolas,
            a exemplo do sistema de uso comum dos recursos naturais, por instituir uma prática de divisibilidade da terra,
            com o estabelecimento de lotes fixos, com limites definidos. Os impactos dos deslocamentos compulsórios continuam a
            alterar os saberes e fazeres cotidianos dos quilombolas que vivem nas agrovilas,
            com dificuldades ao acesso aos recursos naturais de uso comum, a exemplo da escassez das áreas de roça,
            pesca e áreas para habitação de novas famílias.
          </p>
        </div>

        <div className="relative w-full text-white z-20 mt-16">
          <div className="w-full md:max-w-2xl text-justify">
            <blockquote className="italic text-2xl md:text-3xl font-light text-[#F5F5DC] leading-relaxed">
              “Nessa época, foi um grande sofrimento. Cada qual nos seus devidos lugares, onde nasceram e se criaram. A gente sofreu demais,
              chorei demais! Deixa eu chorar! Você já viu uma criança mamar e a mãe não querer mais dar o peito? Foi o que eles fizeram com a gente!”
            </blockquote>
            <cite className="block mt-4 text-base md:text-lg font-normal text-[#F5F5DC]">
              — Leandra de Jesus Silveira, 83 anos, quilombola realocada de Pepital Velho para a agrovila Pepital.
            </cite>
          </div>
        </div>
      </div>

      <div className="relative bg-[#501E0D] pt-40 pb-20 mt-20">
        <div className="absolute top-[-230px] left-0 w-full h-[280px] bg-gradient-to-b from-transparent via-[#000000] to-[#531e0c] pointer-events-none"></div>

        <div className="container max-w-[80%] ml-auto pr-6">
          <blockquote className="italic text-2xl md:text-3xl font-light text-[#F5F5DC] leading-relaxed text-justify">
            “A temporada mais ruim foi quando nós viemos pra cá e  perdemos tudo o que ficou lá, muito
            sofrimento! Nós  tentamos voltar, mas não conseguimos. A gleba da terra  não é boa para plantar.
            A gente trabalhava lá, mas não  prestava não.
            Tenho duas filhas que moram aqui e elas  não tem lote, trabalham na gleba de outras pessoas.”
          </blockquote>
          <cite className="block mt-4 text-base md:text-lg font-normal text-right text-[#F5F5DC]">
            — Maria de Fátima Ferreira, 67 anos, quilombola realocada para a agrovila Mamuna.
          </cite>

          <div className="mt-16 text-white text-base md:text-lg flex flex-wrap items-center justify-end gap-2">
            <span>Para saber mais, acesse clicando</span>
            <a
              href={MapaImage}
              className="font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              aqui
            </a>
            <img src={PastaIcon} alt="Ícone de Pasta" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForcedDisplacementsAgrovilas;
