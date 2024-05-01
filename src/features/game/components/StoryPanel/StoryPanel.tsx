import { FC, useContext } from "react";

import { HtmlRenderer } from "../../../common/components";
import { GameContext } from "../../context";
import {
  Wrapper,
  Title,
  ActionsWrapper,
  Action
} from "./StoryPanel.styles";

const StoryPanel: FC = () => {
  const { getCurrentPanel, setCurrentPanel } = useContext(GameContext);

  const panel = getCurrentPanel();

  return (
    <Wrapper>
        <Title>{panel.title}</Title>
        <HtmlRenderer htmlContent={panel.content} />
        <ActionsWrapper>
          {panel.actions.map((action) => (
            <Action
              key={action.id}
              onClick={() => setCurrentPanel(action.panelId)}>
              {action.title}
            </Action>
          ))}
        </ActionsWrapper>
    </Wrapper>
  );
};

export default StoryPanel;
