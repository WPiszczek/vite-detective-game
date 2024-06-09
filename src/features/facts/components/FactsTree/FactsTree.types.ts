import { TreeNodeDatum } from "react-d3-tree";

export type CustomNodeDatum = TreeNodeDatum & {
  description?: string;
  isFound?: boolean;
};

export interface ForeignObjectNodeProps {
  nodeDatum: CustomNodeDatum;
  foreignObjectProps: Record<string, unknown>;
}
