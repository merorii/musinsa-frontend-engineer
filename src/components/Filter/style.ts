import styled, { css } from "styled-components";

interface FilterOptionType {
  isActive: boolean;
}

export const Section = styled.section`
  display: flex;
  margin: 2rem 0;
`;

export const BtnCommonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 50px;
  cursor: pointer;
`;

export const FilterItem = styled.div<FilterOptionType>`
  ${BtnCommonStyle}

  ${({ isActive }) =>
    isActive
      ? css`
          color: ${({ theme }) => theme.colors.white};
          background: ${({ theme }) => theme.colors.black};
        `
      : css`
          &:hover {
            background: ${({ theme }) => theme.colors.gray};
          }
        `}

  & + & {
    margin-left: 0.5rem;
  }
`;

export const ResetBtn = styled.button`
  ${BtnCommonStyle}
  margin-left: 0.5rem;
`;
