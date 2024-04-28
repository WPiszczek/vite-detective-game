type ImageFilename = string;

export interface Game {
  title: string;
  startingPanelId: string;
  storyPanels: Record<string, StoryPanel>;
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
