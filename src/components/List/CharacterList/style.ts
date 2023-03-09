import styled from "styled-components";

export const Section = styled.ul`
  padding: 0 5vw;
`;

export const Character = styled.li`
  position: relative;
  display: flex;
  padding: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  & + & {
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow: hidden;
  .name {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .gray {
    color: ${({ theme }) => theme.colors.gray2};
    margin-right: 1rem;
  }
  .small {
    font-size: 0.8rem;
  }
`;

export const Top = styled.div`
  margin-bottom: 1rem;
`;

export const List = styled.div`
  margin-bottom: 1rem;
  & > div {
    display: flex;
  }
`;

export const Bottom = styled.div`
  display: flex;
  div + div {
    margin-left: 1rem;
  }
`;

export const ListItem = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const RemoveBtn = styled.div`
  cursor: pointer;
`;
