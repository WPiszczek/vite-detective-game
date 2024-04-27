import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const BackgroundImg = styled.img`
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  padding: 10px 180px;
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.veryDarkBlue};
`;
