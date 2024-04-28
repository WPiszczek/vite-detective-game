import { FC, ReactNode, createContext, useState } from "react";

import { Game, StoryPanel } from "../types";

export const GameContext = createContext<{
  game: Game;
  isGameLoaded: boolean;
  currentPanelId: string;
  loadGameFromJson: (filename: string) => Promise<void>;
  getStartingPanelId: () => string;
  getPanelById: (id: string) => StoryPanel;
  getCurrentPanel: () => StoryPanel;
  setCurrentPanel: (id: string) => void;
}>(null);

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [game, setGame] = useState<Game>({} as Game);
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [currentPanelId, setCurrentPanelId] = useState(game?.startingPanelId);

  const loadGameFromJson = async (filename: string) => {
    try {
      const response = await fetch(`game/${filename}`);
      const json = await response.json();
      setGame(json);
      setCurrentPanelId(json?.startingPanelId);
      setIsGameLoaded(true);
    } catch (e) {
      console.error(e);
    }
  };

  const getStartingPanelId = () => {
    return game.startingPanelId;
  };

  const getPanelById = (id: string) => {
    return game.storyPanels[id];
  };

  const getCurrentPanel = () => {
    return game.storyPanels[currentPanelId];
  };

  const setCurrentPanel = (id: string) => {
    setCurrentPanelId(id);
  };

  return (
    <GameContext.Provider
      value={{
        game,
        isGameLoaded,
        currentPanelId,
        loadGameFromJson,
        getStartingPanelId,
        getPanelById,
        getCurrentPanel,
        setCurrentPanel
      }}>
      {children}
    </GameContext.Provider>
  );
};
