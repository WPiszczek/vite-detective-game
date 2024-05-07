import { FC, useContext } from "react";

import { colors } from "../../../theme/colors";
import { FactsContext } from "../../context";
import { FactProps } from "./Fact.types";
import {
  ButtonsWrapper,
  CheckButton,
  CheckIcon,
  Description,
  Header,
  Title,
  Wrapper
} from "./Fact.styles";

const Fact: FC<FactProps> = ({ fact }) => {
  const { isFactChecked, toggleFactChecked } = useContext(FactsContext);

  const getCheckColor = () =>
    isFactChecked(fact.id) ? colors.green : colors.veryLightGrey;

  return (
    <Wrapper>
      <Header>
        <Title>{fact.title}</Title>
        <ButtonsWrapper>
          <CheckButton onClick={() => toggleFactChecked(fact.id)}>
            <CheckIcon color={getCheckColor()} />
          </CheckButton>
        </ButtonsWrapper>
      </Header>
      <Description>{fact.description}</Description>
    </Wrapper>
  );
};

export default Fact;
