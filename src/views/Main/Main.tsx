import { FC, useContext } from "react";
import { useNavigate } from "react-router";

import { Button } from "../../features/common/components";
import { GameContext } from "../../features/game/context";
import { ButtonsWrapper, Title, TitleWrapper, Wrapper } from "./Main.styles";

const games = [
  { name: "Story 1", filename: "story1.json" },
  { name: "Story 2", filename: "story2.json" }
];

const Main: FC = () => {
  const { loadGameFromJson } = useContext(GameContext);
  const navigate = useNavigate();

  const loadGame = async (filename: string) => {
    await loadGameFromJson(filename);
    navigate("/game");
  };

  return (
    <Wrapper>
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
