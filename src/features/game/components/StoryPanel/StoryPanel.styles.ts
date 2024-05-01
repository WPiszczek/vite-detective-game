import styled from "styled-components";
import { Button } from "../../../common/components";

export const Wrapper = styled.div`
  padding: 20px 60px 40px 180px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.veryDarkBlue};
  overflow-y: auto;
  min-height: calc(100vh - 60px - 61px); // header height + padding top/bottom
  max-height: calc(100vh - 60px - 61px); // header height + padding top/bottom
  border-right: 1px solid ${({ theme }) => theme.colors.veryDarkBlue};
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
