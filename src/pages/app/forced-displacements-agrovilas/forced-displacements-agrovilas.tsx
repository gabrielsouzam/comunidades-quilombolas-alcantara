import PastaIcon from "./../../../assets/pasta.png"
import DisplacementsImage from "./../../../assets/barcos.png";
import MapaImage from "./../../../assets/mapa2.png";

export function ForcedDisplacementsAgrovilas() {
  return (
    <div className="font-['Open_Sans']">
      <div
        className="relative h-[56.25rem] bg-cover bg-center bg-no-repeat px-28 py-24"
        style={{
          backgroundImage: `url(${DisplacementsImage})`,
        }}
      >
        <div
          className="max-w-[800px]"
        
        >
          <h1 className="text-[26px] text-black">
            Deslocamento compulsório das comunidades quilombolas para as agrovilas
          </h1>
          <p className="mt-3 text-lg italic text-black">
            história não escrita da resistência cotidiana em suas diferentes fronteiras
          </p>
        </div>

        <div
          className="max-w-[90%] text-justify text-black z-20">
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

        <div
          className="relative max-w-[100%] w-full px-14 text-white z-20 mt-16"
        >
          <div className="max-w-[44%] text-justify">
            <blockquote className="italic text-2xl font-light text-justify text-[#F5F5DC] leading-relaxed ">
              “Nessa época, foi um grande sofrimento. Cada qual nos seus devidos lugares, onde nasceram e se criaram. A gente sofreu demais,
              chorei demais! Deixa eu chorar! Você já viu uma criança mamar e a mãe não querer mais dar o peito? Foi o que eles fizeram com a gente!”
            </blockquote>
            <cite className="block mt-4 text-lg font-medium text-justify text-[#F5F5DC]">
              — Leandra de Jesus Silveira, 83 anos, quilombola realocada de Pepital Velho para a agrovila Pepital.
            </cite>
          </div>
          <div className="max-w-[70%] pt-16 flex flex-col self-end z-20 ml-auto">
            <blockquote className="italic text-2xl font-light text-justify text-[#F5F5DC] leading-relaxed pr-4">
              “Cada lugar tem seu uso, como dizia minha avó! Agora não tá dando tanto, tudo foi diminuindo porque 
              a terra tá diminuindo!”
            </blockquote>
            <cite className="block mt-4 text-lg font-medium text-right text-[#F5F5DC] z-20">
              — Maria de Fátima Ferreira, 67 anos, quilombola realocada para a agrovila Mamuna.
            </cite>
          </div>
        </div>
      </div>

      <div className="relative bg-[#501E0D] py-10 mt-22">
        <div className="absolute top-[-230px] left-0 w-full h-[280px] bg-gradient-to-b from-transparent via-[#000000] to-[#531e0c]"></div>

        <div className="relative flex justify-center z-10">
          <img
            src={MapaImage}
            alt="Mapa das comunidades quilombolas deslocadas"
            className="shadow-lg rounded-lg w-[70%] border border-gray-300 "
          />
        </div>
        <div className="mt-6 text-white text-lg relative z-10 flex items-center justify-end pr-6">
          <span>Para saber mais, acesse clicando</span>
          <a href="#" className="font-semibold no-underline ml-1">aqui</a>
          <img src={PastaIcon} alt="Ícone de Pasta" className="w-5 h-5 ml-2" />
        </div>
      </div>
    </div>
  );
}

export default ForcedDisplacementsAgrovilas;
