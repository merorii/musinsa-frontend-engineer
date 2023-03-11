import React from "react";

import { Character } from "store/types/character";

import * as S from "./style";
import { ReactComponent as SvgRemove } from "assets/icons/remove.svg";

interface CharacterPropsType {
  data: Character;
  onClickRemove: (removeUrl: string) => void;
}

export const CharacterItem = ({ data, onClickRemove }: CharacterPropsType) => {
  const { name, aliases, titles, books, tvSeries, url } = data;

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
      <S.RemoveBtn
        onClick={() => {
          onClickRemove(url);
        }}
      >
        <SvgRemove />
      </S.RemoveBtn>
    </S.CharacterLi>
  );
};
