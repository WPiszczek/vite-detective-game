export interface Fact {
  id: string;
  name: string;
  isFound: boolean;
  requiredFacts?: Fact[];
}

export interface Room {
  id: string;
  name: string;
  facts: Fact[];
}

export interface Person {
  id: string;
  name: string;
}
