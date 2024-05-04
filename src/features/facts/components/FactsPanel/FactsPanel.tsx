import { FC, useContext } from "react";
import { FactsContext } from "../../context";

const FactsPanel: FC = () => {
  const { facts, getFoundFacts } = useContext(FactsContext);

  console.log("facts", facts);
  return (
    <div>
      <div>FactsPanel</div>
      {getFoundFacts().map((fact) => (
        <div>{fact.title}</div>
      ))}
    </div>
  );
};

export default FactsPanel;
