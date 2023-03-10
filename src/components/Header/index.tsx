import * as S from "./style";
import { ReactComponent as SvgLogo } from "assets/icons/logo.svg";

export const Header = () => {
  return (
    <S.Header>
      <h1>
        <SvgLogo />
      </h1>
    </S.Header>
  );
};
