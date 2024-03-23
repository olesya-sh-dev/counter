import { myTheme } from "../styles/Theme.styled";
import { Button } from "./Button";
import styled from "styled-components";

type CounterPropsType = {
  maxValue: number;
  minValue: number;
  incrementHandler: () => void;
  resetHandler: () => void;
  number: number;
};
export const Counter = ({
  maxValue,
  minValue,
  incrementHandler,
  resetHandler,
  number,
}: CounterPropsType) => {
  return (
    <StyledCounter>
      <StyledNumber
        color={number === maxValue ? myTheme.colors.dark : myTheme.colors.light}
      >
        {number}
      </StyledNumber>
      <FlexWrapper>
        <Button
          title="inc"
          onClick={incrementHandler}
          disabled={number === maxValue}
        />
        <Button
          title="reset"
          onClick={resetHandler}
          disabled={number === minValue}
        />
      </FlexWrapper>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  border: 5px solid ${myTheme.colors.accent};
  background-color: ${myTheme.colors.primary};
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 10px;
  gap: 20px;
  padding: 20px;
`;
const StyledNumber = styled.span`
  color: ${(props) => props.color};
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border: 5px solid ${myTheme.colors.accent};
  border-radius: 10px;
  background-color: ${myTheme.colors.secondary};
  font-size: 70px;
  color: ${(props) => props.color};
  width: 350px;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-evenly;
  align-items: center;
  border: 5px solid ${myTheme.colors.accent};
  border-radius: 10px;
  gap: 20px;
  background-color: ${myTheme.colors.secondary};
  padding: 10px;
`;
