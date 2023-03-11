import React from "react";

import { Header } from "components";

import * as S from "./style";

interface CommonLayoutPropsType {
  children: React.ReactNode;
}

export const CommonLayout = ({ children }: CommonLayoutPropsType) => {
  return (
    <S.Layout>
      <Header />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
};
