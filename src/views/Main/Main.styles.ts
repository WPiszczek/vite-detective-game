import styled from "styled-components";

export const Wrapper = styled.div<{ $img: string }>`
  padding: 100px 180px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  position: relative;

  &::before {
    content: "";
    background-image: url(${({ $img }) => $img});
    background-attachment: fixed;
    background-position: 0 0;
    opacity: 0.3;
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
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
