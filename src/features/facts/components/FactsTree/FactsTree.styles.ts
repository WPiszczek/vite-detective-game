import styled from "styled-components";

export const TreeContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const NodeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkWhite};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 5px;
`;

export const NodeTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.XL};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const NodeDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize.L};
  color: ${({ theme }) => theme.colors.black};
`;
