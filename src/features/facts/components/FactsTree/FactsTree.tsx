import { FC, useContext } from "react";
import Tree from "react-d3-tree";

import { FactsContext } from "../../context";
import { useCenteredTree } from "../../hooks";
import {
  NodeDescription,
  NodeTitle,
  NodeWrapper,
  TreeContainer
} from "./FactsTree.styles";
import { ForeignObjectNodeProps } from "./FactsTree.types";

const renderForeignObjectNode = ({
  nodeDatum,
  foreignObjectProps
}: ForeignObjectNodeProps) => (
  <g>
    <circle r={15} fill={nodeDatum.isFound ? "green" : "red"}></circle>
    <foreignObject {...foreignObjectProps}>
      <NodeWrapper>
        <NodeTitle>{nodeDatum.name}</NodeTitle>
        {nodeDatum?.description && (
          <NodeDescription>{nodeDatum.description}</NodeDescription>
        )}
      </NodeWrapper>
    </foreignObject>
  </g>
);

const FactsTree: FC = () => {
  const { getFactsTree } = useContext(FactsContext);
  const tree = getFactsTree();
  const [translate, zoom, containerRef] = useCenteredTree();

  const nodeSize = { x: 300, y: 250 };
  const foreignObjectProps = {
    width: nodeSize.x - 50,
    height: nodeSize.y,
    x: -(nodeSize.x - 50) / 2
  };
  return (
    <TreeContainer ref={containerRef}>
      <Tree
        data={tree}
        translate={translate}
        zoom={zoom}
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        orientation="vertical"
      />
    </TreeContainer>
  );
};

export default FactsTree;
