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
          You have finished {game.title}. Now you can try playing it again or
          explore another story from the main menu. You can also view the fact
          tree of your investigation below.
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
