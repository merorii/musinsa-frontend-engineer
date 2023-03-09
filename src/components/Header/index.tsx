import * as S from "./style";
import logo from "assets/icons/logo.svg";

export const Header = () => {
  return (
    <S.Header>
      <h1>
        <img src={logo} alt="무신사 과제" />
      </h1>
    </S.Header>
  );
};
