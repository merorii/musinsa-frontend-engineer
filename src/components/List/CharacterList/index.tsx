//components
import { CharacterItem } from "./CharacterItem";

//types
import { Character } from "store/types/character";

import * as S from "./style";

interface CharacterListPropsType {
  data: Character[];
}

export const CharacterList = ({ data }: CharacterListPropsType) => {
  return (
    <ul>
      {data.map((item: Character) => {
        return <CharacterItem key={item.url} data={item} />;
      })}
    </ul>
  );
};
