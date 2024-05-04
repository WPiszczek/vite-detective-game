import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { GameContext } from "../../game/context";
import { Fact, Facts } from "../types";

export const FactsContext = createContext<{
  facts: Facts;
  getFoundFacts: () => Fact[];
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
          isFound: fact.isFound || false
        } as Fact);
      }
      return acc;
    }, [] as Fact[]);
  };

  return (
    <FactsContext.Provider
      value={{
        facts,
        getFoundFacts
      }}>
      {children}
    </FactsContext.Provider>
  );
};
