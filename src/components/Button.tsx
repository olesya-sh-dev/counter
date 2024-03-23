import { styled } from "styled-components";

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({ title, onClick, disabled }: ButtonPropsType) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #c7b619;
  border: 5px solid #38372c;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  display: flex;

  border-radius: 10px;
  color: #38372c;
  &:disabled {
    opacity: 0.4;
  }
`;
