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

const getCheckColor = (isChecked = false) =>
  isChecked ? colors.green : colors.veryLightGrey;

const Fact: FC<FactProps> = ({ fact }) => {
  const { toggleFactChecked } = useContext(FactsContext);

  return (
    <Wrapper>
      <Header>
        <Title>{fact.title}</Title>
        <ButtonsWrapper>
          <CheckButton onClick={() => toggleFactChecked(fact.id)}>
            <CheckIcon color={getCheckColor(fact?.isChecked)} />
          </CheckButton>
        </ButtonsWrapper>
      </Header>
      <Description>{fact.description}</Description>
    </Wrapper>
  );
};

export default Fact;
