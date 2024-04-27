type ImageFilename = string;

export interface Game {
  name: string;
  startingPanelId: string;
  storyPanels: Record<string, StoryPanel>;
}

export interface StoryPanel {
  name: string;
  content: string;
  background: ImageFilename;
  actions: StoryPanelAction[];
}

export interface StoryPanelAction {
  id: string;
  name: string;
  panelId: string;
}
