import React from "react";
import DisplacementsImage from "/src/assets/displacements.svg";
import MapaImage from "/src/assets/mapa.png";

export function ForcedDisplacementsAgrovilas() {
  return (
    <div className="font-['Open_Sans']">
      <div
        className="relative h-[56.25rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${DisplacementsImage})`,
        }}
      >
        <div
          className="absolute max-w-[800px]"
          style={{
            top: "6%",
            left: "60px",
          }}
        >
          <h1 className="text-[28px] font-semibold text-black">
            Deslocamento compulsório das comunidades quilombolas para as agrovilas
          </h1>
          <p className="mt-3 text-lg italic text-black">
            história não escrita da resistência cotidiana em suas diferentes fronteiras
          </p>
        </div>

        <div
          className="absolute max-w-[90%] text-justify text-black"
          style={{
            top: "22%",
            left: "60px",
          }}
        >
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
          className="absolute max-w-[100%] w-full px-12 text-white"
          style={{
            bottom: "88px",
          }}
        >
          <div className="max-w-[50%] text-left">
            <blockquote className="italic text-2xl">
              “Nessa época, foi um grande sofrimento. Cada qual nos seus devidos lugares, onde nasceram e se criaram. A gente sofreu demais,
              chorei demais! Deixa eu chorar! Você já viu uma criança mamar e a mãe não querer mais dar o peito? Foi o que eles fizeram com a gente!”
            </blockquote>
            <cite className="block mt-4 text-sm text-gray-300">
              — Leandra de Jesus Silveira, 83 anos, quilombola realocada de Pepital Velho para a agrovila Pepital.
            </cite>
          </div>

          <div className="max-w-[50%] text-right mt-10 ml-auto">
            <blockquote className="italic text-2x1">
              “Cada lugar teu seu uso, como dizia minha avó! Agora não tá dando tanto, tudo foi diminuindo por que a terra tá diminuindo!”
            </blockquote>
            <cite className="block mt-2 text-sm text-gray-300">
              — Maria de Fátima Ferreira, 67 anos, quilombola realocada para a agrovila Mamuna.
            </cite>
          </div>
        </div>
      </div>

      <div className="relative bg-[#501E0D] py-10 mt-22">
      <div className="absolute top-[-230px] left-0 w-full h-[280px] bg-gradient-to-b from-transparent via-[#5a2b1a] to-[#501E0D]"></div>

        <div className="relative flex justify-center z-10">
          <img
            src={MapaImage}
            alt="Mapa das comunidades quilombolas deslocadas"
            className="shadow-lg rounded-lg w-[70%] border border-gray-300"
          />
        </div>
        <div className="text-right mt-6 mr-10 text-white text-lg relative z-10">
          Para saber mais, acesse clicando <span className="font-semibold underline cursor-pointer">aqui</span>
        </div>
      </div>
    </div>
  );
}

export default ForcedDisplacementsAgrovilas;
