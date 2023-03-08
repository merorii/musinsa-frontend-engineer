import styled from "styled-components";

export const Character = styled.div`
  padding: 50px 10px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
`;
