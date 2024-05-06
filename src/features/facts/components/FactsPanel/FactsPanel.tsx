import { ChangeEvent, FC, useContext, useState } from "react";

import { FactsContext } from "../../context";
import Fact from "../Fact";
import {
  CheckButton,
  FactsWrapper,
  SearchInput,
  SearchInputWrapper,
  Wrapper
} from "./FactsPanel.styles";

const FactsPanel: FC = () => {
  const { getFoundFacts, areSomeFactsChecked } = useContext(FactsContext);
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Wrapper>
      <SearchInputWrapper>
        <SearchInput
          placeholder={"Search found facts here"}
          value={searchText}
          onChange={handleSearchText}
        />
      </SearchInputWrapper>
      {areSomeFactsChecked() && (
        <CheckButton onClick={() => console.log("cllick")}>
          Check connection
        </CheckButton>
      )}
      <FactsWrapper>
        {getFoundFacts().map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </FactsWrapper>
    </Wrapper>
  );
};

export default FactsPanel;
