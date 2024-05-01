import styled from "styled-components";

export const Wrapper = styled.div<{ $img: string }>`
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    background-image: url(${({ $img }) => $img});
    background-attachment: fixed;
    background-position: 0 0;
    opacity: 0.5;
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
`;

export const Header = styled.div`
  padding: 0px 180px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 2;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XXL};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 2fr;
  z-index: 2;
`;
