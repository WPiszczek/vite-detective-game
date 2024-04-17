import { FC, useState } from "react";

import {
  Button,
  ButtonsWrapper,
  Title,
  TitleWrapper,
  Wrapper
} from "./Main.styles";

const games = [
  { name: "Story 1", filename: "story1.json" },
  { name: "Story 2", filename: "story2.json" }
];

const Main: FC = () => {
  const [json, setJson] = useState({});

  const loadJson = (filename: string) => {
    // TODO LoadJson
  };

  console.log(json);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Choose the game:</Title>
      </TitleWrapper>
      <ButtonsWrapper>
        {games.map((game) => (
          <Button onClick={() => loadJson(game.filename)}>{game.name}</Button>
        ))}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Main;
