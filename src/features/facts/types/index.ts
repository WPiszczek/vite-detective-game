export type Document = {
  id: number;
  name: string;
  text: string;
};

export interface Fact {
  title: string;
  description: string;
  panelId?: string;
  requiredFacts?: string[];
  isFound: boolean;
  isChecked?: boolean;
}

export type FactWithId = Fact & { id: string };

export type Facts = Record<string, Fact>;
