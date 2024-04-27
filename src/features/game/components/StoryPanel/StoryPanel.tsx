import { FC, useContext } from "react";
import { StoryPanelProps } from "./StoryPanel.types";
import { GameContext } from "../../context";
import { getImage } from "../../../common/utils";
import { HtmlRenderer } from "../../../common/components";
import { ContentWrapper, BackgroundImg, Wrapper } from "./StoryPanel.styles";

const StoryPanel: FC<StoryPanelProps> = ({ panelId }) => {
  const { getStoryPanelById, getStartingPanelId } = useContext(GameContext);

  const panel = getStoryPanelById(panelId ?? getStartingPanelId());

  return (
    <Wrapper>
      <BackgroundImg src={getImage(panel.background)} />
      <ContentWrapper>
        <div>{panel.name}</div>
        <div>
          <HtmlRenderer htmlContent={panel.content} />
        </div>
        {/* TODO: actions */}
      </ContentWrapper>
    </Wrapper>
  );
};

export default StoryPanel;
