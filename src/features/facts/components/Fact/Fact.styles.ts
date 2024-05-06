import styled from "styled-components";
import { CheckIcon as CheckIcon_Unstyled } from "../../../../assets/icons";

export const Wrapper = styled.div`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.veryDarkBlue};
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.XL};
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const CheckButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  border: 1px solid ${({ theme }) => theme.colors.veryDarkBlue};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const CheckIcon = styled(CheckIcon_Unstyled).attrs(({ color }) => ({
  color: color,
  width: 30,
  height: 30
}))``;

export const Description = styled.div``;
