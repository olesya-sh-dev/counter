import { myTheme } from "../../styles/Theme.styled";
import { Button } from "../button/Button";
import styled from "styled-components";
import { S } from "./Counter_Styles";

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
    <S.Counter>
      <S.Number
        color={number === maxValue ? myTheme.colors.dark : myTheme.colors.light}
      >
        {number}
      </S.Number>
      <FlexWrapper>
        <Button onClick={incrementHandler} disabled={number === maxValue}>
          {"inc"}
        </Button>
        <Button onClick={resetHandler} disabled={number === minValue}>
          {"reset"}
        </Button>
      </FlexWrapper>
    </S.Counter>
  );
};

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
