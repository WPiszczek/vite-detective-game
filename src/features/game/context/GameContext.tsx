import { FC, ReactNode, createContext, useState } from "react";

import { Game, StoryPanel } from "../types";

export const GameContext = createContext<{
  game: Game;
  isGameLoaded: boolean;
  loadGameFromJson: (filename: string) => Promise<void>;
  getStartingPanelId: () => string;
  getStoryPanelById: (id: string) => StoryPanel;
}>(null);

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [game, setGame] = useState<Game>({} as Game);
  const [isGameLoaded, setIsGameLoaded] = useState(false);

  const loadGameFromJson = async (filename: string) => {
    try {
      const response = await fetch(`game/${filename}`);
      const json = await response.json();
      setGame(json);
      setIsGameLoaded(true);
    } catch (e) {
      console.error(e);
    }
  };

  const getStartingPanelId = () => {
    return game.startingPanelId;
  };

  const getStoryPanelById = (id: string) => {
    return game.storyPanels[id];
  };

  return (
    <GameContext.Provider
      value={{
        game,
        isGameLoaded,
        loadGameFromJson,
        getStartingPanelId,
        getStoryPanelById
      }}>
      {children}
    </GameContext.Provider>
  );
};
