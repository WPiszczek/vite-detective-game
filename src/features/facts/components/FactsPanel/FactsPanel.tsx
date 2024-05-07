import { ChangeEvent, FC, useContext, useState } from "react";

import { FactsContext } from "../../context";
import Fact from "../Fact";
import {
  CheckButton,
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

  console.log("search", searchResults);

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
      <CheckButton
        onClick={() => checkFactConnection()}
        disabled={!areSomeFactsChecked()}>
        Check fact connection
      </CheckButton>
      <FactsWrapper>
        {searchResults.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </FactsWrapper>
    </Wrapper>
  );
};

export default FactsPanel;
