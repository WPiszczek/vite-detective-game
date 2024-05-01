import { FC, useContext } from "react";
import { Navigate } from "react-router";

import { StoryPanel } from "../../features/game/components";
import { GameContext } from "../../features/game/context";
import { SearchPanel } from "../../features/search/components";
import { Content, Header, Title, Wrapper } from "./Game.styles";

const Game: FC = () => {
  const { isGameLoaded, game, getCurrentPanelBackgroundImg } =
    useContext(GameContext);

  if (!isGameLoaded) return <Navigate to={"/"} />;

  return (
    <Wrapper $img={getCurrentPanelBackgroundImg()}>
      <Header>
        <Title>{game.title}</Title>
      </Header>
      <Content>
        <StoryPanel />
        <SearchPanel />
      </Content>
    </Wrapper>
  );
};

export default Game;
