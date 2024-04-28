import styled from "styled-components";
import { Button } from "../../../common/components";

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

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XXXL};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Action = styled(Button)`
  opacity: 0.7;
  padding: 5px;
`;
