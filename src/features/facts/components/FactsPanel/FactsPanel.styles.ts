import styled from "styled-components";

import { Button } from "../../../common/components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0 30px 30px;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  min-height: 35px;
`;

export const SearchInput = styled.input.attrs({
  type: "text"
})`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 5px;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.blue};
  }

  &:focus {
    outline: none;
  }
`;

export const CheckButtonWrapper = styled.div``;

export const CheckButton = styled(Button)`
  opacity: 0.7;
  padding: 5px;
  width: 100%;

  &:disabled {
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGrey};
      cursor: auto;
    }
  }
`;

export const FactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow-y: auto;
  min-height: calc(
    100vh - 60px - 61px - 135px
  ); // header height + padding top/bottom + height of search field
  max-height: calc(
    100vh - 60px - 61px - 135px
  ); // header height + padding top/bottom + height of search field
`;
