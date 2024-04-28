import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 180px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
