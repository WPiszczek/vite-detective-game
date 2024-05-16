import { ChangeEvent, FC, useContext, useEffect, useState } from "react";

import { GameContext } from "../../../game/context";
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
    isFullTextSearch,
    searchResults,
    searchFacts,
    areSomeFactsChecked,
    checkFactConnection
  } = useContext(FactsContext);
  const { currentPanelId } = useContext(GameContext);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery("");
  }, [currentPanelId]);

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (!isFullTextSearch) searchFacts(e.target.value);
  };

  return (
    <Wrapper>
      <SearchInputWrapper>
        <SearchInput
          placeholder={"Search found facts here"}
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        {isFullTextSearch && (
          <SearchButton onClick={() => searchFacts(searchQuery)}>
            <SearchIcon />
          </SearchButton>
        )}
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
