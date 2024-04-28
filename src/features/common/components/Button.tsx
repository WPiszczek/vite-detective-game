import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSize.L};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.veryLightGrey};
    cursor: pointer;
  }
`;

export default Button;
