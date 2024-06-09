import { FC, useContext } from "react";
import { useNavigate } from "react-router";

import { GameContext } from "../../features/game/context";
import { getImage } from "../../features/common/utils";
import {
  ButtonsWrapper,
  Title,
  TitleWrapper,
  Wrapper,
  Button
} from "./Main.styles";

const games = [
  { name: "Demo Game", filename: "demo-game.json" },
  { name: "The Museum Heist", filename: "the-museum-heist.json" }
];

const Main: FC = () => {
  const { loadGameFromJson } = useContext(GameContext);
  const navigate = useNavigate();

  const loadGame = async (filename: string) => {
    await loadGameFromJson(filename);
    navigate("/game");
  };

  return (
    <Wrapper $img={getImage("background.webp")}>
      <TitleWrapper>
        <Title>Choose the game:</Title>
      </TitleWrapper>
      <ButtonsWrapper>
        {games.map((game) => (
          <Button key={game.filename} onClick={() => loadGame(game.filename)}>
            {game.name}
          </Button>
        ))}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Main;
