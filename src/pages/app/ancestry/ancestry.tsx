import { AncestryAndKnowledge } from "./components/ancestry-and-knowledge";
import { Centers } from "./components/centers";
import { Fishing } from "./components/fishing";
import { Manufacturing } from "./components/manufacturing";


export function Ancestry() {
  return (
    <div className="flex flex-col w-full h-full text-base-white ">
      <AncestryAndKnowledge />
      <Fishing />
      <Manufacturing />
      <Centers />      
    </div>
  );
}