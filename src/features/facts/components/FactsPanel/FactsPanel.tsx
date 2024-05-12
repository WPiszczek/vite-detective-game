import { ChangeEvent, FC, useContext, useState } from "react";

import { FactsContext } from "../../context";
import { Fact } from "..";
import {
  CheckButton,
  CheckButtonWrapper,
  FactsWrapper,
  SearchButton,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  Wrapper
} from "./FactsPanel.styles";

const FactsPanel: FC = () => {
  const {
    searchResults,
    searchFacts,
    areSomeFactsChecked,
    checkFactConnection
  } = useContext(FactsContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Wrapper>
      <SearchInputWrapper>
        <SearchInput
          placeholder={"Search found facts here"}
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        <SearchButton onClick={() => searchFacts(searchQuery)}>
          <SearchIcon />
        </SearchButton>
      </SearchInputWrapper>
      <CheckButtonWrapper>
        <CheckButton
          onClick={() => checkFactConnection()}
          disabled={!areSomeFactsChecked()}>
          Check facts combination
        </CheckButton>
      </CheckButtonWrapper>
      <FactsWrapper>
        {searchResults.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </FactsWrapper>
    </Wrapper>
  );
};

export default FactsPanel;
