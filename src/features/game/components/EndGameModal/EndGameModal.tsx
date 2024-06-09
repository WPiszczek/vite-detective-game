import { FC, useContext } from "react";
import { useNavigate } from "react-router";

import { FactsTree } from "../../../facts/components";
import { GameContext } from "../../context";
import {
  Action,
  ActionsWrapper,
  DescriptionWrapper,
  StarIcon,
  StarsWrapper,
  TextWrapper,
  TitleWrapper,
  Wrapper
} from "./EndGameModal.styles";

const EndGameModal: FC = () => {
  const { game } = useContext(GameContext);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <StarsWrapper>
        <StarIcon />
        <TitleWrapper>CONGRATULATIONS!</TitleWrapper>
        <StarIcon />
      </StarsWrapper>
      <TextWrapper>
        <DescriptionWrapper>
          You finished {game.title}. Now you can try to play it again or check
          out other story from the main menu. You can also check out the fact
          tree of your investigation down below.
        </DescriptionWrapper>
      </TextWrapper>
      <ActionsWrapper>
        <Action onClick={() => navigate("/")}>Return to main menu</Action>
      </ActionsWrapper>
      <FactsTree />
    </Wrapper>
  );
};

export default EndGameModal;
