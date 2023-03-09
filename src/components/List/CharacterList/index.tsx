//components
import { CharacterItem } from "./CharacterItem";

//types
import { Character } from "store/types/character";

interface CharacterListPropsType {
  data: Character[];
}

export const CharacterList = ({ data }: CharacterListPropsType) => {
  return (
    <section>
      {data.map((item: Character) => {
        return <CharacterItem key={item.url} data={item} />;
      })}
    </section>
  );
};
