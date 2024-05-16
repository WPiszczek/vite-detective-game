import styled from "styled-components";

import { SettingsIcon as SettingsIcon_Unstyled } from "../../assets/icons";
import { Button } from "../../features/common/components";
import { colors } from "../../features/theme/colors";

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

export const SettingsButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const SettingsButton = styled(Button)`
  width: 35px;
  height: 35px;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  border: 1px solid ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 5px;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const SettingsIcon = styled(SettingsIcon_Unstyled).attrs({
  color: colors.darkBlue,
  width: 30,
  height: 30
})``;

export const SettingsTooltip = styled.div`
  visibility: hidden;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  padding: 5px 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;

  ${SettingsButtonWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
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
  padding: 0 180px;
`;
