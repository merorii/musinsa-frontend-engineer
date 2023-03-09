import styled, { css } from "styled-components";

export const Section = styled.section`
  display: flex;
  padding: 0 5vw;
  margin: 2rem 0;
`;

interface FilterOptionType {
  isActiveFilter: boolean;
}

export const FilterOption = styled.div<FilterOptionType>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 50px;
  cursor: pointer;

  ${({ isActiveFilter }) =>
    isActiveFilter
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
