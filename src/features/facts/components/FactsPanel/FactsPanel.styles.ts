import styled from "styled-components";

import { SearchIcon as SearchIcon_Unstyled } from "../../../../assets/icons";
import { Button } from "../../../common/components";
import { colors } from "../../../theme/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 0 30px;
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

export const SearchButton = styled(Button)`
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

export const SearchIcon = styled(SearchIcon_Unstyled).attrs({
  color: colors.darkBlue,
  width: 30,
  height: 30
})``;

export const CheckButtonWrapper = styled.div`
  padding: 0 30px;
`;

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
  padding: 0 30px;

  overflow-y: auto;
  min-height: calc(
    100vh - 60px - 61px - 135px
  ); // header height + padding top/bottom + height of search field
  max-height: calc(
    100vh - 60px - 61px - 135px
  ); // header height + padding top/bottom + height of search field
`;
