import { Facts } from "../../facts/types";

type ImageFilename = string;

export interface Game {
  title: string;
  startingPanelId: string;
  finalFactId: string;
  storyPanels: Record<string, StoryPanel>;
  facts: Facts;
}

export interface StoryPanel {
  title: string;
  content: string;
  background: ImageFilename;
  actions: StoryPanelAction[];
}

export interface StoryPanelAction {
  id: string;
  title: string;
  panelId: string;
}
