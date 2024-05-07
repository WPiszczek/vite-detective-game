import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import lunr from "lunr";

import { GameContext } from "../../game/context";
import { FactWithId, Facts } from "../types";

const defaultSearchIndex = lunr(function () {
  this.field("title");
  this.field("description");
});

export const FactsContext = createContext<{
  facts: Facts;
  searchResults: FactWithId[];
  searchFacts: (query: string) => void;
  getFoundFacts: () => FactWithId[];
  toggleFactChecked: (id: string) => void;
  isFactChecked: (id: string) => boolean;
  areSomeFactsChecked: () => boolean;
  checkFactConnection: () => string[];
}>(null);

export const FactsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { game, currentPanelId } = useContext(GameContext);
  const [facts, setFacts] = useState<Facts>(game?.facts);
  const [foundFactsIds, setFoundFactsIds] = useState<string[]>([]);

  const [searchResults, setSearchResults] = useState<FactWithId[]>([]);
  const [searchIndex, setSearchIndex] = useState(defaultSearchIndex);

  useEffect(() => {
    setFacts(game.facts);
  }, [game]);

  useEffect(() => {
    setFacts((prev) => {
      const nextState = { ...prev };
      for (let key in nextState) {
        if (nextState[key]?.panelId === currentPanelId) {
          nextState[key].isFound = true;
          setFoundFactsIds((prev) => [...new Set([...prev, key])]);
        }
      }
      return nextState;
    });
  }, [currentPanelId]);

  useEffect(() => {
    const newFoundFacts = getFoundFacts();
    const newIndex = lunr(function () {
      this.field("title");
      this.field("description");

      newFoundFacts.forEach((fact) => {
        this.add(fact);
      }, this);
    });

    setSearchIndex(newIndex);
    setSearchResults(newFoundFacts);
  }, [foundFactsIds]);

  const getFoundFacts = () =>
    foundFactsIds.map((id) => {
      const fact = facts[id];
      return {
        id: id,
        panelId: fact.panelId,
        title: fact.title,
        description: fact.description,
        isFound: fact.isFound || false,
        isChecked: fact.isChecked || false
      };
    });

  const toggleFactChecked = (id: string) => {
    setFacts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isChecked: !prev[id]?.isChecked || false
      }
    }));
  };

  const isFactChecked = (id: string) => facts[id]?.isChecked ?? false;

  const areSomeFactsChecked = () =>
    foundFactsIds.some((id) => facts[id].isChecked);

  const checkFactConnection = () => {
    const checkedFactsIds = foundFactsIds.filter((id) => facts[id].isChecked);

    if (checkedFactsIds.length === 0) {
      return [];
    }

    const newFactsIds = Object.keys(facts).filter((key) => {
      const fact = facts[key];
      if (!fact.requiredFacts || fact.isFound) return false;
      const requiredFactsIds = fact.requiredFacts;
      return (
        requiredFactsIds.length === checkedFactsIds.length &&
        requiredFactsIds.every((id) => checkedFactsIds.includes(id)) &&
        checkedFactsIds.every((id) => requiredFactsIds.includes(id))
      );
    });

    if (newFactsIds.length > 0) {
      setFoundFactsIds((prev) => [...prev, ...newFactsIds]);
      resetCheckedFacts();
    }
    return newFactsIds;
  };

  const resetCheckedFacts = () => {
    setFacts((prev) => {
      const nextState = { ...prev };
      for (let key in nextState) {
        nextState[key].isChecked = false;
      }
      return nextState;
    });
  };

  const searchFacts = (query: string) => {
    const results = searchIndex.search(query.toLowerCase());
    const mappedResults = results.map((element) => ({
      ...facts[element.ref],
      id: element.ref
    }));
    setSearchResults(mappedResults);
  };

  return (
    <FactsContext.Provider
      value={{
        facts,
        searchResults,
        searchFacts,
        getFoundFacts,
        toggleFactChecked,
        isFactChecked,
        areSomeFactsChecked,
        checkFactConnection
      }}>
      {children}
    </FactsContext.Provider>
  );
};
