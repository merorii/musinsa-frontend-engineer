//types
import { Character } from "store/types/character";

//styles
import * as S from "../style";

interface CharacterPropsType {
  data: Character;
}

export const CharacterItem = ({ data }: CharacterPropsType) => {
  const { gender, name, tvSeries } = data;
  return (
    <S.Character>
      <div>{gender}</div>
      <div>{name}</div>
      <div>{tvSeries}</div>
    </S.Character>
  );
};
