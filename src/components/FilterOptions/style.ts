import styled, { css } from "styled-components";

export const Section = styled.section`
  display: flex;
`;

interface FilterOptionType {
  isActiveFilter: boolean;
}

export const FilterOption = styled.div<FilterOptionType>`
  padding: 5px 10px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: black;
  border-radius: 50px;
  cursor: pointer;
  ${({ isActiveFilter }) =>
    isActiveFilter &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `};
`;
