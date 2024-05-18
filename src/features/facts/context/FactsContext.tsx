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
import {
  showFailNotification,
  showInfoNotification,
  showSuccessNotification
} from "../utils";
import {
  ArrayDifference,
  checkArrayDifference
} from "../utils/checkArrayDifference";

const defaultSearchIndex = lunr(function () {
  this.field("title");
  this.field("description");
});

export const FactsContext = createContext<{
  facts: Facts;
  searchResults: FactWithId[];
  isStoryFinished: boolean;
  isFullTextSearch: boolean;
  searchFacts: (query: string) => void;
  getFoundFacts: () => FactWithId[];
  toggleFactChecked: (id: string) => void;
  toggleFullTextSearch: () => void;
  isFactChecked: (id: string) => boolean;
  areSomeFactsChecked: () => boolean;
  checkFactConnection: () => void;
}>({
  facts: {},
  searchResults: [],
  isStoryFinished: false,
  isFullTextSearch: false,
  searchFacts: () => {},
  getFoundFacts: () => [],
  toggleFactChecked: () => {},
  toggleFullTextSearch: () => {},
  isFactChecked: () => false,
  areSomeFactsChecked: () => false,
  checkFactConnection: () => {}
});

export const FactsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { game, currentPanelId } = useContext(GameContext);
  const [facts, setFacts] = useState<Facts>(game?.facts);
  const [foundFactsIds, setFoundFactsIds] = useState<string[]>([]);
  const [finalFactId, setFinalFactId] = useState(game?.finalFactId);
  const [isStoryFinished, setIsStoryFinished] = useState(false);
  const [isFullTextSearch, setIsFullTextSearch] = useState(false);

  const [searchResults, setSearchResults] = useState<FactWithId[]>([]);
  const [searchIndex, setSearchIndex] = useState(defaultSearchIndex);

  useEffect(() => {
    setFacts(game.facts);
    setFinalFactId(game.finalFactId);
    setIsStoryFinished(false);
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

  const toggleStoryFinished = () => {
    setIsStoryFinished((prev) => !prev);
  };

  const isFinalFact = (id: string) => id === finalFactId;

  const isFactChecked = (id: string) => facts[id]?.isChecked ?? false;

  const areSomeFactsChecked = () =>
    foundFactsIds.some((id) => facts[id].isChecked);

  const checkFactConnection = () => {
    const checkedFactsIds = foundFactsIds.filter((id) => facts[id].isChecked);

    if (checkedFactsIds.length === 0) {
      return [];
    }

    let differenceStates: ArrayDifference[] = [];
    const newFactsIds = Object.keys(facts).filter((key) => {
      const fact = facts[key];
      if (!fact.requiredFacts || fact.isFound) return false;
      const requiredFactsIds = fact.requiredFacts;

      const result = checkArrayDifference(
        checkedFactsIds,
        requiredFactsIds,
        foundFactsIds
      );
      differenceStates.push(result);
      return result === ArrayDifference.IDENTICAL;
    });

    if (newFactsIds.length > 0) {
      setFoundFactsIds((prev) => [...prev, ...newFactsIds]);
      setNewFoundFacts(newFactsIds);
      const factTitles = newFactsIds.map((id) => facts[id].title);
      showSuccessNotification(factTitles);
      resetCheckedFacts();

      newFactsIds.forEach((id) => {
        if (isFinalFact(id)) {
          toggleStoryFinished();
          return;
        }
      });
      return;
    }

    if (differenceStates.includes(ArrayDifference.ONE_WRONG)) {
      showInfoNotification("One of checked facts is wrong here.");
      return;
    }

    if (differenceStates.includes(ArrayDifference.ONE_TOO_MUCH)) {
      showInfoNotification("Try using one less fact.");
      return;
    }

    if (differenceStates.includes(ArrayDifference.ONE_MISSING)) {
      showInfoNotification("One fact is missing.");
      return;
    }

    showFailNotification();
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

  const setNewFoundFacts = (newFactsIds: string[]) => {
    setFacts((prev) => {
      const nextState = { ...prev };
      for (let key in newFactsIds) {
        nextState[key] = {
          ...nextState[key],
          isFound: true
        };
      }
      return nextState;
    });
  };

  const searchFacts = (query: string) => {
    const results = isFullTextSearch
      ? searchFactsFullText(query)
      : searchFactsDefault(query);
    setSearchResults(results);
  };

  const searchFactsFullText = (query: string) => {
    const results = searchIndex.search(query.toLowerCase());
    return results.map((element) => ({
      ...facts[element.ref],
      id: element.ref
    }));
  };

  const searchFactsDefault = (query: string) => {
    const facts = getFoundFacts();
    if (query === "") return facts;

    const results = facts.filter(
      (fact) =>
        fact.title.toLowerCase().includes(query) ||
        fact.description.toLowerCase().includes(query)
    );
    return results;
  };

  const toggleFullTextSearch = () => {
    setIsFullTextSearch((prev) => !prev);
  };

  return (
    <FactsContext.Provider
      value={{
        facts,
        searchResults,
        isStoryFinished,
        isFullTextSearch,
        searchFacts,
        getFoundFacts,
        toggleFactChecked,
        toggleFullTextSearch,
        isFactChecked,
        areSomeFactsChecked,
        checkFactConnection
      }}>
      {children}
    </FactsContext.Provider>
  );
};
