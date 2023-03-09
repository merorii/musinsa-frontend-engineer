import { useSetRecoilState } from "recoil";
import { filterState } from "store/filterState";

//types
import { Character } from "store/types/character";

//styles
import * as S from "../style";
import remove from "assets/icons/remove.svg";

interface CharacterPropsType {
  data: Character;
}

export const CharacterItem = ({ data }: CharacterPropsType) => {
  const { name, aliases, titles, books, tvSeries, url } = data;
  const setRemoveFilter = useSetRecoilState(filterState);

  const removeBlankData = (array: string[]) => {
    return array.filter((item: string) => item !== "");
  };

  const arrayToTxt = (array: string[]) => {
    if (removeBlankData(array).length <= 0) {
      return "-";
    }
    return removeBlankData(array).join(", ");
  };

  const removeItem = () => {
    setRemoveFilter((prev) => ({
      ...prev,
      remove: [...prev.remove, url],
    }));
  };

  return (
    <S.CharacterLi>
      <S.Content>
        <S.Top>
          <span className="name">{name || "Anonymous"}</span>
        </S.Top>
        <S.List>
          <S.ListItem>
            <span className="gray">Aliase</span>
            <p>{arrayToTxt(aliases)}</p>
          </S.ListItem>
          <S.ListItem>
            <span className="gray">Titles</span>
            <p>{arrayToTxt(titles)}</p>
          </S.ListItem>
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
      <S.RemoveBtn onClick={removeItem}>
        <img src={remove} alt="항목 삭제" />
      </S.RemoveBtn>
    </S.CharacterLi>
  );
};
