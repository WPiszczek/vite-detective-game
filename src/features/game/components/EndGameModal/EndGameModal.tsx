import { FC, useContext } from "react";
import { useNavigate } from "react-router";

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
        <StarIcon />
      </StarsWrapper>
      <TextWrapper>
        <TitleWrapper>CONGRATULATIONS!</TitleWrapper>
        <DescriptionWrapper>
          You finished {game.title}. Now you can try to play it again or check
          out other story from the main menu.
        </DescriptionWrapper>
      </TextWrapper>
      <ActionsWrapper>
        <Action onClick={() => navigate("/")}>Return to main menu</Action>
      </ActionsWrapper>
    </Wrapper>
  );
};

export default EndGameModal;
