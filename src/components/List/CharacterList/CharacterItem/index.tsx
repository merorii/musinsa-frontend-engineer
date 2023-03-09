//types
import { Character } from "store/types/character";

//styles
import * as S from "../style";
import remove from "assets/icons/remove.svg";

interface CharacterPropsType {
  data: Character;
}

export const CharacterItem = ({ data }: CharacterPropsType) => {
  const { name, aliases, titles, books, tvSeries, died, gender } = data;

  const removeBlankData = (array: string[]) => {
    return array.filter((item: string) => item !== "");
  };

  const arrayToTxt = (array: string[]) => {
    if (removeBlankData(array).length <= 0) {
      return "-";
    }
    return removeBlankData(array).join(", ");
  };

  return (
    <S.Character>
      <S.Content>
        <S.Top>
          <span className="name">{name || "Anonymous"}</span>
          <span className="small">{died !== "" && " (Dead)"}</span>
          <span className="small gray"> / {gender}</span>
        </S.Top>
        <S.List>
          <div>
            <span className="gray">Aliase</span>
            <p>{arrayToTxt(aliases)}</p>
          </div>
          <div>
            <span className="gray">Titles</span>
            <p>{arrayToTxt(titles)}</p>
          </div>
        </S.List>
        <S.Bottom>
          <div>
            <span className="gray">Books</span> {removeBlankData(books).length}
          </div>
          <div>
            <span className="gray">TvSeries</span> {removeBlankData(tvSeries).length}
          </div>
        </S.Bottom>
      </S.Content>
      <S.RemoveBtn>
        <img src={remove} alt="항목 삭제" />
      </S.RemoveBtn>
    </S.Character>
  );
};
