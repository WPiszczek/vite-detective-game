import styled from "styled-components";

import { StarIcon as StarIcon_Unstyled } from "../../../../assets/icons";
import { colors } from "../../../theme/colors";
import { Button } from "../../../common/components";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 30%;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.veryLightBlue};
  opacity: 0.9;
  width: 500px;
  height: 240px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StarsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StarIcon = styled(StarIcon_Unstyled).attrs({
  color: colors.gold,
  width: 30,
  height: 30
})``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.XXL};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.veryDarkBlue};
`;

export const DescriptionWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.L};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.veryDarkBlue};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

export const Action = styled(Button)`
  opacity: 0.7;
  padding: 5px;
`;
