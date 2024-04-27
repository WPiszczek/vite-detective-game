import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  font-size: ${({ theme }) => theme.fontSize.XXL};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-style: italic;
  padding: 10px 180px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Content = styled.div`
  /* padding: 10px 180px; */
`;
