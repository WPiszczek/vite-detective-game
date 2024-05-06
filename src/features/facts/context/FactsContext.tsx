import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { GameContext } from "../../game/context";
import { FactWithId, Facts } from "../types";

export const FactsContext = createContext<{
  facts: Facts;
  getFoundFacts: () => FactWithId[];
  toggleFactChecked: (id: string) => void;
  areSomeFactsChecked: () => boolean;
}>(null);

export const FactsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { game, currentPanelId } = useContext(GameContext);
  const [facts, setFacts] = useState<Facts>(game?.facts);

  useEffect(() => {
    setFacts(game.facts);
  }, [game]);

  useEffect(() => {
    setFacts((prev) => {
      const nextState = { ...prev };
      for (let key in nextState) {
        if (nextState[key]?.panelId === currentPanelId) {
          nextState[key].isFound = true;
        }
      }
      return nextState;
    });
  }, [currentPanelId]);

  const getFoundFacts = () => {
    return Object.keys(facts).reduce((acc, key) => {
      const fact = facts[key];
      if (fact.isFound) {
        acc.push({
          id: key,
          panelId: fact.panelId,
          title: fact.title,
          description: fact.description,
          isFound: fact.isFound || false,
          isChecked: fact.isChecked || false
        } as FactWithId);
      }
      return acc;
    }, [] as FactWithId[]);
  };

  const toggleFactChecked = (id: string) => {
    setFacts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isChecked: !prev[id]?.isChecked || false
      }
    }));
  };

  const areSomeFactsChecked = () =>
    getFoundFacts().some((fact) => fact.isChecked);

  return (
    <FactsContext.Provider
      value={{
        facts,
        getFoundFacts,
        toggleFactChecked,
        areSomeFactsChecked
      }}>
      {children}
    </FactsContext.Provider>
  );
};
