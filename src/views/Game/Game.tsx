import { FC, useContext } from "react";
import { Navigate } from "react-router";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import { StoryPanel, EndGameModal } from "../../features/game/components";
import { GameContext } from "../../features/game/context";
import { FactsPanel } from "../../features/facts/components";
import { FactsContext } from "../../features/facts/context";
import {
  Content,
  Header,
  SettingsButton,
  SettingsButtonWrapper,
  SettingsIcon,
  SettingsTooltip,
  Title,
  Wrapper
} from "./Game.styles";

const Game: FC = () => {
  const { isGameLoaded, game, getCurrentPanelBackgroundImg } =
    useContext(GameContext);
  const { isStoryFinished, isFullTextSearch, toggleFullTextSearch } =
    useContext(FactsContext);

  if (!isGameLoaded) return <Navigate to={"/"} />;

  return (
    <Wrapper $img={getCurrentPanelBackgroundImg()} className="app-container">
      {isStoryFinished && <EndGameModal />}
      <ReactNotifications />
      <Header>
        <Title>{game.title}</Title>
        <SettingsButtonWrapper>
          <SettingsTooltip>
            {isFullTextSearch
              ? "Now using full text search"
              : "Now using default search"}
          </SettingsTooltip>
          <SettingsButton onClick={() => toggleFullTextSearch()}>
            <SettingsIcon />
          </SettingsButton>
        </SettingsButtonWrapper>
      </Header>
      <Content>
        <StoryPanel />
        <FactsPanel />
      </Content>
    </Wrapper>
  );
};

export default Game;
