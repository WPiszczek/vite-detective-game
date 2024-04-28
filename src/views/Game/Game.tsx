import { FC, useContext } from "react";
import { Navigate } from "react-router";

import { StoryPanel } from "../../features/game/components";
import { GameContext } from "../../features/game/context";
import { Content, Header, Wrapper } from "./Game.styles";

const Game: FC = () => {
  const { isGameLoaded, game } = useContext(GameContext);

  if (!isGameLoaded) return <Navigate to={"/"} />;

  return (
    <Wrapper>
      <Header>{game.title}</Header>
      <Content>
        {isGameLoaded && <StoryPanel panelId={game.startingPanelId} />}
      </Content>
    </Wrapper>
  );
};

export default Game;
