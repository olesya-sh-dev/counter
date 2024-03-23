import { styled } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({ onClick, disabled, title }: ButtonPropsType) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${myTheme.colors.button};
  border: 5px solid ${myTheme.colors.accent};
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  display: flex;

  border-radius: 10px;
  color: ${myTheme.colors.accent};

  &:disabled {
    opacity: 0.4;
  }
`;
