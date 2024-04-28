import { FC, useContext } from "react";

import { getImage } from "../../../common/utils";
import { HtmlRenderer } from "../../../common/components";
import { GameContext } from "../../context";
import {
  ContentWrapper,
  BackgroundImg,
  Wrapper,
  Title,
  ActionsWrapper,
  Action
} from "./StoryPanel.styles";
import { StoryPanelProps } from "./StoryPanel.types";

const StoryPanel: FC<StoryPanelProps> = ({ panelId }) => {
  const { getCurrentPanel, setCurrentPanel } = useContext(GameContext);

  if (!panelId) return <div>Loading</div>;
  const panel = getCurrentPanel();

  console.log("panel", panel);

  return (
    <Wrapper>
      <BackgroundImg src={getImage(panel.background)} />
      <ContentWrapper>
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
      </ContentWrapper>
    </Wrapper>
  );
};

export default StoryPanel;
