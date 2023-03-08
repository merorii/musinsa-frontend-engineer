import logo from "assets/icons/logo.svg";
import * as S from "./style";

export const Header = () => {
  return (
    <S.Header>
      <h1>
        <img src={logo} alt="musinsa" />
      </h1>
    </S.Header>
  );
};
